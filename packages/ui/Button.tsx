
export const Button = ({ onClick, text }: { onClick: () => Promise<boolean>, text: string }) => {
  return <button onClick={onClick}>{text}</button>;
};
