import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { ShortURL, setNotifyOutlet } from '@placeos/common';

import * as ts_client from '@placeos/ts-client';
import { ShortUrlModalComponent } from '../../app/url-management/url-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('ShortUrlModalComponent', () => {
    let spectator: Spectator<ShortUrlModalComponent>;
    let dialog_ref: any;
    let dialog_data: Partial<ShortURL> | undefined;
    let notify_open: ReturnType<typeof vi.fn>;

    const createComponent = createComponentFactory({
        component: ShortUrlModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => dialog_data },
            { provide: MatDialogRef, useFactory: () => dialog_ref },
        ],
    });

    const buildComponent = (data?: Partial<ShortURL>) => {
        dialog_data = data;
        dialog_ref = { close: vi.fn() };
        return createComponent({ detectChanges: false });
    };

    beforeEach(() => {
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        // saveShortURL() -> post()/put() at the ts-client boundary
        (ts_client.post as any).mockResolvedValue({ id: 'url-1' });
        (ts_client.put as any).mockResolvedValue({ id: 'url-1' });
    });

    afterEach(() => setNotifyOutlet(null as any, true));

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
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(ts_client.post).not.toHaveBeenCalled();
        expect(ts_client.put).not.toHaveBeenCalled();
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

        // new URL -> createShortURL() -> post()
        expect(ts_client.post).toHaveBeenCalledWith(
            '/api/engine/v2/short_url',
            expect.objectContaining({ name: 'Careers', uri: 'https://x.io' }),
        );
        expect(dialog_ref.close).toHaveBeenCalledWith({ id: 'url-1' });
    });
});
