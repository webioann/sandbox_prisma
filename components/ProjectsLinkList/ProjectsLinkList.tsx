import React from 'react'
import Link from 'next/link';
import { AiFillPlusCircle } from "react-icons/ai";
import './projects-link-list.scss'
import BadgeWithSymbol from '../BadgeWithSymbol/BadgeWithSymbol';

function ProjectsLinkList() {

    const data = [
        { id: 1, project: 'Mobile App Development'},
        { id: 2, project: 'Website Redisign'}
    ]

    const truncate = (str: string) => {
        const maxLength = 17
        if(str.length <= maxLength) return str
        if(str.length > maxLength) return str.substring(0, maxLength) + "..."
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
                        <Link href={'/'} className='project-link'>
                            <BadgeWithSymbol variant='cube' symbol={item.project}/>
                            <h4 className='project-name'>{truncate(item.project)}</h4>
                        </Link>
                        )
                    }
                </ul>
            </div>
        </section>
    )
}

export default ProjectsLinkList