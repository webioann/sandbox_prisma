import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
    try{
        const data = await prisma.todo.findMany()        
        return NextResponse.json({ data, status: 201 })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time creating new Todo', status: 500 })
    }
}