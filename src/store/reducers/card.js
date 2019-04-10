const initialstate = {
    cards: [],
}

export const cards = (state = initialstate, action) => {
    switch(action.type){
        case 'CARDS_FETCHED': return { ...state, cards: action.payload };
        case 'CARD_ADDED': return { ...state, cards: [...state.cards, action.payload] }
        default: return state;
    }
    
}


