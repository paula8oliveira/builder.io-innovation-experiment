import React, { useState } from "react";

type InputProps = {
  label: string;
  type: string;
  validate: (value: string) => string;
  disabled?: boolean;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  classname?: string;
};

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type,
  disabled = false,
  validate,
  onValueChange,
  classname,
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onValueChange) {
      onValueChange(newValue);
    }
    setValue(newValue);
  };

  const handleInputBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (validate) {
      const validationError = validate(value);
      setError(validationError);
    }
  };

  return (
    <div className={classname}>
      <label className="w-full text-caption font-medium tracking-wide leading-4 text-basics-ink">
        {label}
      </label>
      <input
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={`justify-center text-basics-ink items-start px-3 py-2 mt-1 w-full text-body-sm tracking-wide leading-5 bg-white rounded border border-solid border-neutral-600 ${
          disabled ? "border-neutral-600 text-neutral-400" : ""
        } ${
          error
            ? "border-red-600 border-solid leading-[143%] text-basics-secondary"
            : ""
        } hover:border-blue-500  active:border-blue-600 active:border-[3px] active:text-basics-secondary
        focus:outline-blue-600 focus:border-[3px] focus:text-basics-secondary
        placeholder:border-neutral-600 placeholder:text-basics-secondary`}
      />

      {error && (
        <div className="flex gap-2 pr-5 mt-1 text-red-600 leading-[160%]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe031e40bb30ed49ea3f5305af51f66a7f8f92c794b185a195bc668221e931ef?apiKey=c085105b203241559a71a96b7e16d29d&"
            className="shrink-0 self-start w-5 aspect-square"
            alt=""
          />
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
};

export default Input;
