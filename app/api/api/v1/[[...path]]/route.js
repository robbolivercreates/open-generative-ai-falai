import { NextResponse } from 'next/server';

const NOT_SUPPORTED = NextResponse.json(
    { message: 'muapi.ai v1 proxy not available. Generation is handled directly by fal.ai client.' },
    { status: 200 }
);

export async function GET() { return NOT_SUPPORTED; }
export async function POST() { return NOT_SUPPORTED; }
