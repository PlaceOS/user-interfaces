import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { IconComponent } from '@placeos/components';
import { PlaceCurrentGroup } from '@placeos/ts-client';
import { MockComponent } from 'ng-mocks';

import {
    GroupSelectModalComponent,
    GroupSelectModalData,
} from '../app/ui/group-select-modal.component';

const membership = (id: string, extra: Record<string, unknown> = {}) =>
    ({
        group: { id, name: id, ...extra },
        permissions: 1,
    }) as unknown as PlaceCurrentGroup;

describe('GroupSelectModalComponent', () => {
    let spectator: Spectator<GroupSelectModalComponent>;

    const createComponent = createComponentFactory({
        component: GroupSelectModalComponent,
        imports: [NoopAnimationsModule],
        declarations: [MockComponent(IconComponent)],
        providers: [{ provide: MatDialogRef, useValue: { close: vi.fn() } }],
    });

    const build = (data: GroupSelectModalData) =>
        (spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: data }],
        }));

    const options = () =>
        spectator
            .queryAll('[group-option]')
            .map((el) => el.textContent.replace(/\s+/g, ' ').trim());

    it('filters groups by name or description, hiding "All groups"', () => {
        build({
            show_all_groups: true,
            groups: [
                membership('Sydney', { description: 'Harbour office' }),
                membership('Melbourne'),
            ],
        });
        expect(options()).toEqual([
            expect.stringContaining('All groups'),
            expect.stringContaining('Sydney'),
            expect.stringContaining('Melbourne'),
        ]);

        spectator.component.search.set(' HARBOUR ');
        spectator.detectChanges();
        expect(options()).toEqual([
            expect.stringContaining('Sydney Harbour office'),
        ]);

        spectator.component.search.set('nowhere');
        spectator.detectChanges();
        expect(options()).toEqual([]);
        expect(spectator.query('main')).toHaveText(
            'No support groups available',
        );
    });

    it('shows the parents of the selected group as links to them', () => {
        build({
            selected_group_id: 'team',
            groups: [
                membership('team', { parent_id: 'region' }),
                membership('region'),
            ],
        });
        const nav = spectator.query(
            'nav[aria-label="Selected group hierarchy"]',
        );
        expect(nav.querySelector('button')).toHaveText('region');
        expect(nav.querySelector('[aria-current="page"]')).toHaveText('team');
    });
});
