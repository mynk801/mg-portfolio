import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  try {
    // Increment the 'portfolio_visits' key by 1 in the Redis database
    const count = await kv.incr("portfolio_visits");

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Failed to update visit counter in KV:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
