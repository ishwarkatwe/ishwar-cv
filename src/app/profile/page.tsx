"use client";

import React, { useState } from "react";
import BreadCrumb from "../components/ui/BreadCrumb";
import Panel from "../components/ui/Panel";
import Button from "../components/ui/Button";

function Page() {
  const [profile, setProfile] = useState([
    {
      label: "Name",
      key: "Name",
      defaultValue: "Name",
      type: "text",
    },
    {
      label: "Email address",
      key: "email",
      defaultValue: "stev@gmail.com",
      type: "text",
    },
    {
      label: "Contact Number",
      key: "contact",
      defaultValue: "+91 96344*****",
      type: "text",
    },
  ]);


  const [password, setPassword] = useState([
    {
      label: "New password",
      key: "password",
      defaultValue: "******",
      type: "password",
    },
    {
      label: "Confirm new password",
      key: "cpassword",
      defaultValue: "******",
      type: "password",
    }
  ]);

  return (
    <>
      <BreadCrumb page={"Profile"} />

      <div className="px-4 md:w-[50rem] mx-auto">
        <Panel title="User Information" h={"h-[100%]"}>
          <div className="flex flex-col">
            <div>
              {profile.map((field) => (
                <div
                  className="flex py-2 justify-between items-center"
                  key={field.key}
                >
                  <div>{field.label}</div>
                  <div className="w-[60%]">
                    <input
                      className="w-full p-2 border rounded h-[2.5rem]"
                      type={field.type}
                      defaultValue={field.defaultValue}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end my-4">
              <Button theme={'primary'}>Update</Button>
            </div>
          </div>
        </Panel>
      </div>
      <div className="px-4 md:w-[50rem] my-4 mx-auto">
        <Panel title="Update Password" h={"h-[100%]"}>
          <div className="flex flex-col">
            <div>
              {password.map((field) => (
                <div
                  className="flex py-2 justify-between items-center"
                  key={field.key}
                >
                  <div>{field.label}</div>
                  <div className="w-[60%]">
                    <input
                      className="w-full p-2 border rounded h-[2.5rem]"
                      type={field.type}
                      defaultValue={field.defaultValue}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end my-4">
              <Button theme={'primary'}>Update Password</Button>
            </div>
          </div>
        </Panel>
      </div>
    </>
  );
}

export default Page;
