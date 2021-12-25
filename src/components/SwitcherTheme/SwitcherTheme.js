import React, { useContext } from 'react';
import ThemeContext from "Context/ThemeContext";
import './SwitcherTheme.scss';
import { ReactComponent as MoonSvg } from 'images/moon.svg';
import { ReactComponent as SunSvg } from 'images/sun.svg';

const SwitcherTheme = () => {
    const { darkTheme, switchTheme } = useContext(ThemeContext);

    return (
        <button className={`switch-theme ${darkTheme ? 'dark' : 'light'}`} onClick={switchTheme}>
            { darkTheme ? <SunSvg/> : <MoonSvg/> }
        </button>
    );
};

export default SwitcherTheme;
