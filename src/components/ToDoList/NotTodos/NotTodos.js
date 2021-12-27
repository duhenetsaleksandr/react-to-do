import React from 'react';
import './NotTodos.scss';
import { FormattedMessage } from 'react-intl';

const NotTodos = () => {
    return (
        <div className="not-todos">
            <FormattedMessage id="not_todos" />
        </div>
    );
};

export default NotTodos;
