import React from "react";
import * as DATA from "./../../upload/data.json";
import * as DATA2 from "./../../payment-settlements/data.json";
import BreadCrumb from "@/app/components/ui/BreadCrumb";

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

      <div className="px-4 flex flex-col items-center">
        {keys.map((k, i) => (
          <div
            key={i}
            className="flex w-[50rem] justify-between gap-4 py-4 border-b"
          >
            <div className="capitalize text-sm">{k || ""}</div>
            <div className="capitalize">
              {(record && record[k]) || "- - - -"}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default page;
