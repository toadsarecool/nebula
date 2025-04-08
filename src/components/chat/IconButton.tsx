import Image from 'next/image';

interface IconButtonProps {
  onClick: () => void;
  dimensions: number,
  icon: string,
}

export default function IconButton({ onClick, dimensions, icon }: IconButtonProps) {
  return <button
    onClick={onClick}
    className="p-1 hover:bg-greystone rounded-lg"
  >
    <Image
      src={icon}
      alt="Close"
      width={dimensions}
      height={dimensions}
    />
  </button>
}