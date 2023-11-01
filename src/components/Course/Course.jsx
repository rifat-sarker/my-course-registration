

const Course = ({course}) => {
    const {img,course_name, details, credit, price} = course;
    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h3>{course_name}</h3>
                <p>{details}</p>
                <div className="flex py-2">
                    <p>Price: {price} </p>
                    <p className="ml-3">Credit: {credit}hr </p>
                </div>
            </div>
        </div>
    );
};

export default Course;