import React from 'react';
import './ContentBox.scss';

const ContentBox = (props) => {
    const { title, content } = props;
    return(
        <div className="ContentBox">
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    )
}
export default ContentBox;