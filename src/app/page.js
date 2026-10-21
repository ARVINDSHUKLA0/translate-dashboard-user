import React from "react";
import styles from "./page.module.css";

const stats = [
  {
    title: "This month's earnings",
    value: "$2,140",
    note: "↑ 18% vs last mo.",
    icon: "fa-sack-dollar",
    type: "success",
  },
  {
    title: "Pending payout",
    value: "$480",
    note: "releases in 2d",
    icon: "fa-hourglass-half",
    type: "warning",
  },
  {
    title: "Rating",
    value: "4.9",
    note: "from 340 reviews",
    icon: "fa-star",
    type: "primary",
  },
  {
    title: "On-time delivery",
    value: "98%",
    note: "last 30 days",
    icon: "fa-bolt",
    type: "danger",
  },
];

const projects = [
  {
    language: "ES",
    title: "Product Launch Deck — Northwind Legal",
    words: "1,240 words",
    price: "$161.20",
    status: "IN PROGRESS",
    statusType: "active",
    due: "Due in 2d",
  },
  {
    language: "ES",
    title: "User Manual — Atlas Robotics",
    words: "3,020 words",
    price: "$392.60",
    status: "REVISION REQUESTED",
    statusType: "pending",
    due: "Due in 4d",
  },
  {
    language: "ES",
    title: "Investor Update — Fenwick Capital",
    words: "640 words",
    price: "$83.20",
    status: "DELIVERED",
    statusType: "delivered",
    due: "Awaiting approval",
  },
];

const earnings = [
  { month: "Mar", value: 52 },
  { month: "Apr", value: 68 },
  { month: "May", value: 43 },
  { month: "Jun", value: 82 },
  { month: "Jul", value: 62 },
  { month: "Aug", value: 100 },
];

const invitations = [
  {
    title: "Legal Terms of Service — EN → ES",
    words: "2,400 words",
    budget: "$0.13/word budget",
    turnaround: "3 day turnaround",
    category: "LEGAL",
    client: "Northwind Legal",
    rating: "4.8",
  },
  {
    title: "Marketing Email Series — EN → ES",
    words: "800 words",
    budget: "$0.11/word budget",
    turnaround: "24h turnaround",
    category: "MARKETING",
    client: "Fenwick Capital",
    rating: "4.9",
  },
];

export default function Home() {
  return (
    <main className="container-fluid px-3 px-md-4 py-2">
      {/* ================= STATS ================= */}
      <div className="row g-3 mb-3">
        {stats.map((item) => (
          <div
            className="col-12 col-sm-6 col-xl-3"
            key={item.title}
          >
            <div className="card h-100 border rounded-3 shadow-sm bg-white">
              <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-start">
                  <span className="small text-secondary">
                    {item.title}
                  </span>

                  <span
                    className={`${styles.statIcon} ${styles[item.type]}`}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                  </span>
                </div>

                <div className="fs-3 fw-semibold lh-1 mt-3 mb-2">
                  {item.value}
                </div>

                <div
                  className={`small fw-semibold ${item.type === "warning"
                      ? "text-warning"
                      : item.type === "danger"
                        ? "text-danger"
                        : "text-success"
                    }`}
                >
                  {item.note}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= PROJECTS + CHART ================= */}
      <div className="row g-3 mb-3">
        {/* ACTIVE PROJECTS */}
        <div className="col-12 col-lg-7">
          <div className="card h-100 border rounded-3 shadow-sm bg-white">
            <div className="card-body p-3 p-md-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="mb-0 fw-semibold fs-18">
                  Active projects
                </h5>

                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-semibold"
                >
                  View board →
                </a>
              </div>

              <div className={styles.projectList}>
                {projects.map((project, index) => (
                  <div
                    key={project.title}
                    className={`${styles.projectRow} ${index !== projects.length - 1
                        ? styles.projectBorder
                        : ""
                      }`}
                  >
                    {/* Avatar */}
                    <div className={styles.projectAvatar}>
                      {project.language}
                    </div>

                    {/* Project information */}
                    <div className={styles.projectInfo}>
                      <div className={styles.projectTitle}>
                        {project.title}
                      </div>

                      <div className={styles.projectDetails}>
                        {project.words} · {project.price}
                      </div>
                    </div>

                    {/* Status + Due */}
                    <div className={styles.projectMeta}>
                      <span
                        className={`badge rounded-pill fw-medium ${styles[project.statusType]
                          }`}
                      >
                        {project.status}
                      </span>

                      <span className={styles.projectDue}>
                        {project.due}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* EARNINGS CHART */}
        <div className="col-12 col-lg-5">
          <div className="card h-100 border rounded-3 shadow-sm bg-white">
            <div className="card-body p-3 p-md-4">
              <h5 className="mb-3 fw-semibold fs-18">
                Earnings — last 6 months
              </h5>

              <div className={styles.chart}>
                {earnings.map((item, index) => (
                  <div
                    key={item.month}
                    className={styles.chartColumn}
                  >
                    <div
                      className={`${styles.bar} ${index === earnings.length - 1
                          ? styles.lastBar
                          : ""
                        }`}
                      style={{
                        height: `${item.value}%`,
                      }}
                    ></div>

                    <small className={styles.month}>
                      {item.month}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= JOBS + PROFILE ================= */}
      <div className="row g-3">
        {/* JOB INVITATIONS */}
        <div className="col-12 col-lg-7">
          <div className="card border rounded-3 shadow-sm bg-white">
            <div className="card-body p-3 p-md-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 fw-semibold fs-18">
                  New job invitations
                </h5>

                <a
                  href="#"
                  className="text-primary text-decoration-none small fw-semibold"
                >
                  Job board →
                </a>
              </div>

              {invitations.map((job) => (
                <div
                  key={job.title}
                  className={`${styles.jobBox} border p-3 p-md-4 mb-3`}
                >
                  <div className="d-flex justify-content-between align-items-start gap-3">
                    <h6 className="fw-semibold mb-3">
                      {job.title}
                    </h6>

                    <span
                      className={`${styles.category} badge rounded-pill`}
                    >
                      {job.category}
                    </span>
                  </div>

                  <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                    <span className="small text-secondary">
                      <i className="fa-regular fa-file me-2"></i>
                      {job.words}
                    </span>

                    <span className="small text-secondary">
                      {job.budget}
                    </span>

                    <span className="small text-secondary">
                      <i className="fa-regular fa-clock me-2"></i>
                      {job.turnaround}
                    </span>
                  </div>

                  <div className={styles.jobFooter}>
                    <small className="text-secondary">
                      Posted by {job.client} · ★ {job.rating} client
                    </small>

                    <button
                      type="button"
                      className="btn btn-primary btn-sm fw-semibold px-3"
                    >
                      Submit quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROFILE */}
        <div className="col-12 col-lg-5">
          <div className="card border rounded-3 shadow-sm bg-white">
            <div className="card-body p-3 p-md-4">
              <h5 className="mb-3 fw-semibold fs-18">
                Profile strength
              </h5>

              <div className="mb-2">
                <span className="small fs-14">
                  85% complete
                </span>
              </div>

              <div
                className="progress mb-3"
                style={{ height: "6px" }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>

              <p className="small text-secondary mb-3 fs-12">
                Add 2 more portfolio samples to reach 100% and
                appear higher in search.
              </p>

              <button
                type="button"
                className="btn btn-outline-secondary w-100 fw-semibold"
              >
                Edit profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}