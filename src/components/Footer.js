import React from 'react';
import '../styles/footer.scss';
import Social from './Social';
import Copyright from './Copyright';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <Copyright/>
                <Social/>
            </div>
        </footer>
    );
}
