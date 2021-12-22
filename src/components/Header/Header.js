import React from 'react';
import './header.scss';
import { Logo } from '../common';

const Header = () => (
    <header className="header">
        <div className="container header__container">
            <Logo/>
        </div>
    </header>
);

export default Header;
