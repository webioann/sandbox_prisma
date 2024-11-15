"use server";
import { WorkspacesData } from '../../../NEW_MOCK_DATA'
import TotalResult from '@/app/(dashboard)/components/TotalResult/TotalResult'
import TaskLinkWidget from '../components/TaskDetailsViewLink/TaskLinkWidget';
import PersonWidget from '../components/PersonWidget/PersonWidget'
import LinkToProjectWorkspace  from '@/app/(dashboard)/components/LinkToProjectWorkspace/LinkToProjectWorkspace'
import { FaPlus } from "react-icons/fa"
import { LuSettings } from "react-icons/lu"
import styles from './workspaces.module.scss'

type countFunctionType = () => number

import Link from 'next/link';

const Workspaces_Page = async() => {
// TODO: in this place fetch full Data list
    const countOfProjects: countFunctionType = () => {
        return WorkspacesData.reduce((accum, item) =>{
            return accum + item.projects_list.length
        }, 0)
    }
    const countOfTasks: countFunctionType = () => {
        return WorkspacesData.reduce((accum, item) =>{
            return accum + item.projects_list.reduce((accum, item) => {return accum + item.project_tasks_list.length}, 0) 
        }, 0)
    }
    const countCompletedTasks: countFunctionType = () => {
        return WorkspacesData.reduce((accum, workspace) =>{
            return accum + workspace.projects_list.reduce((accum, project) => 
                {return accum + project.project_tasks_list.filter((item) => 
                    item.task_checked === true).length
                }, 0) 
        }, 0)
    }

    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    // const users = await response.json();
    // console.log(users);

    const ID = "_id_root"
    return (
        <div className={styles.workspaces_page}>
            {/* TOTAL RESULTS ROW */}
            <div className={styles.total_results}>
                <TotalResult title='Total Projects' total={countOfProjects()}/>
                <TotalResult title='Total Tasks' total={countOfTasks()}/>
                <TotalResult title='Assigned Tasks' total={7}/>
                <TotalResult title='Completed Task' total={countCompletedTasks()}/>
                <TotalResult title='Overdue Tasks' total={0}/>
                <Link href={`/workspaces/${ID}`}>GOOOOOOOOOOOO</Link>
            </div>

            {/* workspaces */}
            <div className={styles.workspaces}>
                <div className={styles.tasks_viewer}>
                    {/* assigned tasks block */}
                    <section className={styles.assigned_section}>
                        <div className={styles.assigned_header}>
                            <h4 className={styles.title}>Assigned Tasks ({countOfTasks()})</h4>
                            <div className={styles.plus_button}>
                                <FaPlus size={12} color='grey'/>
                            </div>
                        </div>
                        <ul className={styles.tasks_viewer_list}>
                            { WorkspacesData.map((workspace) =>
                                workspace.projects_list.map((project) => {
                                    let projectId = project.project_id
                                    return project.project_tasks_list.map((task) => 
                                        <TaskLinkWidget key={task.task_id} task={task} projectId={projectId}/>
                                    )
                                }))
                            }
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
                {/* project section */}
                <section className={styles.projects_viewer}>
                    <div className={styles.projects_header}>
                        <h4 className={styles.title}>Projects ({countOfProjects()})</h4>
                        <div className={styles.plus_button}>
                            <FaPlus size={12} color='grey'/>
                        </div>
                    </div>
                    <ul className={styles.projects_list}>
                        {WorkspacesData.map((workspace) => 
                            workspace.projects_list.map((project) => {return (
                                <LinkToProjectWorkspace project_id={project.project_id} project_name={project.project_name} ui='bordered'/>
                        )}))}
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Workspaces_Page;