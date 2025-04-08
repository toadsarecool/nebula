import React, { useRef, useEffect, useState } from 'react';
import IconButton from './IconButton';
import { useChat } from '@/hooks/useChat';
import { FakeLLM } from '../FakeLLM';
import MessageRenderer from '../message/MessageRenderer';
import ChatInput from './ChatInput';
import MenuSelector from './MenuSelector';

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const MODEL_OPTIONS = [
  { id: 'gpt4', label: 'GPT-4' },
  { id: 'gpt35', label: 'GPT-3.5' },
  { id: 'claude', label: 'Claude' },
  { id: 'claude2', label: 'Claude 2' },
];

export default function Chat({ isOpen, onClose }: ChatProps) {
  const [selectedModelId, setSelectedModelId] = useState('gpt4');
  const fakeLLM = new FakeLLM();
  const { messages, inputValue, sendMessage, handleInputChange, handleKeyPress } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleActionAccept = (command: string) => {
    sendMessage(`Accept ${command}`, fakeLLM.generateResponse.bind(fakeLLM));
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(inputValue.trim(), fakeLLM.generateResponse.bind(fakeLLM));
    }
  };

  const handleModelChange = (modelId: string) => {
    setSelectedModelId(modelId);
    // TODO: Update LLM instance based on selected model
  };

  if (!isOpen) return null;
  
  return (
    <div className="fixed text-nova text-sm top-0 right-0 w-[400px] h-full bg-black transform transition-transform duration-300 ease-in-out">
      <div className="h-full flex flex-col">
        {/* CHAT HEADER */}
        <div className='p-3 border-b border-greystone flex justify-between'>
          <p className="text-xl font-spaceGrotesk">
            MISSION COMMANDER
          </p>
          <IconButton
            onClick={onClose}
            dimensions={16}
            icon="/close_icon.svg"
          />
        </div>

        {/* CHAT TOOLBAR */}
        <div className='p-3 flex justify-between w-full items-center'>
          <div className='flex justify-between w-full items-center'>
            <div>New Chat</div>
            <div className="flex items-center gap-2">
              <IconButton
                onClick={() => {}}
                dimensions={20}
                icon="/new_chat_button.svg"
              />
              <IconButton
                onClick={() => {}}
                dimensions={20}
                icon="/chat_history_button.svg"
              />
              <MenuSelector
                label={MODEL_OPTIONS.find(option => option.id === selectedModelId)?.label || 'Model'}
                options={MODEL_OPTIONS}
                selectedId={selectedModelId}
                onSelect={handleModelChange}
              />
            </div>
          </div>
        </div>

        {/* CHAT HISTORY */}
        <div className="flex-1 overflow-auto custom-scrollbar">
          <div className="flex flex-col gap-3 p-3">
            {messages.map((message, index) => (
              <MessageRenderer
                key={index}
                message={message}
                onActionAccept={handleActionAccept}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* CHAT INPUT */}
        <ChatInput
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={(e) => handleKeyPress(e, fakeLLM.generateResponse.bind(fakeLLM))}
          onSend={handleSend}
        />
      </div>
    </div>
  );
} 