"use server";
import { revalidatePath } from "next/cache";
import prisma  from "../../../prisma/prisma";

export async function deleteTodo(formData: FormData) {
    const todoId = formData.get("delete") as string
        if(todoId) {
            await prisma.todo.delete({
                where: {
                    id: todoId,
                },
                });
                revalidatePath("/");
        }
    }