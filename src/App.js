import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
            //console.log("=====>", tasksFromServer);
        };
        getTasks();
    }, []);

    //fetch data (tasks) from server
    const fetchTasks = async () => {
        const res = await fetch("http://localhost:5000/tasks");
        const data = await res.json();
        return data;
    };

    //fetch data (task) from server
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();
        return data;
    };

    // Add tasks
    const addTask = async (task) => {
        const res = await fetch("http://localhost:5000/tasks", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        setTasks([...tasks, data]);
    };

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "DELETE",
        });
        setTasks(tasks.filter((task) => task.id !== id));
        //console.log("delete", id);
    };

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(updTask),
        });

        const data = await res.json();
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        );
        //console.log(id, "reminder");
    };

    return (
        <Router>
            <div className="container">
                <Header
                    onAddTask={() => setShowAddTask(!showAddTask)}
                    showAdd={showAddTask}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                {showAddTask && <AddTask onAddTask={addTask} />}
                                {tasks.length > 0 ? (
                                    <Tasks
                                        tasks={tasks}
                                        onDelete={deleteTask}
                                        onToggle={toggleReminder}
                                    />
                                ) : (
                                    "No Tasks To Show"
                                )}
                            </>
                        }
                    />{" "}
                    <Route path={"/about"} element={<About />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
