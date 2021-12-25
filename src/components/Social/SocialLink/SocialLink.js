import React from 'react';

const SocialLink = ({ link, title, children }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" title={title}>
        { children }
    </a>
);

export default SocialLink;
