import React, { useState } from "react";
import Checkbox from "./Checkbox";

type CheckitemProps = {
  label: string;
  onValueChange?: (value: boolean) => void;
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
    onValueChange(value);
  };

  return (
    <div className="flex gap-2 mt-6 align-baseline text-body-sm tracking-wide leading-5 text-basics-ink">
      <Checkbox onValueChange={toggleCheck} disabled={disabled} />
      <p>{label}</p>
    </div>
  );
};

export default Checkboxitem;
