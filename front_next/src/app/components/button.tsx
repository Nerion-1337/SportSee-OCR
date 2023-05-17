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
  let classStyles: string = "w-button h-button border-4 border-black border-solid rounded-md bg-red text-white text-3xl";

  return (
  <button onClick={onClick} className={clsx(classStyles, className)}> 
  {children} 
  </button>
  );
};