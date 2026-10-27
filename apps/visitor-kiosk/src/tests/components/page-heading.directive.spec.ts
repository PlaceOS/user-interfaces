import { createDirectiveFactory } from '@ngneat/spectator/vitest';

import { PageHeadingDirective } from '../../app/components/page-heading.directive';

describe('PageHeadingDirective', () => {
    const createDirective = createDirectiveFactory({
        directive: PageHeadingDirective,
        detectChanges: false,
    });

    afterEach(() => (document.activeElement as HTMLElement)?.blur?.());

    it('should focus the heading when nothing has focus', () => {
        const spectator = createDirective(`<h1 pageHeading>Step</h1>`);
        spectator.detectChanges();
        expect(document.activeElement).toBe(spectator.element);
    });

    it('should not take focus from another element', () => {
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.focus();
        const spectator = createDirective(`<h1 pageHeading>Step</h1>`);
        spectator.detectChanges();
        expect(document.activeElement).toBe(input);
        input.remove();
    });
});
