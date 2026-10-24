import { cookies } from "next/headers";
import { jwtVerify, SignJWT } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "dev-secret-change-in-production"
);

export type UserRole = "admin" | "customer";

export type SessionUser = {
  id: string;
  email: string;
  role: UserRole;
};

export async function signToken(payload: {
  id: string;
  email: string;
  role: UserRole;
}) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(SECRET);
}

export async function verifyToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as SessionUser;
  } catch {
    return null;
  }
}

export async function getSession(): Promise<SessionUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session")?.value;
  if (!token) return null;
  return verifyToken(token);
}

export async function requireRole(allowedRoles: UserRole[]) {
  const session = await getSession();
  if (!session) {
    return { unauthorized: true };
  }
  if (!allowedRoles.includes(session.role as UserRole)) {
    return { forbidden: true };
  }
  return { session };
}
