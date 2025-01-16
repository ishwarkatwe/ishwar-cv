import React from "react";
import Image from "next/image";
import Desc from "@/app/components/core/Desc";
import Panel from "@/app/components/core/Panel";
import RecentNotes from "./recentNotes";

function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row gap-4 my-4 sm:my-8 sm:gap-0 items-center">
        <div>
          <h1 className="text-2xl text-gray-800">Hey, I'm Ishwar</h1>
          <Desc>
            Welcome to my digital nook. I'm a software engineer and content
            creator from India with experience over a decade in software
            development methodologies. Here, I share what I've been working on
            recently and things I've learned along the way.
          </Desc>
        </div>
        <div className="sm:w-[30rem] flex items-center justify-end">
          <Image
            src={"/images/dp.png"}
            alt="Ishwar Katwe"
            className="rounded-lg"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div>
        <RecentNotes />
      </div>
    </div>
  );
}

export default Home;
