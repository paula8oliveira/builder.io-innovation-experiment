import React, { useState } from "react";
import Checkbox from "./Checkbox";

type CheckitemProps = {
  onValueChange?: (value: boolean) => void;
  label: string;
  disabled?: boolean;
};

const Checkboxitem: React.FC<CheckitemProps> = ({
  onValueChange,
  disabled = false,
  label,
}) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = (value: boolean) => {
    setCheck(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div className="flex gap-2 mt-6 text-sm tracking-wide leading-5 align-baseline text-zinc-900">
      <Checkbox onValueChange={toggleCheck} disabled={disabled} />
      <p>{label}</p>
    </div>
  );
};

export default Checkboxitem;
