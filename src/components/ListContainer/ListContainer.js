import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { addList } from '../../store/action';
import { lists } from '../../store/action';
import { cards } from '../../store/action';

import List from './List/List';
import  AddListsForm  from './List/AddList/AddList';

class Logo extends Component {
    state = {
        isShow: false
    }
    
    handleSubmit = (values) => {
        this.setState({isShow: false});
        this.props.addList( values.title );
    };

    componentDidMount(){
        this.props.lists();
        this.props.cards();
    };

    onDragEnd = results => {
        const { destination, source, draggableId } = results;
        if(!destination){
            return;
        }
        if( destination.dropagleId === source.droppadleId &&
            destination.index === source.index 
        ){
            return;
        }
    };

    render () {
        return (     
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="lists-container">
                    {
                        this.props.fetchLists.lists.map(list => {
                            return <List list={list} key={list.title} listId={list.id}/>
                        })
                    }   
                    {
                        this.state.isShow? (
                            <AddListsForm onSubmit={this.handleSubmit}/>
                        ):(
                            <button className="add-list-btn btn" onClick={() => this.setState({isShow:true})}>Add a card</button>
                        )
                    }
                </div>
            </DragDropContext>  
        );
    }
}

const mapStateToProps = state => {
    return {
        fetchLists: state.lists,
    } 
}

export default connect (mapStateToProps, { lists, cards, addList })(Logo);

