"use client";

import React from "react";
import Icons from "../components/ui/Icons";
import Card from "../components/ui/Card";
import Panel from "../components/ui/Panel";
import NotificationCard from "../components/ui/NotificationCard";
import ActionCard from "../components/ui/ActionCard";
import HeatMap from "../components/ui/HeadMap";

function Dashboard() {
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

  const xCategories = [
    "01-Dec",
    "02-Dec",
    "03-Dec",
    "04-Dec",
    "05-Dec",
    "06-Dec",
    "07-Dec",
  ]; // Example due dates
  const yCategories = ["Week 1", "Week 2", "Week 3", "Week 4"]; // Weeks of the month

  const data = [
    [0, 0, 5], // (X: 01-Dec, Y: Week 1, Value: 5 invoices)
    [1, 0, 10],
    [2, 1, 8],
    [3, 1, 15],
    [4, 2, 12],
    [5, 3, 20],
    [6, 3, 25],
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
                <Icons type={c.icon} />
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
            <HeatMap></HeatMap>
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
