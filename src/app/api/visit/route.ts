import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to our local counter file
const counterFilePath = path.join(process.cwd(), "visits.json");

export async function GET() {
  try {
    let count = 0;

    // Check if the file exists, if so read the current count
    if (fs.existsSync(counterFilePath)) {
      const data = fs.readFileSync(counterFilePath, "utf8");
      const parsed = JSON.parse(data);
      count = parsed.count || 0;
    }

    // Increment the count (this happens on every refresh)
    count += 1;

    // Save the new count back to the file
    fs.writeFileSync(counterFilePath, JSON.stringify({ count }), "utf8");

    return NextResponse.json({ count });
  } catch (error) {
    console.error("Failed to read/write visit counter:", error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}
