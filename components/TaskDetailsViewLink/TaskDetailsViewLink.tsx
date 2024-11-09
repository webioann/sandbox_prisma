import React from 'react'
import Link from 'next/link'
import { FiCalendar } from "react-icons/fi"
import styles from './task-details-link.module.scss'

function TaskDetailsViewLink() {
    return (
        <Link href={''} className={styles.task_view_link}>
            <h4 className={styles.task_discription}>hello</h4>
            <div className={styles.task_name_and_time}>
                <p>Mobile App Development</p>
                <FiCalendar size={13} color='grey'/>
                <small className={styles.termin}>13 days</small>
            </div>
        </Link>
    )
}

export default TaskDetailsViewLink;