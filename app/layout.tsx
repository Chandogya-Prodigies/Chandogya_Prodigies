import type { Metadata } from "next";
import ThemeProvider from "@/component/theme-provider";
import "./globals.css";
import Navbar from "@/component/navbar";
import Footer from "@/component/ui/footer";

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
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
