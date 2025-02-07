export type Language = {
  code: string;
  name: string;
  nativeName: string;
};

export type MenuItem = {
  id: number;
  name: {
    [key: string]: string;
  };
  description?: {
    [key: string]: string;
  };
  price: number;
  pax?: string;
  allergens?: string[];
  dietary?: string[];
  isSpicy?: boolean;
  isPopular?: boolean;
  servingNote?: string;
};

export type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};