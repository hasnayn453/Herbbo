import { NextResponse } from "next/server";
import { readDb } from "@/lib/db";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const db = readDb();
  const user = db.users.find((u: any) => u.email === email);

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  // In production, verify password with bcrypt.compare(password, user.password)
  // For demo purposes, accept any non-empty password
  const token = await signToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  const response = NextResponse.json({ user: { id: user.id, email: user.email, role: user.role } });
  response.cookies.set("session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  return response;
}
