// src/app/layout.tsx
import React from 'react';
import type { Metadata } from "next";
import GeistProviderWrapper from '@/components/GeistProviderWrapper';
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
        <GeistProviderWrapper>
          {children}
        </GeistProviderWrapper>
      </body>
    </html>
  );
}