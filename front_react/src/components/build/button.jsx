import clsx from "clsx";


export const Button = (
{  onClick,
  className,
  children,}
) => {

  const classStyles = "button text-3xl";

  return (
  <button onClick={onClick} className={clsx(classStyles, className)}> 
  {children} 
  </button>
  );
};