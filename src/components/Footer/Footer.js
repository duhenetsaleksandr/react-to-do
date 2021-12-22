import React from 'react';
import './footer.scss';
import Social from '../Social';
import Copyright from '../Copyright';

const Footer = () => (
    <footer className="footer">
        <div className="container footer__container">
            <Copyright/>
            <Social/>
        </div>
    </footer>
);

export default Footer;
