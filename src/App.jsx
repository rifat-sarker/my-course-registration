
import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Selected from './components/Selected/Selected'

function App() {
  const [selected , setSelected] = useState([]);


  const handleSelectedCourses = course =>{
    const newSelectedCourses = [...selected, course];
    // console.log(newSelectedCourses);
    setSelected(newSelectedCourses);
  }

  return (
    <>
      
      <h1 className='text-3xl text-center my-4 '>Course Registration</h1>
      <div className='flex mt-8'>
          <Courses
            handleSelectedCourses={handleSelectedCourses}
          ></Courses>
          <Selected selected={selected}></Selected>
      </div>
     
    </>
  )
}

export default App
