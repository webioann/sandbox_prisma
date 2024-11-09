"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import './top-header.scss'

function TopHeader() {
    const pathName = usePathname()
    // transformed URL path in header title with big first letters in each word
    const cutFirstPathFromURLAndCapitalize = (url: string) => {
        let withoutFrontSlash = url.slice(1)
        let nextSlashIndex = withoutFrontSlash.indexOf('/')
        let raw = nextSlashIndex === -1 ? withoutFrontSlash : withoutFrontSlash.slice(0, nextSlashIndex)
        let withoutUnderscors = raw.replaceAll('_', ' ')
        let secondWordFirstLetterIndex = withoutUnderscors.indexOf(' ') + 1
        let withBigFirstLetter = withoutUnderscors.charAt(0).toUpperCase() + withoutUnderscors.slice(1)
        let modifiedPath = withBigFirstLetter.slice(0, secondWordFirstLetterIndex) + withBigFirstLetter.charAt(secondWordFirstLetterIndex).toUpperCase() + withBigFirstLetter.slice(secondWordFirstLetterIndex +1)
        return modifiedPath
    }

    return (
        <div className='top-header'>
            <header className='header-title'>
                <h3 className='page-name'>{ cutFirstPathFromURLAndCapitalize(pathName) }</h3>
                <p className='header-discription'>Monitor all of your projects and tasks here</p>
            </header>
            <Link href={'/account'} className='account-link'>
                A
            </Link>
        </div>
    )
}

export default TopHeader;