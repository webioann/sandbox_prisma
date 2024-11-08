import React from 'react'
import Link from 'next/link'
import './top-header.scss'

function TopHeader() {
    const path = 'Home'
    return (
        <div className='top-header'>
            <header className='header-title'>
                <h3 className='page-name'>{path}</h3>
                <p className='header-discription'>Monitor all of your projects and tasks here</p>
            </header>
            <Link href={'/account'} className='account-link'>
                A
            </Link>
        </div>
    )
}

export default TopHeader;