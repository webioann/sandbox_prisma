import { NextRequest, NextResponse } from 'next/server'

export async function DELETE(request: NextRequest,{ params }: { params: { id: string } }) {
    const res = await fetch('http://localhost:3000/api/delete', {
        next: { revalidate: 10 },
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    const data = await res.json();
    return NextResponse.json(data)
}