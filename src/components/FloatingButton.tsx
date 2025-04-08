import Image from 'next/image';

interface FloatingButtonProps {
  onClick: () => void;
}

export default function FloatingButton({ onClick }: FloatingButtonProps) {
  return (
    <button
      className="w-10 h-10"
      onClick={onClick}
    >
      <Image
        src="/help_assistant_icon.png"
        alt="Help Assistant"
        width={48}
        height={48}
        className="w-full h-full object-cover"
      />
    </button>
  );
} 