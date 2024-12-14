"use client";

import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import ActionCard from "../components/ui/ActionCard";
import { useDataLog } from "../notification/useDataLog";

function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    useDataLog().then((res) => setData(res));
  }, []);

  return (
    <>
      <BreadCrumb page={"Action Items"} />

      <div className="px-4">
        {data.map((d, i) => (
          <ActionCard data={d} key={i}></ActionCard>
        ))}
      </div>
    </>
  );
}

export default page;
