import Select from "../Select/Select";


const Selected = ({selected}) => {
    return (
        <div className="w-1/3 border rounded-lg p-4">
            <h3>Course Name</h3>
            {
                selected.map((select,idx) => <Select key={idx} select={select}></Select>)
            }
        </div>
    );
};

export default Selected;