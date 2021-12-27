import React from 'react';

const ThemeContext = React.createContext({ darkTheme: true, switchTheme: () => {} });

export default ThemeContext;
