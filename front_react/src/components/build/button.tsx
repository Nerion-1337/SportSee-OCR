import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  onClick,
  className,
  children,
}: Props) => {

  const classStyles = "button text-3xl";

  return (
  <button onClick={onClick} className={clsx(classStyles, className)}> 
  {children} 
  </button>
  );
};