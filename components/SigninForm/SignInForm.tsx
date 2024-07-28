'use client'
import React, { FormEventHandler } from 'react'
import { useRouter } from 'next/navigation'
// import GoogleSigninButton from '../GoogleSigninButton/GoogleSigninButton';
import { signIn } from "next-auth/react";
import Link from 'next/link'
import './form.scss'

function SignInForm() {
    const router = useRouter()
    

    const handlesubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        // default avatar image
        let defaultImage = 'https://c.disquscdn.com/uploads/users/32761/6743/avatar92.jpg?1559734459'
        try {
            const response = await fetch('api/register', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name: formData.get('name'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    image: defaultImage,
                    provider: 'credentials',
                })
            })
            if(response.ok) {
                await signIn("credentials", {
                    email: formData.get('email'),
                    password: formData.get('password'),
                    redirect: false
                })
                // console.log("HELLO from Signin form =========>", response)
                router.push('/')
            }
            if(!response.ok) { throw new Error('Response not OK') }
        } 
        catch (error) { throw new Error('ERROR in Sign In form') }
    }

    return (
        <form onSubmit={handlesubmit} className='form'>
            <div className='wrapper'>
                <h1 className='form-title'>Sign up</h1>
                <p className='form-subtitle'>use your password and email</p>
                {/* name */}
                <div className='input-wrapper'>
                    <label>Name</label>
                    <input 
                        name='name' 
                        type='text'
                        required
                        placeholder='John Doe'/>
                </div>
                {/* email */}
                <div className='input-wrapper'>
                    <label>Email</label>
                    <input 
                        name='email' 
                        type='email'
                        required
                        placeholder='john@example.com'/>
                </div>
                {/* password */}
                <div className='input-wrapper'>
                    <label>Password</label>
                    <input 
                        name='password'
                        type='password'
                        required 
                        />
                </div>
                {/* submit button */}
                <button 
                    type='submit' 
                    className='submit-button'>
                    Sign in
                </button>
                {/* <GoogleSigninButton/> */}
                {/* redirect link */}
                <div className='redirect'>
                    <p className='question'>Already have an account?</p>
                    <Link href="/login" className='old-link'>
                        Login
                    </Link> 
                </div>
            </div>
        </form>
    )
}

export default SignInForm;
