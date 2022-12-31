import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsList, BsXLg } from "react-icons/bs";

export const scheduleLink = "https://squareup.com";
export const links: {
  name: string;
  to: string;
}[] = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Services",
    to: "/services",
  },
  {
    name: "FAQ",
    to: "/faq",
  },
  {
    name: "Call",
    to: "tel:+15202367524",
  },
];

export default function NavBar() {
  const [shouldFrost, setFrost] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", (_ev) => {
      if (window.scrollY > 0) {
        setFrost(true);
      } else {
        setFrost(false);
      }
    });
  });

  const [showDrawer, setDrawer] = React.useState(false);

  // #566314
  return (
    <>
      <div
        className={`w-full p-3 fixed top-0 h-[88px] ${
          shouldFrost
            ? "backdrop-blur-lg bg-zinc-900 bg-opacity-40 text-white shadow-lg"
            : "text-white"
        } transition ease-in-out motion-reduce:transition-none motion-reduce:backdrop-blur-lg motion-reduce:bg-gray-50 motion-reduce:opacity-40 motion-reduce:text-black motion-reduce:shadow-lg`}
      >
        <div className="w-[90%] h-16 mx-auto flex flex-row items-center font-bold">
          <Link href="/" className="mr-3">
            <Image
              alt=""
              src="/Logo.svg"
              width="64"
              height="64"
              className="rounded-full shadow-lg"
            />
          </Link>
          <div className="ml-auto space-x-1.5 md:space-x-3 text-sm md:text-md hidden md:block">
            {links.map((link, id) => (
              <Link
                href={link.to}
                key={id}
                target={link.to.startsWith("/") ? "_self" : "_blank"}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden ml-auto text-3xl p-3"
            onClick={() => setDrawer(!showDrawer)}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div
        className={`fixed transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          showDrawer ? "w-full" : "w-[0.00000001px]"
        } right-0 h-full`}
      >
        <div className="flex flex-row h-full w-full">
          {/*<div className="w-[20%] h-full bg-gradient-to-l from-[rgba(0,0,0,0.5)]" onClick={() => setDrawer(!showDrawer)}/>*/}
          <div className="w-full h-full backdrop-blur-lg bg-zinc-800 text-white">
            <div className="flex flex-row items-center py-3">
              <h1 className="text-5xl font-bold pl-3">Menu</h1>
              <button
                className="ml-auto p-3 text-xl"
                onClick={() => setDrawer(!showDrawer)}
              >
                <BsXLg />
              </button>
            </div>
            <div
              className="flex flex-col mx-3"
              onClick={() => setDrawer(!showDrawer)}
            >
              {links.map((link, id) => (
                <Link
                  href={link.to}
                  key={id}
                  className="text-2xl"
                  target={link.to.startsWith("/") ? "_self" : "_blank"}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
