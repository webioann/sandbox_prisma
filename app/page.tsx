import Link from "next/link"
import SignOutButton from "@/components/SignOutButton/SignOutButton"; 
import Sidebar from "@/components/Sidebar/Sidebar"
import WorkspaceLink from "@/components/WorkspaceLink/WorkspaceLink";
import './global.css'

export default async function Home() {

  return (
    <>
      <aside>
        {/* top logo section */}
        <section className="logo-section">
          {/* icon */}
          <h3>Task Manager</h3>
        </section>
        {/* workspaces section */}
        <section className="workspaces">
          <div>
            <p className="workspaces-title"></p>
            <WorkspaceLink/>
          </div>
          <ul className="workspace-item">
            
          </ul>
        </section>
        {/* navigation menu */}
        <section></section>
        {/* projects section */}
        <section></section>
      </aside>

      <main className="main">
        <section className="container">
          {/* <SignOutButton/> */}
          <Link href='/register' className="link-btn">Signin</Link>
          <Link href='/todos' className="link-btn">Todos</Link>
          <Link href='/forgot-password' className="link-btn">Forgot Password</Link>
          <h1>HOME PAGE</h1>
        </section>
      </main>
    </>
  );
}
