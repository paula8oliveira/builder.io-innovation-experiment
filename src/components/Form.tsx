"use client";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Checkitem from "./Checkitem";
import LinkText from "./LinkText";

type FormProps = {
  //
};

const Form: React.FC<FormProps> = (
  {
    //
  }
) => {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);

  const handleInputChange = (value: string) => {
    setInput(value);
  };
  const handleClick = () => {
    //
  };

  const validateInput = (value: string) => {
    if (value.length < 5) {
      return "Error";
    }
    return "";
  };

  const handleCheckChange = (value: boolean) => {
    setCheck(value);
  };

  return (
    <>
      <h5 className="text-basicsInk text-lg font-medium mb-4">Sign in</h5>
      <form className="flex flex-col gap-[22px]">
        
        <Input
          label="Email"
          type="email"
          placeholder="Enter email"
          onValueChange={handleInputChange}
          validate={validateInput}
        />

      <Input
          label="Password"
          type="password"
          placeholder="Enter Password"
          onValueChange={handleInputChange}
          validate={validateInput}
        />
        
        <div className="ml-auto">
          <LinkText text="Forgot Password" />
        </div>

        <Button text="Sign in" type="submit" onClick={handleClick} />
        
        <Checkitem onValueChange={handleCheckChange} label="Remember this device" id="rememberMeId" />
      
      </form>
    </>
  );
};

export default Form;
