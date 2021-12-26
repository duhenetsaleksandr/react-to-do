import React, { useContext } from "react";
import { LOCALES } from "i18n/locales";
import ThemeContext from "Context/ThemeContext";
import './SwitcherLang.scss';

const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Русский', code: LOCALES.RUSSIAN },
]

const SwitcherLang = ({ currentLang, onChangeLocale }) => {
    const { darkTheme } = useContext(ThemeContext);
    return (
        <div className="switcher-lang__wrapper">
            <select className={`switcher-lang ${darkTheme ? 'light' : 'dark'}`} value={currentLang} onChange={onChangeLocale}>
                {languages.map(({ name, code}) => (
                    <option key={code} value={code}>
                        { name }
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SwitcherLang;
