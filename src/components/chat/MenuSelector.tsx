import React, { useState } from 'react';
import Image from 'next/image';

interface MenuOption {
  id: string;
  label: string;
}

interface MenuSelectorProps {
  label: string;
  options: MenuOption[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function MenuSelector({ label, options, selectedId, onSelect }: MenuSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-2 py-1 bg-greystone rounded-lg hover:bg-stone transition-colors"
      >
        <span>{label}</span>
        <Image
          src="/menu_toggle.svg"
          alt="Toggle menu"
          width={16}
          height={16}
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 p-1 bg-greystone rounded-lg shadow-lg z-50">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => {
                onSelect(option.id);
                setIsOpen(false);
              }}
              className={`w-full rounded px-3 py-1.5 text-left hover:bg-stone transition-colors ${
                option.id === selectedId ? 'bg-stone' : ''
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 