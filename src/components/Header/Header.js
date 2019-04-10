import React, { Component } from 'react';

import BoardMenu from './BoardMenu/BoardMenu';
import Logo from './Logo/Logo';
import UserSettings from './UserSettings/UserSettings';

class Header extends Component {
    render() {
        return (
            <div className="masthead">
                <BoardMenu />
                <Logo />
                <UserSettings />
            </div>
        );
    }
}

export default Header;


