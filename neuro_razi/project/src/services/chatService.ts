import { v4 as uuidv4 } from 'uuid';

export interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

class ChatService {
  private sessionId: string;
  private baseUrl: string;

  constructor() {
    this.sessionId = localStorage.getItem('chatSessionId') || this.createNewSession();
    this.baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    console.log('ChatService initialized with baseUrl:', this.baseUrl);
  }

  private createNewSession(): string {
    const sessionId = uuidv4();
    localStorage.setItem('chatSessionId', sessionId);
    return sessionId;
  }

  async sendMessage(message: string, context?: string): Promise<string> {
    try {
      console.log('Sending message to server:', {
        message,
        sessionId: this.sessionId,
        context,
        url: `${this.baseUrl}/api/chat`
      });

      const response = await fetch(`${this.baseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId: this.sessionId,
          context,
        }),
      });

      console.log('Server response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Server error:', errorData);
        throw new Error('Erreur de communication avec le serveur');
      }

      const data = await response.json();
      console.log('Server response data:', data);
      return data.response;
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error("Une erreur s'est produite lors de l'envoi du message");
    }
  }

  async getChatHistory(): Promise<ChatMessage[]> {
    try {
      console.log('Fetching chat history for session:', this.sessionId);
      const response = await fetch(`${this.baseUrl}/api/chat/history/${this.sessionId}`);
      
      console.log('History response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('History error:', errorData);
        throw new Error("Erreur lors de la récupération de l'historique");
      }

      const data = await response.json();
      console.log('History data:', data);
      return data.history.map((msg: any) => ({
        id: msg.id.toString(),
        text: msg.message,
        isBot: msg.is_bot,
        timestamp: new Date(msg.created_at),
      }));
    } catch (error) {
      console.error('Error fetching chat history:', error);
      return [];
    }
  }

  clearSession() {
    localStorage.removeItem('chatSessionId');
    this.sessionId = this.createNewSession();
  }
}

export const chatService = new ChatService(); 