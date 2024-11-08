'use server'
import { redirect } from 'next/navigation'

async function InitialRootPage() {
    redirect(`/home`) // Navigate to the Browse page
}

export default InitialRootPage;
