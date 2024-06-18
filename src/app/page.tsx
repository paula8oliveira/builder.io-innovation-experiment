"use client"

import Image from "next/image"
import ThePlanet from "../assets/planet.svg"
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className="flex flex-col-reverse lg:flex-row min-h-screen w-full font-Roboto">
      <div className="w-full lg:w-1/2 flex items-center justify-center mx-auto p-6 pt-14 lg:p-0 transition-all ease-out">
        <div className="max-w-full w-[380px] border-2 border-neutralsNeutral400 rounded-[4px] p-8 bg-basicsWhite">
          <Form />
        </div>
      </div>
      <div className="w-full items-center lg:items-start lg:w-1/2 bg-bluesBlue500 lg:min-h-screen text-basicsWhite py-16 lg:py-0 px-8 lg:px-24 flex flex-col justify-center transition-all ease-out">
        <div>
          <h3 className="text-2xl font-medium mb-2">Welcome</h3>
          <p>This is our experiment login screen.</p>
          <Image className="mt-4" src={ThePlanet} alt="My SVG Image" />
        </div>
      </div>
    </main>
  );
}
