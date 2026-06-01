import type { Metadata } from "next";
import ThemeProvider from "@/component/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chandogya Prodigies",
  description: "Gurukul-based skill development platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
