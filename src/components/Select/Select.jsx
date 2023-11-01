const Select = ({select}) => {
    const {course_name, credit} = select;
    return (
       <div>
            <li>{course_name}</li>
       </div>
       
    );
};

export default Select;