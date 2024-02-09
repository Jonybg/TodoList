import React, { useContext } from 'react'
import { TaskForm } from '../components/TaskForm'
import { TaskContext } from '../context/TaskContext'
import { TaskCard } from '../components/TaskCard'

export const Home = () => {


    const task = useContext(TaskContext)

    return (
        <div className=' min-h-screen w-full flex justify-center mt-32' >
            <TaskForm />
            {
                task.map((item, index) => (
                    <TaskCard
                        key={index}
                        title={item.task}

                    />
                ))
            }
        </div>
    )
}
