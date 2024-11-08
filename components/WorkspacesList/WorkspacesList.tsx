import React from 'react'
import WorkspaceLink from "@/components/WorkspaceLink/WorkspaceLink"
import { AiFillPlusCircle } from "react-icons/ai";
import './workspaces-list.scss'

function WorkspacesList() {

    const data = [{ id: 1, name: 'Superb Corp'}, { id: 2, name: 'Acme Comp'}]
    
    return (
        <section className="workspaces">
            <div>
                <header className='workspaces-header'>
                    <p className="header-title">WORKSPACES</p>
                    <AiFillPlusCircle color='#b5b5b5' size={20}/>
                </header>
                <ul className='workspaces-list'>
                    {data.map((item) => 
                        <WorkspaceLink workspace_name={item.name}/>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default WorkspacesList;