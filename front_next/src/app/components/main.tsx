import clsx from "clsx";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Main = ({
  className,
  children,
}: Props) => {

  
 
    let classStyle: string = "w-main h-full bg-white p-main";

  return (
  <main className={clsx(className, classStyle)}> 
  {children} 
  </main>
  );
};