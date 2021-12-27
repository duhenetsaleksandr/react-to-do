import React, { useContext } from 'react';
import ThemeContext from 'Context/ThemeContext';
import './Footer.scss';
import Social from 'components/Social/Social';
import Copyright from 'components/Copyright';

const Footer = () => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <footer className={`footer ${darkTheme ? 'dark' : 'light'}`}>
            <div className="container footer__container">
                <Copyright/>
                <Social/>
            </div>
        </footer>
    );
};

export default Footer;
