'use client'
import React, { useRef } from 'react'
import { createNewTodo } from '../../actions/createNewTodo'
import './todo.scss'

function AddTodoInput() {
    const ref = useRef<HTMLFormElement>(null)

    const resetInputField = () => {
        setTimeout(() => { ref.current && ref.current.reset() }, 500)
    }

    return (
        <form action={createNewTodo} ref={ref}>
            <input 
                type='text'
                name='todo'
                placeholder='add new todo ...'
            />
            <button type='submit' onClick={resetInputField}>
                    add todo</button>
        </form>
    )
}

export default AddTodoInput;