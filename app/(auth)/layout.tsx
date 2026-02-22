import { getServerSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'

const AuthLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const session = await getServerSession()

    if (session) {
        redirect("/")
    }
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            {children}
        </div>

    )
}

export default AuthLayout