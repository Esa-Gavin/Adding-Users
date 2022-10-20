import React from 'react';

import classes from './Card.module.css';

// props.className can be named anything else, //
// so long as you reflect the same name on, //
// AddUser.js file //
const Card = props => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
};

export default Card;