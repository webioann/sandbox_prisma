"use client";
import React from 'react'
import { signOut } from "@/auth"
import { useRouter } from 'next/navigation'

function SignOutButton() {

    const router = useRouter()

    const signout = () => {
        signOut()
        router.push('/register')
    }

    return (
        <button onClick={signout}>Sign out</button> 
    )

}

export default SignOutButton;