"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  user: any;
  setUser: (user: any) => void;
  menuToggle: boolean;
  setMenuToggle: (flag: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [menuToggle, setMenuToggle] = useState<boolean>(true);

  return (
    <AuthContext.Provider value={{ user, setUser, menuToggle, setMenuToggle }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
