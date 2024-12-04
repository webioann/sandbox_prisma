"use client"
// import React, { useContext } from 'react'
import { UserContext } from '../../../../context/UserContextProvider'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './top-header.scss'

function TopHeader() {

    // USER CONTEXT ================>
    const user = React.useContext(UserContext)
    // console.log(user);

    const pathName = usePathname()
    
    const cutFirstPathFromURLAndCapitalize = (url: string) => {
        // transformed URL path in header title with big first letters in each word
        let withoutFrontSlash = url.slice(1)
        let nextSlashIndex = withoutFrontSlash.indexOf('/')
        let raw = nextSlashIndex === -1 ? withoutFrontSlash : withoutFrontSlash.slice(0, nextSlashIndex)
        let withoutUnderscores = raw.replaceAll('_', ' ')
        let secondWordFirstLetterIndex = withoutUnderscores.indexOf(' ') + 1
        let withBigFirstLetter = withoutUnderscores.charAt(0).toUpperCase() + withoutUnderscores.slice(1)
        let modifiedPath = withBigFirstLetter.slice(0, secondWordFirstLetterIndex) + withBigFirstLetter.charAt(secondWordFirstLetterIndex).toUpperCase() + withBigFirstLetter.slice(secondWordFirstLetterIndex +1)
        return modifiedPath
    }

    return (
        <div className='top-header'>
            <header className='header-title'>
                <h3 className='page-name'>{ cutFirstPathFromURLAndCapitalize(pathName) }</h3>
                <p className='header-description'>Monitor all of your projects and tasks here</p>
            </header>
            <Link href={'/account'} className='account-link'>
                { user?.name ? user.name[0].toUpperCase() : user?.email[0].toUpperCase() }
            </Link>
        </div>
    )
}

export default TopHeader;