import React from 'react'
import Header from '../common/header'
import './AddStudents.css'

const AddStudents = () => {
  return (
    <>
      <Header/>
    <div className='MainBox'>
      <h1>Add Students to the List</h1>
      <div className='addBox'>
        <input type="text" placeholder='Enter the Students Name ' className='inputBox' />
        <br/>
        <input type="text" placeholder='Enter the Students ID or Roll No '  className='inputBox'/>
        <br />
        <button className='btnSubmit'>Submit</button>
      </div>
    </div>
    </>
  )
}

export default AddStudents