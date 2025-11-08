import React from 'react'
import styles from "./styles.module.css"

export default function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <div className="col-12">
          <img src="media/homeHero.png" alt="Hero Image" className="mb-5 img-fluid" />
          <h1 className="mt-5">Invest In Everything</h1>
          <p>Online platform to invest and grow your financial stability and independent lifestyle</p>
          <button className={`btn btn-primary mb-5 ${styles.hero}`}>
            Signup Now
          </button>

        </div>
      </div>
    </div>
  )
}
