import React from "react";

export interface NavigationItem {
  nameKey: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface NavigationCategory {
  name: string;
  nameKey: string;
  items: NavigationItem[];
}
