import React from 'react'
import WorkspaceLink from "../WorkspaceLink/WorkspaceLink"
import { ProjectsData } from '../../../../MOCH_DATA'
import { AiFillPlusCircle } from "react-icons/ai";
import './workspaces-list.scss'

function WorkspacesList() {

    // const data = [{ id: 1, name: 'Superb Corp'}, { id: 2, name: 'Acme Comp'}]
    
    return (
        <section className="workspaces">
            <div>
                <header className='workspaces-header'>
                    <p className="header-title">WORKSPACES</p>
                    <AiFillPlusCircle color='#b5b5b5' size={20}/>
                </header>
                <ul className='workspaces-list'>
                    {ProjectsData.map((item) => 
                        <WorkspaceLink workspace_name={item.project_name}/>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default WorkspacesList;