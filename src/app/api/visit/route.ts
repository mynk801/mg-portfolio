import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Upstash Redis client
// It automatically picks up UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
const redis = Redis.fromEnv();

export async function GET() {
  try {
    // Increment the 'portfolio_visits' key by 1 in the Redis database
    const count = await redis.incr("portfolio_visits");

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Failed to update visit counter in Upstash:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
