import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache";

export async function PUT(request: NextResponse) {
    try{
        const { id } = await request.json() 
        console.log('ID ---> ', id)
        const raw = await prisma.todo.findUnique({where: { id: id }})
        const status = raw?.isCompleted
        await prisma.todo.update({
            where: { id: id }, data: { isCompleted: !status },
        })
        revalidatePath('/')
        return NextResponse.json({ massage: 'ToDo updated', status: 201 })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time todo updating', status: 500 })
    }
}