import { env } from "process";
import React from "react";

function footer() {
  return <footer className="">
    {env.ENTITY_NODE}
  </footer>;
}

export default footer;
