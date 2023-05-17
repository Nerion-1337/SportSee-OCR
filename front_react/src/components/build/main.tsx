import clsx from "clsx";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export const Main = ({
  className,
  children,
}: Props) => {
 
    const classStyle = "main";

  return (
  <main className={clsx(className, classStyle)}> 
  {children} 
  </main>
  );
};