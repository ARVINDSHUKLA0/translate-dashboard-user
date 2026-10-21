'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import '../componentsStyle/AsideNavbar.css'

const AsideNavbar = ({
    isSidebarOpen,
    closeSidebarOnPageClick
}) => {

    const pathname = usePathname()

    const navSections = [

        {
            title: 'Workspace',
            items: [
                {
                    label: 'Dashboard',
                    icon: '<i class="fa-solid fa-chart-column"></i>',
                    href: '/',
                },
                {
                    label: 'Job board',
                    icon: '<i class="fa-solid fa-users"></i>',
                    href: '/Job-board',
                },
                {
                    label: 'Messages',
                    icon: '<i class="fa-solid fa-message"></i>',
                    href: '/messages',
                },
                {
                    label: 'My projects',
                    icon: '<i class="fa-solid fa-folder"></i>',
                    href: '/my-projects',
                },
                {
                    label: 'Help & Support',
                    icon: '<i class="fa-solid fa-circle-question"></i>',
                    href: '/',
                },
            ],
        },

        {
            title: 'Earnings',
            items: [
                {
                    label: 'Earnings',
                    icon: '<i class="fa-solid fa-chart-line"></i>',
                    href: '/earnings',
                },
                {
                    label: 'Reviews',
                    icon: '<i class="fa-solid fa-star"></i>',
                    href: '/reviews',
                },
            ],
        },

        {
            title: 'Account',
            items: [
                {
                    label: 'My profile',
                    icon: '<i class="fa-solid fa-id-card"></i>',
                    href: '/my-profile',
                },
                {
                    label: 'Settings',
                    icon: '<i class="fa-solid fa-gear"></i>',
                    href: '/settings',
                },
            ],
        },
    ]

    return (
        <aside
            className={`aside-navbar d-flex flex-column ${isSidebarOpen
                ? 'sidebar-open'
                : 'sidebar-closed'
                }`}
        >

            {/* LOGO */}

            <div className="d-flex align-items-center justify-content-between mb-lg-3 mb-3">

                <span className="fs-24 fw-bold">

                    <Link
                        className="text-decoration-none text-white"
                        href="/"
                    >
                        translate co
                    </Link>

                </span>
            </div>

            <div className="my-lg-3 my-md-3 my-sm-3 my-1 d-flex align-items-center gap-2 available-work rounded-3">
                <div>
                    •
                </div>

                <p className="fs-14 m-0">
                    Available for work
                </p>
            </div>


            <nav className="aside-navigation flex-grow-1">

                {navSections.map((section) => (

                    <div
                        className="aside-nav-section"
                        key={section.title}
                    >

                        <p className="aside-nav-section-title">
                            {section.title}
                        </p>

                        <div className="d-flex flex-column gap-1">

                            {section.items.map((item) => {

                                const isActive =
                                    pathname === item.href

                                return (

                                    <Link
                                        href={item.href}
                                        key={item.label}
                                        onClick={closeSidebarOnPageClick}
                                        className={`aside-nav-item d-flex align-items-center w-100 text-decoration-none ${isActive
                                            ? 'active'
                                            : ''
                                            }`}
                                    >

                                        <span
                                            className="aside-nav-icon"
                                            dangerouslySetInnerHTML={{
                                                __html: item.icon
                                            }}
                                        />

                                        <span className="aside-nav-label">
                                            {item.label}
                                        </span>

                                    </Link>

                                )
                            })}

                        </div>

                    </div>

                ))}

            </nav>


            {/* PROFILE */}

            <div className="aside-profile d-flex align-items-center">

                <div className="profile-avatar d-flex align-items-center justify-content-center">
                    AD
                </div>

                <div className="profile-info">

                    <p className="profile-name">
                        Admin Team
                    </p>

                    <p className="profile-role">
                        Super admin
                    </p>

                </div>

            </div>

        </aside>
    )
}

export default AsideNavbar
 