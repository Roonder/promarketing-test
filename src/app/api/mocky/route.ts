import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const body = await fetch('https://run.mocky.io/v3/54a25ed6-39a9-4860-b893-594b49336415');

    return NextResponse.json(body);

}