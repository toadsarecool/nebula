'use client';

import { useState } from 'react';
import FloatingButton from './FloatingButton';
import Chat from './chat/Chat';

export default function HelpPanel() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      <div className="fixed bottom-8 right-8">
        <FloatingButton onClick={() => setIsOpen(!isOpen)} />
      </div>
      <Chat isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
} 