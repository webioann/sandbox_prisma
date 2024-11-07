'use client';
import React from 'react'
import { signIn } from '../../auth'
import './google-button.scss'
import { useRouter } from 'next/navigation';

function GoogleSigninButton() {

    return ( 
        <button 
            className='signin-button'
            onClick={() => signIn('google', { callbackUrl: '/' })}>
                Google
        </button>
    )
}

export default GoogleSigninButton;
