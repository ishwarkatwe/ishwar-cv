import React from "react";
import * as DATA from "./../../upload/data.json";
import BreadCrumb from "@/app/components/ui/BreadCrumb";

interface InvoiceDetailsProps {
  params: { invoiceId: string };
}

async function page({ params }: InvoiceDetailsProps) {
  const { invoiceId } = await params;
  const record: any = DATA.records.find((item) => item.fileRef === invoiceId);
  const keys = Object.keys(DATA.records[0]);
  return (
    <>
      <BreadCrumb page={"Invoice " + invoiceId} />

      <div className="px-4">
        {keys.map((k, i) => (
          <div key={i} className="flex w-[30rem] justify-between gap-4 my-4">
            <div className="capitalize text-sm">{k || ""}</div>
            <div className="capitalize">{(record && record[k]) || ""}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default page;
