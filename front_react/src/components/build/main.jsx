import clsx from "clsx";

export const Main = (
{  className,
  children,}
) => {
 
    const classStyle = "main";

  return (
  <main className={clsx(className, classStyle)}> 
  {children} 
  </main>
  );
};