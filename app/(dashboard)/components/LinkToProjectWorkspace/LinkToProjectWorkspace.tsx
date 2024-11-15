import React from 'react'
import BadgeWithSingleSymbol from '../../../../components/BadgeWithSingleSymbol/BadgeWithSingleSymbol'
import Link from 'next/link'
import { BsChevronExpand } from "react-icons/bs"
import styles from './link-to-project.module.scss'

type linkToProjectProps = {
    workspace_id: string
    project_id: string
    project_name: string
    ui: 'bordered' | 'dark_block' | 'smaller'
}

function LinkToProjectWorkspace({workspace_id, project_id, project_name, ui}: linkToProjectProps) {
    
    const truncate = (name: string) => {
        const maxLength = 17
        if(name.length <= maxLength) return name
        if(name.length > maxLength) return name.substring(0, maxLength) + "..."
    }

    return (
        <Link 
            href={`/workspaces/${workspace_id}/projects/${project_id}`}  
            className={`${styles[ui]}`}>
            <div className={styles.link_inner}>
                <BadgeWithSingleSymbol variant={ui === 'smaller' ? 'cube' : 'cube_big'} symbol={project_name}/>
                <p className={styles.project_name}>{truncate(project_name)}</p>
                { ui === 'dark_block' && <BsChevronExpand color='#8e8e8e'/> }
            </div>
        </Link>
    )
}

export default LinkToProjectWorkspace;