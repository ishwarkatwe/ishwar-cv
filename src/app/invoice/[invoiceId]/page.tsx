import React from "react";
import * as DATA from "./../../upload/data.json";
import * as DATA2 from "./../../payment-settlements/data.json";
import BreadCrumb from "@/app/components/ui/BreadCrumb";
import Button from "@/app/components/ui/Button";

interface InvoiceDetailsProps {
  params: { invoiceId: string };
}

async function page({ params }: any) {
  const { invoiceId } = await params;

  if (invoiceId.indexOf("INV") !== -1) {
  }
  const record: any =
    invoiceId.indexOf("INV") === -1
      ? DATA.records.find((item) => item.fileRef === invoiceId)
      : DATA2.records.find((item) => item["Invoice Number"] === invoiceId);

  console.log(record);

  const keys =
    invoiceId.indexOf("INV") === -1
      ? Object.keys(DATA.records[0])
      : Object.keys(DATA2.records[0]);
  return (
    <>
      <BreadCrumb page={"Invoice " + invoiceId} />

      <div className="px-4 flex flex-col md:items-center divide-y divide-slate-200">
        {keys.map((k, i) => (
          <div
            key={i}
            className="flex md:w-[50rem] justify-between gap-4 py-4"
          >
            <div className="capitalize text-sm">{k || ""}</div>
            <div className="capitalize">
              {(record && record[k]) || "- - - -"}
            </div>
          </div>
        ))}
      </div>

      {record.status === "Pending Approval" && (
        <div className="p-4 my-2 space-x-2 text-center">
          <Button theme={"primary"}>Approve</Button>
          <Button>Reject</Button>
        </div>
      )}
    </>
  );
}

export default page;
