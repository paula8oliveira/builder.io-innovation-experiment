import React, { useState } from "react";

type CheckboxProps = {
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  id?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  onValueChange,
  disabled = false,
  id,
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
        id={id}
        className={`generalStyles accent-bluesBlue500  ${
          disabled ? "cursor-not-allowed border-neutralsNeutral400 accent-neutralsNeutral400" : ""
        } hover:accent-bluesBlue600 active:accent-bluesBlue700 focus:accent-bluesBlue700`}
      />
  );
};

export default Checkbox;
