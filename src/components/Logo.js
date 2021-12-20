import React from 'react';
import '../styles/logo.scss';
import logo from '../images/logo.svg';

export default function Logo() {
    return (
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
    );
}
