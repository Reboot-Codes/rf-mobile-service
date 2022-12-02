import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import Slogan from "../marketing/Slogan";
import { links, scheduleLink } from "./NavBar";

export default function Footer() {
  const year = dayjs().get("year");
  /*const [tos, setTos] = React.useState([]);
  React.useEffect(() => {
    const tosProto = [];
    window.location.pathname.split("/").map((part, id, arr) => {
      if (id != 0) {
        tosProto.push([
          `${
            arr.slice(1, id).join("/") == ""
              ? "/" + arr.slice(1, id).join("/")
              : "/" + arr.slice(1, id).join("/") + "/"
          }${part}`,
          part,
        ]);
      } else {
        tosProto.push(["/", "home"]);
      }
    });

    setTos(tosProto);
  });*/

  return (
    <footer className="w-full px-3 py-5">
      <div className="w-[90%] mx-auto">
        <h1 className="text-2xl font-bold">
          <Slogan />
        </h1>
        {/*
          <p>
          {tos.map((to, id) => (
            <Link key={id} href={to[0]}>
              {to[0] === "/" ? "" : "/ "}
              {to[1].split("-").join(" ")}{" "}
            </Link>
          ))}
        </p>
        */}
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-3 mb-3">
          <div className="w-full md:w-1/2">
            <p>
              RF Mobile is a family owned company. We value honesty and
              hard-work, and strive to bring those values to your repair
              experience.
            </p>
          </div>
          <div className="w-full md:w-1/2 font-bold">
            {links.map((link, id) => (
              <Link
                key={id}
                href={link.to}
                target={link.to.startsWith("/") ? "_self" : "_blank"}
                className="mr-3"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3">
          <Link
            className="block p-3 rounded-md bg-brand-500 text-black transition ease-in-out motion-reduce:transition-none hover:bg-white hover:text-black font-bold text-center"
            href={scheduleLink}
            target={scheduleLink.startsWith("/") ? "_self" : "_blank"}
          >
            Book Now
          </Link>
          <Link
            className="block p-3 rounded-md border transition ease-in-out motion-reduce:transition-none hover:bg-white hover:text-black font-bold text-center"
            href="tel:+15202367524"
          >
            Call Now
          </Link>
        </div>
        <p className="mt-3 text-center">
          Site developed by{" "}
          <Link
            href="https://www.reboot-codes.com"
            target="_blank"
            className="underline"
          >
            Ruben Flores
          </Link>
          . &copy; {year == 2022 ? "2022" : `2022-${year}`} Ruben Flores' Mobile
          Service and Repair LLC, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
