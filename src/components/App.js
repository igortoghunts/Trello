import React from 'react';

import Header from './Header/Header';
import Board from './Board/Board';
import ListContainer from './ListContainer/ListContainer';


const App = () => {

    return (
        <div className="ui container">
            <Header />
            <Board />
            <ListContainer />
        </div>
    );
};


export default App;