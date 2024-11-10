import React from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { HiDotsVertical } from "react-icons/hi"
import type { dueDateStatusColors, createAndHighlightDueDateType } from '../../types/tasks.types'
import styles from './task-table-item.module.scss'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import { PiArrowsDownUp } from "react-icons/pi"

function TaskTableItem() {

    const dueDateDay = new Date(2024, 10, 18).valueOf()

    const createAndHighlightDueDate: createAndHighlightDueDateType = (dueDate: number, criticalPeriod: number) => {
        const currentDate = Date.now();
        const month = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
        const oneDay = 86400000;
        // create readable date ---
        let dueDateInReadbleFormat: string = '';
        let dueDateYear = new Date(dueDate).getFullYear()
        let dueDateMonth = new Date(dueDate).getMonth()
        let dueDateDay = new Date(dueDate).getDate()
        dueDateInReadbleFormat= `${month[dueDateMonth]} ${dueDateDay}th, ${dueDateYear}`
        // highlight critical period ---
        let status: dueDateStatusColors = '#34CB97'
        let daysByDutDate = Math.ceil(( dueDate - currentDate ) / oneDay) 
        if(daysByDutDate >= criticalPeriod + 2) status = '#34CB97'
        if(daysByDutDate < criticalPeriod + 2 && daysByDutDate > 2) status = '#F7CE1B'
        if(daysByDutDate <= 2) status = '#F57174'

        return { dueDateInReadbleFormat, status }
    } 
    let { dueDateInReadbleFormat, status } = createAndHighlightDueDate(dueDateDay, 3)
    // console.log(dueDateInReadbleFormat);
    // console.log(status);

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
                <p 
                    className={styles.date}
                    style={{color: status}}
                    >
                    {dueDateInReadbleFormat
                }</p>
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