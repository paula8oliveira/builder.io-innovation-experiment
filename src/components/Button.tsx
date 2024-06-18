import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn bg-bluesBlue500 text-basicsWhite text-xs rounded-md py-[10px] border-[3px] border-basicsWhite  ${
        disabled ? "bg-neutralsNeutral400 cursor-not-allowed" : "defaultStyles"
      } hover:bg-bluesBlue600 active:bg-bluesBlue700 focus:bg-bluesBlue700 focus:border-bluesBlue600`}>
      {text}
    </button>
  );
};

export default Button;
