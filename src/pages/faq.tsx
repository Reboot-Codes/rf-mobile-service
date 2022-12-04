import Link from "next/link";
import React from "react";
import PageLayout from "../components/layout/Page";

const faqs: {
  title: string;
  response: string;
}[] = [
  {
    title: "Do you offer a warranty?",
    response:
      "Yes! We offer a 6 month warranty on parts we supplied and labor from the date of the repair.",
  },
  {
    title: "Do you do jump starts?",
    response: "For sure, just call us over!*",
  },
  {
    title: "How will I be charged?",
    response:
      "We quote our repairs based on the industry book labor rate. Diagnostic charges are separate from the actual repair charge.*",
  },
  {
    title: "What forms of payment do you accept?",
    response:
      "We accept most major credit/debit cards, contactless, and U.S. currency.",
  },
  {
    title: "Can you tow my vehicle?",
    response:
      "Unfortunately we do not have the means to provide towing services at this time. However, our ability to bring the shop to you minimizes the need for at tow, but if the circumstances require to have the vehicle relocated we can arrange a tow for you or you are welcome to make the arrangements yourself.",
  },
  {
    title: "Can I pay in installments?",
    response:
      "While we always suggest paying in full, paying with installments is available through Afterpay.****",
  },
  {
    title: "Where are your services available?",
    response:
      "We typically service the Tucson, AZ area, but we are familiar with all of Southern Arizona.**",
  },
  {
    title: "Can I bring my own parts?",
    response:
      "We allow our customers to furnish their own parts, but we cannot warranty any parts provided by our customers.***",
  },
  {
    title: "Can I schedule an appointment?",
    response:
      "Scheduling a repair is subject to our workload and availability. We suggest that you contact us for confirmation on that specific time & date.",
  },
];

const asterisks: {
  label: string;
  response: string | JSX.Element | JSX.Element[];
}[] = [
  {
    label: "*",
    response: "A minimum 1 hour charge applies to labor.",
  },
  {
    label: "**",
    response: "Travel charges apply to repairs outside of Tucson, AZ.",
  },
  {
    label: "***",
    response: "Additional rules apply.",
  },
  {
    label: "****",
    response: (
      <>
        Subject to credit approval by Afterpay.{" "}
        <Link
          href="https://www.afterpay.com/terms-of-service"
          target="_blank"
          className="underline"
        >
          Additional terms apply.
        </Link>
      </>
    ),
  },
];

export default function Page() {
  return (
    <PageLayout name="FAQ">
      <div className="w-[90%] mx-auto px-3 grid gap-3 md:grid-cols-2 mt-5 mb-10">
        {faqs.map((faq, id) => (
          <div key={id} className="max-w-md">
            <h2 className="text-2xl font-bold">{faq.title}</h2>
            <p className="md:text-lg">{faq.response}</p>
          </div>
        ))}
      </div>
      <div className="w-[90%] mx-auto text-sm">
        {asterisks.map((asterisk, id) => (
          <div key={id} className="mb-2 flex flex-row space-x-1 mx-3">
            <p>{asterisk.label}</p>
            <p>{asterisk.response}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
