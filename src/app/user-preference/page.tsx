import React from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import FormComponent from "./FormComponent";

function Page() {
  return (
    <>
      <BreadCrumb page={"User Preference"} />
      <div className="px-4 py-4">
        <FormComponent></FormComponent>
      </div>
    </>
  );
}

export default Page;
