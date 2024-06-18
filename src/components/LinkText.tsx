import React from "react";

type LinkTextProps = {
  text: string;
  classname?: string;
  linkto?: string | undefined;
  disabled?: boolean;
};

const LinkText: React.FC<LinkTextProps> = ({
  text,
  linkto,
  disabled = false,
  classname,
}) => {
  return (
    <a
      href={linkto ? linkto : "/"}
      className={
        classname +
        `  px-2 text-sm tracking-wide leading-5 text-sky-600 underline whitespace-nowrap ${
          disabled ? "text-slate-300" : ""
        } hover:text-blue-800 focus:border-blue-800 focus:border-solid focus:border-[3px]`
      }>
      {text}
    </a>
  );
};

export default LinkText;
