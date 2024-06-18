import React from "react";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classname?: string;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type,
  disabled = false,
  classname,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={
        classname +
        `justify-center px-4 py-2.5 text-button font-medium tracking-wide leading-5 text-white whitespace-nowrap bg-blue-500 rounded ${
          disabled ? "bg-neutral-400 " : ""
        } hover:bg-blue-600 active:bg-blue-700 focus:bg-bluesBlue700`
      }>
      {text}
    </button>
  );
};

export default Button;
