'use client';
import React from 'react'
import { MdOutlineDelete } from "react-icons/md"
import { deleteTodo } from '../api/delete/action'

type TodoId = { todoId: string }

const DeleteButton: React.FC<TodoId> = ({todoId}) => {
    return (
        <form action={deleteTodo}>
            <input type='hidden' name='delete' value={todoId}/>
            <button type='submit'>
                <MdOutlineDelete size={20} color='red'/>
            </button>
        </form>
    )
}

export default DeleteButton;