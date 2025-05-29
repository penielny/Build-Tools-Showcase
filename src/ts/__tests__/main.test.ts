/**
 * @jest-environment jsdom
*/
import { initApp, renderHeader, renderFooter } from './../main';
import moment from 'moment';

describe('Test ui methods', () => {

    beforeEach(() => {
        document.body.innerHTML = '';
        initApp();
    });

    it('test init app method', () => {
        const headerElement = document.querySelector('header');
        const footerElement = document.querySelector('footer');
        const mainElement = document.querySelector('main');
        expect(headerElement).not.toBeNull();
        expect(footerElement).not.toBeNull();
        expect(mainElement).not.toBeNull();
        expect(document.body.classList.contains('light')).toBeTruthy();
    });


    it('is should render header elements', () => {
        renderHeader();
        const headerElement = document.querySelector('header');
        expect(headerElement).not.toBeNull();
        expect(headerElement?.querySelector('h1')?.textContent).toBe('Build Tools List');
        const themeToggleButton = headerElement?.querySelector('#theme-toggle');
        expect(themeToggleButton).not.toBeNull();
    });

    it('should render footer elements', () => {
        renderFooter();
        const footerElement = document.querySelector('footer');
        expect(footerElement).not.toBeNull();
        expect(footerElement?.textContent).toContain(`© ${moment().format('YYYY')}`);
    })

});