export const dynamic = "force-dynamic"
import crypto from "node:crypto"
import {client} from "@/lib/prisma"
import { NextRequest } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text()
    const body = JSON.parse(rawBody);

    

  } catch (error) {
    
  }
}