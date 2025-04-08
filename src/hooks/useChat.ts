import { useState, useCallback, ChangeEvent, KeyboardEvent } from 'react';
import { Message } from '@/types/chat';

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = useCallback((content: string, generateResponse: (content: string) => Promise<Message>) => {
    if (content.trim() === '') return;
    const userMessage: Message = {
      role: 'user',
      content,
    };
    
    setMessages(prev => [...prev, userMessage]);

    const thinkingMessage: Message = {
      role: 'agent',
      content: '',
      state: 'thinking'
    };
    
    setMessages(prev => [...prev, thinkingMessage]);

    setTimeout(async () => {
      const response = await generateResponse(content);
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = response;
        return newMessages;
      });
    }, 1000);

    setInputValue('');
  }, []);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }, []);

  const handleKeyPress = useCallback((e: KeyboardEvent<HTMLTextAreaElement>, generateResponse: (content: string) => Promise<Message>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim()) {
        sendMessage(inputValue.trim(), generateResponse);
      }
    }
  }, [inputValue, sendMessage]);

  return {
    messages,
    inputValue,
    sendMessage,
    handleInputChange,
    handleKeyPress,
  };
} 