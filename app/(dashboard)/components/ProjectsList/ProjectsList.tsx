import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import LinkToProjectWorkspace from '../LinkToProjectWorkspace/LinkToProjectWorkspace';
import styles from './projects-list.module.scss'

function ProjectsList() {

    const data = [
        { id: 'aefawmmmjm', project: 'Mobile App Development'},
        { id: 'aefawsddfcc', project: 'Website Redesign'}
    ]

    return (
        <section className={styles.projects_list_block}>
            <div>
                <header className={styles.projects_list_header}>
                    <p className={styles.projects_list_title}>PROJECTS</p>
                    <AiFillPlusCircle color='#b5b5b5' size={20}/>
                </header>
                <ul className={styles.projects_list}>
                    {data.map((item) => <LinkToProjectWorkspace
                        project_id={item.id}
                        project_name={item.project}
                        ui='smaller'
                        key={item.id}
                    />)}
                </ul>
            </div>
        </section>
    )
}

export default ProjectsList;
