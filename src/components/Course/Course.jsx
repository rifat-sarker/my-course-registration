

const Course = ({course}) => {
    const {img, credit} = course;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Course;