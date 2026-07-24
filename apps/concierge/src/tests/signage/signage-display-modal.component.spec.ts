import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as ts_client_mod from '@placeos/ts-client';
import { SignageDisplayModalComponent } from '../../app/signage/signage-display-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('SignageDisplayModalComponent', () => {
    let spectator: Spectator<SignageDisplayModalComponent>;
    let display: any;

    const createComponent = createComponentFactory({
        component: SignageDisplayModalComponent,
        detectChanges: false,
        providers: [
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' } as any,
                region: { id: 'region-1' } as any,
                building: { id: 'bld-1' } as any,
            }),
        ],
    });

    function build() {
        spectator = createComponent({
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { display } }],
        });
    }

    beforeEach(() => {
        vi.clearAllMocks();
        // `spy: true` keeps real ts-client impls, which hang on live HTTP.
        (ts_client_mod.addSystem as any).mockResolvedValue({ id: 'sys-new' });
        (ts_client_mod.updateSystem as any).mockResolvedValue({ id: 'sys-1' });
        display = { id: '', zones: [] };
    });

    it('should not save when the name is missing', async () => {
        build();

        await spectator.component.save();

        expect(ts_client_mod.addSystem).not.toHaveBeenCalled();
        expect(ts_client_mod.updateSystem).not.toHaveBeenCalled();
        expect(spectator.inject(MatDialogRef).close).not.toHaveBeenCalled();
    });

    it('should create a new display with derived zones', async () => {
        build();
        spectator.component.model.update((m) => ({ ...m, name: 'Foyer' }));

        await spectator.component.save();

        expect(ts_client_mod.addSystem).toHaveBeenCalledWith(
            expect.objectContaining({
                name: 'SIGNAGE Foyer',
                display_name: 'Foyer',
                signage: true,
                zones: ['org-1', 'region-1', 'bld-1'],
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith({
            id: 'sys-new',
        });
    });

    it('should update an existing display', async () => {
        display = { id: 'sys-1', zones: ['extra-zone'] };
        build();
        spectator.component.model.update((m) => ({ ...m, name: 'Cafe' }));

        await spectator.component.save();

        expect(ts_client_mod.updateSystem).toHaveBeenCalledWith(
            'sys-1',
            expect.objectContaining({
                display_name: 'Cafe',
                zones: expect.arrayContaining(['extra-zone', 'org-1']),
            }),
        );
        expect(ts_client_mod.addSystem).not.toHaveBeenCalled();
    });
});
