"use client";

import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import NotificationCard from "../components/ui/NotificationCard";
import { useDataLog } from "./useDataLog";

function page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    useDataLog().then((res) => setData(res));
  }, []);

  return (
    <>
      <BreadCrumb page={"Notifications"} />

      <div className="px-4">
        {data.map((d, i) => (
          <NotificationCard data={d} key={i}></NotificationCard>
        ))}
      </div>

      {/* <div className="m-4 text-center">
        <h1>No notifications found</h1>
      </div> */}
    </>
  );
}

export default page;
