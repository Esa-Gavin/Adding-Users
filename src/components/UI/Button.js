import React from 'react';

import classes from './Button.module.css';

// if a type is given for a button it shall be used, //
// otherwise the default type is button //
// || stands for OR //
const Button = props => {
    return <button
        className={classes.button}
        type={props.type || 'button'}
        //onClick={onClick}
    >
        {props.children}
    </button>
};

export default Button;