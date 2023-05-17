import clsx from "clsx";

export const Typo = ({  
  variant = "h6",
  balise: Balise = "div",
  color = "black",
  //className dans le cas où on veux ajouter des styles spécifique
  className,
  children,
}) => {
  let variantStyles = "";
  let colorStyles = "";

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
    case "h6":
      variantStyles = "text-6xl";
      break;
    case "h7":
      variantStyles = "text-7xl";
      break;
    case "h8":
      variantStyles = "text-8xl";
      break;
    case "h9":
      variantStyles = "text-9xl";
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
    case "C1":
      colorStyles = "text-c1";
      break;
    case "C2":
      colorStyles = "text-c2";
      break;
  }

  return (
    <Balise className={clsx(variantStyles, colorStyles, className)}>
      {children}
    </Balise>
  );
};
