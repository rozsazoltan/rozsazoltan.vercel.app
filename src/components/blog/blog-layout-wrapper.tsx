"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { VersionPickerProps } from "@/components/version-picker";

interface BlogLayoutWrapperProps {
  versionPickerProps?: VersionPickerProps;
}

// Global state management for version picker props
let globalVersionPickerProps: VersionPickerProps | undefined = undefined;
let currentPath: string | null = null;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach(listener => listener());
}

export function BlogLayoutWrapper({ versionPickerProps }: BlogLayoutWrapperProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Update global state with current page's props
    globalVersionPickerProps = versionPickerProps;
    currentPath = pathname;
    notifyListeners();
    
    // Cleanup is handled by the useVersionPicker hook based on pathname changes
  }, [versionPickerProps, pathname]);

  return null;
}

export function useVersionPicker() {
  const pathname = usePathname();
  const [props, setProps] = useState<VersionPickerProps | undefined>(() => {
    // Initialize with current global state only if we're on the same path
    return currentPath === pathname ? globalVersionPickerProps : undefined;
  });
  
  useEffect(() => {
    // Check if we're still on a blog page
    const isBlogPage = pathname.startsWith('/blog/') && pathname !== '/blog';
    
    if (!isBlogPage) {
      // Clear props when not on a blog post page
      setProps(undefined);
      return;
    }
    
    // Update props when they change
    const listener = () => {
      // Only update if we're on the same path as the BlogLayoutWrapper
      if (currentPath === pathname) {
        setProps(globalVersionPickerProps);
      } else {
        setProps(undefined);
      }
    };
    
    // Set initial value
    listener();
    
    // Subscribe to changes
    listeners.add(listener);
    
    return () => {
      listeners.delete(listener);
    };
  }, [pathname]);
  
  return props;
}
