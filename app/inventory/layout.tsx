import React from "react";

export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-full">
      {children}
    </div>
  );
} 