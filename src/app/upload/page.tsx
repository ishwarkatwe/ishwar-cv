"use client";

import React, { useEffect, useState } from "react";
import * as DATA from "./data.json";
import DataGrid, { COLUMN_TYPE } from "../components/DataGrid/DataGrid";
import Button from "../components/ui/Button";
import BreadCrumb from "../components/ui/BreadCrumb";
import DropDown from "../components/ui/DropDown";

function Upload() {
  const [upload, setUpload] = useState(false);
  const [bulkSelected, setBulkSelected] = useState(false);
  const [selectedRecords, setSelectedRecords] = useState<Array<Object>>([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(DATA.records);

  useEffect(() => {
    if (upload) {
      const filted = data.filter((r) => r.status === "Pending Approval");
      setData(filted);
    }
  }, [upload]);

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
          <span className="bg-green-400 text-white px-2 py-1 rounded-md text-xs w-[80px] inline-block text-center">
            Approved
          </span>
        ) : row["status"] === "Rejected" ? (
          <span className="bg-red-500 text-white px-2 py-1 rounded-md text-xs w-[80px] inline-block text-center">
            Rejected
          </span>
        ) : (
          <span className="bg-blue-400 text-white px-2 py-1 rounded-md text-xs w-[80px] inline-block text-center">
            Pending
          </span>
        );
      },
    },
    { label: "Actioned By", key: "actionedBy" },
    { label: "Actioned Date", key: "actionedDate", type: COLUMN_TYPE.DATE },
  ];

  function onSelect(row: any) {
    setSelectedRecords([...selectedRecords, row]);
    let output = parseFloat(row.amount.replace(/,/g, ""));
    const sum = total + (output || 0);
    setTotal(sum);
    setBulkSelected(true);
  }

  return (
    <>
      <BreadCrumb page={"Upload Payments"} />

      <div className="px-4 mb-2 pb-0 flex w-full">
        <div className="flex border border-gray-300 rounded-xl p-2 items-center">
          <input className="my-2" type="file" />
          <Button theme="primary" onClick={() => setUpload(true)}>
            Upload
          </Button>
        </div>

        {bulkSelected && (
          <div className="flex justify-between w-full flex-2 rounded-lg px-4 ml-2 items-center bg-blue-50 border border-blue-100">
            <p>
              <b className="mr-2">{selectedRecords.length} Records Selected</b>
              ,Total amount of
              <b className="ml-2">${total}</b>
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
        )}
      </div>

      <DataGrid
        checkbox={true}
        onBulkSelected={(row: any) => onSelect(row)}
        data={data}
        columns={columns}
        sortBy="fileRef"
      />
    </>
  );
}

export default Upload;
