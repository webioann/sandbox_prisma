"use client"
import React from 'react'
import type { TodoType } from "@/types/todo.types"
import DeleteTodoButton from './DeleteTodoButton'
import IsComplitedCheckBox from './IsComplitedCheckBox';
import '../Styles/todo.scss'

type TodoPropsData = {
    data: TodoType
}

const Todo: React.FC<TodoPropsData> = ({data}) => {

    return (
        <div className='todo'>
            <IsComplitedCheckBox todo={data}/>
            <p className='title'>
                { data.title }
                <span className='time'>{ new Date(data.createdAt).getHours() + " : " + new Date(data.createdAt).getMinutes()}</span>
            </p>
            <DeleteTodoButton todoId={data.id}/>
        </div>
    )
}

export default Todo;
