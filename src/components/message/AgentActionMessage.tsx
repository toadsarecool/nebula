import React, { useState } from 'react';
import Image from 'next/image';

interface AgentActionMessageProps {
  command: string;
  onAccept: () => void;
}

export default function AgentActionMessage({ command, onAccept }: AgentActionMessageProps) {
  // TODO: migrate state to parent component
  const [isVisible, setIsVisible] = useState(true);
  const [isAccepted, setIsAccepted] = useState<boolean | undefined>(undefined);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsAccepted(false);
  };

  const handleAccept = () => {
    setIsVisible(false);
    setIsAccepted(true);
    onAccept();
  };

  return (
    <div className="flex flex-col gap-3 p-3 rounded-lg border border-greystone text-sm">
        <div className="flex flex-row gap-2 items-center">
          <span className="text-ash text-center font-bold">{'>'}</span>
          <span className='text-center'>Talking to Nebula: </span>
          <span className="bg-greystone p-1 rounded font-mono text-xs h-">{command}</span>
          {isAccepted === false && <Image
            src="/close_icon.svg"
            alt="Close"
            width={12}
            height={12}
          />}
          {isAccepted === true && <Image
            src="/tick_icon.png"
            alt="Tick"
            width={12}
            height={12}
            className='h-4 w-4'
          />}
        </div>
        {isVisible && (
          <div className="flex flex-row gap-2 justify-end">
            {/* ACTION TOOLBAR */}
              <button
                onClick={handleDismiss}
                className="p-1 hover:bg-greystone rounded"
              >
                <Image
                  src="/close_icon.svg"
                  alt="Close"
                  width={12}
                  height={12}
                />
              </button>
              <button
                onClick={handleAccept}
                className="bg-moonbeam hover:bg-cosmo px-2 py-1 rounded-lg text-white"
              >
                Accept
              </button>
            </div>
        )}
    </div>
  );
} 