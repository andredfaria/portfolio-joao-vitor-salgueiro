// /app/api/images/route.ts

import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const imagesDir = path.join(process.cwd(), "public/images");

  try {
    const files = fs.readdirSync(imagesDir);
    const imagePaths = files.map((file) => `/images/${file}`);
    return NextResponse.json(imagePaths);
  } catch (error) {
    console.error("Error reading images directory:", error);
    return NextResponse.error();
  }
}
