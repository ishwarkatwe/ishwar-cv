"use client";

import React from "react";
import Image from "next/image";
import * as DATA from "./data.json";
import DataGrid, { COLUMN_TYPE } from "../components/DataGrid/DataGrid";
import Button from "../components/ui/Button";
import BreadCrumb from "../components/ui/BreadCrumb";
import DropDown from "../components/ui/DropDown";

function Upload() {
  const data = DATA.records;
  const columns = [
    { label: "File Ref", key: "fileRef", type: COLUMN_TYPE.LINK },
    { label: "File Name", key: "fileName" },
    { label: "Amount", key: "amount", type: COLUMN_TYPE.CURRENCY },
    { label: "Upload Date", key: "uploadDate", type: COLUMN_TYPE.DATE },
    { label: "Upload By", key: "uploadBy" },
    {
      label: "Status",
      key: "status",
      type: COLUMN_TYPE.BADGE,
      formatter: (row: any) => {
        return row["status"] === "Approved" ? (
          <span className="bg-green-700 text-white px-2 py-1 rounded-md text-xs">
            Approved
          </span>
        ) : row["status"] === "Rejected" ? (
          <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs">
            Rejected
          </span>
        ) : (
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs">
            Pending
          </span>
        );
      },
    },
    { label: "Actioned By", key: "actionedBy" },
    { label: "Actioned Date", key: "actionedDate", type: COLUMN_TYPE.DATE },
  ];

  return (
    <>
      <BreadCrumb page={"Upload Payments"} />

      <div className="p-4 pb-0 flex w-full">
        <div className="flex border border-gray-300 rounded-xl p-2 items-center">
          <input className="my-2" type="file" />
          <Button theme="primary">Upload</Button>
        </div>
        <div className="flex justify-between w-full flex-2 rounded-lg px-4 ml-2 items-center bg-blue-50 border border-blue-100">
          <p>
            <b className="mr-2">2 Records Selected</b>,Total amount of
            <b className="ml-2">$23,2222</b>
          </p>
          <div className="flex justify-between">
            <Button className="mx-1" theme="primary">
              Approve
            </Button>
            <Button className="mx-1 mr-2">Reject</Button>
            <DropDown
              icon={"dots"}
              options={[
                {
                  label: "Export Excel",
                  value: "excel",
                  actionType: "button",
                },
                {
                  label: "Export CSV",
                  value: "csv",
                  actionType: "button",
                },
              ]}
              onSelect={(e: any) => console.log(e)}
            >
              <></>
            </DropDown>
          </div>
        </div>
      </div>
      <DataGrid checkbox={true} data={data} columns={columns} />
    </>
  );
}

export default Upload;
