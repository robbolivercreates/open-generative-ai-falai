import { NextResponse } from 'next/server';

const NOT_SUPPORTED = NextResponse.json(
    { workflows: [], items: [], message: 'Workflow engine not supported with fal.ai backend.' },
    { status: 200 }
);

export async function GET() { return NOT_SUPPORTED; }
export async function POST() { return NOT_SUPPORTED; }
export async function DELETE() { return NOT_SUPPORTED; }
export async function PUT() { return NOT_SUPPORTED; }
