import { NextResponse } from "next/server";
import { readDb, writeDb } from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  if (password.length < 6) {
    return NextResponse.json(
      { error: "Password must be at least 6 characters" },
      { status: 400 }
    );
  }

  const db = readDb();

  // Check if user already exists
  if (db.users.find((u: any) => u.email === email)) {
    return NextResponse.json(
      { error: "User already exists with this email" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: `user-${Date.now()}`,
    email,
    name: name || email.split("@")[0],
    password: hashedPassword,
    role: "customer",
  };

  db.users.push(newUser);
  writeDb(db);

  return NextResponse.json(
    {
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        role: newUser.role,
      },
      message: "Account created successfully",
    },
    { status: 201 }
  );
}
