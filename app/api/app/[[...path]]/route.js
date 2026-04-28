import { NextResponse } from 'next/server';

const NOT_SUPPORTED = NextResponse.json(
    { message: 'App proxy not supported with fal.ai backend. Use fal.storage.upload() for file uploads.' },
    { status: 200 }
);

export async function GET() { return NOT_SUPPORTED; }
export async function POST() { return NOT_SUPPORTED; }
export async function DELETE() { return NOT_SUPPORTED; }
export async function PUT() { return NOT_SUPPORTED; }
