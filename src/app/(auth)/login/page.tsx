"use client";

import DynamicForm from "@/app/components/core/DynamicForm";
import Title from "@/app/components/core/Title";
import React, { useState } from "react";
import formSchema from "./formScheme";
// import { useAuth } from "../AuthContext";
import { useRouter } from "next/navigation";
// import { fetchWithAuth } from "@/app/components/services/fetchWithAuth";

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  // const { setUser } = useAuth();
  const router = useRouter();

  const handleFormSubmit = async (formData: Record<string, any>) => {
    try {
      setError(null);
      const response = await fetch("https://theaimerapis.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response?.status !== 201) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.access_token);

      document.cookie = `accessToken=${data.access_token}; path=/; max-age=${
        7 * 24 * 60 * 60
      }`;

      // Redirect to the dashboard page after successful login
      router.push("/dashboard");
    } catch (error) {
      console.error("Error during login:", error);
      setError("Login failed. Please check your credentials and try again.");
    }
  };

  const handleBack = () => {
    router.push("/");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 flex h-screen w-screen items-center justify-center">
      <div className="w-[50%] mx-auto p-10 bg-white rounded-md">
        <Title className="mb-2">Login</Title>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <DynamicForm
          schema={formSchema}
          onSubmit={handleFormSubmit}
          // onReset={handleFormReset}
          onCustomActions={[
            {
              title: "Back to Home",
              action: handleBack,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Login;
