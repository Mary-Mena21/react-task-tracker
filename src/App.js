import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Doctors Appointment",
            day: "Feb 5th at 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "Meeting with Bank Manager",
            day: "Mar 12th at 11:00am",
            reminder: true,
        },
        {
            id: 3,
            text: "Car Service",
            day: "Apr 22nd at 9:00am",
            reminder: false,
      },
      {
        id: 3,
        text: "Car Service",
        day: "Apr 22nd at 9:00am",
        reminder: false,
    },
    ]);

    // Delete Task
    const deleteTask = (id) => {
        //setTasks(tasks.filter((task) => task.id !== id));
        //console.log("delete", id);
    };

    return (
        <div className="container">
            <Header />
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App;
