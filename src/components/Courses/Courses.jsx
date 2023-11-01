import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";


const Courses = ({handleSelectedCourses}) => {
    const [courses, setCourses] = useState([]);
    useEffect(()=> {
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <div className=" course">
            
            {
                courses.map(course => <Course 
                    key={course.id}
                    course={course}
                    handleSelectedCourses={handleSelectedCourses}
                ></Course>)
                
            }
        </div>
    );
};

export default Courses;