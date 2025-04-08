import { Message } from '@/types/chat';

export class FakeLLM {
  constructor() {}
  async generateResponse(userMessage: string): Promise<Message> {
    // Simulate thinking phase
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate parsing user command
    if (userMessage.toLowerCase().includes('scrape twitter')) {
      return {
        role: 'agent',
        content: "I see you would like for me to scrape twitter for you. Is this the correct action?",
        state: 'default'
      };
    }

    // Simulate suggest action
    if (userMessage.toLowerCase().includes('action')) {
      return {
        role: 'action',
        content: '',
        command: "scrape_twitter",
      };
    }

    // Simulate do action step
    if (userMessage.toLowerCase().includes('accept')) {
      return {
        role: 'agent',
        content: "I've completed scrape_twitter. Let me know if you need anything else.",
        state: 'default'
      };
    }

    // Return a sample agent message
    return {
      role: 'agent',
      content: "I'm an AI assistant helping you with coding tasks. I can help you write, debug, and understand code. Let me know what you'd like to work on!",
      state: 'default'
    };
  }
} 