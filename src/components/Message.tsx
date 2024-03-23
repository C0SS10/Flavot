interface MessageProps {
  message: string;
  type: 'message incoming' | 'message outgoing';
}

export const Message: React.FC<MessageProps> = ({ message, type }) => {
  return(
    <div className={type}>
      {message}
    </div>
  )
}