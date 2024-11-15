"use server";
import TotalResult from '@/app/(dashboard)/components/TotalResult/TotalResult'
import TaskDetailsViewLink from '@/app/(dashboard)/components/TaskDetailsViewLink/TaskDetailsViewLink'
import PersonWidget from '../components/PersonWidget/PersonWidget'
import LinkToProjectWorkspace  from '@/app/(dashboard)/components/LinkToProjectWorkspace/LinkToProjectWorkspace'
import { FaPlus } from "react-icons/fa"
import { LuSettings } from "react-icons/lu"
import styles from './workspaces.module.scss'

import Link from 'next/link';

// type user = {
//     id: number
//     name: string
//     username: string
//     email: string
//     address: {
//         street: string
//         suite: string
//         city: string
//         zipcode: string
//         geo: [Object]
//     },
//     phone: string
//     website: string
//     company: {
//         name: string
//         catchPhrase: string
//         bs: string
//     }
// }

const Workspaces_Page = async() => {
// TODO: in this place fetch full Data list
    let tasks = 14
    let projects = 2
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await response.json();
    // console.log(users);

    const ID = "_id_root"
    return (
        <div className={styles.workspaces_page}>
            {/* TOTAL RESULTS ROW */}
            <div className={styles.total_results}>
                <TotalResult title='Total Projects' total={10}/>
                <TotalResult title='Total Tasks' total={14}/>
                <TotalResult title='Assigned Tasks' total={7}/>
                <TotalResult title='Completed Task' total={2}/>
                <TotalResult title='Overdue Tasks' total={0}/>
                <Link href={`/workspace/${ID}`}>GOOOOOOOOOOOO</Link>
            </div>

            {/* workspaces */}
            <div className={styles.workspaces}>
                <div className={styles.tasks_viewer}>
                    {/* assigned tasks block */}
                    <section className={styles.assigned_section}>
                        <div className={styles.assigned_header}>
                            <h4 className={styles.title}>Assigned Tasks ({tasks})</h4>
                            <div className={styles.plus_button}>
                                <FaPlus size={12} color='grey'/>
                            </div>
                        </div>
                        <ul className={styles.tasks_viewer_list}>
                            <TaskDetailsViewLink/>
                            <TaskDetailsViewLink/>
                            <TaskDetailsViewLink/>
                            <TaskDetailsViewLink/>
                        </ul>
                        <button className={styles.show_all_button}>
                            <p className={styles.inner_text}>Show All</p>
                        </button>
                    </section>
                    <section className={styles.people_section}>
                        <div className={styles.people_header}>
                            <h4 className={styles.title}>People ({2})</h4>
                            <div className={styles.settings_button}>
                                <LuSettings size={12} color='grey'/>
                            </div>
                        </div>
                        <ul className={styles.people_list}>
                            <PersonWidget/>
                            <PersonWidget/>
                            <PersonWidget/>
                        </ul>
                    </section>
                </div>
                <section className={styles.projects_viewer}>
                    <div className={styles.projects_header}>
                        <h4 className={styles.title}>Projects ({projects})</h4>
                        <div className={styles.plus_button}>
                            <FaPlus size={12} color='grey'/>
                        </div>
                    </div>
                    <ul className={styles.projects_list}>
                        <LinkToProjectWorkspace project_id='fffffff' project_name='Google' ui='bordered'/>
                        <LinkToProjectWorkspace project_id='ddddddd' project_name='doogle' ui='bordered'/>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Workspaces_Page;