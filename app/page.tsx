'use server'
import { redirect } from 'next/navigation'

async function InitialRootPage() {
    redirect(`/sign_in`) // Navigate to the Browse page
}

export default InitialRootPage;
