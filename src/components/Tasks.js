import React from "react";
import Task from "./Task";

export default function Tasks({ tasks, onDelete }) {
    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}>
                    <Task task={task} />
                </div>
            ))}
        </div>
    );
}
