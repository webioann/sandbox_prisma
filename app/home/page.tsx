import React from 'react'
import TotalResult from '@/components/TotalResult/TotalResult'
import { FaPlus } from "react-icons/fa"
import styles from './home.module.scss'

function HomePage() {
    let tasks = 14
    return (
        <div className={styles.page}>
            {/* ======================= */}
            <div className={styles.total_results}>
                <TotalResult title='Total Projects' total={10}/>
                <TotalResult title='Total Tasks' total={14}/>
                <TotalResult title='Assigned Tasks' total={7}/>
                <TotalResult title='Completed Task' total={2}/>
                <TotalResult title='Overdue Tasks' total={0}/>
            </div>

            <div className={styles.dashboard_wrapper}>

                <div className={styles.tasks_viewer}>
                    {/* assigned tasks block */}
                    <div className={styles.assigned_wrapper}>
                        {/* ========================= */}
                        <div className={styles.assigned_header}>
                            <h4 className={styles.title}>Assigned Tasks ({tasks})</h4>
                            <div className={styles.plus_button}>
                                <FaPlus size={12} color='grey'/>
                            </div>
                        </div>
                        {/* =========================== */}
                        <ul className={styles.project_viewer}>
                            <h1>Hello</h1>
                        </ul>
                        {/* ============================ */}
                        <button className={styles.show_all_button}>
                            <p>Show All</p>
                        </button>
                    </div>
                    {/* people block */}
                    
                </div>



            </div>

        </div>
    )
}

export default HomePage;