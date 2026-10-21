// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/navigation'

// import '../componentsStyle/Navbar.css'

// const Navbar = ({
//     toggleSidebar,
//     isSidebarOpen
// }) => {

//     const router = useRouter()

//     const [isProfileOpen, setIsProfileOpen] =
//         useState(false)

//     const profileRef = useRef(null)
//     useEffect(() => {

//         const handleOutsideClick = (event) => {

//             if (
//                 profileRef.current &&
//                 !profileRef.current.contains(event.target)
//             ) {

//                 setIsProfileOpen(false)

//             }

//         }


//         document.addEventListener(
//             'mousedown',
//             handleOutsideClick
//         )


//         return () => {

//             document.removeEventListener(
//                 'mousedown',
//                 handleOutsideClick
//             )

//         }

//     }, [])

 

//     const handleLogout = () => {
 
//         document.cookie =
//             'admin-auth=; path=/; max-age=0; SameSite=Lax'

 
//         localStorage.removeItem('admin-auth')

 
//         setIsProfileOpen(false)

 
//         router.replace('/login')

//     }


//     return (

//         <header className="admin-navbar d-flex align-items-center justify-content-between">
//             <div className="navbar-left d-flex align-items-center gap-2">
//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-desktop border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >

//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     ></i>

//                 </button>
//                 <div className="navbar-search d-flex align-items-center">
//                     <i className="fa-solid fa-magnifying-glass navbar-search-icon"></i>
//                     <input
//                         type="text"
//                         placeholder="Search users, jobs, transactions..."
//                     />
//                 </div>
//             </div>

//             <div className="navbar-right d-flex align-items-center gap-3">
//                 <button
//                     type="button"
//                     className="navbar-notification d-flex align-items-center justify-content-center border-0"
//                 >

//                     <i className="fa-solid fa-bell"></i>
//                 </button>

//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-mobile border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >
//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     ></i>

//                 </button>


//                 <div
//                     className="navbar-profile-wrapper"
//                     ref={profileRef}
//                 >

//                     <button
//                         type="button"
//                         className="navbar-avatar"
//                         onClick={() =>
//                             setIsProfileOpen(
//                                 prev => !prev
//                             )
//                         }
//                         aria-label="Admin profile"
//                     >
//                         AD
//                     </button>

 

//                     {isProfileOpen && (

//                         <div className="navbar-profile-dropdown">

//                             <div className="profile-dropdown-header">

//                                 <div className="profile-dropdown-avatar">
//                                     AD
//                                 </div>

//                                 <div>

//                                     <div className="profile-dropdown-name">
//                                         Admin Team
//                                     </div>

//                                     <div className="profile-dropdown-email">
//                                         gigbiggroup@gmail.com
//                                     </div>

//                                 </div>

//                             </div>


//                             <div className="profile-dropdown-divider"></div>


//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item"
//                                 onClick={() => {
//                                     setIsProfileOpen(false)
//                                     router.push('/settings')
//                                 }}
//                             >

//                                 <i className="fa-solid fa-gear"></i>

//                                 <span>
//                                     Settings
//                                 </span>

//                             </button>


//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item logout-item"
//                                 onClick={handleLogout}
//                             >

//                                 <i className="fa-solid fa-right-from-bracket"></i>

//                                 <span>
//                                     Logout
//                                 </span>

//                             </button>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </header>
//     )
// }

// export default Navbar

















// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/navigation'

// import '../componentsStyle/Navbar.css'

// const Navbar = ({
//     toggleSidebar,
//     isSidebarOpen
// }) => {

//     const router = useRouter()

//     const [isProfileOpen, setIsProfileOpen] =
//         useState(false)

//     const profileRef = useRef(null)
 
//     useEffect(() => {
//         const handleOutsideClick = (event) => {

//             if (
//                 profileRef.current &&
//                 !profileRef.current.contains(event.target)
//             ) {
//                 setIsProfileOpen(false)
//             }

//         }

//         document.addEventListener(
//             'mousedown',
//             handleOutsideClick
//         )

//         return () => {

//             document.removeEventListener(
//                 'mousedown',
//                 handleOutsideClick
//             )

//         }

//     }, [])

//     const handleLogout = () => {
 
//         document.cookie =
//             'admin-auth=; path=/; max-age=0; SameSite=Lax'
//         localStorage.removeItem('admin-auth')

//         setIsProfileOpen(false) 
//         router.replace('/login')
//     }


//     const handleSettings = () => {

//         setIsProfileOpen(false)

//         router.push('/settings')
//     }


//     return (

