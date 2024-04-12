import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

export default function Header({ title, onAddTask, showAdd }) {
    //const onClick = (e) => console.log("clicked");
    const location = useLocation();
    return (
        <header className="header">
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
            {location.pathname === "/" && (
                <Button
                    color={showAdd ? "red" : "green"}
                    text={showAdd ? "Close" : "Add"}
                    onClick={onAddTask}
                />
            )}
        </header>
    );
}
Header.defaultProps = {
    title: "Task Tracker",
    name: "John Doe",
    size: 18,
    old: 25,
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};
