import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import { editCard } from '../../../../store/action'

class Label extends Component {

    editHandler = (cardId) => {
        this.props.editCard(cardId);
    };

    render(){
        return (
            <Draggable draggableId={this.props.card.id + '' + this.props.index} index={this.props.index} >
                {provided =>(
                    <li  {...provided.draggableProps}
                         {...provided.dragHandleProps}
                         ref={provided.innerRef}
                         onClick={() => this.editHandler(this.props.card.id)}
                    >
                        {this.props.card.label}
                    </li>
                )}
            </Draggable>
        );
    }
}

export default connect( null, { editCard } )(Label);

