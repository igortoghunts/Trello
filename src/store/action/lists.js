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

export const addList = title => {
    return dispatch => {
        axios.post('/lists',{ title })
        .then(res => {
           dispatch({type: 'LIST_ADDED', payload: res.data});
        }).catch(e => {
            console.log(e);
        });
    }
};

export const listOrder = () => {
    return dispatch => {
        axios.get('/listOrder')
            .then(res => {
                dispatch({type: 'LIST_ORDER_FETCHED', payload: res.data});
            }).catch(e => {
            console.log(e);
        });
    }
};


// export const addListOrder = title => {
//     return dispatch => {
//         axios.post('/listOrder',{ title })
//             .then(res => {
//                 dispatch({type: 'LIST_ADDED', payload: res.data});
//             }).catch(e => {
//             console.log(e)
//         });
//     }
// };