//         <header className="admin-navbar d-flex align-items-center justify-content-between">
//             <div className="navbar-left d-flex align-items-center gap-2">
//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-desktop border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >

//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     />

//                 </button>
//                 <div className="navbar-search d-flex align-items-center">
//                     <i className="fa-solid fa-magnifying-glass navbar-search-icon" />
//                     <input
//                         type="text"
//                         placeholder="Search users, jobs, transactions..."
//                     />

//                 </div>

//             </div> 

//             <div className="navbar-right d-flex align-items-center gap-3">
//                 <button
//                     type="button"
//                     className="navbar-notification d-flex align-items-center justify-content-center border-0"
//                     aria-label="Notifications"
//                 >

//                     <i className="fa-solid fa-bell" />
//                 </button>
//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-mobile border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >

//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     />

//                 </button>
//                 <div
//                     className="navbar-profile-wrapper"
//                     ref={profileRef}
//                 >

//                     <button
//                         type="button"
//                         className="navbar-avatar"
//                         onClick={() =>
//                             setIsProfileOpen(
//                                 prev => !prev
//                             )
//                         }
//                         aria-label="Admin profile"
//                         aria-expanded={isProfileOpen}
//                     >
//                         AD
//                     </button>


//                     {isProfileOpen && (

//                         <div className="navbar-profile-dropdown">

//                             <div className="profile-dropdown-header">

//                                 <div className="profile-dropdown-avatar">
//                                     AD
//                                 </div>


//                                 <div className="profile-dropdown-info">

//                                     <div className="profile-dropdown-name">
//                                         Admin Team
//                                     </div>

//                                     <div className="profile-dropdown-email">
//                                         gigbiggroup@gmail.com
//                                     </div>

//                                 </div>

//                             </div>


//                             <div className="profile-dropdown-divider" /> 
//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item"
//                                 onClick={handleSettings}
//                             >

//                                 <i className="fa-solid fa-gear" />

//                                 <span>
//                                     Settings
//                                 </span>

//                             </button> 

//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item logout-item"
//                                 onClick={handleLogout}
//                             >

//                                 <i className="fa-solid fa-right-from-bracket" />

//                                 <span>
//                                     Logout
//                                 </span>

//                             </button>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </header>
//     )
// }

// export default Navbar



// 'use client'

// import React, { useEffect, useRef, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import Url from '@/Url'

// import '../componentsStyle/Navbar.css'

// const Navbar = ({
//     toggleSidebar,
//     isSidebarOpen
// }) => {

//     const router = useRouter()

//     const [isProfileOpen, setIsProfileOpen] =
//         useState(false)

//     const [user, setUser] = useState(null)

//     const profileRef = useRef(null)

//     useEffect(() => {
//         const loadUser = async () => {
//             // pehle localStorage se instant dikha do
//             const raw = localStorage.getItem('translator-user')
//             if (raw) {
//                 try {
//                     setUser(JSON.parse(raw))
//                 } catch {
//                     setUser(null)
//                 }
//             }

//             // phir backend se fresh data confirm/update kar lo
//             try {
//                 const res = await fetch(`${Url}/api/translator/me`, {
//                     credentials: 'include',
//                 })
//                 const json = await res.json()

//                 if (res.ok && json.success) {
//                     const freshUser = {
//                         id: json.data._id,
//                         fullName: json.data.fullName,
//                         email: json.data.email,
//                         canWork: json.data.canWork,
//                     }
//                     setUser(freshUser)
//                     localStorage.setItem('translator-user', JSON.stringify(freshUser))
//                 }
//             } catch (err) {
//                 console.error(err)
//             }
//         }

//         loadUser()
//     }, [])

//     useEffect(() => {
//         const handleOutsideClick = (event) => {

//             if (
//                 profileRef.current &&
//                 !profileRef.current.contains(event.target)
//             ) {
//                 setIsProfileOpen(false)
//             }

//         }

//         document.addEventListener(
//             'mousedown',
//             handleOutsideClick
//         )

//         return () => {

//             document.removeEventListener(
//                 'mousedown',
//                 handleOutsideClick
//             )

//         }

//     }, [])

//     const handleLogout = async () => {

//         try {
//             await fetch(`${Url}/api/translator/logout`, {
//                 method: 'POST',
//                 credentials: 'include',
//             })
//         } catch (err) {
//             console.error(err)
//         }

//         // cookie clear (routing flag)
//         document.cookie =
//             'translator-session=; path=/; max-age=0; SameSite=Lax'

//         // purani/nayi dono localStorage keys clear
//         localStorage.removeItem('translator-user')
//         localStorage.removeItem('translator-auth')
//         localStorage.removeItem('admin-auth')

