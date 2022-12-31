import Link from "next/link";
import React from "react";
import PageLayout from "../components/layout/Page";
import Slogan from "../components/marketing/Slogan";
import { BsChevronDown, BsChevronRight, BsWrench } from "react-icons/bs";
import { TbEngineOff } from "react-icons/tb";
import { BsPhone } from "react-icons/bs";
import { scheduleLink } from "../components/navigation/NavBar";

function Hero() {
  return (
    <div className="bg-[url('/hero4.png')] min-h-[calc(88px+144px)] h-[100vh] max-h-[100vh] w-full bg-bottom md:bg-center bg-no-repeat bg-cover pt-[88px] flex flex-col bg-fixed">
      <div className="bg-[url('/hero4.png')] min-h-[calc(88px+144px)] h-[100vh] max-h-[100vh] w-full bg-center bg-no-repeat bg-cover pt-[88px] flex flex-row items-center bg-fixed">
        <div className="w-[90%] mx-auto flex flex-row items-center h-[144px] max-h-[144px]">
          <div className="flex flex-col max-w-md space-y-3 text-white">
            <h1 className="text-4xl md:text-5xl font-bold">
              <Slogan />
            </h1>
            {/*<Link
            className="block p-3 rounded-md bg-brand-500 text-black transition ease-in-out motion-reduce:transition-none hover:bg-white hover:text-black font-bold text-center"
            href={scheduleLink}
            target={scheduleLink.startsWith("/") ? "_self" : "_blank"}
          >
            Book Now
          </Link>*/}
          <Link
            className="block p-3 rounded-md bg-brand-500 text-black transition ease-in-out motion-reduce:transition-none hover:bg-white hover:text-black font-bold text-center"
            href="tel:+15202367524"
          >
            Call Now
          </Link>
            <p>
              With over 20 years of experience, we're here to get you back on
              the road wherever you might be in Tucson, AZ.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto my-3 text-xl">
        <BsChevronDown />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageLayout name="Home" hero={<Hero />}>
      <div className="w-[90%] px-3 mx-auto mb-5">
        <div className="w-full flex flex-col">
          <h1 className="text-5xl font-bold mt-5">Here's how it works:</h1>
          <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-3 justify-between items-center mt-5">
            <div className="max-w-md md:w-1/3 flex flex-col items-center text-center">
              <div className="mb-3 text-[96px]">
                <TbEngineOff />
              </div>
              <h2 className="font-bold text-2xl mb-5">1. Break Down</h2>
              <p>
                Whether your car won't start or is making an unusual noise,
                we're here for you.
              </p>
            </div>
            <div className="max-w-md md:w-1/3 flex flex-col items-center text-center">
              <div className="mb-3 text-[96px]">
                <BsPhone />
              </div>
              <h2 className="font-bold text-2xl mb-5">2. Book Us</h2>
              <p>
                You can book our services online or over the phone, whatever is
                more convenient for you.
              </p>
            </div>
            <div className="max-w-md md:w-1/3 flex flex-col items-center text-center">
              <div className="mb-3 text-[96px]">
                <BsWrench />
              </div>
              <h2 className="font-bold text-2xl mb-5">3. Get A Fix</h2>
              <p>
                We'll arrive at your location, evaluate, and fix the problem to
                get you back on the road in no time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] px-3 mx-auto mb-5">
        <div className="w-full flex flex-col">
          <h1 className="text-5xl font-bold mt-5">What we do:</h1>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <div className="py-3">
              <h2 className="font-bold text-2xl mb-3">Emergency Repair</h2>
              <p>
                Unfortunately, breakdowns do happen and they never seem to
                happen in a convenient location.
              </p>
            </div>
            <div className="py-3">
              <h2 className="font-bold text-2xl mb-3">Regular Maintenance</h2>
              <p>
                Part of owning a motor vehicle is regular maintenance. We can
                make sure your vehicle is regularly maintained.
              </p>
            </div>
            <div className="py-3">
              <h2 className="font-bold text-2xl mb-3">
                Welding &amp; Fabrication
              </h2>
              <p>
                We are also able to provide welding repairs on vehicles and on
                fixtures (handrails, fences, gates, etc) at your site.
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center w-full my-3">
            <Link
              href="/services"
              className="w-[448px] max-w-md md:w-[90%] mx-auto flex flex-row items-center justify-center p-3 rounded-md bg-brand-500 text-black transition ease-in-out motion-reduce:transition-none hover:bg-white hover:text-black font-bold text-center"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
      {/*<div className="w-[90%] mx-auto px-3">
        <h1>Have some more questions?</h1>
        <p></p>

        // section to link to /faq, this is a work in progress.
      </div>*/}
      <Link
        href="tel:+15202367524"
        className="px-3 min-h-[256px] bg-brand-500 text-black transition ease-in-out motion-reduce:transition-none hover:bg-white hover:text-black flex flex-row items-center"
        target={scheduleLink.startsWith("/") ? "_self" : "_blank"}
      >
        <div className="w-[90%] mx-auto flex flex-row items-center text-4xl md:text-5xl">
          <h1 className="mr-[1ch]">
            <span className="font-bold">Need a fix?</span>
            <br className="md:hidden" />
            <span className="hidden md:inline">&nbsp;</span>
            Click to Call
          </h1>
          <BsChevronRight className="font-bold ml-auto" />
        </div>
      </Link>
    </PageLayout>
  );
}
