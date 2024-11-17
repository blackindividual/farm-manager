import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { inventoryId: string } }
) {
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
) {
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