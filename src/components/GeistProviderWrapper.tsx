// src/components/GeistProviderWrapper.tsx
'use client'
import React from 'react';
import { GeistProvider, CssBaseline } from '@geist-ui/react';

export default function GeistProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <GeistProvider>
      <CssBaseline />
      {children}
    </GeistProvider>
  );
}