import Link from "next/link"
import SignOutButton from "@/components/SignOutButton/SignOutButton"; 
import './global.css'

export default async function Home() {

  return (
    <main className="main">
      <section className="container">
        <SignOutButton/>
        <Link href='/register' className="link-btn">Signin</Link>
        <Link href='/todos' className="link-btn">Todos</Link>
        <Link href='/forgot-password' className="link-btn">Forgot Password</Link>
        <h1>HOME PAGE</h1>
      </section>
    </main>
  );
}
