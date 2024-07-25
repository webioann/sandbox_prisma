"use client"
import React, { useEffect } from 'react'
import { MdOutlineDelete, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { BsClock } from "react-icons/bs";
import type { TodoType } from "@/types/todo.types";
import '../Styles/todo.scss'

type TodoProps = Omit<TodoType, 'id'>

const Todo: React.FC<TodoType> = ({title, isCompleted, createdAt, id}) => {

    return (
        <div className='todo'>
            <i className='icon'>
                { isCompleted 
                    ? <MdOutlineCheckBox size={18} color='red'/> 
                    : <MdOutlineCheckBoxOutlineBlank size={18} color='red'/>
                }
            </i>
            <p className='title'>
                { title }
            </p>
            <i className='icon'>
                <MdOutlineDelete size={20} color='red'/>
            </i>
        </div>
    )
}

export default Todo;
            {/* <i className='icon'>
                <LiaEditSolid size={20} color='red'/>
            </i> */}
