"use client"
import React, { useEffect } from 'react'
import { MdOutlineDelete, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { BsClock } from "react-icons/bs";
import type { TodoType } from "@/types/todo.types";
import '../Styles/todo.scss'

type TodoPropsData = {
    data: TodoType
}

const Todo: React.FC<TodoPropsData> = ({data}) => {

    async function deleteTodo( id: string ) {
        const res = await fetch('http://localhost:3000/api/delete', {
            next: { revalidate: 10 },
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        const data = await res.json();
        return data
    }

    return (
        <div className='todo'>
            <i className='icon'>
                { data.isCompleted 
                    ? <MdOutlineCheckBox size={18} color='red'/> 
                    : <MdOutlineCheckBoxOutlineBlank size={18} color='red'/>
                }
            </i>
            <p className='title'>
                { data.title }
            </p>
            <i className='icon'>
                <MdOutlineDelete size={20} color='red' onClick={() => deleteTodo(data.id)}/>
            </i>
        </div>
    )
}

export default Todo;
            {/* <i className='icon'>
                <LiaEditSolid size={20} color='red'/>
            </i> */}
