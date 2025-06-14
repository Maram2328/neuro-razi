import { Request, Response } from 'express';

export interface ChatMessage {
  id?: number;
  session_id: string;
  message: string;
  is_bot: boolean;
  created_at?: Date;
}

export interface ChatRequest extends Request {
  body: {
    message: string;
    sessionId: string;
    context?: string;
  };
}

export type ChatResponseBody = {
  response?: string;
  error?: string;
  history?: ChatMessage[];
};

export interface ChatResponse extends Response {
  json(body: ChatResponseBody): this;
}

export interface Database {
  public: {
    Tables: {
      chat_history: {
        Row: ChatMessage;
        Insert: Omit<ChatMessage, 'id' | 'created_at'>;
        Update: Partial<Omit<ChatMessage, 'id' | 'created_at'>>;
      };
    };
  };
} 