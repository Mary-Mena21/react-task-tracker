import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({ task, onDelete }) {
    
    return (
        <div className="task">
            <h3>
                {task.text}{" "}
                <FaTimes
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => console.log("delete", `${task.id}`)}
                    onClick2={onDelete}
                />{" "}
            </h3>
            <p>{task.day}</p>
        </div>
    );
}
