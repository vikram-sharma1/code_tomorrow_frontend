import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from '../common/header'
import './StudentsList.css'

const StudentsList = () => {

  const [studentsList, setStudentsList ] = useState([])

  useEffect(()=>{
    dataFetch()
  },[])


  // console.log(studentsList)
  const dataFetch = () => {

    axios.get('http://localhost:8080/students').then((res)=>{
      // console.log(res.data)
      setStudentsList(res.data)
    })

  }





  return (
    <>
      <Header/>
      <h1 className='headingName'>StudentsList</h1>

      {/* Data Append */}

      <table>
        <tbody>
          <tr>
            <th>Roll No</th>
            <th>Student Name</th>
          </tr>
        {studentsList.map((data)=>{
          return(
            <tr key={data.id}>
              <td className='colOne'>{data.id}</td>
              <td className='colTwo'>{data.label}</td>
            </tr>
          )

          })}
        </tbody>
      </table>


      


    </>
  )
}

export default StudentsList