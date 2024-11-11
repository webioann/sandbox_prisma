import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai"
import LinkToProjectWorkspace from '../LinkToProjectWorkspace/LinkToProjectWorkspace';
import './projects-list.scss'

function ProjectsList() {

    const data = [
        { id: 'aefawmmmjm', project: 'Mobile App Development'},
        { id: 'aefawsddfcc', project: 'Website Redisign'}
    ]

    return (
        <section className="projects">
            <div>
                <header className='projects-header'>
                    <p className="projects-title">PROJECTS</p>
                    <AiFillPlusCircle color='#b5b5b5' size={20}/>
                </header>
                <ul className='projects-list'>
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
