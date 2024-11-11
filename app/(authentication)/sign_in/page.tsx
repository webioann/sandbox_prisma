import LoginForm from '../components/LoginForm/LoginForm'
import Link from 'next/link';
import './login.scss'

function SignInPage() {
    return (
        <main className='login-page'>
            <Link href={'/home'}>Sign In on App</Link>
            <LoginForm/>
        </main>
    )
}

export default SignInPage;