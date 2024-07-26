import React, { FormEventHandler } from 'react'
import { NextRequest, NextResponse } from 'next/server'
import prisma from "@/prisma/prisma"
import { revalidatePath } from "next/cache";

const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get('todo') as string
    // check if title is empty
    if(!title.trim()) return
    try {
        const response = await fetch('http://localhost:3000/api/create', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: title,
            })
        })
        if(response.ok) {
            console.log("ToDo was created ====>", response)
        }
        if(!response.ok) { throw new Error('Response not OK') }
    } 
    catch (error) { throw new Error('ERROR in AddTodoInput form') }
}
export async function DELETE(request: NextRequest,{ params }: { params: { id: string } }) {
    const res = await fetch('http://localhost:3000/api/delete', {
        next: { revalidate: 10 },
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    const data = await res.json();
    return NextResponse.json(data)
}
async function deleteTodo( id: string ) {
    const res = await fetch('http://localhost:3000/api/delete', {
        // next: { revalidate: 10 },
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
    })
    const data = await res.json();
    return data
}
async function updateTodo( id: string ) {
    const res = await fetch('http://localhost:3000/api/update', {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id })
    })
    const data = await res.json();
    return data
}

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
export async function DELET(request: NextResponse) {
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