//         setIsProfileOpen(false)
//         setUser(null)

//         router.replace('/login')
//         router.refresh()
//     }


//     const handleSettings = () => {

//         setIsProfileOpen(false)

//         router.push('/settings')
//     }

//     const initials = user?.fullName
//         ? user.fullName
//               .split(' ')
//               .map((n) => n.charAt(0).toUpperCase())
//               .slice(0, 2)
//               .join('')
//         : '?'

//     return (

//         <header className="admin-navbar d-flex align-items-center justify-content-between">
//             <div className="navbar-left d-flex align-items-center gap-2">
//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-desktop border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >

//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     />

//                 </button>
//                 <div className="navbar-search d-flex align-items-center">
//                     <i className="fa-solid fa-magnifying-glass navbar-search-icon" />
//                     <input
//                         type="text"
//                         placeholder="Search users, jobs, transactions..."
//                     />

//                 </div>

//             </div> 

//             <div className="navbar-right d-flex align-items-center gap-3">
//                 <button
//                     type="button"
//                     className="navbar-notification d-flex align-items-center justify-content-center border-0"
//                     aria-label="Notifications"
//                 >

//                     <i className="fa-solid fa-bell" />
//                 </button>
//                 <button
//                     type="button"
//                     className="navbar-menu-button navbar-menu-mobile border-0 bg-transparent"
//                     onClick={toggleSidebar}
//                     aria-label={
//                         isSidebarOpen
//                             ? 'Close sidebar'
//                             : 'Open sidebar'
//                     }
//                 >

//                     <i
//                         className={`fa-solid ${
//                             isSidebarOpen
//                                 ? 'fa-xmark'
//                                 : 'fa-bars'
//                         }`}
//                     />

//                 </button>
//                 <div
//                     className="navbar-profile-wrapper"
//                     ref={profileRef}
//                 >

//                     <button
//                         type="button"
//                         className="navbar-avatar"
//                         onClick={() =>
//                             setIsProfileOpen(
//                                 prev => !prev
//                             )
//                         }
//                         aria-label="Profile"
//                         aria-expanded={isProfileOpen}
//                     >
//                         {initials}
//                     </button>


//                     {isProfileOpen && (

//                         <div className="navbar-profile-dropdown">

//                             <div className="profile-dropdown-header">

//                                 <div className="profile-dropdown-avatar">
//                                     {initials}
//                                 </div>


//                                 <div className="profile-dropdown-info">

//                                     <div className="profile-dropdown-name">
//                                         {user?.fullName || 'Guest'}
//                                     </div>

//                                     <div className="profile-dropdown-email">
//                                         {user?.email || ''}
//                                     </div>

//                                 </div>

//                             </div>


//                             <div className="profile-dropdown-divider" /> 
//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item"
//                                 onClick={handleSettings}
//                             >

//                                 <i className="fa-solid fa-gear" />

//                                 <span>
//                                     Settings
//                                 </span>

//                             </button> 

//                             <button
//                                 type="button"
//                                 className="profile-dropdown-item logout-item"
//                                 onClick={handleLogout}
//                             >

//                                 <i className="fa-solid fa-right-from-bracket" />

//                                 <span>
//                                     Logout
//                                 </span>

//                             </button>

//                         </div>

//                     )}

//                 </div>

//             </div>

//         </header>
//     )
// }

// export default Navbar










'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Url from '@/Url'

import '../componentsStyle/Navbar.css'

