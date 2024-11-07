import React from 'react'
import { SiGoogletasks } from "react-icons/si"
import './app-logo.scss'

function AppLogo() {
    return (
        <section className="logo-section">
            <SiGoogletasks size={30} color="#2361ea"/>
            <h3 className='app-name'>Task Manager</h3>
        </section>
    )
}

export default AppLogo;