import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { name, type, quantity, unit, cost, notes } = body;

    const inventoryItem = await db.inventoryItem.create({
      data: {
        name,
        type,
        quantity: parseFloat(quantity),
        unit,
        cost: cost ? parseFloat(cost) : null,
        notes,
      },
    });

    return NextResponse.json(inventoryItem);
  } catch (error) {
    console.log("[INVENTORY_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function GET(): Promise<NextResponse> {
  try {
    const inventoryItems = await db.inventoryItem.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(inventoryItems);
  } catch (error) {
    console.log("[INVENTORY_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
} 