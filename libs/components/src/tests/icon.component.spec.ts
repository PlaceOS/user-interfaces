import { Spectator, createComponentFactory } from '@ngneat/spectator/vitest';

import { IconComponent } from '../lib/icon.component';
import { SafePipe } from '../lib/safe.pipe';

describe('IconComponent', () => {
    let spectator: Spectator<IconComponent>;
    const createComponent = createComponentFactory({
        component: IconComponent,
        declarations: [SafePipe],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should show font icons', () => {
        spectator.setInput('icon', {
            type: 'icon',
            class: 'rounded-sm',
            content: 'test-contents',
        });
        spectator.detectChanges();
        expect('i').toBeTruthy();
        expect('i').toContainText('test-contents');
        expect('i').toHaveClass('material-symbols-rounded');
    });

    it('should show images', () => {
        spectator.setInput('icon', { type: 'img', src: '/test-image.png' });
        spectator.detectChanges();
        expect('img').toBeTruthy();
        expect('img').toContainProperty(
            'src',
            `${location.origin}/test-image.png`,
        );
    });

    it('should hide decorative icons from assistive technology', () => {
        expect(spectator.element).toHaveAttribute('aria-hidden', 'true');
        expect(spectator.element).not.toHaveAttribute('role');
        expect(spectator.element).not.toHaveAttribute('aria-label');
    });

    it('should announce icons that have a label', () => {
        spectator.setInput('label', 'Recurring');
        spectator.detectChanges();
        expect(spectator.element).not.toHaveAttribute('aria-hidden');
        expect(spectator.element).toHaveAttribute('role', 'img');
        expect(spectator.element).toHaveAttribute('aria-label', 'Recurring');
    });

    it('should give image icons an empty alt', () => {
        spectator.setInput('icon', { type: 'img', src: '/test-image.png' });
        spectator.detectChanges();
        expect('img').toHaveAttribute('alt', '');
    });
});
