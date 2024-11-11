import React from 'react'
import LinkToProjectWorkspace from '../LinkToProjectWorkspace/LinkToProjectWorkspace';
import { ProjectsData } from '../../../../MOCH_DATA'
import { AiFillPlusCircle } from "react-icons/ai";
import styles from'./workspaces-list.module.scss'

function WorkspacesList() {

    return (
        <section className={styles.workspaces}>
            <div>
                <header className={styles.workspaces_header}>
                    <p className={styles.header_title}>WORKSPACES</p>
                    <AiFillPlusCircle color='#b5b5b5' size={20}/>
                </header>
                <ul className={styles.workspaces_list}>
                    {ProjectsData.map((item) => 
                        <LinkToProjectWorkspace 
                            project_id={item.project_id}
                            project_name={item.project_name} 
                            ui='dark_block'
                            key={item.project_id}/>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default WorkspacesList;