import { ApplicationRef, Injector } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { restoreFocusAfterRender } from '../../app/ui/restore-focus';

describe('restoreFocusAfterRender', () => {
    afterEach(() => (document.body.innerHTML = ''));

    it('should focus a moved element again after the next render', () => {
        document.body.innerHTML = '<div id="a"></div><button id="b"></button>';
        const button = document.getElementById('b') as HTMLButtonElement;
        button.focus();

        restoreFocusAfterRender(TestBed.inject(Injector));
        // Moving the row detaches it, which drops its focus
        document.body.insertBefore(button, document.getElementById('a'));
        expect(document.activeElement).not.toBe(button);
        TestBed.inject(ApplicationRef).tick();

        expect(document.activeElement).toBe(button);
    });
});
