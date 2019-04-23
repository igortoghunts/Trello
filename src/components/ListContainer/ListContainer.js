import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { addList, lists, cards, listOrder, changeListOrder, cardOrder, changeCardOrder } from '../../store/action';

import CardEdit  from '../Modal/CardEdit';

import Modal from 'react-modal';

import List from './List/List';
import  AddListsForm  from './List/AddList/AddList';

class Logo extends Component {
    state = {
        addListIsShow: false,
        modalIsOpen: true,
    };
    
    handleSubmit = (values) => {
        this.setState({isShow: false});
        this.props.addList( values );
    };

    componentDidMount(){
        this.props.lists();
        this.props.cards();
        this.props.listOrder();
        this.props.cardOrder();
    };

    onDragEnd = results => {
        const { destination, source, type } = results;
        if(!destination){
            return;
        }
        if( destination.droppableId === source.droppadleId &&
            destination.index === source.index 
        ){
            return;
        }
        if(type === 'list'){
            console.log(source,destination);
            this.props.changeListOrder(source.index, destination.index, this.props.listsOrder);
        }else if(type === 'card'){
            this.props.changeCardOrder(source, destination, this.props.cardsOrder);
        }
    };

    render () {
        return (
            <div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="column" direction="horizontal" type="list">
                        {provided  => (
                            <div className="lists-container" {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    (this.props.listsOrder)? (
                                        this.props.listsOrder.map( ( listByOrder ,index) => {
                                            return this.props.allList.map( listByAllLists  => {
                                                if(listByOrder === listByAllLists.id){
                                                    return <List list={listByAllLists} key={listByAllLists.title+index} listId={listByAllLists.id} index={index}/>
                                                }
                                            })
                                        })
                                    ): null
                                }
                                {provided.placeholder}
                                {
                                    this.state.addListIsShow ? (
                                        <AddListsForm onSubmit={this.handleSubmit}/>
                                    ) : (
                                        <button className="add-list-btn btn"
                                                onClick={() => this.setState({isShow: true})}>Add a List</button>
                                    )
                                }
                            </div>
                        )}
                    </Droppable>
                    {
                        this.props.cardEditor?(
                            <CardEdit>
                                <p>khwgeyqwgejhqwe</p>
                            </CardEdit>
                        ):null
                    }
                </DragDropContext>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        allList: state.lists.lists,
        listsOrder: state.lists.listOrder,
        cardsOrder: state.cards.cardsOrder,
        cardEditor: state.cards.cardEditorIsOpen
    } 
};

const mapDispatchToProps = {
    lists,
    cards,
    addList,
    listOrder,
    changeListOrder,
    cardOrder,
    changeCardOrder
};
export default connect (mapStateToProps, mapDispatchToProps)(Logo);

