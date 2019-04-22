const initialstate = {
    cards: [],
    cardsOrder: [],
};

export const cards = (state = initialstate, action) => {
    switch(action.type){
        case 'CARDS_FETCHED': return { ...state, cards: action.payload };
        case 'CARD_ADDED': return { ...state, cards: [...state.cards, action.payload] };
        case 'CARD_ORDER_FETCHED': return { ...state, cardsOrder: action.payload };
        case 'CARD_ORDER_UPDATED': return { ...state, cardsOrder: action.payload };
        default: return state;
    }
};


