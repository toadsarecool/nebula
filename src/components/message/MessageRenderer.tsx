import { Message } from '@/types/chat';
import UserChatMessage from './UserChatMessage';
import AgentChatMessage from './AgentChatMessage';
import AgentActionMessage from './AgentActionMessage';

interface MessageRendererProps {
  message: Message;
  onActionAccept: (command: string) => void;
}

export default function MessageRenderer({ message, onActionAccept }: MessageRendererProps) {
  switch (message.role) {
    case 'user':
      return (
        <UserChatMessage
          avatar="C"
          message={message.content}
        />
      );
    case 'action':
      return (
        <AgentActionMessage
          command={message.command || 'undefined'}
          onAccept={() => onActionAccept(message.command || 'undefined')}
        />
      );
    case 'agent':
      return (
        <AgentChatMessage
          message={message.content}
          state={message.state}
        />
      );
    default:
      return null;
  }
} 