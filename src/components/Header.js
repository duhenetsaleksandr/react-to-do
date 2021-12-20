import React from 'react';
import '../styles/header.scss';
import Logo from './Logo';

export default function Header() {
    return (
        <header className="header">
            <div className="container header__container">
                <Logo/>
            </div>
        </header>
    );
}
