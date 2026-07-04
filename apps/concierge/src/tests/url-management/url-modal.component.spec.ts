import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { ShortURL } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import * as common_mod from '@placeos/common';
import { ShortUrlModalComponent } from '../../app/url-management/url-modal.component';

jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        saveShortURL: jest.fn(() => Promise.resolve({ id: 'url-1' })),
        notifyError: jest.fn(),
    };
});

describe('ShortUrlModalComponent', () => {
    let spectator: Spectator<ShortUrlModalComponent>;
    let dialog_ref: any;
    let dialog_data: Partial<ShortURL> | undefined;

    const createComponent = createComponentFactory({
        component: ShortUrlModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            { provide: MatDialogRef, useFactory: () => dialog_ref },
        ],
    });

    const buildComponent = (data?: Partial<ShortURL>) => {
        dialog_data = data;
        dialog_ref = { close: jest.fn() };
        return createComponent({ detectChanges: false });
    };

    beforeEach(() => {
        jest.clearAllMocks();
        (common_mod.saveShortURL as jest.Mock).mockResolvedValue({
            id: 'url-1',
        });
    });

    it('should initialise the model from the injected URL', () => {
        spectator = buildComponent({
            id: 'url-9',
            name: 'Careers',
            uri: 'https://x.io',
            enabled: false,
        } as ShortURL);
        expect(spectator.component.model()).toEqual(
            expect.objectContaining({
                id: 'url-9',
                name: 'Careers',
                uri: 'https://x.io',
                enabled: false,
            }),
        );
    });

    it('should reject saving when required fields are missing', async () => {
        spectator = buildComponent();
        await spectator.component.save();
        expect(common_mod.notifyError).toHaveBeenCalled();
        expect(common_mod.saveShortURL).not.toHaveBeenCalled();
    });

    it('should save a valid URL and close with the response', async () => {
        spectator = buildComponent();
        spectator.component.model.set({
            id: '',
            name: 'Careers',
            description: '',
            uri: 'https://x.io',
            enabled: true,
        });

        await spectator.component.save();

        expect(common_mod.saveShortURL).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'Careers', uri: 'https://x.io' }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'url-1' });
    });
});
