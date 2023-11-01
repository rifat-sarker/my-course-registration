import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Selected from './components/Selected/Selected'

function App() {
  const [selected , setSelected] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remaining, setRemaining] = useState(0)
  
  const handleSelectedCourses = (course,id) =>{
    const isExist = selected.filter(item => item.id == course.id)
   
    let totalCredit = course.credit;
   
    if(!isExist){
      return alert('alread added')
    }
    else{
      selected.forEach(item => {
        totalCredit = totalCredit + item.credit
      })
      const totalRemaining = 20 - totalCredit;
     
      if(totalCredit > 20){
        return alert('credit not available')
      }
      else{
        setTotalCredit(totalCredit)
        setRemaining(totalRemaining)
        const newSelectedCourses = [...selected, course];
        setSelected(newSelectedCourses);
      }
    } 
  }

  return (
    <>
      <h1 className='text-3xl text-center my-4 '>Course Registration</h1>
      <div className='flex mt-8'>
          <Courses
            handleSelectedCourses={handleSelectedCourses}
            remaining={remaining}
            totalCredit= {totalCredit}
          ></Courses>
          <Selected selected={selected}
            remaining={remaining}
            totalCredit= {totalCredit}
          ></Selected>
      </div>
    </>
  )
}

export default App
