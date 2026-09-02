import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, Space } from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockDirective, MockProvider } from 'ng-mocks';
import { EventFormService } from '../../lib/event-form.service';
import { SpaceListComponent } from '../../lib/space-select-modal/space-list.component';

describe('SpaceListComponent', () => {
    let spectator: Spectator<SpaceListComponent>;
    const loading = signal<any>(false);
    const available_spaces = signal<Space[]>([]);
    const room_alerts = signal<Record<string, [string, string]>>({});
    const spaces = [
        new Space({ id: 'space-1', name: 'Space One', capacity: 4 }),
        new Space({ id: 'space-2', name: 'Space Two', capacity: 0 }),
    ];
    const createComponent = createComponentFactory({
        component: SpaceListComponent,
        providers: [
            MockProvider(EventFormService, {
                loading: loading as any,
                available_spaces: available_spaces as any,
                room_alerts: room_alerts as any,
                setView: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                locationWithID: vi.fn(() => ({ label: '' })),
            }),
        ],
        declarations: [
            mockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
        ],
    });

    beforeEach(() => {
        loading.set(false);
        available_spaces.set([]);
        room_alerts.set({});
        spectator = createComponent();
    });

    it('should show an empty state when no spaces are available', () => {
        expect('[empty]').toExist();
    });

    it('should show a loading state while spaces load', () => {
        loading.set(true);
        spectator.detectChanges();
        expect('[loading]').toExist();
        expect('[empty]').not.toExist();
    });

    it('should list the available spaces', () => {
        available_spaces.set(spaces);
        spectator.detectChanges();
        expect(spectator.queryAll('li[space]')).toHaveLength(2);
    });

    it('should hide selected spaces from results', async () => {
        available_spaces.set(spaces);
        spectator.setInput({
            selected: ['space-1'],
            selected_spaces: [
                {
                    space: spaces[0],
                    location: 'Australia / Sydney / Level 1',
                },
            ],
        });
        await spectator.fixture.whenStable();

        expect(spectator.queryAll('[selected-spaces] li[space]')).toHaveLength(
            1,
        );
        expect(spectator.queryAll('[results] li[space]')).toHaveLength(1);
        expect(spectator.query('[selected-spaces]')).toHaveText(
            'Australia / Sydney / Level 1',
        );
        expect(spectator.query('[results]')).not.toHaveText('Space One');
        expect(spectator.query('[results]')).toHaveText('Space Two');
    });

    it('should emit a selected space when its list item is opened', () => {
        spectator.setInput({
            selected: ['space-1'],
            selected_spaces: [{ space: spaces[0], location: 'Sydney' }],
        });
        const emit = vi.fn();
        spectator.component.onSelect.subscribe(emit);

        spectator.click('[selected-spaces] [name="select-space"]');

        expect(emit).toHaveBeenCalledWith(spaces[0]);
    });

    it('should emit the selected space', () => {
        available_spaces.set(spaces);
        spectator.detectChanges();
        const emit = vi.fn();
        spectator.component.onSelect.subscribe(emit);
        spectator.click('[name="select-space"]');
        expect(emit).toHaveBeenCalledWith(spaces[0]);
    });

    it('should emit favourite toggles for a space', () => {
        available_spaces.set(spaces);
        spectator.detectChanges();
        const emit = vi.fn();
        spectator.component.toggleFav.subscribe(emit);
        spectator.click('[name="toggle-space-favourite"]');
        expect(emit).toHaveBeenCalledWith(spaces[0]);
    });

    it('should flag favourite spaces', () => {
        spectator.setInput({ favorites: ['space-1'] });
        expect(spectator.component.isFavourite('space-1')).toBe(true);
        expect(spectator.component.isFavourite('space-2')).toBe(false);
    });
});
