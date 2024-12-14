// app/components/layout/Layout.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "./Header"; // Your Header component
import Footer from "./Footer";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Define the paths that shouldn't show the header
  const hideHeaderPaths = ["/login", "/signup"];

  const showHeader = !hideHeaderPaths.includes(pathname);

  return (
    <div>
      {showHeader && <Header />}
      <main className={showHeader ? "container mx-auto flex-auto min-h-[70vh]" : ""}>
        {children}
      </main>
      {showHeader && <Footer />}
    </div>
  );
}
