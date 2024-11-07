import React from 'react'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol'
import { PiArrowsDownUp } from "react-icons/pi";
import './workspace-link.css'

type workspaceProps = {
    workspace_name: string
}

function WorkspaceLink({workspace_name}: workspaceProps) {
    return (
        <div className='workspace-link'>
            <BadgeWithSymbol variant='big-cube' symbol={workspace_name}/>
            <h4 className='workspace-name'>{workspace_name}</h4>
            <PiArrowsDownUp color='grey' size={20}/>
        </div>
    )
}

export default WorkspaceLink;