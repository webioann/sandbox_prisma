import React from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { HiDotsVertical } from "react-icons/hi"
import styles from './task-table-item.module.scss'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import { PiArrowsDownUp } from "react-icons/pi"

function TaskTableItem() {
    return (
        <div className={styles.table_item}>
            <div className="task_name">
                <MdOutlineCheckBoxOutlineBlank/>
                <p>Conduct usability testing</p>
            </div>

            <div className="project_name">
                <BadgeWithSymbol variant='cube' symbol='ddd'/>
                <p>Mobile App Development</p>
            </div>

            <div className="assigned_person">
                <div className="rounded_badge">J</div>
                <p>Antonio</p>
            </div>

            <div className="due_date">
                <p>October 7th, 2024</p>
            </div>

            <div className="task_status">
                <p className={styles.colored_status}>In Progres</p>
            </div>
        </div>
    )
}

export default TaskTableItem;