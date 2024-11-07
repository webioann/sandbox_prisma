import Link from "next/link"
import SignOutButton from "@/components/SignOutButton/SignOutButton"; 
import Sidebar from "@/components/Sidebar/Sidebar"
import WorkspacesList from '../components/WorkspacesList/WorkspacesList'
import AppLogo from "@/components/AppLogo/AppLogo"
import SideNavigation from "@/components/SideNavigation/SideNavigation";
import './global.css'

export default async function Home() {

  return (
    <div className="main-container">
      <div>

      </div>
      <Sidebar>
        <AppLogo/>
        <WorkspacesList/>
        <SideNavigation/>
        {/* navigation menu */}
        <section></section>
        {/* projects section */}
        <section></section>
      </Sidebar>
      <aside>
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
    </div>
  );
}
