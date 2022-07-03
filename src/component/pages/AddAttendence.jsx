import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../common/header'
import axios from 'axios'
import './AddAttendence.css'


const AddAttendence = () => {


  const [student, setStudent] = useState({
    name:"",
    rollno:"",
    date:"",
    attendence:""
  })


  const handleChange = (e) => {

    const {id, value} = e.target

      setStudent({...student,[id]:value})
  }
 
  const handleSubmit = (e) => {
      e.preventDefault()
    // console.log(student)

    axios.post('http://localhost:8080/students',student).then(()=>{
      alert("Data Registered");
      setStudent({
        name:"",
        rollno:"",
        date:"",
        attendence:""
      })
    })


  }
  return (

    <>
      <Header/>

    <div className='MainBox'>
        <h1>Add Attendence for the Students</h1>
        
      <form className='addBox' onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Student Name' id='name' value={student.name} className='inputBox' onChange={handleChange} />
        <br/>
        <input type="text" placeholder='Enter Roll No. or ID' id='rollno' value={student.rollno}  className='inputBox' onChange={handleChange}/>
        <br />
        <input type="date" className='inputBox' id='date' value={student.data} onChange={handleChange} />
        <br />

        <input type="radio" name="attendence" id="attendence" value={true}  onChange={handleChange} />
        <label htmlFor="" className='inputBox' >Present</label>
        <input type="radio" name="attendence" id="attendence" value={false}  onChange={handleChange}   />
        <label htmlFor="" className='inputBox' >Absent</label>
        <br />
        <input type='submit' className='btnSubmit' />
      </form>
    </div>
    </>
  )
}

export default AddAttendence