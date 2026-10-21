import React from 'react'
import './Reviews.css'

const reviews = [
    {
        id: 1,
        rating: 5,
        text: "Elena caught nuances in the source deck we hadn't even noticed. Fast and precise.",
        name: 'Noah Carter',
        company: 'Northwind Legal',
        time: '2 days ago',
    },
    {
        id: 2,
        rating: 5,
        text: 'Great communication throughout the revision round.',
        name: 'Fenwick Capital',
        company: '',
        time: '1 week ago',
    },
    {
        id: 3,
        rating: 4,
        text: 'Solid work, delivery was a few hours later than estimated.',
        name: 'Relay Studio',
        company: '',
        time: '3 weeks ago',
    },
]

const ratingBreakdown = [
    {
        label: 'Quality',
        value: 96,
    },
    {
        label: 'Communication',
        value: 98,
    },
    {
        label: 'Timeliness',
        value: 94,
    },
]

const renderStars = (rating) => {
    return (
        <div className="review-stars d-flex gap-1 mb-2" aria-label={`${rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rating ? 'star-filled' : 'star-empty'}
                >
                    ★
                </span>
            ))}
        </div>
    )
}

const page = () => {
    return (
        <main className="container-fluid reviews-page py-0">
            <div className="row">
                <div className="col-12">
                    <h1 className="fw-bold mb-4 reviews-title fs-20">
                        Reviews
                    </h1>
                </div>
            </div>
 
            <div className="row g-4">
 
                <div className="col-lg-8 col-md-7 col-sm-12">
                    <div className="card shadow-sm h-100 reviews-card">
                        <div className="card-body p-4">

                            {reviews.map((review, index) => (
                                <React.Fragment key={review.id}>

                                    <div className="review-item">

                                        {renderStars(review.rating)}

                                        <p className="mb-2 review-text fs-14 fw-bold">
                                            {review.text}
                                        </p>

                                        <div className="review-meta">
                                            <span>{review.name}</span>

                                            {review.company && (
                                                <>
                                                    <span className="mx-1">·</span>
                                                    <span>{review.company}</span>
                                                </>
                                            )}

                                            <span className="mx-1">·</span>
                                            <span>{review.time}</span>
                                        </div>

                                    </div>

                                    {index !== reviews.length - 1 && (
                                        <hr className="my-3" />
                                    )}

                                </React.Fragment>
                            ))}

                        </div>
                    </div>
                </div>
 
                <div className="col-lg-4 col-md-5 col-sm-12">
                    <div className="card shadow-sm h-100 rating-card">
                        <div className="card-body p-4">

                            <h5 className="fw-bold mb-4 fs-18">
                                Rating breakdown
                            </h5>

                            {ratingBreakdown.map((rating) => (
                                <div className="rating-item mb-3" key={rating.label}>

                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <span className='fs-14'>
                                            {rating.label}
                                        </span>
                                    </div>

                                    <div
                                        className="progress"
                                        role="progressbar"
                                        aria-label={rating.label}
                                        aria-valuenow={rating.value}
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        <div
                                            className="progress-bar"
                                            style={{ width: `${rating.value}%` }}
                                        ></div>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default page