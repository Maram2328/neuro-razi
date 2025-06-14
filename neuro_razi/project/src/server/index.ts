import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { HfInference } from '@huggingface/inference';
import { createClient } from '@supabase/supabase-js';
import type { Request, Response } from 'express';

dotenv.config();

// Type definitions
interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface ChatRequest extends Request {
  body: {
    message: string;
    sessionId: string;
    context?: string;
  };
}

interface ChatResponse extends Response {}

interface Database {
  public: {
    Tables: {
      chat_history: {
        Row: {
          id: number;
          created_at: string;
          session_id: string;
          message: string;
          is_bot: boolean;
        };
        Insert: Omit<ChatMessage, 'id' | 'created_at'>;
      };
    };
  };
}

const app = express();
app.use(cors());
app.use(express.json());

// Debug middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Initialize Hugging Face
const hf = new HfInference(process.env.HUGGING_FACE_TOKEN);

// Using a more medically-oriented model
const MODEL_ID = "facebook/blenderbot-400M-distill"; // Fallback to a more reliable model

// Initialize Supabase
const supabase = createClient<Database>(
  process.env.SUPABASE_URL || '',
  process.env.SUPABASE_ANON_KEY || ''
);

// Hospital website information context
const websiteContext = `
This is a modern medical facility providing comprehensive healthcare services.
Our departments include:
- Emergency Medicine
- Internal Medicine
- Pediatrics
- Surgery
- Obstetrics & Gynecology
- Cardiology
- Neurology
- Orthopedics

We offer 24/7 emergency services and specialized consultations.
Our facility is equipped with state-of-the-art medical technology and staffed by experienced healthcare professionals.
`;

// Medical disclaimer
const medicalDisclaimer = `
IMPORTANT: The information provided is for general informational purposes only and should not be considered as medical advice. 
Please consult with qualified healthcare professionals for specific medical conditions and treatment options.
`;

// Function to translate text to French
async function translateToFrench(text: string): Promise<string> {
  try {
    const response = await hf.translation({
      model: 'facebook/m2m100-1.2B',
      inputs: text
    });
    
    // Handle array or single response
    const translatedText = Array.isArray(response) ? response[0].translation_text : response.translation_text;
    return translatedText || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

// Function to generate medical response
async function generateMedicalResponse(query: string, context: string): Promise<string> {
  try {
    const prompt = `
Context: ${websiteContext}
Medical Context: ${context}
User Question: ${query}
Please provide a helpful and accurate response, considering both the hospital information and medical knowledge.
Remember to: 
1. Be precise and professional
2. Include relevant hospital services if applicable
3. Add appropriate medical disclaimers when needed
Response:`;

    const response = await hf.textGeneration({
      model: MODEL_ID,
      inputs: prompt,
      parameters: {
        max_new_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
        do_sample: true
      }
    });

    const generatedText = response.generated_text || "I apologize, but I cannot provide a response at this moment. Please consult with our medical staff directly.";
    return generatedText + "\n\n" + medicalDisclaimer;
  } catch (error) {
    console.error('Medical response generation error:', error);
    throw error;
  }
}

// Endpoint to process chat messages
app.post('/api/chat', async (req: ChatRequest, res: ChatResponse) => {
  try {
    console.log('Received chat request:', req.body);
    const { message, sessionId, context } = req.body;

    // Get chat history
    const { data: chatHistory } = await supabase
      .from('chat_history')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    // Generate medical response
    const response = await generateMedicalResponse(message, context || '');
    
    // Translate to French
    const frenchResponse = await translateToFrench(response);

    // Save to database
    await supabase.from('chat_history').insert([
      {
        session_id: sessionId,
        message: message,
        is_bot: false
      },
      {
        session_id: sessionId,
        message: frenchResponse,
        is_bot: true
      }
    ]);

    res.json({ response: frenchResponse });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: "Une erreur s'est produite. Veuillez consulter un professionnel de santé pour des conseils médicaux spécifiques."
    });
  }
});

// Get chat history endpoint
app.get('/api/chat/history/:sessionId', async (req: ChatRequest, res: ChatResponse) => {
  try {
    const { sessionId } = req.params;
    const { data } = await supabase
      .from('chat_history')
      .select('*')
      .eq('session_id', sessionId)
      .order('created_at', { ascending: true });

    res.json({ history: data || [] });
  } catch (error) {
    console.error('History fetch error:', error);
    res.status(500).json({
      error: "Une erreur s'est produite lors de la récupération de l'historique."
    });
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Medical chatbot server running on port ${PORT}`);
  console.log('Environment variables loaded:');
  console.log('- SUPABASE_URL:', process.env.SUPABASE_URL ? 'Set' : 'Not set');
  console.log('- SUPABASE_ANON_KEY:', process.env.SUPABASE_ANON_KEY ? 'Set' : 'Not set');
}); 