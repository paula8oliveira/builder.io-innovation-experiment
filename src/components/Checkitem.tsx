import React, { useState } from "react";
import Checkbox from "./Checkbox";

type CheckitemProps = {
  onValueChange: (value: boolean) => void;
  label: string;
  disabled?: boolean;
  id: string;
};

const Checkitem: React.FC<CheckitemProps> = ({
  onValueChange,
  disabled = false,
  label,
  id,
}) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = (value: boolean) => {
    setCheck(value);
    onValueChange(value);
  };

  return (
    <div className="flex items-center gap-2">
      <Checkbox onValueChange={toggleCheck} disabled={disabled} id={id} />
      <label className="text-xxs text-basicsInk cursor-pointer" htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkitem;
