import React from 'react'
import Link from 'next/link'
import type { ITaskType } from '@/types/tasks.types'
import { FiCalendar } from "react-icons/fi"
import styles from './task-link-widget.module.scss'

type taskLinkProps = {
    task: ITaskType
    projectId: string
}

function TaskLinkWidget({task, projectId}: taskLinkProps) {

    const timeToDueDate = (due_date: number) => {
        const dayInMilliseconds = 86400000;
        let currentDate = Date.now()
        let difference = currentDate - due_date
        return Math.floor(difference / dayInMilliseconds)
    }
    

    return (
        // TODO: create link to current task page
        <Link href={`/workspaces/${projectId}`} className={styles.task_view_link}>
            <h4 className={styles.task_description}>{task.task_name}</h4>
            <div className={styles.task_name_and_time}>
                <p>{task.task_description}</p>
                <FiCalendar size={13} color='grey'/>
                <small className={styles.termin}>{timeToDueDate(task.due_date)} days</small>
            </div>
        </Link>
    )
}

export default TaskLinkWidget;