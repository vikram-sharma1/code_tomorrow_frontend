import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Header from '../common/header'
import AddAttendence from '../pages/AddAttendence'
import AddStudents from '../pages/AddStudents'
import FindbyDate from '../pages/FindbyDate'
import StudentsList from '../pages/StudentsList'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Header />}></Route>

            {/* pages */}

            <Route path='/AddAttendence' element={<AddAttendence/>}></Route>
            <Route path='/AddStudents' element={<AddStudents />}></Route>
            <Route path='/FindbyDate' element={<FindbyDate />}></Route>
            <Route path='/StudentsList' element={<StudentsList />}></Route>
            
        </Routes>
    </div>
  )
}

export default AllRoutes