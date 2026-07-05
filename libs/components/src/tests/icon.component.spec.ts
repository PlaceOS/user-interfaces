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

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

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
});
