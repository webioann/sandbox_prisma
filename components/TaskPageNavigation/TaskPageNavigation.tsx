"use client"
import React from 'react'
import { FaPlus } from "react-icons/fa"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './task-page-navigation.module.scss'

function TaskPageNavigation() {
    const path = usePathname()
    return (
        <div className={styles.links_header}>
            <div className={styles.page_links_stack}>
                <Link href={"/my_tasks/table"} className={styles.task_page_link}>Table</Link>
                <Link href={"/my_tasks/kanban"} className={styles.task_page_link}>Kanban</Link>
                <Link href={"/my_tasks/calendar"} className={styles.task_page_link}>Calendar</Link>
            </div>
            <div className={styles.create_button}>
                <FaPlus size={12} color='white'/>
                <span className={styles.create_button_text}>New</span>
            </div>
        </div>    
    )
}

export default TaskPageNavigation;