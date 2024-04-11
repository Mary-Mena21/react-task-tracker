import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function Header({ title }) {
    const onClick = (e) => console.log("clicked");
    return (
        <header className="header">
            {/* <h1>{props.title}</h1> */}
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Add" />
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
