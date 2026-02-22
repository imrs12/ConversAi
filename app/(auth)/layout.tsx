import { getServerSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import React from 'react'

const AuthLayout = async ({ children }: Readonly<{ children: React.ReactNode }>) => {
    const session = await getServerSession()

    if (session) {
        redirect("/")
    }
    return (
        <>
            {children}
        </>

    )
}

export default AuthLayout