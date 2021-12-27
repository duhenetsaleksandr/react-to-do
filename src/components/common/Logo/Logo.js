import React, { useContext } from 'react';
import ThemeContext from "Context/ThemeContext";
import './Logo.scss';
import { ReactComponent as LogoSvg} from 'images/logo.svg';

const Logo = () => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className={`logo ${darkTheme ? 'light' : 'dark'}`}>
            <LogoSvg/>
        </div>
    );
};

export default Logo;
