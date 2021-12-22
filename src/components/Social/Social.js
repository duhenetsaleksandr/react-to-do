import React from 'react';
import './social.scss';
import SocialLink from './SocialLink';
import { ReactComponent as TelegramLogo } from '../../images/telegram.svg';
import { ReactComponent as InstagramLogo } from '../../images/instagram.svg';
import * as socialURL from '../../constants/socialURL';

const Social = () => (
    <div className="social-icons">
        <SocialLink link={socialURL.telegramURL} title="telegram">
            <TelegramLogo className="social-link" />
        </SocialLink>
        <SocialLink link={socialURL.instagramURL} title="instagram">
            <InstagramLogo className="social-link" />
        </SocialLink>
    </div>
);

export default Social;
