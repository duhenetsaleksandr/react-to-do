import React from 'react';
import '../styles/social.scss';
import SocialLink from './SocialLink';
import { ReactComponent as TelegramLogo } from '../images/telegram.svg';
import { ReactComponent as InstagramLogo } from '../images/instagram.svg';

const getTelegramLogo = () => ( <TelegramLogo className="social-link" /> );
const getInstagramLogo = () => ( <InstagramLogo className="social-link" /> );

export default function Social() {
    return (
        <div className="social-icons">
            <SocialLink link="https://t.me/duhenets" title="telegram" child={getTelegramLogo}/>
            <SocialLink link="https://www.instagram.com/duhenets_aleksandr/" title="instagram" child={getInstagramLogo}/>
        </div>
    );
}
