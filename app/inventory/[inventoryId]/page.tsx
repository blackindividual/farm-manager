import { db } from "@/lib/db";
import { InventoryForm } from "../components/inventory-form";
import React from "react";

const InventoryPage = async ({
  params
}: {
  params: { inventoryId: string }
}) => {
  const inventory = await db.inventoryItem.findUnique({
    where: {
      id: params.inventoryId
    }
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <InventoryForm initialData={inventory} />
      </div>
    </div>
  );
};

export default InventoryPage; 