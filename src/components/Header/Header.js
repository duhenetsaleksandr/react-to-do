import React, { useContext } from 'react';
import ThemeContext from 'Context/ThemeContext';
import './Header.scss';
import Logo from 'components/common/Logo';
import SwitcherTheme from 'components/SwitcherTheme';

const Header = () => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
            <div className="container header__container">
                <Logo/>
                <SwitcherTheme/>
            </div>
        </header>
    );
};

export default Header;
