import React from 'react'
import TaskTableItem from '@/components/TaskTableItem/TaskTableItem'
import { FiCalendar } from "react-icons/fi"
import { LuListChecks } from "react-icons/lu"
import { GoPerson } from "react-icons/go"
import { FaRegFolder } from "react-icons/fa"
import { BsChevronExpand } from "react-icons/bs"
import styles from './table.module.scss'

import { TbArrowsSort } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"

import { ProjectsData } from '../../../MOCH_DATA'
import type { ProjectsDataType } from '../../../types/tasks.types'


export default function TablePage() {

    const T = () => {
        let result = ProjectsData.map((project) => {
            project.project_tasks_list.map(() => {

            })
        })
    }

    return (
        <>
            <div className={styles.filters_row}>
                <div className={styles.filter}>
                    <LuListChecks size={16} color='#060606'/>
                    <p className={styles.filter_title}>All statuses</p>
                    <BsChevronExpand size={16} color='#060606'/>
                </div>
                <div className={styles.filter}>
                    <GoPerson size={16} color='#060606'/>
                    <p className={styles.filter_title}>All assigned</p>
                    <BsChevronExpand size={16} color='#060606'/>
                </div>
                <div className={styles.filter}>
                    <FaRegFolder size={16} color='#060606'/>
                    <p className={styles.filter_title}>All projects</p>
                    <BsChevronExpand size={16} color='#060606'/>
                </div>
                <div className={styles.filter}>
                    <FiCalendar size={16} color='#060606'/>
                    <p className={styles.filter_title}>Due date</p>
                </div>
            </div>



            <ul className={styles.tasks_full_list}>
                <div className={styles.table_header}>

                </div>
                <ul className="table_of_projects">
                    {ProjectsData.map((project) => 
                        project.project_tasks_list.map((task) => { return (<TaskTableItem project={project} task={task}/>)})
                    )}
                </ul>
                
                
            </ul>



            <div className={styles.pagination}></div>
        </>   
    )
};
