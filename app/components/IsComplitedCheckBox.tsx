'use client';
import React from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { updateTodoIsComplited } from '../api/actions/update_action'; 
import type { TodoType } from '@/types/todo.types';
import '../Styles/delete-button.scss'

type TodoFromProps = { todo: TodoType }

const IsComplitedCheckBox: React.FC<TodoFromProps> = ({todo}) => {
    return (
        <form action={updateTodoIsComplited} className='delete-button'>
            <input 
                type='hidden' 
                name='isComplited' 
                value={JSON.stringify(todo.isCompleted)}
            />
            <input 
                type='hidden' 
                name='todoId' 
                value={todo.id}
            />
            <button type='submit' className='delete-icon'>
                { todo.isCompleted 
                    ? <MdOutlineCheckBox size={18} color='red'/> 
                    : <MdOutlineCheckBoxOutlineBlank size={18} color='red'/>
                }
            </button>
        </form>
    )
}

export default IsComplitedCheckBox;