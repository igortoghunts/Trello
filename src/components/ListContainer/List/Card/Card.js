import React from 'react';
import { Draggable } from 'react-beautiful-dnd';


const Label = props =>  {
    return (
        <Draggable draggableId={props.card.id + '' + props.index} index={props.index} >
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
};

export default Label;




