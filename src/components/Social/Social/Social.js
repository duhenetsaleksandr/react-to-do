import React, { useContext } from 'react';
import ThemeContext from 'Context/ThemeContext';
import './Social.scss';
import SocialLink from 'components/Social/SocialLink';
import { ReactComponent as TelegramLogo } from 'images/telegram.svg';
import { ReactComponent as InstagramLogo } from 'images/instagram.svg';
import * as socialURL from 'constants/socialURL';

const Social = () => {
    const { darkTheme } = useContext(ThemeContext);

    return (
        <div className="social-icons">
            <SocialLink link={socialURL.telegramURL} title="telegram">
                <TelegramLogo className={`social-link ${darkTheme ? 'dark' : 'light'}`} />
            </SocialLink>
            <SocialLink link={socialURL.instagramURL} title="instagram">
                <InstagramLogo className={`social-link ${darkTheme ? 'dark' : 'light'}`} />
            </SocialLink>
        </div>
    );
};

export default Social;
