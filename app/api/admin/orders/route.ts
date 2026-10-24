import { NextResponse } from "next/server";
import { requireRole } from "@/lib/auth";
import { readDb } from "@/lib/db";

export async function GET() {
  const auth = await requireRole(["admin"]);
  if ("unauthorized" in auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if ("forbidden" in auth) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const db = readDb();
  return NextResponse.json(db.orders);
}
