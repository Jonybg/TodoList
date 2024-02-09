import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { TaskCard } from './TaskCard';

export const TaskForm = () => {
    const { task, handleSubmit, handleChange, input, setTask } = useContext(TaskContext);

    return (
        <div className="container mx-auto px-4">
            <h1 className='text-center text-4xl mt-4'>Todo List</h1>
            <div className='flex justify-center mt-12'>

                <div className='bg-white p-8 rounded-lg shadow-lg mt-16 flex flex-col w-full md:w-3/4 lg:w-1/2 xl:w-1/3'>
                    <form onSubmit={handleSubmit} className='mb-4'>
                        <div className='flex flex-col gap-5 sm:flex-row items-center mb-4'>
                            <input
                                onChange={handleChange}
                                value={input}
                                className='bg-red-300 rounded p-2 mr-2 flex-1'
                                type="text"
                                placeholder='Add a new task...'
                            />
                            <button
                                type="submit"
                                className='bg-green-500 text-white px-4 py-2 rounded'
                            >
                                Add
                            </button>
                        </div>
                    </form>
                    {
                        task.length > 1 && <button className="mx-auto mb-12 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600" onClick={() => setTask([])}>Remove All Tasks</button>
                    }
                    <div className='flex flex-col gap-4 overflow-auto'>
                        {task.map((item, index) => (
                            <TaskCard
                                key={index}
                                title={item.task}
                                taskID={item.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
