import React from 'react';

export default function SocialLink(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" title={props.title}>
            {props.child?.()}
        </a>
    );
}
