import axios from '../../apis/axios';

export const cards = () => {
    return dispatch => {
        axios.get('/cards')
        .then(res => {
           dispatch({type: 'CARDS_FETCHED', payload: res.data});
        }).catch(e => {
            console.log(e)
        });  
    }
};


export const addCard = (label, listId) => { 
    return dispatch => {
        axios.post('/cards', { label, listId})
        .then(res => {
           dispatch({type: 'CARD_ADDED', payload: res.data});
        }).catch(e => {
            console.log(e)
        });  
    };
};


export const cardOrder = () => {
    return dispatch => {
        axios.get('/cardOrder/1')
            .then(res => {
                dispatch({type: 'CARD_ORDER_FETCHED', payload: res.data.cards});
            }).catch(e => {
            console.log(e)
        });
    };
};


export const changeCardOrder = (source, destination,order) => {
    const newOrder = order.slice();
    let card;
    newOrder.map(item => {
        if(item.listId === source.droppableId){
            console.log(order);
            card = item.cards[source.index];
            item.cards.splice(source.index, 1);
        }
    });
    newOrder.map(item => {
        if(item.listId === destination.droppableId){
            item.cards.splice(destination.index, 0, card);
        }
    });
    console.log(newOrder, );
    return dispatch => {
        axios.put('/cardOrder/1',{ cards: newOrder })
            .then(res => {
                dispatch({type : 'CARD_ORDER_UPDATED', payload: res.data.cards});
            })
            .catch(e => console.log(e))
    };

};

