import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { LockerBankModalComponent } from '../../app/lockers/locker-bank-modal.component';

describe('LockerBankModalComponent', () => {
    let spectator: Spectator<LockerBankModalComponent>;
    let dialog_data: any;
    let settings: Record<string, unknown>;
    const level_list = signal<any[]>([
        { id: 'lvl-1', parent_id: 'bld-1', name: 'L1', display_name: 'Level 1' },
    ]);

    const createComponent = createComponentFactory({
        component: LockerBankModalComponent,
        shallow: true,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            MockProvider(MatDialogRef, { disableClose: false } as any),
            MockProvider(OrganisationService, {
                level_list,
                buildingsForRegion: jest.fn(() => [{ id: 'bld-1' }]),
                building: { id: 'bld-1' },
                organisation: { id: 'org-1' },
                region: { id: 'region-1' },
                levelWithID: jest.fn(() => ({
                    id: 'lvl-1',
                    parent_id: 'bld-1',
                })),
            } as any),
            MockProvider(SettingsService, {
                get: jest.fn((key: string) => settings[key]),
            } as any),
        ],
    });

    beforeEach(() => {
        dialog_data = null;
        settings = {};
        level_list.set([
            {
                id: 'lvl-1',
                parent_id: 'bld-1',
                name: 'L1',
                display_name: 'Level 1',
            },
        ]);
    });

    it('should auto-select the first available level via the effect', async () => {
        spectator = createComponent();
        spectator.detectChanges();
        await spectator.fixture.whenStable();

        expect(spectator.component.model().level_id).toBe('lvl-1');
        expect(spectator.component.model().zones).toEqual(['lvl-1']);
    });

    it('should not emit when the form is invalid', () => {
        spectator = createComponent();
        const emit = jest.spyOn(spectator.component.event, 'emit');
        spectator.component.model.update((m) => ({
            ...m,
            level_id: 'lvl-1',
            name: '',
            map_id: '',
        }));

        spectator.component.postForm();

        expect(emit).not.toHaveBeenCalled();
        expect(spectator.component.loading()).toBe(false);
    });

    it('should emit a done event with computed zones when valid', () => {
        spectator = createComponent();
        const emit = jest.spyOn(spectator.component.event, 'emit');
        spectator.component.model.update((m) => ({
            ...m,
            level_id: 'lvl-1',
            name: 'Bank A',
            map_id: 'map-a',
        }));

        spectator.component.postForm();

        expect(spectator.component.loading()).toBe(true);
        expect(emit).toHaveBeenCalledWith(
            expect.objectContaining({ reason: 'done' }),
        );
        const metadata = emit.mock.calls[0][0].metadata as any;
        expect(metadata.zones).toEqual(['lvl-1', 'org-1', 'region-1', 'bld-1']);
    });

    it('should expose the id from the injected dialog data', () => {
        dialog_data = { id: 'bank-9', name: 'Existing' };
        spectator = createComponent();

        expect(spectator.component.id).toBe('bank-9');
        expect(spectator.component.model().name).toBe('Existing');
    });
});
