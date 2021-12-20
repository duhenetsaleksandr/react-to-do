import React from 'react';
import '../styles/header.scss';
import logo from '../images/logo.svg';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        );
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container header__container">
                    <Logo/>
                </div>
            </header>
        );
    }
}
