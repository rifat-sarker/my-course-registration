import './Course.css'

const Course = ({course, handleSelectedCourses}) => {
    const {id, img,course_name, details, credit, price} = course;
    return (
        <div className="w-2/3">
            
            <div className='border-white-700 border mx-4 rounded-lg w-80 h-full '>
               <div className='p-4'>
                    <img className='mb-3' src={img} alt="" />
                    <h3 className='font-bold'>{course_name}</h3>
                    <p className='text-justify'><small>{details}</small></p>
                    <div className="flex py-2 justify-between">
                        <p>Price : {price} </p>
                        <p className="ml-3">Credit : {credit}hr </p>
                    </div>
                    <button
                    onClick={()=>handleSelectedCourses(course)} className="btn bg-blue-600 text-white px-4 py-2 rounded w-full">Select</button>
               </div>
            </div>
        </div>
    );
};

export default Course;