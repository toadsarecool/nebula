export type MessageRole = 'user' | 'agent' | 'action';
export type AgentState = 'thinking' | 'generating' | 'default';

export interface Message {
  role: MessageRole;
  content: string;
  state?: AgentState; // Only used for agent messages
  command?: string; // Only used for action messages
}

export interface Conversation {
  id: string;
  messages: Message[];
} 