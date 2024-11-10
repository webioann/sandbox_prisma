import React from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { HiDotsVertical } from "react-icons/hi"
import type { dueDateStatusColors, createAndHighlightDueDateType } from '../../types/tasks.types'
import styles from './task-table-item.module.scss'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import { PiArrowsDownUp } from "react-icons/pi"
import type { IProjectType, ITaskType } from '../../types/tasks.types'

type props = {
    project: IProjectType
    task: ITaskType
}

const  TaskTableItem: React.FC<props> = ({project, task}) => {
    // const dueDateDay = new Date(2024, 10, 29).valueOf()

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
    let { dueDateInReadbleFormat, status } = createAndHighlightDueDate(task.due_date, 3)
    // console.log(dueDateDay);
    console.log(status);

    return (
        <div className={styles.table_item}>

            <div className={styles.task_name}>
                <MdOutlineCheckBoxOutlineBlank/>
                <p className={styles.task_dicription}>{task.task_discription}</p>
            </div>

            <div className={styles.project_cell}>
                <BadgeWithSymbol variant='cube' symbol={project.project_name}/>
                <p className={styles.project_name}>{project.project_name}</p>
            </div>

            <div className={styles.assigned_person}>
                <div className={styles.person_badge}>J</div>
                {/* ============================================================ */}
                <p className={styles.person_name}>{task.assigned_person}</p>
            </div>

            <div className={styles.due_date}>
                <p 
                    className={styles.date}
                    style={{color: status}}
                    >
                    { dueDateInReadbleFormat }</p>
            </div>

            <div className={styles.task_status}>
                <p  style={{backgroundColor: 'green'}}
                    className={styles.colored_status}>
                    {task.status}
                </p>
                <HiDotsVertical  size={16} color='#060606'/>
            </div>
        </div>
    )
}

export default TaskTableItem;