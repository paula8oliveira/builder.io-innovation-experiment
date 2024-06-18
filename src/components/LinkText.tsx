import React from "react";

type LinkTextProps = {
  text: string;
  linkto?: string | undefined;
  disabled?: boolean;
};

const LinkText: React.FC<LinkTextProps> = ({
  text,
  linkto,
  disabled = false,
}) => {
  return (
    <a
      href={linkto ? linkto : "/"}
      className={`text-bluesBlue500 text-xs font-regular underline border-[3px] rounded-md border-basicsWhite p-1 ${
        disabled ? "text-neutralsNeutral400 cursor-not-allowed" : "defaultStyles"
      } hover:text-bluesBlue600 active:text-bluesBlue700 focus:text-bluesBlue700 focus:border-bluesBlue700 focus:border-opacity-100`}>
      {text}
    </a>
  );
};

export default LinkText;
