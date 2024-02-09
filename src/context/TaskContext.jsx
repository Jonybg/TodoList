import { createContext, useState } from "react";

export const TaskContext = createContext()


export const Tasks = ({ children }) => {


    const [input, setinput] = useState("")
    const [task, setTask] = useState([])

    const handleChange = (e) => {
        setinput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.trim() === "") {
            alert("por favor ingrese una tarea")
            return
        }

        const newTask = {
            id: task.length,
            task: input
        }

        setTask([...task, newTask])
        setinput("")
    }


    const handleDelete = (taskID) => {

        const updateTask = task.filter(item => taskID !== item.id)
        setTask(updateTask)

    }


    return (
        <TaskContext.Provider value={{ input, task, handleSubmit, handleChange, handleDelete, setTask }} >
            {children}
        </TaskContext.Provider>
    )
}