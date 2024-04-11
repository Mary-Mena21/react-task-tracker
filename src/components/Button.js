import React from "react";
import PropTypes from "prop-types";

export default function Button({ color, text, onClick }) {
    return (
        <div>
            <button onClick={onClick} className="btn" style={{ backgroundColor: color }}>
                {text}
            </button>
        </div>
    );
}

Button.defaultProps = {
    color: "steelblue",
    text: "Add",
};

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
