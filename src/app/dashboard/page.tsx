"use client";

import React, { useEffect, useState } from "react";
import Icons from "../components/ui/Icons";
import Card from "../components/ui/Card";
import Panel from "../components/ui/Panel";
import NotificationCard from "../components/ui/NotificationCard";
import ActionCard from "../components/ui/ActionCard";
import { redirect } from "next/navigation";
import HeatCalendar from "../components/ui/HeatCalender";
import moment from "moment";
import { useData, useDataLog } from "../notification/useDataLog";

function Dashboard() {
  const [note, setNote] = useState([]);
  const [action, setAction] = useState([]);
  const [heatData, setHeatData] = useState([]);

  const today = moment().format("YYYY-MM-DD");
  const startDayOfMonth = moment().startOf("month").format("YYYY-MM-DD");

  useEffect(() => {
    useDataLog().then((res) => {
      setNote(res.splice(0, 5));
      setAction(res.splice(0, 5));
    });

    const dateLog: any = {};
    const dateKey = "Due Date";
    useData().then((data: any) => {
      data.records.forEach((r: any) => {
        if (dateLog.hasOwnProperty(r[dateKey])) {
          dateLog[r[dateKey]] += 1;
        } else {
          dateLog[r[dateKey]] = 1;
        }
      });

      const arr: { date: string; count: number }[] = [];
      Object.keys(dateLog).forEach((k) => {
        arr.push({
          date: k,
          count: dateLog[k],
        });
      });

      setHeatData(arr as any);
    });
  }, []);

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
            onViewMore={() => redirect("notification")}
            h={"h-[30vh]"}
          >
            {note.map((d, i) => (
              <NotificationCard data={d} key={i}></NotificationCard>
            ))}
          </Panel>
        </div>
      </div>

      <div className="flex items-stretch gap-4 my-4">
        <div className="w-[60%] flex">
          <Panel
            title={moment().format("MMMM YYYY") + ", Invoices due this month"}
            onViewMore={() =>
              redirect(
                `chart/detail?chart=false&from=${startDayOfMonth}&to=${today}`
              )
            }
            h={"h-[40vh]"}
          >
            <HeatCalendar
              data={heatData}
              onSelect={(d: string[]) =>
                redirect(`chart/detail?chart=false&from=${d[0]}&to=${d[1]}`)
              }
            ></HeatCalendar>

            {/* <Image src={"/heatmap.png"} alt="" width={800} height={400} /> */}
          </Panel>
        </div>
        <div className="w-[40%]">
          <Panel
            title="Action Items"
            onViewMore={() => redirect("action")}
            h={"h-[40vh]"}
          >
            {action.map((d, i) => (
              <ActionCard data={d} key={i}></ActionCard>
            ))}
          </Panel>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
