import React from "react";
import PageLayout from "../components/layout/Page";

const faqs: {
  title: string;
  response: string;
}[] = [
  {
    title: "Do you offer a warranty?",
    response:
      "Yes! We warranty all repairs for 6 months starting at the date of the invoice covering parts and labor.",
  },
  {
    title: "Do you do jump starts?",
    response: "For sure, just call us over!",
  },
  {
    title: "How will I be charged?",
    response: "You'll be billed per booked hour with a minimum of 1 hour.",
  },
  {
    title: "Do you take card?",
    response: "Yes! We take contactless, card, and cash through Square POS.",
  },
  {
    title: "Can you tow my vehicle?",
    response: "Unfortunately, at this time, we can not tow vehicles.",
  },
  {
    title: "Can I pay in installments?",
    response:
      "While we always suggest paying in full, paying with installments is available through Afterpay.",
  },
  {
    title: "Where are your services available?",
    response:
      "We service Tucson, AZ and surrounding areas (e.g. Marana, Oro Valley, Catalina Foothills, Vail, Sahuarita)",
  },
  {
    title: "Can I bring my own parts?",
    response:
      "Unfortunately we cannot use owner provided parts to perform a repair. We want to own the quality of our work and make sure that the correct parts were ordered for a repair.",
  },
  {
    title: "Can I reschedule an appointment?",
    response: "We understand that schedules change, ",
  },
];

export default function Page() {
  return (
    <PageLayout name="FAQ">
      <div className="w-[90%] mx-auto px-3 grid gap-3 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {faqs.map((faq, id) => (
          <div key={id} className="max-w-md">
            <h2 className="text-2xl font-bold">{faq.title}</h2>
            <p className="md:text-lg">{faq.response}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
