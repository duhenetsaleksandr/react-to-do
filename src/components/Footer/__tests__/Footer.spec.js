import React from 'react';
import { IntlProvider } from 'react-intl';
import ThemeContext from 'Context/ThemeContext';
import { messages } from 'i18n/messages';
import { LOCALES } from 'i18n/locales';
import Footer from '../Footer';

describe('should render Footer component', () => {
    let component;
    beforeEach(() => {
        component = mount(<Footer/>, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                messages: messages[LOCALES.ENGLISH],
                locale: LOCALES.ENGLISH,
                defaultLocale: LOCALES.ENGLISH,
            },
        });
    });

    it('should contain tag footer with class .footer', () => {
        const footer = component.find('footer.footer');
        expect(footer).toHaveLength(1);
    });

    it('should contain div with class .container and .footer__container', () => {
        const footer = component.find('div.container.footer__container');
        expect(footer).toHaveLength(1);
    });

    it('should contain component Copyright', () => {
        const copyright = component.find('Copyright');
        expect(copyright).toHaveLength(1);
    });

    it('should contain component Copyright', () => {
        const social = component.find('Social');
        expect(social).toHaveLength(1);
    });

    it('should render Footer with light theme using context', () => {
        const WrapperContext = ({ children }) => {
            return (
                <ThemeContext.Provider value={{ darkTheme : false }}>
                    <IntlProvider messages={messages[LOCALES.ENGLISH]} locale={LOCALES.ENGLISH} defaultLocale={LOCALES.ENGLISH}>
                        { children }
                    </IntlProvider>
                </ThemeContext.Provider>
            );
        };
        const component = mount(<Footer/>, {
            wrappingComponent: WrapperContext
        });

        const footer = component.find('footer.footer.light');
        expect(footer).toHaveLength(1);
    });

    it('should render Footer with dark theme using context', () => {
        const WrapperContext = ({ children }) => {
            return (
                <ThemeContext.Provider value={{ darkTheme : true }}>
                    <IntlProvider messages={messages[LOCALES.ENGLISH]} locale={LOCALES.ENGLISH} defaultLocale={LOCALES.ENGLISH}>
                        { children }
                    </IntlProvider>
                </ThemeContext.Provider>
            );
        };
        const component = mount(<Footer/>, {
            wrappingComponent: WrapperContext
        });

        const footer = component.find('footer.footer.dark');
        expect(footer).toHaveLength(1);
    });

    it('should render Footer component snapshot', () => {
        const component = shallow(<Footer/>);
        expect(component).toMatchSnapshot();
    });
});
