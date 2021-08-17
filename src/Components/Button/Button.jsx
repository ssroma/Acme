import React from 'react';
import './Button.scss';

const Button = (props) => {
    const {title, img, btnType, onClick} = props;

    return(
        <button className={`generic-button generic-button-${btnType}`} onClick={ onClick }>
            {img ? <img src={img} alt={title ? title : "Views"} /> : ""}
            {title ? title : ""}
        </button>
    )
}

export default Button;