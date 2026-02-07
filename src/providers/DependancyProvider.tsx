'use client';

import React, { useEffect } from 'react';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { initEmailJS } from '@/lib/emailjs';
import { TooltipProvider } from '@/components/ui/tooltip';

export default function DependancyProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <>
      <Sonner />
      <TooltipProvider>
       {children}
      </TooltipProvider>
    </>
  );
}
