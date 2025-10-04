"use client";
import { useCallback } from "react";

export function useGA() {
  const track = useCallback((event: string, params: Record<string, any> = {}) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, params);
    }
  }, []);
  
  return { track };
}