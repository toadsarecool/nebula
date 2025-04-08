import React from 'react';
import IconButton from './IconButton';

interface ChatInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

export default function ChatInput({ value, onChange, onKeyDown, onSend }: ChatInputProps) {
  return (
    <div className="p-3 bg-black">
      <div className="relative">
        <textarea
          rows={1}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          placeholder="Ask me anything..."
          className="w-full bg-greystone p-2 pb-12 rounded-lg focus:outline-none resize-none overflow-hidden min-h-[48px] max-h-[200px]"
          style={{ height: 'auto' }}
        />
        <div className="absolute bottom-2 left-1">
          <IconButton
            onClick={() => {}}
            dimensions={24}
            icon="/upload_button.png"
          />
        </div>
        <div className="absolute bottom-2 right-1">
          <IconButton
            onClick={onSend}
            dimensions={24}
            icon="/send_button.svg"
          />
        </div>
      </div>
    </div>
  );
} 