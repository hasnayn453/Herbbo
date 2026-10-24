import { NextResponse } from "next/server";
import { writeFileSync, readFileSync, existsSync } from "fs";
import path from "path";

const LOG_PATH = path.join(process.cwd(), "data/whatsapp-log.json");

const ensureLog = () => {
  if (!existsSync(LOG_PATH)) {
    writeFileSync(LOG_PATH, JSON.stringify([], null, 2));
  }
  return JSON.parse(readFileSync(LOG_PATH, "utf-8"));
};

export async function POST(req: Request) {
  try {
    const { customerName, customerPhone, message, source } = await req.json();

    const log = ensureLog();
    const entry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      customerName: customerName || "Unknown",
      customerPhone: customerPhone || "Not provided",
      message: message || "",
      source: source || "whatsapp-button",
    };

    log.push(entry);
    writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));

    return NextResponse.json({ success: true, id: entry.id });
  } catch (error) {
    return NextResponse.json({ error: "Failed to log message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const log = ensureLog();
    return NextResponse.json(log);
  } catch (error) {
    return NextResponse.json({ error: "Failed to read log" }, { status: 500 });
  }
}
