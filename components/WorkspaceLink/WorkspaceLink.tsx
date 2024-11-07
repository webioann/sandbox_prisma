import React from 'react'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol';
import './workspace-link.css'

function WorkspaceLink() {
    return (
        <div className='shield'>
            <BadgeWithSymbol variant='big-cube' symbol='aqertgtq'/>
            <BadgeWithSymbol variant='cube' symbol='aryey'/>
            <BadgeWithSymbol variant='circle' symbol='agre'/>
        </div>
    )
}

export default WorkspaceLink;