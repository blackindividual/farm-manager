import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function DELETE(
  req: Request,
  { params }: { params: { inventoryId: string } }
) {
  try {
    const inventoryItem = await db.inventoryItem.delete({
      where: {
        id: params.inventoryId
      }
    });

    return NextResponse.json(inventoryItem);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { inventoryId: string } }
) {
  try {
    const body = await req.json();
    
    const inventoryItem = await db.inventoryItem.update({
      where: {
        id: params.inventoryId
      },
      data: {
        ...body
      }
    });

    return NextResponse.json(inventoryItem);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
} 