import { signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import {
    AuthenticatedImageDirective,
    IconComponent,
    SafePipe,
} from '@placeos/components';
import { MockComponent, MockDirective, MockPipe } from 'ng-mocks';

import { HelpModalComponent } from '../../app/ui/help-modal.component';

const ITEMS = [
    { id: 'a', title: 'Alpha', content: '# Alpha Heading', icon: 'star' },
    { id: 'b', title: 'Beta', content: '## Beta Heading' },
];

const settingsMock = (theme: string) => ({
    theme,
    get: jest.fn((key: string) =>
        key === 'app.logo_light' ? { src: 'light.png' } : { src: 'dark.png' },
    ),
});

describe('HelpModalComponent', () => {
    let spectator: Spectator<HelpModalComponent>;
    const createComponent = createComponentFactory({
        component: HelpModalComponent,
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
            MockPipe(SafePipe, (v) => v),
        ],
        providers: [
            {
                provide: MAT_DIALOG_DATA,
                useValue: { items: ITEMS, active_id: 'b' },
            },
            { provide: SettingsService, useValue: settingsMock('light') },
            {
                provide: OrganisationService,
                useValue: { active_building: signal({ id: 'bld-1' }) },
            },
        ],
    });

    const setup = (
        data: any = { items: ITEMS, active_id: 'b' },
        theme = 'light',
    ) =>
        (spectator = createComponent({
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: SettingsService, useValue: settingsMock(theme) },
            ],
        }));

    it('should create component', () => {
        setup();
        expect(spectator.component).toBeTruthy();
    });

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

    it('should resolve the light logo when theme is light', () => {
        setup(undefined, 'light');
        expect(spectator.component.logo()).toEqual({ src: 'light.png' });
    });

    it('should resolve the dark logo when theme is dark', () => {
        setup(undefined, 'dark');
        expect(spectator.component.logo()).toEqual({ src: 'dark.png' });
    });
});
