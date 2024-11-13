"use client";
import React from 'react'

import LoginForm from '../components/LoginForm/LoginForm'
import { UserContext } from '../../../context/UserContextProvider'

import Link from 'next/link';
import './login.scss'

function SignInPage() {
        // USER CONTEXT ================>
        const user = React.useContext(UserContext)
        // console.log(user);
    
    return (
        <main className='login-page'>
            { user ? <Link href={'/home'}>Go to work on Home page</Link> : <h1>NO REGISTER USER</h1>}
            <LoginForm/>
        </main>
    )
}

export default SignInPage;