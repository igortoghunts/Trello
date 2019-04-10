import React from 'react';

const BoardMenu = () => {
    return (
        <div className="boards-menu">
            <button className="boards-btn btn">
                <i className="fab fa-trello boards-btn-icon"></i>
                Boards
            </button>
            <div className="board-search">
                <input type="search" className="board-search-input" aria-label="Board Search"/>
                <i className="fas fa-search search-icon" aria-hidden="true"></i>
            </div>
        </div>
    );
}

export default BoardMenu;
