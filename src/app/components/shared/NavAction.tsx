"use client";

import React, { useEffect, useState } from "react";
import Button from "../core/Button";
import { redirect } from "next/navigation";
import { useAuth } from "@/app/(auth)/AuthContext";

function NavAction() {
  const [userInfo, setUserInfo] = useState<{
    email: string;
    username: string;
  } | null>(null);
  const { user } = useAuth();
  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setUserInfo(user);
    }
  }, [user]);

  return (
    <>
      {userInfo?.email ? (
        <Button variant="outline" onClick={() => redirect("/dashboard")}>
          {" "}
          <div className="capitalize">{userInfo?.username}</div>
        </Button>
      ) : (
        <Button onClick={() => redirect("/login")}>Login</Button>
      )}
    </>
  );
}

export default NavAction;
