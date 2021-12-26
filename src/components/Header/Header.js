import React, { useContext } from 'react';
import ThemeContext from 'Context/ThemeContext';
import './Header.scss';
import Logo from 'components/common/Logo';
import SwitcherTheme from 'components/common/SwitcherTheme';
import SwitcherLang from 'components/common/SwitcherLang';

const Header = ({ currentLang, onChangeLocale }) => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <header className={`header ${darkTheme ? 'dark' : 'light'}`}>
            <div className='container header__container'>
                <Logo/>
                <SwitcherLang currentLang={currentLang} onChangeLocale={onChangeLocale}/>
                <SwitcherTheme/>
            </div>
        </header>
    );
};

export default Header;
