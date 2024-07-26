import React, { FormEventHandler } from 'react'

const handleSubmit: FormEventHandler<HTMLFormElement> = async(event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const title = formData.get('todo') as string
    // check if title is empty
    if(!title.trim()) return
    try {
        const response = await fetch('http://localhost:3000/api/create', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: title,
            })
        })
        if(response.ok) {
            console.log("ToDo was created ====>", response)
        }
        if(!response.ok) { throw new Error('Response not OK') }
    } 
    catch (error) { throw new Error('ERROR in AddTodoInput form') }
}
