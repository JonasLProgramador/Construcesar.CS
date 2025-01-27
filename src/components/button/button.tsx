import type { ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string;
}

export function Button({...props}: ButtonProps){
  return(
    <button {...props}/>
  )
}