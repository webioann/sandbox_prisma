import React from 'react'
import TaskTableItem from '@/components/TaskTableItem/TaskTableItem'
import TaskPageNavigation from '@/components/TaskPageNavigation/TaskPageNavigation'
import { FiCalendar } from "react-icons/fi"
import { LuListChecks } from "react-icons/lu"
import { GoPerson } from "react-icons/go"
import { FaRegFolder } from "react-icons/fa"
import { BsChevronExpand } from "react-icons/bs"
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md"

import styles from './table.module.scss'

import { TbArrowsUpDown } from "react-icons/tb"
import { IoIosArrowDown } from "react-icons/io"

import { ProjectsData } from '../../../../MOCH_DATA'
import type { ProjectsDataType } from '../../../../types/tasks.types'


export default function TablePage() {
    let D = true
    return (
        <main className={styles.table_page}>
            <div className={styles.table_wrapper}>
                <TaskPageNavigation/>
                {/* FILTERS */}
                <section className={styles.filters_row}>
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
                </section>
                {/* TABLE OF TASKS */}
                <section className={styles.tasks_table}>
                    {/* TABLE HEADER */}
                    <div className={styles.table_header}>
                        <div className={styles.column_name_first}>
                            <MdOutlineCheckBoxOutlineBlank size={20}/>
                            <p className={styles.task_name_cell}>Task Name</p>
                            <TbArrowsUpDown/>  
                        </div>
                        <div className={styles.column_name}>
                            <p>Progect</p>
                            <TbArrowsUpDown/>  
                        </div>
                        <div className={styles.column_name}>
                            <p>Assignee</p>
                            <TbArrowsUpDown/>  
                        </div>
                        <div className={styles.column_name}>
                            <p>Due Date</p>
                            <TbArrowsUpDown/>  
                        </div>
                        <div className={styles.column_name}>
                            <p>Status</p>
                            <TbArrowsUpDown/>  
                        </div>
                    </div>
                    {/*TABLE ROWS*/}
                    <ul className={styles.table_of_projects}>
                        {ProjectsData.map((project) => 
                            project.project_tasks_list.map((task) => { return (<TaskTableItem project={project} task={task}/>)})
                        )}
                    </ul>
                    
                    
                </section>
                {/* PAGINATION */}
                <section className={styles.pagination}>
                    <p className={styles.pagination_diapason}>
                        {`${0} of ${14} row(s) selected.`}
                    </p>
                    <div className={styles.page_switcher}>
                        <button className={`${D ? styles.active_btn : styles.pagination_btn}`}>
                            Previous
                        </button>
                        <button className={styles.pagination_btn}>
                            Next
                        </button>
                    </div>
                </section>
            </div>
        </main>
    )
};
