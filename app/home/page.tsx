import React from 'react'
import TotalResult from '@/components/TotalResult/TotalResult';
import styles from './home.module.scss'

function HomePage() {

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

            <div className="dashboard-wrapper">
                <div className="task-viewer">

                </div>

                <div className="project-viewer">

                </div>
            </div>
        </div>
    )
}

export default HomePage;