import React from 'react'
import BadgeWithSingleSymbol from '../../../../components/BadgeWithSingleSymbol/BadgeWithSingleSymbol';
import { PiArrowsDownUp } from "react-icons/pi";
import styles from './workspace-link.module.scss'

type workspaceProps = {
    workspace_name: string
}

function WorkspaceLink({workspace_name}: workspaceProps) {
    return (
        <div className={styles.workspace_link}>
            <BadgeWithSingleSymbol variant='cube_big' symbol={workspace_name}/>
            <h4 className={styles.workspace_name}>{workspace_name}</h4>
            <PiArrowsDownUp color='grey' size={20}/>
        </div>
    )
}

export default WorkspaceLink;