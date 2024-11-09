"use client"
import React from 'react'
import { FaPlus } from "react-icons/fa"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './task-page-navigation.module.scss'

function TaskPageNavigation() {
    const path = usePathname()
    const table = "/my_tasks/table";
    const kanban = "/my_tasks/kanban";
    const calendar = "/my_tasks/calendar";

    const active = styles.active
    return (
        <div className={styles.links_header}>
            <div className={styles.page_links_stack}>
                <Link 
                    href={table} 
                    className={`${styles.task_page_link} ${path === table && active}`}>
                    Table
                </Link>
                <Link 
                    href={kanban} 
                    className={`${styles.task_page_link} ${path === kanban && active}`}>
                    Kanban
                </Link>
                <Link 
                    href={calendar} 
                    className={`${styles.task_page_link} ${path === calendar && active}`}>
                    Calendar
                </Link>
            </div>
            <div className={styles.create_button}>
                <FaPlus size={12} color='white'/>
                <span className={styles.create_button_text}>New</span>
            </div>
        </div>    
    )
}

export default TaskPageNavigation;