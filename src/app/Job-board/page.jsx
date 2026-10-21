"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./JobBoard.css";

const jobs = [
    {
        id: 1,
        title: "Legal Terms of Service — EN → ES",
        words: "2,400",
        budget: "$0.13/word",
        turnaround: "3 day turnaround",
        client: "Northwind Legal",
        rating: "4.8",
        category: "LEGAL",
    },
    {
        id: 2,
        title: "Marketing Email Series — EN → ES",
        words: "800",
        budget: "$0.11/word",
        turnaround: "24h turnaround",
        client: "Fenwick Capital",
        rating: "4.9",
        category: "MARKETING",
    },
    {
        id: 3,
        title: "Product Onboarding Guide — EN → ES",
        words: "1,560",
        budget: "$0.10/word",
        turnaround: "4 day turnaround",
        client: "Atlas Robotics",
        rating: "4.6",
        category: "TECHNICAL",
    },
    {
        id: 4,
        title: "App Store Description — EN → ES",
        words: "320",
        budget: "$0.12/word",
        turnaround: "12h turnaround",
        client: "Lumen Studio",
        rating: "5.0",
        category: "MARKETING",
    },
];

const tabs = [
    { name: "All open", count: 128 },
    { name: "Best match", count: 24 },
    { name: "Saved", count: 6 },
];

const Page = () => {
    const [activeTab, setActiveTab] = useState("All open");

    const filteredJobs =
        activeTab === "Saved"
            ? jobs.slice(0, 1)
            : activeTab === "Best match"
                ? jobs.slice(0, 3)
                : jobs;

    return (
        <main className="job-board-page container-fluid px-3 px-md-4 py-3 py-md-4">

            <div className="mb-3">
                <h1 className="job-board-title mb-1">Job board</h1>
                <p className="job-board-subtitle mb-0">
                    128 open jobs matching your languages.
                </p>
            </div>

            <div className="job-tabs d-inline-flex mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        type="button"
                        className={`btn job-tab ${activeTab === tab.name ? "active" : ""
                            }`}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name} ({tab.count})
                    </button>
                ))}
            </div>

            {/* Job List */}
            <div className="jobs-list">
                {filteredJobs.map((job) => (
                    <article
                        className="job-item position-relative"
                        key={job.id}
                    >
                        <div className="row align-items-center g-3">
                            <div className="col-g-9 col-md-9 col-sm-9 col-12">

                                <h2 className="job-title mb-2">
                                    {job.title}
                                </h2>

                                <div className="job-meta d-flex flex-wrap align-items-center gap-2 gap-md-3 mb-3">

                                    <span>
                                        <span className="meta-icon">▤</span>
                                        {job.words} words
                                    </span>

                                    <span>
                                        <span className="meta-icon">♙</span>
                                        {job.budget} budget
                                    </span>

                                    <span>
                                        <span className="meta-icon">◷</span>
                                        {job.turnaround}
                                    </span>

                                </div>

                                <p className="client-info mb-0">
                                    Posted by {job.client}
                                    <span className="mx-1">•</span>
                                    ★ {job.rating} client
                                </p>

                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-12">
                                <div className="job-actions d-flex flex-column align-items-start align-items-md-end gap-3">
                                    <span className="job-category">
                                        {job.category}
                                    </span>
                                    <button
                                        type="button"
                                        className="btn btn-primary apply-btn"
                                        onClick={() => alert(`Applying for: ${job.title}`)}
                                    >
                                        Apply now
                                    </button>

                                </div>

                            </div>

                        </div>
                    </article>
                ))}
            </div>

        </main>
    );
};

export default Page;