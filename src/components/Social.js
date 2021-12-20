import React from 'react';
import { ReactComponent as TelegramLogo } from '../images/telegram.svg';
import { ReactComponent as InstagramLogo } from '../images/instagram.svg';

const getTelegramLogo = () => ( <TelegramLogo className="social-link" /> );
const getInstagramLogo = () => ( <InstagramLogo className="social-link" /> );

class SocialLink extends React.Component {
    render() {
        return (
            <a href={this.props.link} target="_blank" rel="noopener noreferrer" title={this.props.title}>
                {this.props?.child()}
            </a>
        );
    }
}

export default class Social extends React.Component {
    render() {
        return (
            <div className="social-icons">
                <SocialLink link="https://t.me/duhenets" title="telegram" child={getTelegramLogo}/>
                <SocialLink link="https://www.instagram.com/duhenets_aleksandr/" title="instagram" child={getInstagramLogo}/>
            </div>
        );
    }
}
