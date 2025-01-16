"use client";

import { useAuth } from "@/app/(auth)/AuthContext";
import { fetchWithAuth } from "@/app/components/services/fetchWithAuth";
import React, { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetchWithAuth(
          "https://theaimerapis.vercel.app/user/details"
        );
        if (!userResponse.ok) {
          throw new Error("Failed to fetch user data");
        }
        const userData = await userResponse.json();
        console.log("User data:", userData);

        // Store user information in context
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setUser]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard</h1>
      <p>This is the main page after user login.</p>
      {/* Add more components and content here */}
    </div>
  );
};

export default Dashboard;
