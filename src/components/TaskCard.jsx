import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

export const TaskCard = ({ title, taskID }) => {
    const { handleDelete } = useContext(TaskContext);

    const handleClick = () => {
        handleDelete(taskID);
    };

    const [isChecKed, setisChecKed] = useState(false)

    const handleCheck = () => {
        setisChecKed(!isChecKed)
    }

    return (
        <div className="bg-gray-100 p-4 rounded-md shadow-md flex justify-between items-center">
            <div className='flex gap-3'>
                <input onClick={handleCheck} className='' type="checkbox" name="" id="" />
                <h2 className={`text-lg font-semibold ${isChecKed ? "line-through" : ""} `}>{title}</h2>
            </div>

            <button onClick={handleClick} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                Delete
            </button>
        </div>
    );
};
