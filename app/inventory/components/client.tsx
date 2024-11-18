"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/heading";
import { InventoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { useState, useEffect } from "react";
import React from "react";

export const InventoryClient = () => {
  const router = useRouter();
  const [data, setData] = useState<InventoryColumn[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/inventory');
        const inventoryData = await response.json();
        setData(inventoryData);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Inventory (${data.length})`}
          description="Manage your farm inventory"
        />
        <Button onClick={() => router.push(`/inventory/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <div className="mt-8">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <DataTable columns={columns} data={data} searchKey="name" />
        )}
      </div>
    </>
  );
};