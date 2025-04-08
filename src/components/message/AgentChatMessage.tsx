import Image from 'next/image';
import IconButton from '../chat/IconButton';
import { AgentState } from '@/types/chat';

interface AgentChatMessageProps {
  message: string;
  state?: AgentState;
}

export default function AgentChatMessage({ message, state = 'default' }: AgentChatMessageProps) {
  return (
    <div className="flex gap-3 p-3 text-nova bg-black rounded-lg">
      <div className="flex-1">
        <div className="text-sm leading-relaxed mb-3">
          {state === 'thinking' && (
            <div className="flex items-center gap-2">
              <Image
                src="/loading_icon.png"
                alt="Thinking"
                width={16}
                height={16}
                className="animate-spin"
              />
              <span className="text-ash">Thinking...</span>
            </div>
          )}
          {state === 'generating' && (
            <div className='flex flex-col gap-2'>
              {message}
            <div className="flex items-center gap-2">
              <Image
                src="/loading_icon.png"
                alt="Generating"
                width={16}
                height={16}
                className="animate-spin"
              />
              <span className="text-ash">Generating response...</span>
            </div>
            </div>
          )}
          {state === 'default' && message}
        </div>
        {state === 'default' && (
          <div className="flex gap-2 justify-end">
            <IconButton
              onClick={() => {}}
              dimensions={16}
              icon="/copy_icon.svg"
            />
            <IconButton
              onClick={() => {}}
              dimensions={16}
              icon="/thumb_up_icon.svg"
            />
            <IconButton
              onClick={() => {}}
              dimensions={16}
              icon="/thumb_down_icon.svg"
            />
          </div>
        )}
      </div>
    </div>
  );
} 