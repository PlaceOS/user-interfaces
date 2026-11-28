import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet, ShortURL } from '@placeos/common';

import { mockData } from '@placeos/common/tests';
import { short_url, ShortUrl } from '@placeos/ts-client';
import { mockReply } from '@placeos/ts-client/compat';
import { ShortUrlModalComponent } from '../../app/url-management/url-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('ShortUrlModalComponent', () => {
    let spectator: Spectator<ShortUrlModalComponent>;
    let dialog_ref: any;
    let dialog_data: Partial<ShortURL> | undefined;
    let notify_open: ReturnType<typeof vi.fn>;
    const saved = mockData(ShortUrl, { id: 'url-1' });

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
        // saveShortURL() -> short_url.create()/update()
        vi.mocked(short_url.create).mockResolvedValue(mockReply(saved));
        vi.mocked(short_url.update).mockResolvedValue(mockReply(saved));
    });

    afterEach(() => setNotifyOutlet(null, true));

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
        expect(short_url.create).not.toHaveBeenCalled();
        expect(short_url.update).not.toHaveBeenCalled();
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

        // new URL -> createShortURL() -> short_url.create()
        expect(short_url.create).toHaveBeenCalledWith({
            body: expect.objectContaining({
                name: 'Careers',
                uri: 'https://x.io',
            }),
        });
        expect(dialog_ref.close).toHaveBeenCalledWith(saved);
    });
});
