import React from 'react'
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"
import { HiDotsVertical } from "react-icons/hi"
import styles from './task-table-item.module.scss'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import BadgeWithSymbolRounded from '../BadgeWithSymbolRounded/BadgeWithSymbolRounded'
import BadgeForStatusColored from '../BadgeForStatusColored/BadgeForStatusColored'
import DueDateHighlighter from '../DueDateHighlighter/DueDateHighlighter'
import { PiArrowsDownUp } from "react-icons/pi"
import type { IProjectType, ITaskType } from '../../types/tasks.types'

type props = {
    project: IProjectType
    task: ITaskType
}

const  TaskTableItem: React.FC<props> = ({project, task}) => {

    return (
        <div className={styles.table_item}>

            <div className={styles.task_name}>
                { task.task_checked ? <MdOutlineCheckBox size={20} color='#d6d6d6'/> : <MdOutlineCheckBoxOutlineBlank size={20} color='#d6d6d6'/>}
                <p className={styles.task_dicription}>{task.task_discription}</p>
            </div>

            <div className={styles.project_cell}>
                <BadgeWithSymbol variant='cube' symbol={project.project_name}/>
                <p className={styles.project_name}>{project.project_name}</p>
            </div>

            <div className={styles.assigned_person}>
                <BadgeWithSymbolRounded symbol={task.assigned_person}/>
                <p className={styles.person_name}>{task.assigned_person}</p>
            </div>
            <DueDateHighlighter dueDate={task.due_date}/>
            <div className={styles.task_status}>
                <BadgeForStatusColored status={task.status}/>
                <HiDotsVertical  size={16} color='#060606'/>
            </div>
        </div>
    )
}

export default TaskTableItem;