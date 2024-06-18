"use client";
import * as React from "react";
import Button from "@/components/Button";
import Input from "@/components/Input";
import Checkboxitem from "@/components/Checkitem";
import LinkText from "@/components/LinkText";

interface InputProps {
  labelText: string;
  placeholder: string;
  id: string;
  type: string;
}

const MyComponent: React.FC = () => {
  return (
    <section className="pl-20 h-screen bg-slate-50 max-md:p-0 max-md:flex-col-reverse">
      <div className="flex gap-5  bg-slate-50 max-md:gap-0 max-md:flex-col-reverse">
        <section className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full max-md:py-20 max-md:px-5 ">
          <form className="flex flex-col self-stretch p-8 my-auto w-full bg-white rounded border border-solid border-slate-300 max-md:px-5 max-md:mt-0">
            <h2 className="text-2xl font-medium leading-9 text-zinc-900">
              Sign in
            </h2>
            <div className="flex flex-col mt-4">
              <Input
                label="Email"
                classname="flex flex-col mt-4 "
                placeholder="Enter email"
                type="email"
                validate={(value: string) =>
                  value.length > 8
                    ? ""
                    : "Email must be at least 8 characters long"
                }
              />
              <Input
                label="Password"
                classname="flex flex-col  mt-4"
                placeholder="Enter password"
                type="Password"
                validate={(value: string) =>
                  value.length > 8
                    ? ""
                    : "Password must be at least 8 characters long"
                }
              />
              <LinkText
                text="Forgot password"
                classname="justify-center text-right px-2 py-px mt-6 "
              />
              <Button text="Sign in" classname=" px-4 py-2.5 mt-6 " />
              <Checkboxitem label={"Remember this device"} />
            </div>
          </form>
        </section>
        <aside className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center align-center px-20 py-16 w-full h-screen bg-sky-600 max-md:px-5  max-md:max-w-full">
            <div className="mx-5  text-5xl font-medium text-white leading-[68.16px] max-md:mt-10 max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
              Welcome.
            </div>
            <div className="mx-5 mt-4 text-xl font-bold tracking-normal leading-7 text-zinc-200 max-md:mr-2.5 max-md:max-w-full">
              This is our experiment login screen.
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a70c8109212588f33394069db97236567048a3ea9dbe98df64da07729e97a49f?apiKey=c085105b203241559a71a96b7e16d29d&"
              alt=""
              className="mt-4 ml-5 max-w-full aspect-[1.01] w-[140px] max-md:ml-2.5"
            />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default MyComponent;
