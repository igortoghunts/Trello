import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Container from '../../../../container';

const Label = props =>  {
    return (     
        <Draggable draggableId={props.id} index={props.index} >
        {provided =>(
            <li  {...provided.draggableProps}
                        {...provided.dragHandleProps}      
                        ref={provided.innerRef}       
                >
                    {props.card.label}
            </li>          
        )}
        </Draggable>  
    );
}

export default Label;


