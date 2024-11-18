import { PrismaClient } from '@prisma/client';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import { db } from '../../../../lib/db';

export type InventoryItem = {
  id: string;
  name: string;
  type: string;
  quantity: number;
  unit: string;
  cost: number | null;
  notes: string | null;
};

export async function PATCH(
  req: Request,
  { params }: { params: { inventoryId: string } }
): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { name, type, quantity, unit, cost, notes } = body;

    const updatedInventory = await db.inventoryItem.update({
      where: {
        id: params.inventoryId
      },
      data: {
        name,
        type,
        quantity: parseFloat(quantity),
        unit,
        cost: cost ? parseFloat(cost) : null,
        notes
      }
    });

    return NextResponse.json(updatedInventory);
  } catch (error) {
    console.log('[INVENTORY_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { inventoryId: string } }
): Promise<NextResponse> {
  try {
    const deletedInventory = await db.inventoryItem.delete({
      where: {
        id: params.inventoryId
      }
    });

    return NextResponse.json(deletedInventory);
  } catch (error) {
    console.log('[INVENTORY_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 