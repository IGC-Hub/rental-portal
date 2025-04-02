import type { Metadata } from "next";
import { GeistProvider, CssBaseline } from '@geist-ui/core';
import "./globals.css";

export const metadata: Metadata = {
  title: "Rental Portal",
  description: "Find your perfect rental property",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GeistProvider>
          <CssBaseline />
          {children}
        </GeistProvider>
      </body>
    </html>
  );
}