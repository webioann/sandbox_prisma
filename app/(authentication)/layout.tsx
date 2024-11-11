import type { Metadata } from "next"
import ContainerFluid from "@/components/Containers/ContainerFluid";

export const metadata: Metadata = {
    title: "authenication",
    description: "Generated by create next app",
};
const styles = {
    backgroundColor: '#fff',
    minWidth: '100%',
    minHeight: '100vh'
}

export default  function Authentication_Layout({children}:
    { children: React.ReactNode}){
    return (
        <main style={styles}>
            <ContainerFluid width={1024}>
                {children}
            </ContainerFluid>
        </main>
    );
}
