"use server";
import { revalidatePath } from "next/cache";
import prisma  from "../prisma/prisma";

export async function deleteTodo(todoId: string) {
    await prisma.todo.delete({
        where: {
            id: todoId,
        },
        });
        revalidatePath("/todos");
    }