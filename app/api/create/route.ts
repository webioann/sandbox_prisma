import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: NextResponse) {
    try{
        const { title } = await request.json() 
        await prisma.todo.create({
            data: {
                title: title,
                isCompleted: false
            }
        })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time creating new Todo', status: 500 })
    }
}