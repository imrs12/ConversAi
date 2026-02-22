"use client"
import SignOutButton from '@/components/auth/sign-out-button'

const page = () => {

    return (
        <div className='flex flex-col gap-1 justify-center items-center min-h-screen'>
            <div>dashboard</div>
            <SignOutButton></SignOutButton>
        </div>

    )
}

export default page