import React from 'react'
import Link from 'next/link'
import './top-header.scss'

function TopHeader() {
    const path = 'Home'
    return (
        <header className='top-header'>
            <div className='header-title'>
                <h3 className='page-name'>{path}</h3>
                <p className='header-discription'>Monitor all of your projects and tasks here</p>
            </div>
            <Link href={'/account'} className='account-link'>
                A
            </Link>
        </header>
    )
}

export default TopHeader