const Navbar = ({
    toggleSidebar,
    isSidebarOpen
}) => {

    const router = useRouter()

    const [isProfileOpen, setIsProfileOpen] =
        useState(false)

    const [user, setUser] = useState(null)

    const profileRef = useRef(null)

    useEffect(() => {
        const loadUser = async () => {
            // pehle localStorage se instant dikha do
            const raw = localStorage.getItem('translator-user')
            if (raw) {
                try {
                    setUser(JSON.parse(raw))
                } catch {
                    setUser(null)
                }
            }

            // phir backend se fresh data confirm/update kar lo
            try {
                const res = await fetch(`${Url}/api/translator/me`, {
                    credentials: 'include',
                })
                const json = await res.json()

                if (res.status === 401) {
                    clearSession()
                    window.location.assign('/login?type=translator')
                    return
                }

                if (res.ok && json.success) {
                    const freshUser = {
                        id: json.data._id,
                        fullName: json.data.fullName,
                        email: json.data.email,
                        canWork: json.data.canWork,
                    }
                    setUser(freshUser)
                    localStorage.setItem('translator-user', JSON.stringify(freshUser))
                }
            } catch (err) {
                console.error(err)
            }
        }

        loadUser()
    }, [])

    useEffect(() => {
        const handleOutsideClick = (event) => {

            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false)
            }

        }

        document.addEventListener(
            'mousedown',
            handleOutsideClick
        )

        return () => {

            document.removeEventListener(
                'mousedown',
                handleOutsideClick
            )

        }

    }, [])

    // Clears EVERYTHING that says "translator is logged in":
    // dashboard keys + client-site keys (client Navbar uses
    // translatorToken / activeUserType to show "Logout").
    const clearSession = () => {
        document.cookie =
            'translator-session=; path=/; max-age=0; SameSite=Lax'

        localStorage.removeItem('translator-user')
        localStorage.removeItem('translator-auth')
        localStorage.removeItem('admin-auth')

        localStorage.removeItem('translatorToken')

        if (localStorage.getItem('activeUserType') === 'translator') {
            localStorage.removeItem('activeUserType')
        }
    }

    const handleLogout = async () => {

        try {
            await fetch(`${Url}/api/translator/logout`, {
                method: 'POST',
                credentials: 'include',
            })
        } catch (err) {
            console.error(err)
        }

        clearSession()

        setIsProfileOpen(false)
        setUser(null)

        // Full page load: client site starts fresh, logged out.
        window.location.assign('/login?type=translator')
    }


    const handleSettings = () => {

        setIsProfileOpen(false)

        router.push('/settings')
    }

    const initials = user?.fullName
        ? user.fullName
              .split(' ')
              .map((n) => n.charAt(0).toUpperCase())
              .slice(0, 2)
              .join('')
        : '?'

    return (

        <header className="admin-navbar d-flex align-items-center justify-content-between">
            <div className="navbar-left d-flex align-items-center gap-2">
                <button
                    type="button"
                    className="navbar-menu-button navbar-menu-desktop border-0 bg-transparent"
                    onClick={toggleSidebar}
                    aria-label={
                        isSidebarOpen
                            ? 'Close sidebar'
                            : 'Open sidebar'
                    }
                >

                    <i
                        className={`fa-solid ${
                            isSidebarOpen
                                ? 'fa-xmark'
                                : 'fa-bars'
                        }`}
                    />

                </button>
                <div className="navbar-search d-flex align-items-center">
                    <i className="fa-solid fa-magnifying-glass navbar-search-icon" />
                    <input
                        type="text"
                        placeholder="Search users, jobs, transactions..."
                    />

                </div>

            </div> 

            <div className="navbar-right d-flex align-items-center gap-3">
                <button
                    type="button"
                    className="navbar-notification d-flex align-items-center justify-content-center border-0"
                    aria-label="Notifications"
                >

                    <i className="fa-solid fa-bell" />
                </button>
                <button
                    type="button"
                    className="navbar-menu-button navbar-menu-mobile border-0 bg-transparent"
                    onClick={toggleSidebar}
                    aria-label={
                        isSidebarOpen
                            ? 'Close sidebar'
                            : 'Open sidebar'
                    }
                >

                    <i
                        className={`fa-solid ${
                            isSidebarOpen
                                ? 'fa-xmark'
                                : 'fa-bars'
                        }`}
                    />

                </button>
                <div
                    className="navbar-profile-wrapper"
                    ref={profileRef}
                >

                    <button
                        type="button"
                        className="navbar-avatar"
                        onClick={() =>
                            setIsProfileOpen(
                                prev => !prev
                            )
                        }
                        aria-label="Profile"
                        aria-expanded={isProfileOpen}
                    >
                        {initials}
                    </button>


                    {isProfileOpen && (

                        <div className="navbar-profile-dropdown">

                            <div className="profile-dropdown-header">

                                <div className="profile-dropdown-avatar">
                                    {initials}
                                </div>


                                <div className="profile-dropdown-info">

                                    <div className="profile-dropdown-name">
                                        {user?.fullName || 'Guest'}
                                    </div>

                                    <div className="profile-dropdown-email">
                                        {user?.email || ''}
                                    </div>

                                </div>

                            </div>


                            <div className="profile-dropdown-divider" /> 
                            <button
                                type="button"
                                className="profile-dropdown-item"
                                onClick={handleSettings}
                            >

                                <i className="fa-solid fa-gear" />

                                <span>
                                    Settings
                                </span>

                            </button> 

                            <button
                                type="button"
                                className="profile-dropdown-item logout-item"
                                onClick={handleLogout}
                            >

                                <i className="fa-solid fa-right-from-bracket" />

                                <span>
                                    Logout
                                </span>

                            </button>

                        </div>

                    )}

                </div>

            </div>

        </header>
    )
}

export default Navbar