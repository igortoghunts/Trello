import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { addList } from '../../store/action';
import { lists } from '../../store/action';
import { cards } from '../../store/action';
import { listOrder } from '../../store/action';

import List from './List/List';
import  AddListsForm  from './List/AddList/AddList';

class Logo extends Component {
    state = {
        isShow: false
    };
    
    handleSubmit = (values) => {
        this.setState({isShow: false});
        this.props.addList( values.title );
    };

    componentDidMount(){
        this.props.lists();
        this.props.cards();
        this.props.listOrder();

    };

    onDragEnd = results => {
        const { destination, source } = results;
        if(!destination){
            return;
        }
        if( destination.droppableId === source.droppadleId &&
            destination.index === source.index 
        ){
            return;
        }
    };

    render () {
        console.log(this.props.listsOrder, this.props.allList);

        return (     
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="columns" direction="horizontal" type="column">
                    {provided  => (
                        <div className="lists-container" {...provided.droppableProps} ref={provided.innerRef}>
                            {/*{*/}
                            {/*    this.props.allList.map( (list,index) => {*/}
                            {/*        return <List list={list} key={list.title} listId={list.id} index={index}/>*/}
                            {/*    })*/}
                            {/*}*/}
                            {
                                (this.props.listsOrder)? (
                                    this.props.listsOrder.map(listByOrder => {
                                        this.props.allList.map( (listByAllLists, index) => {
                                         if(listByOrder === listByAllLists.id){
                                             console.log(listByOrder, listByAllLists.id);
                                             return <List list={listByAllLists} key={listByAllLists.title} listId={listByAllLists.id} index={index}/>
                                         }
                                        })
                                    })
                                ): null
                            }
                            {provided.placeholder}
                            {
                                this.state.isShow ? (
                                    <AddListsForm onSubmit={this.handleSubmit}/>
                                ) : (
                                    <button className="add-list-btn btn"
                                            onClick={() => this.setState({isShow: true})}>Add a card</button>
                                )
                            }
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => {
    return {
        allList: state.lists.lists,
        listsOrder: state.lists.listOrder
    } 
};

const mapDispatchToProps = {
    lists,
    cards,
    addList,
    listOrder
};
export default connect (mapStateToProps, mapDispatchToProps)(Logo);

