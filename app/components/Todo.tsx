"use client"
import React, { useEffect } from 'react'
import { MdOutlineDelete, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { BsClock } from "react-icons/bs";
import '../Styles/todo.css'

function Todo() {

    return (
        <div className='todo'>
            <i className='icon'>
                <BsClock size={18} color='red'/>
            </i>
            <p className='title'>hello</p>
            <i className='icon'>
                <LiaEditSolid size={20} color='red'/>
            </i>
            <i className='icon'>
                <MdOutlineDelete size={20} color='red'/>

            </i>
        </div>
    )
}

export default Todo;