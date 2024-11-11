import React from 'react'
import Link from 'next/link';
import { AiFillPlusCircle } from "react-icons/ai";
import BadgeWithSingleSymbol from '../BadgeWithSingleSymbol/BadgeWithSingleSymbol';
import './projects-link-list.scss'

function ProjectsLinkList() {

    const data = [
        { id: 1, project: 'Mobile App Development'},
        { id: 2, project: 'Website Redisign'}
    ]

    const truncate = (name: string) => {
        const maxLength = 17
        if(name.length <= maxLength) return name
        if(name.length > maxLength) return name.substring(0, maxLength) + "..."
    }
    // function create "humanity" path for project id URL ==========
    const createProjectIdPath = (name: string) => {
        const pathMaxLength = 25
        let res = '/project/' + name.slice(0, pathMaxLength).toLowerCase().replaceAll(" ", "_")
        console.log(res)
        return res
    }

    return (
        <section className="projects">
            <div>
                <header className='projects-header'>
                    <p className="projects-title">PROJECTS</p>
                    <AiFillPlusCircle color='#b5b5b5' size={20}/>
                </header>
                <ul className='projects-list'>
                    {data.map((item) => 
                        <Link href={createProjectIdPath(item.project)} className='project-link'>
                            <BadgeWithSingleSymbol variant='cube' symbol={item.project}/>
                            <h4 className='project-name'>
                                {truncate(item.project)}
                            </h4>
                        </Link>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default ProjectsLinkList