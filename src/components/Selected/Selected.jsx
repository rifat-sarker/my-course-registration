import Select from "../Select/Select";


const Selected = ({selected, remaining ,totalCredit}) => {
    return (
        <div className="w-1/3 h-full border rounded-lg p-4">
            <h3 className="mb-5 text-blue-600 font-semibold">Credit Hour Remaining : {remaining}  hr</h3>
                <hr />
            <div className="mb-10">
            <h3 className="my-5 font-semibold">Course Name</h3>
            {
                selected.map((select,idx) => <Select key={idx} select={select}
                totalCredit ={totalCredit}
                remaining = {remaining}
                ></Select>)
            }
            </div><hr />
            <h3 className="mt-8">Total Credit Hour : {totalCredit} </h3>
        </div>
    );
};

export default Selected;