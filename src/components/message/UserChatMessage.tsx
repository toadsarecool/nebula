interface UserChatMessageProps {
    avatar: string;
    message: string;
  }
  
  export default function UserChatMessage({ avatar, message }: UserChatMessageProps) {
    return (
      <div className="flex gap-3 p-3 text-nova bg-greystone rounded-lg">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-ash flex items-center justify-center text-lg">
          {avatar}
        </div>
        <div className="flex-1">
          <p className="text-sm leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    );
  }