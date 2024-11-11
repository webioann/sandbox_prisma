import type { Metadata } from "next";
import SidebarWrapper from "@/app/(dashboard)/components/SidebarWrapper/Sidebar"
import WorkspacesList from './components/WorkspacesList/WorkspacesList'
import AppLogo from "@/app/(dashboard)/components/AppLogo/AppLogo"
import Navigation from "@/app/(dashboard)/components/Navigation/Navigation"
import ContainerFluid from "@/components/Containers/ContainerFluid"
import ContainerMain from "@/components/Containers/ContainerMain"
import TopHeader from "@/components/TopHeader/TopHeader"
import ProjectsList from "@/app/(dashboard)/components/ProjectsList/ProjectsList"

export const metadata: Metadata = {
  title: "dashboard",
  description: "Generated by create next app",
};

export default async function Dashboard_Layout({ children }: Readonly<{children: React.ReactNode}>) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json();
  // console.log(users);

    return (
      <ContainerFluid width={1400}>
        <SidebarWrapper>
          <AppLogo/>
          <WorkspacesList/>
          <Navigation/>
          <ProjectsList/>
        </SidebarWrapper>
        <ContainerMain>
          <TopHeader/> 
          {children}
        </ContainerMain>
      </ContainerFluid>
  );
}
