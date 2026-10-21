import React from 'react'
import './Earnings.css'

const stats = [
  {
    title: 'Available balance',
    value: '$1,660',
  },
  {
    title: 'Pending',
    value: '$480',
  },
  {
    title: 'Lifetime earnings',
    value: '$18,240',
  },
  {
    title: 'This month',
    value: '$2,140',
  },
]

const earnings = [
  {
    project: 'Product Launch Deck',
    client: 'Northwind Legal',
    amount: '$161.20',
    status: 'IN ESCROW',
    statusClass: 'escrow',
  },
  {
    project: 'Investor Update',
    client: 'Fenwick Capital',
    amount: '$83.20',
    status: 'IN ESCROW',
    statusClass: 'escrow',
  },
  {
    project: 'Marketing Site Copy',
    client: 'Relay Studio',
    amount: '$142.10',
    status: 'PAID',
    statusClass: 'paid',
  },
]

const page = () => {
  return (
    <div className="container-fluid earnings-page py-3 py-md-4 px-3 px-md-4">

      {/* Page Title */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-12">
          <h4 className="earnings-title mb-4 ">Earnings</h4>
        </div>
      </div>
 
      <div className="row g-3 g-md-4 mb-4">

        {stats.map((stat, index) => (
          <div
            className="col-lg-3 col-md-6 col-sm-6 col-12"
            key={index}
          >
            <div className="card earnings-stat-card h-100">
              <div className="card-body p-4">
                <p className="stat-title mb-2">
                  {stat.title}
                </p>

                <h2 className="stat-value fs-22 mb-0">
                  {stat.value}
                </h2>
              </div>
            </div>
          </div>
        ))}

      </div> 
      <div className="row g-3 g-md-4"> 
        <div className="col-lg-8 col-md-12 col-sm-12 col-12">
          <div className="card earnings-project-card h-100">

            <div className="card-body p-3 p-md-4">

              <h2 className="section-title mb-3 fs-20">
                Earnings by project
              </h2>

              <div className="table-responsive">

                <table className="table earnings-table align-middle mb-0">

                  <thead>
                    <tr className='fs-12'>
                      <th scope="col">PROJECT</th>
                      <th scope="col">CLIENT</th>
                      <th scope="col">AMOUNT</th>
                      <th scope="col">STATUS</th>
                    </tr>
                  </thead>

                  <tbody className='fs-12'>
                    {earnings.map((item, index) => (
                      <tr key={index}>

                        <td>
                          {item.project}
                        </td>

                        <td>
                          {item.client}
                        </td>

                        <td>
                          {item.amount}
                        </td>

                        <td>
                          <span
                            className={`status-badge ${item.statusClass}`}
                          >
                            {item.status}
                          </span>
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>
            </div>
          </div>
        </div>
 
        <div className="col-lg-4 col-md-12 col-sm-12 col-12">
          <div className="card withdraw-card h-100">

            <div className="card-body p-4">

              <h2 className="section-title fs-18 mb-4  ">
                Withdraw funds
              </h2>

              <div className="withdraw-amount fs-18 fw-bold">
                $1,660.00
              </div>

              <p className="withdraw-bank fs-14 mb-3">
                Payout to Bank •••• 8823
              </p>

              <button
                type="button"
                className="btn btn-primary w-100 withdraw-button"
              >
                Withdraw now
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page