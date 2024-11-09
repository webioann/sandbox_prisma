"use client"
import React from 'react'
import Link from 'next/link'
import { MdTask } from "react-icons/md"
import { GoHomeFill } from "react-icons/go"
import { FiSettings } from "react-icons/fi"
import { RiGroupLine } from "react-icons/ri"
import { usePathname } from 'next/navigation'
import { RiCalendarTodoLine } from "react-icons/ri"
import './navigation.scss'

function Navigation() {
    const path = usePathname()

    const choosePathVariant = (fullPath: string) => {
        if(fullPath === '/my_tasks/table') return true
        if(fullPath === '/my_tasks/kanban') return true
        if(fullPath === '/my_tasks/calendar') return true
        else return null
    }

    return (
        <nav>
            <Link href={"/home"} className={path === '/home' ? 'nav-link active' : 'nav-link'}>
                <GoHomeFill/>
                <h4 className='link-name'>Home</h4>
            </Link>
            <Link href={"/my_tasks/table"} className={choosePathVariant(path) ? 'nav-link active' : 'nav-link'}>
                <MdTask/>
                <h4 className='link-name'>My Tasks</h4>
            </Link>
            <Link href={"/settings"} className={path === '/settings' ? 'nav-link active' : 'nav-link'}>
                <FiSettings/>
                <h4 className='link-name'>Settings</h4>
            </Link>
            <Link href={"/members"} className={path === '/members' ? 'nav-link active' : 'nav-link'}>
                <RiGroupLine/>
                <h4 className='link-name'>Members</h4>
            </Link>
            <Link href={"/todos"} className={path === '/todos' ? 'nav-link active' : 'nav-link'}>
                <RiCalendarTodoLine/>
                <h4 className='link-name'>Todos</h4>
            </Link>
        </nav>
    )
}

export default Navigation;