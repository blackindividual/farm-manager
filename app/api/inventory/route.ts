import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const inventoryItem = await db.inventoryItem.create({
      data: {
        ...body
      }
    });

    return NextResponse.json(inventoryItem);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET() {
  try {
    const inventoryItems = await db.inventoryItem.findMany();
    return NextResponse.json(inventoryItems);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
} 