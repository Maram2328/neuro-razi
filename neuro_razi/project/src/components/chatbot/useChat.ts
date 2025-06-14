import { useState, useCallback, useEffect } from 'react';
import { Message } from './ChatMessage';
import { chatService } from '../../services/chatService';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Load chat history when component mounts
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const history = await chatService.getChatHistory();
        if (history.length > 0) {
          setMessages(history);
        }
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    };

    loadHistory();
  }, []);

  const addMessage = useCallback((text: string, isBot: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  }, []);

  const processMessage = useCallback(async (userMessage: string) => {
    try {
      setIsProcessing(true);
      addMessage(userMessage, false);

      // Get the current page context
      const pageContext = window.location.pathname;
      
      const botResponse = await chatService.sendMessage(userMessage, pageContext);
      
      setIsSpeaking(true);
      addMessage(botResponse, true);

      setTimeout(() => {
        setIsSpeaking(false);
      }, 2000);
    } catch (error) {
      console.error('Erreur lors du traitement du message:', error);
      addMessage(
        "Je m'excuse, mais j'ai des difficultés à traiter votre demande pour le moment. Veuillez réessayer plus tard.",
        true
      );
    } finally {
      setIsProcessing(false);
    }
  }, [addMessage]);

  return {
    messages,
    isProcessing,
    isSpeaking,
    processMessage,
    setMessages,
  };
}; 