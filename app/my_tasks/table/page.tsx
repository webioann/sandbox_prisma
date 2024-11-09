import React from 'react'
import TaskPageNavigation from '@/components/TaskPageNavigation/TaskPageNavigation'
import styles from './table.module.scss'

export default function TablePage() {
    
    return (
        <main className={styles.page}>
            <div className={styles.task_page}>
                <TaskPageNavigation/>



                <div className={styles.filters_row}></div>



                <ul className={styles.tasks_full_list}></ul>



                <div className={styles.pagination}></div>

            </div>
        </main>
    )
};
