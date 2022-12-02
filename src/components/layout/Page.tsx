import React from "react";
import Head from "next/head";

/**
 * The layout for most, if not all pages. Name will appear in the title and the default hero element.
 * Also, make sure to pass in the custom hero as `<Hero />` instead of just `Hero`.
 */
export default function PageLayout({
  children,
  name,
  titleAddon,
  /** Must be `<Hero />`, not `Hero` */
  hero,
}: {
  children?: JSX.Element | JSX.Element[];
  name: string;
  titleAddon?: string;
  hero?: JSX.Element;
}) {
  return (
    <>
      <Head>
        <title>
          {`${name} - RF Mobile${titleAddon ? ` ${titleAddon}` : ""}`}
        </title>
      </Head>
      <div className="min-h-[calc(100vh)]">
        {hero ? (
          hero
        ) : (
          <div className="bg-[url('/hero4.png')] h-[calc(88px+144px)] max-h-[calc(88px+144px)] w-full bg-center bg-no-repeat bg-cover pt-16 px-3">
            <div className="w-[90%] mx-auto flex flex-row items-center h-[144px] max-h-[144px] text-white">
              <h1 className="text-5xl font-bold">{name}</h1>
            </div>
          </div>
        )}
        <div className="w-full">{children}</div>
      </div>
    </>
  );
}
