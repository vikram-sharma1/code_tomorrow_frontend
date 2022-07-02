import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../common/header'
import axios from 'axios'
import Select from 'react-select'
import './AddAttendence.css'


const AddAttendence = () => {


  const [studentsList, setStudentsList ] = useState([])

  useEffect(()=>{
    dataFetch()
  },[])



  const dataFetch = () => {

    axios.get('http://localhost:8080/students').then((res)=>{
      console.log(res.data)
      setStudentsList(res.data)
    })

  }

  return (

    <>
      <Header/>

    <div className='MainBox'>
        <h1>Add Attendence for the Students</h1>
        
      <div className='addBox'>
      <label className='studentName'>Student Name</label>
      <br />
      <br />
      <Select options={studentsList} />


        <input type="text" placeholder='Enter Student Name' className='inputBox' />
        <br/>
        <input type="text" placeholder='Enter Roll No. or ID'  className='inputBox'/>
        <br />
        <input type="date" className='inputBox' />
        <br />

        <input type="radio" name="attendence" id=""  />
        <label htmlFor="" className='inputBox' >Present</label>
        <input type="radio" name="attendence" id="" />
        <label htmlFor="" className='inputBox' >Absent</label>
        <br />
        <button className='btnSubmit'>Submit</button>
      </div>
    </div>
    </>
  )
}

export default AddAttendence