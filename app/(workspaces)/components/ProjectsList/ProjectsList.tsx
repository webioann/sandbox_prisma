import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import LinkToProjectPage from '../LinkToProjectPage/LinkToProjectPage'
import { WorkspacesData } from '../../../../NEW_MOCK_DATA'
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
                    {WorkspacesData.map((workspace) => <LinkToProjectPage
                        workspace_id={workspace.workspace_id}
                        project_id={workspace.workspace_id}
                        project_name={workspace.workspace_id}
                        ui='smaller'
                        key={workspace.workspace_id}
                    />)}
                </ul>
            </div>
        </section>
    )
}

export default ProjectsList;
