"use server";
import TotalResult from '@/components/TotalResult/TotalResult'
import TaskDetailsViewLink from '@/components/TaskDetailsViewLink/TaskDetailsViewLink'
import PersonBoard from '@/components/PersonBoard/PersonBoard'
import ProjectBoard from '@/components/ProjectBoard/ProjectBoard'
import { FaPlus } from "react-icons/fa"
import { LuSettings } from "react-icons/lu"
import styles from './home.module.scss'

const HomePage = async() => {
    let tasks = 14
    let projects = 2
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json();
    // console.log(users);
    return (
        <div className={styles.home_page}>
            {/* TOTAL RESULTS ROW */}
            <div className={styles.total_results}>
                <TotalResult title='Total Projects' total={10}/>
                <TotalResult title='Total Tasks' total={14}/>
                <TotalResult title='Assigned Tasks' total={7}/>
                <TotalResult title='Completed Task' total={2}/>
                <TotalResult title='Overdue Tasks' total={0}/>
            </div>

            {/* DASHBOARD */}
            <div className={styles.dashboard_wrapper}>
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
                            <PersonBoard/>
                            <PersonBoard/>
                            <PersonBoard/>
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
                        <ProjectBoard/>
                        <ProjectBoard/>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default HomePage;