"use client";



import React, { useState } from "react";

import { Edit, MoreHorizontal, Trash } from "lucide-react";

import { useRouter } from "next/navigation";

import { 

  DropdownMenu, 

  DropdownMenuContent, 

  DropdownMenuItem, 

  DropdownMenuLabel, 

  DropdownMenuTrigger

} from "@/app/components/ui/dropdown-menu";

import { Button } from "@/app/components/ui/button";

import { AlertModal } from "@/app/components/modals/alert-modal";

import { InventoryColumn } from "./columns";

import { cn } from "@/lib/utils";

import { Form } from "@/app/components/ui/form";

import { Input } from "@/app/components/ui/input";



interface CellActionProps {

  data: InventoryColumn;

}



export const CellAction: React.FC<CellActionProps> = ({ data }) => {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);



  const onDelete = async () => {

    try {

      setLoading(true);

      const response = await fetch(`/api/inventory/${data.id}`, {

        method: "DELETE",

      });

      

      if (!response.ok) {

        throw new Error('Failed to delete item');

      }

      

      router.refresh();

    } catch (error) {

      console.error('Error deleting item:', error);

      // Consider adding a toast notification here

    } finally {

      setLoading(false);

      setOpen(false);

    }

  };



  return (

    <>

      <AlertModal

        isOpen={open}

        onClose={() => setOpen(false)}

        onConfirm={onDelete}

        loading={loading}

      />

      <DropdownMenu>

        <DropdownMenuTrigger asChild>

          <Button variant="ghost" className="h-8 w-8 p-0">

            <span className="sr-only">Open menu</span>

            <MoreHorizontal className="h-4 w-4" />

          </Button>

        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">

          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem onClick={() => router.push(`/inventory/${data.id}`)}>

            <Edit className="mr-2 h-4 w-4" />

            Edit

          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => setOpen(true)}>

            <Trash className="mr-2 h-4 w-4" />

            Delete

          </DropdownMenuItem>

        </DropdownMenuContent>

      </DropdownMenu>

    </>

  );

};


