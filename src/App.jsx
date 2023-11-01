
import './App.css'
import Courses from './components/Courses/Courses'
import Selected from './components/Selected/Selected'

function App() {
  

  return (
    <>
      
      <h1 className='text-3xl text-center my-4 '>Course Registration</h1>
      <div className='flex'>
          <Courses></Courses>
          <Selected></Selected>
      </div>
     
    </>
  )
}

export default App
