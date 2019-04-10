const initialstate = {
    lists: [],
}

export const lists = (state = initialstate, action) => {
    switch(action.type){
        case 'LIST_FETCHED': return { ...state, lists: action.payload }
        case 'LIST_ADDED': return { ...state, lists: [...state.lists,  action.payload ]}
        default: return state;
    }
}

