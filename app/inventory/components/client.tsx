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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching from:', '/api/inventory');
        const response = await fetch('/api/inventory');
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Received data:', data);
        setData(data);
      } catch (error) {
        console.error('Detailed fetch error:', error);
        setError('Failed to load inventory data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

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