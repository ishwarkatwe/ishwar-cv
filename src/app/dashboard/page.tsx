"use client";

import React from "react";
import Icons from "../components/ui/Icons";
import Card from "../components/ui/Card";
import Panel from "../components/ui/Panel";
import NotificationCard from "../components/ui/NotificationCard";
import ActionCard from "../components/ui/ActionCard";
import Image from "next/image";

function Dashboard() {
  const cards = [
    {
      label: "Total Invoices Uploaded till date",
      count: "13,212",
      stats: "-12%",
      icon: "bills",
      theme: "bg-primary-800",
    },
    {
      label: "Total Invoice Value",
      count: "$10,112",
      stats: "+3%",
      icon: "price",
      theme: "bg-orange-400",
    },
    {
      label: "Total Invoices Discounted",
      count: "911",
      stats: "+6%",
      icon: "check",
      theme: "bg-green-400",
    },
    {
      label: "Value of Total Invoices Discounted",
      count: "$8,911",
      stats: "-1%",
      icon: "total",
      theme: "bg-yellow-400",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-stretch gap-2">
        <div className="w-[60%] gap-2 flex flex-wrap self-center">
          {cards.map((c) => (
            <div className="lg:w-[49%] md:w-[100%]" key={c.label}>
              <Card
                title={c.label}
                count={c.count}
                stats={c.stats}
                theme={c.theme}
              >
                <Icons type={c.icon} size={5} />
              </Card>
            </div>
          ))}
        </div>
        <div className="w-[40%]">
          <Panel
            title="Notification"
            onViewMore={() => console.log()}
            h={"h-[30vh]"}
          >
            {[
              {
                title: "FastDelivery Co",
                desc: "Accepted for Dynamic Discounting",
                date: "12-12-2014 14:23",
                invoiceId: "#INV1232",
                price: "$23,232",
                status: "approve",
              },
              {
                title: "TechWave Inc",
                desc: "Accepted for Dynamic Discounting",
                date: "09-12-2014 11:10",
                invoiceId: "#INV1222",
                price: "$4,332",
                status: "approve",
              },
              {
                title: "HomeBasics",
                desc: "Rejected for Dynamic Discounting",
                date: "22-12-2014 01:11",
                invoiceId: "#INV1132",
                price: "$13,111",
                status: "reject",
              },
            ].map((d, i) => (
              <NotificationCard data={d} key={i}></NotificationCard>
            ))}
          </Panel>
        </div>
      </div>

      <div className="flex items-stretch gap-4 my-4">
        <div className="w-[60%] flex">
          <Panel
            title="Dec 2024, Invoices due this month"
            onViewMore={() => console.log()}
            h={"h-[40vh]"}
          >
            {/* <HeatMap></HeatMap> */}
            <Image src={"/heatmap.png"} alt="" width={800} height={400} />
          </Panel>
        </div>
        <div className="w-[40%]">
          <Panel
            title="Action Items"
            onViewMore={() => console.log()}
            h={"h-[40vh]"}
          >
            {[
              {
                title: "FashionPoint",
                desc: "Accepted for Dynamic Discounting",
                date: "12-12-2014 14:23",
                invoiceId: "#INV1232",
                price: "$23,232",
                status: "approve",
              },
              {
                title: "FastFix Supplies",
                desc: "Accepted for Dynamic Discounting",
                date: "09-12-2014 11:10",
                invoiceId: "#INV1222",
                price: "$4,332",
                status: "approve",
              },
              {
                title: "MegaFoods",
                desc: "Rejected for Dynamic Discounting",
                date: "22-12-2014 01:11",
                invoiceId: "#INV1132",
                price: "$13,111",
                status: "reject",
              },
            ].map((d, i) => (
              <ActionCard data={d} key={i}></ActionCard>
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
