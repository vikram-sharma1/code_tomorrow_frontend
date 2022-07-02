import React from 'react'
import Header from '../common/header'
import './FindbyDate.css'


const FindbyDate = () => {
  return (
    <>
      <Header/>
      <h1 className='head'>Fillter the Students by Date</h1>
      <div className='spreadBox'>
          {/* left box */}
          <div className='dateBox'>
            <input type="date" className='inputBox' />
            <br />
            <input type="date" className='inputBox' />
            <br />
            <br />
            <button>Search</button>
          </div>

          {/* right box */}

          <div>

            <h1>Result</h1>
          </div>

      </div>
    </>
  )
}

export default FindbyDate