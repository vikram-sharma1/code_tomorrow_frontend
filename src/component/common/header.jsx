import React from 'react'
import { useNavigate } from 'react-router'

import "./header.css"

const Header = () => {

  const navigate = useNavigate()

  return (
    <div className='mainBoxHeader'>
        <h1 className='headName' onClick={()=>{
                navigate('/')
          
        }}>
            Code for Tomorrow
        </h1>
        <div className='headType' >
            <p onClick={
              ()=>{
                navigate('/AddStudents')
              // console.log('yes')
              }
            }>Add Students</p>
            <p onClick={
              ()=>{
                navigate('/StudentsList')
              // console.log('yes')
              }
            }>Students List</p>
            <p onClick={()=>{
                navigate('/AddAttendence')
            }}>Add Attendence</p>
            <p onClick={()=>{
                navigate('/FindbyDate')
            }}
            >Find by Dates</p>
        </div>
    </div>
  )
}

export default Header