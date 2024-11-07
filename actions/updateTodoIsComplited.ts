"use server";
import { revalidatePath } from "next/cache";
import prisma  from "../prisma/prisma";

export async function updateTodoIsComplited(formData: FormData) {
    const booleanToString = formData.get("isComplited") 
    let status = booleanToString === 'true' ? true : false
    const todoId = formData.get("todoId") as string
    const newStatus = !status
    await prisma.todo.findUnique({where: { id: todoId }})
    await prisma.todo.update({
        where: { id: todoId }, data: { isCompleted: newStatus },
    })
    revalidatePath('/todos')
}