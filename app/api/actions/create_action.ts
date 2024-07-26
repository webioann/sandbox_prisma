"use server";
import { revalidatePath } from "next/cache";
import prisma  from "../../../prisma/prisma";

export async function createNewTodo(formData: FormData) {
    const todoTitle = await formData.get("todo") as string
    await prisma.todo.create({
        data: {
        title: todoTitle,
        isCompleted: false
        },
    });
    revalidatePath("/");
    
}