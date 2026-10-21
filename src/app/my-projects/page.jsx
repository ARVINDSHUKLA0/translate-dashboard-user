
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import './MyProjects.css'

const initialProjects = [
  {
    id: 1,
    title: 'App Store Description',
    client: 'Lumen Studio',
    info: '320 words',
    stage: 'New',
  },
  {
    id: 2,
    title: 'Product Launch Deck',
    client: 'Northwind Legal',
    info: 'due 2d',
    stage: 'In Progress',
  },
  {
    id: 3,
    title: 'User Manual',
    client: 'Atlas Robotics',
    info: 'due 4d',
    stage: 'In Progress',
  },
  {
    id: 4,
    title: 'User Manual — revision',
    client: 'Atlas Robotics',
    info: '',
    stage: 'In Review',
  },
  {
    id: 5,
    title: 'Investor Update',
    client: 'Fenwick Capital',
    info: '',
    stage: 'Delivered',
  },
  {
    id: 6,
    title: 'Marketing Site Copy',
    client: 'Relay Studio',
    info: '',
    stage: 'Completed',
  },
]

const stages = [
  'New',
  'In Progress',
  'In Review',
  'Delivered',
  'Completed',
]

const page = () => {
  const [projects, setProjects] = useState(initialProjects)
  const [draggedProject, setDraggedProject] = useState(null)

  const handleDragStart = (project) => {
    setDraggedProject(project)
  }

  const handleDragEnd = () => {
    setDraggedProject(null)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (stage) => {
    if (!draggedProject) return

    setProjects((currentProjects) =>
      currentProjects.map((project) =>
        project.id === draggedProject.id
          ? {
              ...project,
              stage: stage,
            }
          : project
      )
    )

    setDraggedProject(null)
  }

  const getProjectsByStage = (stage) => {
    return projects.filter((project) => project.stage === stage)
  }

  return (
    <div className="my-projects-page container-fluid min-vh-100 p-3 p-md-4">

      <div className="row mb-4">

        <div className="col-lg-12 col-md-12 col-sm-12 col-12">

          <h4 className="mb-2 fs-20 fw-bold">
            My projects
          </h4>

          <p className="mb-0 text-secondary fs-14">
            Drag cards as work moves through each stage.
          </p>

        </div>

      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">

        {stages.map((stage) => {
          const stageProjects = getProjectsByStage(stage)

          return (
            <div
              key={stage}
              className="col"
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(stage)}
            >

              <div className="d-flex justify-content-between align-items-center px-3 mb-2">

                <span className="text-uppercase fw-semibold fs-12">
                  {stage}
                </span>

                <span className="fw-semibold fs-12">
                  {stageProjects.length}
                </span>

              </div>

              <div className="project-column">

                {stageProjects.map((project) => {

                  const projectCard = (
                    <div
                      draggable
                      onDragStart={() => handleDragStart(project)}
                      onDragEnd={handleDragEnd}
                      className={`project-card bg-white border rounded-3 p-3 mb-3 ${
                        project.id === 6 ? 'project-card-disabled' : ''
                      }`}
                    >

                      <h6 className="mb-2 fs-13 fw-semibold">
                        {project.title}
                      </h6>

                      <div className="text-secondary font-monospace">

                        <span className="fs-12">
                          {project.client}
                        </span>

                        {project.info && (
                          <>
                            <span className="mx-2">
                              ·
                            </span>

                            <span className="fs-14">
                              {project.info}
                            </span>
                          </>
                        )}

                      </div>

                    </div>
                  )

                  if (project.id === 6) {
                    return (
                      <div
                        key={project.id}
                        className="text-decoration-none text-dark"
                      >
                        {projectCard}
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={project.id}
                      href={`/my-projects/${project.id}`}
                      className="text-decoration-none text-dark"
                    >
                      {projectCard}
                    </Link>
                  )
                })}

              </div>

            </div>
          )
        })}

      </div>

    </div>
  )
}

export default page