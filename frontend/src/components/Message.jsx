import React from 'react';
import './Message.css'

const Message = (props) => {
    return (
        <div className="message">
            {props.children}
        </div>
    );
};

export default Message;