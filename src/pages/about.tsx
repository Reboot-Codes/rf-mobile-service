import Image from "next/image";
import React from "react";
import PageLayout from "../components/layout/Page";

export default function Page() {
  return (
    <PageLayout name="About">
      <div className="max-w-[90%] mx-auto flex items-center justify-center">
        <div className="mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center mb-3">
            <div className="bg-[url('/founders.png')] bg-center bg-cover w-40 min-w-[160px] h-40 min-h-[160px] md:w-64 md:min-w-[256px] md:h-64 md:min-h-[256px] rounded-full m-3" />
            <p className="text-lg font-bold">The Flores'</p>
            <p>Founders, Co-Owners, and Family</p>
          </div>
          <div className="max-w-[60ch] space-y-3 m-3">
            <p>
              RF Mobile is a family owned company. We value honesty and
              hard-work, and strive to bring those values to your repair
              experience.
            </p>
            <p>
              As fellow motorists, we've learned from experience that even
              though not all mechanical problems can be entirely prevented;
              regular maintenance can mean the difference between having peace
              of mind and being stranded at the most inopportune time.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
