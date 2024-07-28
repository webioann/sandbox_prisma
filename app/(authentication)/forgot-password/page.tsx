import Link from 'next/link';
import React from 'react'

function ForgotPasswordPage() {
    return (
        <div>You forgot password?
            <Link href='/' className="link-btn">Back to Home</Link>
        </div>
    )
}

export default ForgotPasswordPage;