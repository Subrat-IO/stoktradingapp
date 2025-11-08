import React from 'react'

function Brokerage() {
  return (
   <div className="container d-flex">
    <div className="col-7">
        <h1 className={`text-center m-5  text-primary`}>Brokerage Calculator</h1>
        <ul className='opacity-50'>
            <li>Call and Trade RMS auto squareoff:additional charges 50+gst per order</li>
            <li>Ditgital contract notes will be sent via Email</li>
            <li> Physical copies of contract notes if required shall be charged 20per contract note. Courier chages apply.</li>
            <li>For NRI accound (non-PIS), 0.5% or 100 per executed order for equity(whichever is lower).</li>
            <li>if the account is in debit balance, any order placed will be charged 40 per order instead of 20 per executed order.</li>
        </ul>
    </div>
    <div className=" m-5  text-primary col-5 text-center">
        <h1>List of Charges</h1>
    </div>
   </div>
  )
}

export default Brokerage