import React, { useState } from "react";

type CheckboxProps = {
  onValueChange: (value: boolean) => void;
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
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <div>
      <input
        onChange={toggleCheck}
        type="checkbox"
        disabled={disabled}
        checked={check}
        className={`border-solid border-slate-400 ${
          disabled ? "accent-bg-slate-300" : ""
        } hover:accent-blue-800 active:accent-bg-blue-900 focus:bg-blue-800`}
      />
    </div>
  );
};

export default Checkbox;
