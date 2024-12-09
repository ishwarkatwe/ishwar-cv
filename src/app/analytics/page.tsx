"use client";

import React from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import Card from "../components/ui/Card";
import Icons from "../components/ui/Icons";
import Panel from "../components/ui/Panel";
import Image from "next/image";

function Page() {
  const cards = [
    {
      label: "Invoice",
      count: "13,212",
      stats: "-12%",
      icon: "bills",
      theme: "bg-primary-800",
    },
    {
      label: "Amount",
      count: "$10,112",
      stats: "+3%",
      icon: "price",
      theme: "bg-orange-400",
    },
    {
      label: "Approve",
      count: "222",
      stats: "+6%",
      icon: "check",
      theme: "bg-green-400",
    },
    {
      label: "Reject",
      count: "12",
      stats: "-1%",
      icon: "x-mark",
      theme: "bg-red-400",
    },
  ];
  return (
    <>
      <BreadCrumb page={"Analytics"} />

      <div className="px-4">
        <div className="flex gap-4 items-center justify-center">
          {cards.map((c) => (
            <div className="lg:w-[24%]" key={c.label}>
              <Card
                title={c.label}
                count={c.count}
                stats={c.stats}
                theme={c.theme}
              >
                <Icons type={c.icon} />
              </Card>
            </div>
          ))}
        </div>

        <div className="flex py-4 gap-4">
          <div className="flex-auto">
            <Panel
              title="Dec 2024, Invoices due this month"
              onViewMore={() => console.log()}
              h={"h-[40vh]"}
            >
              <></>
            </Panel>
          </div>
          <div className="flex-1">
            <Panel
              title="Dec 2024, Invoices due this month"
              onViewMore={() => console.log()}
              h={"h-[40vh]"}
            >
              <></>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
