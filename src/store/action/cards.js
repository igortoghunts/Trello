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