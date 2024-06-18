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
        `  px-2 text-body-sm tracking-wide leading-5 text-blue-500 underline whitespace-nowrap ${
          disabled ? "text-neutral-400" : ""
        } active:text-blue-700 hover:text-blue-600 focus:text-blue-500 focus:border-blue-600 focus:border-solid focus:border-[3px]`
      }>
      {text}
    </a>
  );
};

export default LinkText;
