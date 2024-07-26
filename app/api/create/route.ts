import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { revalidatePath } from "next/cache";


export async function POST(request: NextResponse) {
    try{
        const { title } = await request.json()
        await prisma.todo.create({
            data: {
                title: title,
                isCompleted: false
            }
        })
        revalidatePath("/")
        return NextResponse.json({ massage: 'New ToDo created', status: 201 })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time creating new Todo', status: 500 })
    }
}