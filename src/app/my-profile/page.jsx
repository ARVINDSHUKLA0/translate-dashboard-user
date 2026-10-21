'use client'

import React, { useState } from 'react'
import './MyProfile.css'

const profileData = {
  headline: 'Certified EN ⇄ ES translator — Legal & Marketing',
  bio: '8 years translating legal contracts and marketing content for LATAM and European clients...',
  ratePerWord: '$0.13',
  specialty: 'Legal',
}

const specialties = [
  'Legal',
  'Marketing',
  'Technical',
  'Medical',
  'Financial',
  'General',
]

const page = () => {
  const [profile, setProfile] = useState(profileData)
  const [certificate, setCertificate] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCertificate = (e) => {
    const file = e.target.files?.[0]

    if (file) {
      setCertificate(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Later API call yahan lagegi
    console.log('Profile Data:', profile)
    console.log('Certificate:', certificate)

   
  }

  return (
    <main className="container-fluid px-3 px-md-4 py-3 py-md-4">
 
      <div className="mb-4">
        <h4 className="fs-20 fw-bold mb-1 ">
          My profile
        </h4>

        <p className="mb-0 text-secondary fs-14">
          This is what clients see when browsing translators.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row g-4"> 
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="card h-100 shadow-sm">
              <div className="card-body p-4">
                <div className="mb-4">
                  <label
                    htmlFor="headline"
                    className="form-label fw-semibold fs-14"
                  >
                    Headline
                  </label>

                  <input
                    type="text"
                    id="headline"
                    name="headline"
                    value={profile.headline}
                    onChange={handleChange}
                    className="form-control form-control-lg fs-12"
                  />
                </div>

                {/* Bio */}
                <div className="mb-4">
                  <label
                    htmlFor="bio"
                    className="form-label fw-semibold fs-14"
                  >
                    Bio
                  </label>

                  <textarea
                    id="bio"
                    name="bio"
                    rows="4"
                    value={profile.bio}
                    onChange={handleChange}
                    className="form-control fs-13"
                  />
                </div>
 
                <div className="row g-3">

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label
                      htmlFor="ratePerWord"
                      className="form-label fw-semibold fs-14"
                    >
                      Rate per word
                    </label>

                    <input
                      type="text"
                      id="ratePerWord"
                      name="ratePerWord"
                      value={profile.ratePerWord}
                      onChange={handleChange}
                      className="form-control form-control-lg fs-13"
                    />
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <label
                      htmlFor="specialty"
                      className="form-label fw-semibold fs-14"
                    >
                      Specialty
                    </label>

                    <select
                      id="specialty"
                      name="specialty"
                      value={profile.specialty}
                      onChange={handleChange}
                      className="form-select form-select-lg fs-13"
                    >
                      {specialties.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                </div>

                {/* Save Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary px-4 py-2 fw-semibold"
                  >
                    Save profile
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="card h-100 shadow-sm">

              <div className="card-body p-4">

                <h2 className="h4 fw-bold mb-4">
                  Certifications
                </h2>

                <label
                  htmlFor="certificate"
                  className="certificate-upload w-100 d-flex align-items-center justify-content-center text-center"
                >
                  <input
                    type="file"
                    id="certificate"
                    className="d-none"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleCertificate}
                  />

                  <span>
                    {certificate
                      ? certificate.name
                      : 'Upload certificate'}
                  </span>
                </label>

                {certificate && (
                  <div className="mt-3">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => setCertificate(null)}
                    >
                      Remove certificate
                    </button>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>
      </form>

    </main>
  )
}

export default page