import { NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
import { revalidatePath } from "next/cache";


export async function GET() {
    try{
        const data = await prisma.todo.findMany()
        revalidatePath("/todos")        
        return NextResponse.json({ data, status: 201 })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time creating new Todo', status: 500 })
    }
}