import { NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";
import { requireRole } from "@/lib/auth";

export async function GET() {
  const db = readDb();
  return NextResponse.json(db.products);
}

export async function POST(req: Request) {
  const auth = await requireRole(["admin"]);
  if ("unauthorized" in auth) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  if ("forbidden" in auth) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const { name, price, category, status, image, rating = 0, reviews = 0 } = body;

  if (!name || !price || !category) {
    return NextResponse.json(
      { error: "Missing required fields: name, price, category" },
      { status: 400 }
    );
  }

  // Server-side price validation: price must be a positive number
  const parsedPrice = Number(price);
  if (!Number.isFinite(parsedPrice) || parsedPrice <= 0) {
    return NextResponse.json({ error: "Price must be a positive number" }, { status: 400 });
  }

  const db = readDb();
  const newProduct = {
    id: `${category}-${Date.now()}`,
    name,
    price: parsedPrice,
    category,
    status: status || "in-stock",
    image: image || "",
    rating: Number(rating) || 0,
    reviews: Number(reviews) || 0,
  };

  db.products.push(newProduct);
  writeDb(db);

  return NextResponse.json(newProduct, { status: 201 });
}
