const initialstate = {
    lists: [],
    listOrder: [],
};

export const lists = (state = initialstate, action) => {
    switch(action.type){
        case 'LIST_FETCHED': return { ...state, lists: action.payload };
        case 'LIST_ADDED': return { ...state, lists: [...state.lists,  action.payload ]};
        case 'LIST_ORDER_FETCHED': return { ...state, listOrder: action.payload };
        case 'LIST_ORDER_UPDATED': return { ...state, listOrder: action.payload };
        default: return state;
    }
};

