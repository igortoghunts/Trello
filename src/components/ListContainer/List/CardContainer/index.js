import React from 'react';

const cardContainer = props =>  {
    return (     
        <ul className="list-items">
            {props.chaildren}
        </ul>  
    );
}

export default cardContainer;


