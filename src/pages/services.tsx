import React from "react";
import PageLayout from "../components/layout/Page";

export default function Page() {
  return (
    <PageLayout name="Services">
      <h2 className="w-[90%] mx-auto my-3 text-2xl font-bold">
        We provide a maintenance and repair on:
      </h2>
      <div className="w-[90%] mx-auto grid md:grid-cols-2 px-3">
        <div>
          <p>Cooling System</p>
          <p>Drivetrain</p>
          <p>Suspension System</p>
          <p>Brake System</p>
          <p>Fuel System</p>
          <p>Electrical System</p>
        </div>
        <div>
          <p>Emissions / Engine Performance</p>
          <p>Engine &amp; Transmission R/R</p>
          <p>Engine No Start</p>
          <p>Heavy Equipment Repair &amp; Maintenance</p>
          <p></p>
        </div>
      </div>
    </PageLayout>
  );
}
