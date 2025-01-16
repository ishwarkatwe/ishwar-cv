// app/layout.tsx

import { AuthProvider } from "./(auth)/AuthContext";

export const metadata = {
  title: "My Next.js App",
  description: "A Next.js 15 application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
