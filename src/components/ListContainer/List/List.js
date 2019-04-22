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

        let order = [];
        this.props.cardOrder.map(item => {
                if (item.listId === this.props.listId ) {
                    item.cards.map(cardId => {
                        return this.props.fetchCards.map(card => {
                            if (cardId === card.id) {
                                order = [...order, card];
                            }
                        });
                    })
                }
        });
        return (
            <Draggable draggableId={this.props.listId+'list'} index={this.props.index}>
                { provided => (
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
                                    {order.map(( card, index ) => {
                                        return <Card card={card} key={card.label+index} id={card.id} index={index}/>
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
        fetchCards: state.cards.cards,
        cardOrder: state.cards.cardsOrder
    }
};

export default connect(mapStateToProps, { addCard })(List);
