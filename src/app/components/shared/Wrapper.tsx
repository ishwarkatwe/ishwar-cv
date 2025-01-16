import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

function Wrapper({ children, className = "", fullWidth = false }: WrapperProps) {
  return (
    <main className={`${fullWidth ? "" : "container"} mx-auto flex-1 p-4 ${className}`}>
      {children}
    </main>
  );
}

export default Wrapper;
