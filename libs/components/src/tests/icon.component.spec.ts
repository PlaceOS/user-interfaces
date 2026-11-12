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
        expect('i').toContainText('test-contents');
        expect('i').toHaveClass('material-symbols-rounded');
    });

    it('should show images', () => {
        spectator.setInput('icon', { type: 'img', src: '/test-image.png' });
        spectator.detectChanges();
        expect('i').not.toExist();
        expect('img').toContainProperty(
            'src',
            `${location.origin}/test-image.png`,
        );
    });

    it('should map icon styles to Material Symbols classes', () => {
        spectator.setInput('className', 'sharp');
        spectator.detectChanges();
        expect('i').toHaveClass('material-symbols-sharp');
        // The icon's own class wins over the component class
        spectator.setInput('icon', { type: 'icon', class: 'outlined' });
        spectator.detectChanges();
        expect('i').toHaveClass('material-symbols-outlined');
        // Other class names pass through as they are
        spectator.setInput('icon', undefined);
        spectator.setInput('className', 'fa fa-home');
        spectator.detectChanges();
        expect(spectator.query('i')).toHaveProperty('className', 'fa fa-home');
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
