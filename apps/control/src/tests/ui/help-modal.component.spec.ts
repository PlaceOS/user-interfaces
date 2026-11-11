import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    AuthenticatedImageDirective,
    IconComponent,
} from '@placeos/components';
import { MockComponent, MockDirective } from 'ng-mocks';

import { HelpModalComponent } from '../../app/ui/help-modal.component';

const ITEMS = [
    { id: 'a', title: 'Alpha', content: '# Alpha Heading', icon: 'star' },
    { id: 'b', title: 'Beta', content: '## Beta Heading' },
];

describe('HelpModalComponent', () => {
    let spectator: Spectator<HelpModalComponent>;
    const createComponent = createComponentFactory({
        component: HelpModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { items: ITEMS, active_id: 'b' },
            },
        ],
    });

    const setup = (data: unknown = { items: ITEMS, active_id: 'b' }) =>
        (spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        }));

    it('should initialise active item from the active_id', () => {
        setup();
        expect(spectator.component.active_item().id).toBe('b');
    });

    it('should fall back to the first item when active_id is not found', () => {
        setup({ items: ITEMS, active_id: 'missing' });
        expect(spectator.component.active_item().id).toBe('a');
    });

    it('should render markdown content of the active item', () => {
        setup();
        expect(spectator.component.content()).toContain('Beta Heading');
        expect(spectator.component.content()).toContain('<h2');
    });

    it('should render one entry per item and update selection on click', () => {
        setup();
        const items = spectator.queryAll('li');
        expect(items).toHaveLength(ITEMS.length);
        spectator.click(items[0]);
        expect(spectator.component.active_item().id).toBe('a');
        spectator.detectChanges();
        expect(spectator.queryAll('li')[0]).toHaveClass('active');
        expect(spectator.component.content()).toContain('Alpha Heading');
    });

    it('should strip script handlers from help content', () => {
        setup({
            items: [
                {
                    id: 'x',
                    title: 'XSS',
                    content: '<img src="x.png" onerror="alert(1)">',
                },
            ],
            active_id: 'x',
        });
        const img = spectator.query('[content] img');
        expect(img).toExist();
        expect(img.getAttribute('onerror')).toBeNull();
    });
});
