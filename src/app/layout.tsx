import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ishwar Katwe - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="relative min-h-screen bg-background">
            {/* Background Effects */}
            <div className="fixed inset-0 bg-grid-pattern" />
            <div className="fixed inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

            {/* Content */}
            <div className="relative">
              <Navbar />
              <main className="pt-16">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
