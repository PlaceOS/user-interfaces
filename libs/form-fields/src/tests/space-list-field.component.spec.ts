import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { Subject } from 'rxjs';

import {
    OrganisationService,
    SETTING_KEYS,
    SettingsService,
    Space,
} from '@placeos/common';
import { mockDirective } from '@placeos/common/tests';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SpaceListFieldComponent } from '../lib/space-list-field.component';

describe('SpaceListFieldComponent', () => {
    let spectator: Spectator<SpaceListFieldComponent>;
    let closed: Subject<void>;
    let picked: Space[];
    const saved_favs = signal<string[]>(['space-2']);
    const space = (id: string) => new Space({ id, name: id });

    const createComponent = createComponentFactory({
        component: SpaceListFieldComponent,
        declarations: [
            MockComponent(IconComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(SettingsService, {
                signal: (() => saved_favs) as any,
                saveUserSetting: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                locationWithID: () => ({ label: 'Level 1' }) as any,
            }),
        ],
        // The component imports MatDialogModule, so the mock must be provided
        // on the component to take its place
        componentProviders: [
            MockProvider(MatDialog, {
                open: vi.fn(
                    () =>
                        ({
                            afterClosed: () => closed,
                            componentInstance: { selected: () => picked },
                            close: vi.fn(),
                        }) as any,
                ),
            }),
        ],
    });

    beforeEach(() => {
        closed = new Subject();
        picked = [];
        saved_favs.set(['space-2']);
        spectator = createComponent();
    });

    it('should open the space picker with the current spaces and set the picked spaces', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue([space('space-1')]);
        spectator.component.room_size.set(10);
        spectator.setInput('multiday', true);

        spectator.component.changeSpaces();
        expect(spectator.inject(MatDialog, true).open).toHaveBeenLastCalledWith(
            expect.anything(),
            {
                data: {
                    spaces: [expect.objectContaining({ id: 'space-1' })],
                    options: { capacity: 10 },
                    multiday: true,
                },
            },
        );

        picked = [space('space-1'), space('space-3')];
        closed.next();
        expect(spectator.component.spaces().map((_) => _.id)).toEqual([
            'space-1',
            'space-3',
        ]);
        expect(on_change).toHaveBeenLastCalledWith(picked);
    });

    it('should remove a space from the list', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        spectator.component.writeValue([space('space-1'), space('space-2')]);
        spectator.detectChanges();

        spectator.click('button[name="remove-space"]');

        expect(on_change).toHaveBeenLastCalledWith([
            expect.objectContaining({ id: 'space-2' }),
        ]);
    });

    it('should show a favourite change at once and save it', () => {
        const settings = spectator.inject(SettingsService);
        spectator.component.toggleFavourite(space('space-1'));
        expect(spectator.component.favorites()).toEqual(['space-2', 'space-1']);
        expect(settings.saveUserSetting).toHaveBeenLastCalledWith(
            SETTING_KEYS.FAVORITE_ROOMS,
            ['space-2', 'space-1'],
        );

        // Follows the setting again once the saved value comes back
        saved_favs.set(['space-3']);
        expect(spectator.component.favorites()).toEqual(['space-3']);
    });
});
