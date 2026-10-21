'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Url from '@/Url'

// Landing page after a translator logs in from the client website.
// The server already set the secure `translator-auth` cookie during login.
// Here we only confirm that session, set the routing flag used by
// middleware.js, and open the dashboard.
const Page = () => {
    const router = useRouter()
    const [error, setError] = useState('')

    useEffect(() => {
        let cancelled = false

        const continueToDashboard = async () => {
            try {
                const res = await fetch(`${Url}/api/translator/me`, {
                    credentials: 'include',
                })
                const json = await res.json()

                if (cancelled) return

                if (!res.ok || !json.success) {
                    router.replace('/login')
                    return
                }

                const maxAge = 7 * 24 * 60 * 60
                document.cookie = `translator-session=1; path=/; max-age=${maxAge}; SameSite=Lax`

                localStorage.setItem(
                    'translator-user',
                    JSON.stringify({
                        id: json.data._id,
                        fullName: json.data.fullName,
                        email: json.data.email,
                        canWork: json.data.canWork,
                    })
                )

                router.replace('/')
                router.refresh()
            } catch (err) {
                console.error(err)
                if (!cancelled) {
                    setError('Unable to open your dashboard. Please log in again.')
                }
            }
        }

        continueToDashboard()

        return () => {
            cancelled = true
        }
    }, [router])

    return (
        <main className="min-vh-100 d-flex flex-column align-items-center justify-content-center gap-3">
            {error ? (
                <>
                    <p className="text-danger mb-0">{error}</p>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => router.replace('/login')}
                    >
                        Go to login
                    </button>
                </>
            ) : (
                <>
                    <div className="spinner-border text-primary" role="status" />
                    <p className="text-secondary mb-0">Opening your dashboard...</p>
                </>
            )}
        </main>
    )
}

export default Page