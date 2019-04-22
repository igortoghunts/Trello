import axios from '../../apis/axios';

export const lists = () => {
    return dispatch => {
        axios.get('/lists')
        .then(res => {
           dispatch({type: 'LIST_FETCHED', payload: res.data});
        }).catch(e => {
            console.log(e);
        });  
    }
};


export const addList = values => {
    return dispatch => {
        axios.post('/lists',{ title: values.title })
        .then(res => {
           dispatch({type: 'LIST_ADDED', payload: res.data});
        }).catch(e => {
            console.log(e);
        });
        console.log(values); //continue...
        // axios.post('/listOrder/1',{ title })
        //     .then(res => {
        //         dispatch({type: 'LIST_ORDER_ADDED', payload: res.data});
        //     }).catch(e => {
        //     console.log(e);
        // });
    }
};


export const listOrder = () => {
    return dispatch => {
        axios.get('/listOrder/1')
            .then(res => {
                dispatch({type: 'LIST_ORDER_FETCHED', payload: res.data.lists});
            }).catch(e => {
            console.log(e);
        });
    }
};


export const changeListOrder = (lastIndex,currentIndex, order) => {
    const newOrder = order.slice();
    newOrder.splice(lastIndex, 1);
    newOrder.splice(currentIndex,0,order[lastIndex]);
    return dispatch => {
        axios.put('/listOrder/1', { lists: newOrder})
            .then(res => {
                dispatch({type: 'LIST_ORDER_UPDATED', payload: res.data.lists});
            }).catch(e => {
            console.log(e);
        });
    }
};

