import React, { useState } from "react";

type CheckboxProps = {
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
};

const Checkbox: React.FC<CheckboxProps> = ({
  onValueChange,
  disabled = false,
}) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = () => {
    const newValue = !check;
    setCheck(newValue);
    onValueChange(newValue);
  };

  return (
    <input
      onChange={toggleCheck}
      type="checkbox"
      disabled={disabled}
      checked={check}
      className={`border-solid border-neutral-400 ${
        disabled ? "accent-bg-neutral-400" : ""
      } hover:accent-blue-600 active:accent-bg-blue-700 focus:bg-blue-600`}
    />
  );
};

export default Checkbox;
