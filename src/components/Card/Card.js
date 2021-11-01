import React from 'react';
import "./style.scss"

function Card(props) {
    return (
        <div className="i-card" style={{maxWidth: 400, ...props.style}}>
            {props.children}
        </div>
    );
}

export default Card;