

const Select = ({select}) => {
    const {course_name} = select;
    return (
       <div>
         <li>{course_name}</li>
       </div>
    );
};

export default Select;