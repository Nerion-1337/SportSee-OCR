import clsx from "clsx";

interface Props {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "nav" | "default" | "small";
  balise?: "h1" | "h2" | "h3" | "h4" | "h5" | "div" | "p" | "li" | "span";
  color?: "black" | "white" | "red";
  className?: string;
  children: React.ReactNode;
}

export const Typo = ({
  variant = "default",
  balise: Balise = "div",
  color = "black",
//className dans le cas où on veux ajouter des styles spécifique  
  className,
  children,
}: Props) => {
  let variantStyles: string = "", colorStyles: string = "";

  //condition si variant contient h1 alors applique le style h1
  switch (variant) {
    case "h1":
      variantStyles = "text-1xl";
      break;
    case "h2":
      variantStyles = "text-2xl";
      break;
    case "h3":
      variantStyles = "text-3xl";
      break;
    case "h4":
      variantStyles = "text-4xl";
      break;
    case "h5":
      variantStyles = "text-5xl";
      break;
    case "default":
      variantStyles = "";
      break;
// text-3xl défini dans fichier tailwind
    case "nav":
      variantStyles = "text-3xl";
      break;
      case "small":
        variantStyles = "text-7xl";
        break;
  }

  switch (color) {
    case "black":
      colorStyles = "text-black";
      break;
    case "white":
        colorStyles = "text-white";
      break;
    case "red":
        colorStyles = "text-red";
      break;
  }

  return (
  <Balise className={clsx(variantStyles, colorStyles, className)}> 
  {children} 
  </Balise>
  );
};
