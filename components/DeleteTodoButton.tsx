'use client';
import React from 'react'
import { MdOutlineDelete } from "react-icons/md"
import { deleteTodo } from '../actions/delete_action'
import './delete-button.scss'

type TodoId = { todoId: string }

const DeleteTodoButton: React.FC<TodoId> = ({todoId}) => {
    return (
        <form action={deleteTodo.bind(null, todoId)} className='delete-button'>
            <input type='hidden' name='delete' value={todoId}/>
            <button type='submit' className='delete-icon'>
                <MdOutlineDelete size={20} color='red'/>
            </button>
        </form>
    )
}

export default DeleteTodoButton;