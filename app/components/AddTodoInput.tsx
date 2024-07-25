'use client'
import React, { FormEventHandler } from 'react'
import '../Styles/add-todo.css'

function AddTodoInput() {

    const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        try {
            const response = await fetch('http://localhost:3000/api/create', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    title: formData.get('todo'),
                })
            })
            if(response.ok) {
                console.log("ToDo was created ====>", response)
            }
            if(!response.ok) { throw new Error('Response not OK') }
        } 
        catch (error) { throw new Error('ERROR in Sign In form') }
    }
    return (
        <form onSubmit={handleSubmit}>
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