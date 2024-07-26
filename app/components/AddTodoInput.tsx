'use client'
import React, { useState } from 'react'
import { createNewTodo } from '../api/create/action'
import '../Styles/add-todo.scss'

function AddTodoInput() {

    return (
        <form action={createNewTodo}>
            <input 
                type='text'
                name='todo'
                placeholder='add new todo ...'
            />
            <button type='submit'>add todo</button>
        </form>
    )
}

export default AddTodoInput;