import React from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { HiDotsVertical } from "react-icons/hi"
import styles from './task-table-item.module.scss'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import { PiArrowsDownUp } from "react-icons/pi"

function TaskTableItem() {
    
    const newdate = Date.now()
    console.log(new Date(newdate).getMonth( ));
    const dates = 1731218644149

    return (
        <div className={styles.table_item}>

            <div className={styles.task_name}>
                <MdOutlineCheckBoxOutlineBlank/>
                <p className={styles.task_dicription}>Conduct usability testing</p>
            </div>

            <div className={styles.project_cell}>
                <BadgeWithSymbol variant='cube' symbol='ddd'/>
                <p className={styles.project_name}>Mobile App Development</p>
            </div>

            <div className={styles.assigned_person}>
                <div className={styles.person_badge}>J</div>
                <p className={styles.person_name}>Antonio</p>
            </div>

            <div className={styles.due_date}>
                <p className={styles.date}>October 7th, 2024</p>
            </div>

            <div className={styles.task_status}>
                <p className={styles.colored_status}>
                    Due
                </p>
                <HiDotsVertical  size={16} color='#060606'/>
            </div>
        </div>
    )
}

export default TaskTableItem;