"use client";

import React, { useState } from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import FormComponent from "./FormComponent";
import Button from "../components/ui/Button";
import Panel from "../components/ui/Panel";

function Page() {
  const [settings, setSettings] = useState([
    {
      label: "Company Name",
      key: "company",
      defaultValue: "PioneerEnterprises",
      type: "select",
      options: [
        {
          label: "Pioneer Enterprises",
          value: "PioneerEnterprises",
        },
        {
          label: "QuickSupply",
          value: "QuickSupply",
        },
        {
          label: "ClearSolutions",
          value: "ClearSolutions",
        },
      ],
    },
    {
      label: "Amount Format",
      key: "format",
      defaultValue: "USD",
      type: "select",
      options: [
        {
          label: "AED",
          value: "AED",
        },
        {
          label: "EUR",
          value: "EUR",
        },
        {
          label: "INR",
          value: "INR",
        },
        {
          label: "USD",
          value: "USD",
        },
      ],
    },
    {
      label: "Date Format",
      key: "dateFormat",
      defaultValue: "YYYY-MM-DD",
      type: "select",
      options: [
        {
          label: "YYYY-MM-DD",
          value: "YYYY-MM-DD",
        },
        {
          label: "YYYY-DD-MM",
          value: "YYYY-DD-MM",
        },
        {
          label: "DD-MM-YYYY",
          value: "DD-MM-YYYY",
        },
      ],
    },
    {
      label: "Screen Timeout",
      key: "timeout",
      defaultValue: "15",
      type: "select",
      options: [
        {
          label: "15 Mins",
          value: "15",
        },
        {
          label: "30 Mins",
          value: "30",
        },
        {
          label: "1 Hr",
          value: "1",
        },
        {
          label: "3 Hr",
          value: "3",
        },
      ],
    },
    {
      label: "Dashboard Widget",
      key: "widget",
      defaultValue: ["1", "2", "3", "4"],
      type: "checkbox",
      options: [
        { label: "Total Invoices Uploaded till date", value: "1" },
        { label: "Total Invoice Value", value: "2" },
        { label: "Total Invoices Discounted", value: "3" },
        { label: "Value of Total Invoices Discounted", value: "4" },
        { label: "Invoice Pending for Discounting", value: "5" },
        { label: "Value of Invoices Pending for Discounting", value: "6" },
        { label: "Total Invoices Paid on Due Date", value: "7" },
        { label: "Value of Total Invoies Paid on Due Date", value: "8" },
        { label: "Total Profit Made Till Date", value: "9" },
      ],
    },
  ]);
  return (
    <>
      <BreadCrumb page={"User Preference"} />

      {/* <div className="px-4 flex flex-col items-center">
        <FormComponent></FormComponent>

     
      </div> */}
      <div className="px-4 md:w-[50rem] mx-auto">
        <Panel title="User Preference" h={"h-[100%]"}>
          <div className="flex flex-col">
            <div>
              {settings.map((field) => (
                <div
                  className="flex py-2 justify-between items-center"
                  key={field.key}
                >
                  <div>{field.label}</div>
                  <div className="w-[60%]">
                    {field.type === "text" && (
                      <input
                        className="w-full p-2 border rounded h-[2.5rem]"
                        type={field.type}
                        defaultValue={field.defaultValue}
                      />
                    )}

                    {field.type === "select" && (
                      <select
                        className="w-full p-2 border rounded h-[2.5rem]"
                        defaultValue={field.defaultValue}
                      >
                        <option>--Choose--</option>
                        {field.options.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {field.type === "checkbox" && (
                      <div className="w-full py-2 divide-y">
                        {field.options.map((item, i) => (
                          <div key={i} className="flex gap-2 py-2">
                            <input
                              type="checkbox"
                              defaultChecked={field.defaultValue.includes(
                                item.value
                              )}
                            />
                            <p className="text-sm">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end my-4">
              <Button theme={"primary"}>Save</Button>
            </div>
          </div>
        </Panel>
      </div>
    </>
  );
}

export default Page;
