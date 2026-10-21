'use client'

import React, { useState } from 'react'
import './settings.css'

const page = () => {
    const [activeTab, setActiveTab] = useState('Account')

    const [formData, setFormData] = useState({
        fullName: 'Elena Vidal',
        email: 'elena.vidal@mail.com',
        matchingJobs: true,
        deadlineAlerts: false,
    })

    const tabs = ['Account', 'Payout', 'Notifications', 'Tax info']

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }))
    }

    const handleSave = (e) => {
        e.preventDefault()

        // Baad mein yahi par API call laga dena
        console.log('Settings Data:', formData)
    }

    return (
        <div className="settings-page container-fluid py-3 py-md-4">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                    <h4 className="fw-bold mb-4 fs-20">Settings</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 col-md-10 col-sm-12 col-12">
                    <div className="settings-tabs d-flex flex-wrap gap-1 p-1 mb-4">

                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                type="button"
                                className={`btn px-4 py-2 fs-14 fw-semibold ${activeTab === tab
                                        ? 'bg-white shadow-sm'
                                        : 'btn-light'
                                    }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}

                    </div>
                </div>
            </div>

            {activeTab === 'Account' && (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">

                        <div className="settings-card bg-white border rounded-4 shadow-sm p-4 p-md-4">
                            <form onSubmit={handleSave}>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                                        <label
                                            htmlFor="fullName"
                                            className="form-label fw-semibold fs-14"
                                        >
                                            Full name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="form-control form-control-lg fs-12"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mb-4">

                                        <label
                                            htmlFor="email"
                                            className="form-label fw-semibold fs-14"
                                        >
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-control form-control-lg fs-13"
                                        />

                                    </div>
                                </div>
 
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">

                                        <div className="d-flex align-items-center justify-content-between border-bottom py-3">

                                            <label
                                                htmlFor="matchingJobs"
                                                className="fw-semibold mb-0 fs-14"
                                            >
                                                Email me about new matching jobs
                                            </label>

                                            <div className="form-check form-switch m-0">
                                                <input
                                                    className="form-check-input settings-switch fs-12"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="matchingJobs"
                                                    name="matchingJobs"
                                                    checked={formData.matchingJobs}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                        </div>

                                    </div>
                                </div>
 
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">

                                        <div className="d-flex align-items-center justify-content-between border-bottom py-3">

                                            <label
                                                htmlFor="deadlineAlerts"
                                                className="fw-semibold mb-0 fs-14" 
                                            >
                                                SMS alerts for deadlines
                                            </label>

                                            <div className="form-check form-switch m-0">
                                                <input
                                                    className="form-check-input settings-switch"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="deadlineAlerts"
                                                    name="deadlineAlerts"
                                                    checked={formData.deadlineAlerts}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                        </div>

                                    </div>
                                </div>

                                {/* Save Button */}
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 pt-4">

                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-lg fw-semibold px-4 fs-14"
                                        >
                                            Save changes
                                        </button>

                                    </div>
                                </div>

                            </form>

                        </div>

                    </div>
                </div>
            )}

            {/* Payout */}
            {activeTab === 'Payout' && (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="settings-card bg-white border rounded-4 shadow-sm p-4">
                            <h5 className="fw-bold mb-2">Payout</h5>
                            <p className="mb-0">
                                Payout settings will be available here.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'Notifications' && (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="settings-card bg-white border rounded-4 shadow-sm p-4">
                            <h5 className="fw-bold mb-2">Notifications</h5>
                            <p className="mb-0">
                                Notification settings will be available here.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'Tax info' && (
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="settings-card bg-white border rounded-4 shadow-sm p-4">
                            <h5 className="fw-bold mb-2">Tax info</h5>
                            <p className="mb-0">
                                Tax information will be available here.
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default page