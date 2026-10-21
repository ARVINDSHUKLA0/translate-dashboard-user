'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import './ProjectDetails.css'

const projects = [
  {
    id: 1,
    title: 'App Store Description',
    client: 'Lumen Studio',
    words: '320 words',
    amount: '$120.00',
    due: 'DUE IN 2D 6H',
    clientName: 'Maya Wilson',
    initials: 'MW',
    rating: '4.9',
  },
  {
    id: 2,
    title: 'Product Launch Deck',
    client: 'Northwind Legal',
    words: '1,240 words',
    amount: '$161.20',
    due: 'DUE IN 1D 6H',
    clientName: 'Noah Carter',
    initials: 'NC',
    rating: '4.8',
  },
  {
    id: 3,
    title: 'User Manual',
    client: 'Atlas Robotics',
    words: '2,180 words',
    amount: '$245.00',
    due: 'DUE IN 2D 4H',
    clientName: 'Liam Parker',
    initials: 'LP',
    rating: '4.9',
  },
  {
    id: 4,
    title: 'User Manual — revision',
    client: 'Atlas Robotics',
    words: '680 words',
    amount: '$95.00',
    due: 'DUE IN 4D 2H',
    clientName: 'Liam Parker',
    initials: 'LP',
    rating: '4.9',
  },
  {
    id: 5,
    title: 'Investor Update',
    client: 'Fenwick Capital',
    words: '940 words',
    amount: '$140.00',
    due: 'DELIVERED',
    clientName: 'Daniel Brooks',
    initials: 'DB',
    rating: '4.7',
  },
  {
    id: 6,
    title: 'Marketing Site Copy',
    client: 'Relay Studio',
    words: '1,540 words',
    amount: '$180.00',
    due: 'COMPLETED',
    clientName: 'Sarah Miller',
    initials: 'SM',
    rating: '4.9',
  },
]

const page = () => {
  const params = useParams()
  const projectId = Number(params.id)

  const project =
    projects.find((item) => item.id === projectId) || projects[0]

  const [selectedFile, setSelectedFile] = useState(null)
  const [isDelivered, setIsDelivered] = useState(
    project.id === 5 || project.id === 6
  )

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]

    if (file) {
      setSelectedFile(file)
    }
  }

  const handleDropFile = (e) => {
    e.preventDefault()

    const file = e.dataTransfer.files?.[0]

    if (file) {
      setSelectedFile(file)
    }
  }

  const handleMarkDelivered = () => {
    if (!selectedFile && !isDelivered) {
      return
    }

    setIsDelivered(true)
  }

  return (
    <div className="project-details-page container-fluid min-vh-100 p-3 p-md-4">

      <div className="row mb-3">

        <div className="col-lg-12 col-md-12 col-sm-12 col-12">

          <Link
            href="/my-projects"
            className="text-decoration-none fs-14"
          >
            ← Back to my projects
          </Link>

        </div>

      </div>

      <div className="row align-items-start mb-4">

        <div className="col-lg-9 col-md-8 col-sm-12 col-12">

          <h3 className="fw-bold mb-1 fs-20">
            {project.title}
            {' — EN → ES'}
          </h3>

          <p className="text-secondary mb-0 fs-12">
            {project.client} · {project.words} · {project.amount}
          </p>

        </div>

        <div className="col-lg-3 col-md-4 col-sm-12 col-12 text-lg-end mt-3 mt-md-0">

          <span className="project-due-badge">
            {project.due}
          </span>

        </div>

      </div>

      <div className="row g-4">

        <div className="col-lg-8 col-md-12 col-sm-12 col-12">

          <div className="card border rounded-3 shadow-sm mb-4">

            <div className="card-body p-3 p-md-4">

              <h5 className="fw-bold fs-20">
                Deliver your work
              </h5>

              <label
                htmlFor="translated-file"
                className="upload-box d-flex flex-column justify-content-center align-items-center text-center"
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDropFile}
              >

                <div className="upload-icon mb-2">
                  <i className="fa-solid fa-image"></i>
                </div>

                {selectedFile ? (
                  <>
                    <div className="fw-semibold mb-1 fs-12">
                      {selectedFile.name}
                    </div>

                    <div className="text-secondary fs-14">
                      File selected successfully
                    </div>
                  </>
                ) : (
                  <div className="text-secondary fs-15">
                    Drag & drop your translated file, or{' '}
                    <span className="fw-semibold text-primary">
                      browse
                    </span>
                  </div>
                )}

              </label>

              <input
                id="translated-file"
                type="file"
                className="d-none"
                onChange={handleFileChange}
              />

              <button
                type="button"
                onClick={handleMarkDelivered}
                disabled={!selectedFile && !isDelivered}
                className="btn btn-primary w-100 mt-3 fw-semibold"
              >
                {isDelivered
                  ? 'Marked as delivered'
                  : 'Mark as delivered'}
              </button>

            </div>

          </div>

          <div className="card border rounded-3 shadow-sm">

            <div className="card-body p-3 p-md-4">

              <h5 className="fw-bold mb-4">
                Milestones
              </h5>

              <div className="milestone-list">

                <div className="milestone-item completed">

                  <div className="milestone-dot">
                    <span></span>
                  </div>

                  <div className="milestone-content">

                    <div className="fw-semibold fs-14">
                      Job accepted
                    </div>

                    <div className="text-secondary fs-12 font-monospace">
                      Aug 22, 2:40 PM
                    </div>

                  </div>

                </div>

                <div className="milestone-item completed">

                  <div className="milestone-dot">
                    <span></span>
                  </div>

                  <div className="milestone-content">

                    <div className="fw-semibold fs-14">
                      First draft delivered
                    </div>

                    <div className="text-secondary fs-12 font-monospace">
                      Aug 24, 11:02 AM
                    </div>

                  </div>

                </div>

                <div className="milestone-item">

                  <div className="milestone-dot">
                    <span></span>
                  </div>

                  <div className="milestone-content">

                    <div className="fw-semibold fs-14">
                      Client review
                    </div>

                    <div className="text-secondary fs-12 font-monospace">
                      In progress
                    </div>

                  </div>

                </div>

                <div className="milestone-item last">

                  <div className="milestone-dot">
                    <span></span>
                  </div>

                  <div className="milestone-content">

                    <div className="fw-semibold fs-14">
                      Final approval & payout
                    </div>

                    <div className="text-secondary fs-12 font-monospace">
                      Pending
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 col-12">

          <div className="card border rounded-3 shadow-sm mb-4">

            <div className="card-body p-3 p-md-4">

              <h5 className="fw-bold mb-3">
                Client
              </h5>

              <div className="d-flex align-items-center mb-3">

                <div className="client-avatar me-3">
                  {project.initials}
                </div>

                <div>

                  <div className="fw-semibold fs-14">
                    {project.clientName}
                  </div>

                  <div className="text-secondary fs-13">
                    {project.client} · ★ {project.rating}
                  </div>

                </div>

              </div>

              <button
                type="button"
                className="btn btn-outline-dark w-100 fw-semibold"
              >
                Message client
              </button>

            </div>

          </div>

          <div className="card border rounded-3 shadow-sm">

            <div className="card-body p-3 p-md-4">

              <h5 className="fw-bold mb-3">
                Payout
              </h5>

              <div className="payout-amount">
                {project.amount}
              </div>

              <p className="text-secondary fs-13 mb-0">
                Releases automatically once approved.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default page