import { NextResponse } from "next/server"
import prisma from "@/prisma/prisma"

export async function DELETE(request: NextResponse) {
    try{
        const { id } = await request.json() 
        console.log('ID ---> ', id)
        await prisma.todo.delete({where: {
            id: id
        }})
        return NextResponse.json({ massage: 'ToDo deleted', status: 201 })
    }
    catch(error) {
        return NextResponse.json({ error: 'Error in time deleting new Todo', status: 500 })
    }
}