import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";

export async function POST(request: NextResponse) {
    try{
        const { title } = await request.json() 
        await prisma.todo.create({
            data: {
                title: title,
                isCompleted: false
            }
        })
        return NextResponse.json({ massage: 'New ToDo created', status: 201 })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time creating new Todo', status: 500 })
    }
}