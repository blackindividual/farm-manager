import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    // Add debugging to see what's happening
    console.log('Starting inventory GET request');
    
    const inventoryItems = await db.inventoryItem.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    console.log('Retrieved inventory items:', inventoryItems);
    return NextResponse.json(inventoryItems);
  } catch (error) {
    console.error("[INVENTORY_GET]", error);
    // Return more detailed error information
    return new NextResponse(JSON.stringify({ error: (error as Error).message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const inventoryItem = await db.inventoryItem.create({
      data: body
    });

    return NextResponse.json(inventoryItem);
  } catch (error) {
    console.error("[INVENTORY_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}