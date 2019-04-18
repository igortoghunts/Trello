import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { addCard } from '../../../store/action'

import Card from './Card/Card';
import AddListsForm from './AddList/AddList';

class List extends Component {

    handleSubmit = (values) => {
        this.setState({isShow: false});
        this.props.addCard(values.title,this.props.listId );        
    };

    state = {
        isShow: false
    };

    render(){
        const cards = this.props.fetchCards.filter(card => card.listId === this.props.listId);
        return (
            <Draggable draggableId={this.props.listId+'ul'} index={this.props.index}>
                {provided => (
                    <div className="list"
                         {...provided.draggableProps}
                         ref={provided.innerRef}
                    >
                        <h3 className="list-title" {...provided.dragHandleProps}>{this.props.list.title}</h3>
                        <Droppable droppableId={this.props.listId} type="card">
                            {provided =>(
                                <ul className="list-items"   ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    {cards.map(( card, index ) => {
                                        return <Card card={card} key={card.label} id={card.id} index={index}/>
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                        {
                            this.state.isShow? (
                                <AddListsForm onSubmit={this.handleSubmit}/>
                            ):(
                                <button className="add-card-btn btn" onClick={() => this.setState({isShow:true})}>Add a card</button>
                            )
                        }
                    </div>
                )}
            </Draggable>
        );
    }
}

const mapStateToProps = state =>  {
    return {
        fetchCards: state.cards.cards
    }
};

export default connect(mapStateToProps, { addCard })(List);
