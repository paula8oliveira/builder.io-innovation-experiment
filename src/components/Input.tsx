import React, { useState } from "react";
import Image from "next/image"
import ErrorIcon from "../assets/emergency_home.svg"

type InputProps = {
  label: string;
  type: string;
  validate: (value: string) => string;
  placeholder: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  validate,
  onValueChange,
  disabled = false,
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onValueChange(newValue);
    setValue(newValue);
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      const validationError = validate(value);
      setError(validationError);
    }
  };

  return (
    <div className="flex gap-1 flex-col">
      <label className="text-basicsInk text-xxs">{label}</label>
      <input
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        style={{ color: "black" }}
        className={` text-xs p-[10px] rounded-[4px] text-basicsInk border-2 border-neutralsNeutral600 placeholder-basicsSecondary ${
          disabled ? "text-neutralsNeutral400 cursor-not-allowed" : ""
        } ${
          error ? "border-solid border-2 border-systemColorsRed600" : ""
        } hover:border-bluesBlue500 active:activeStyles focus:border-bluesBlue600 focus:border-4 focus:outline-bluesBlue600`}
      />
      <div className="flex items-center gap-1 text-xs text-systemColorsRed600">
        {error && (
          <>
             <Image src={ErrorIcon} alt="Error" />
            <p>{error}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
