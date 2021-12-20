import React from 'react';
import '../styles/loader.scss';

export default class Loader extends React.Component {
    render() {
        return (<div className="loader"><div className="lds-dual-ring"/></div>);
    }
}
