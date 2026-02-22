import { authClient } from '@/lib/auth-client'
import { Button } from '../ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

const SignOutButton = () => {
    const router = useRouter()
    return (
        <div>
            <Button
                variant={'outline'}
                onClick={async () => {
                    await authClient.signOut({
                        fetchOptions: {
                            onSuccess: () => {
                                router.push("/sign-in")
                            }
                        }
                    })
                }}
            >
                SignOut
            </Button>
        </div>
    )
}

export default SignOutButton