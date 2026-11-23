import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import {
    createServiceFactory,
    SpectatorService,
} from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    ShortURL,
} from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { mockData } from '@placeos/common/tests';
import { short_url, ShortUrl } from '@placeos/ts-client';
import { mockPage, mockReply } from '@placeos/ts-client/compat';
import { UrlManagementService } from '../../app/url-management/url-management.service';
import { ShortUrlModalComponent } from '../../app/url-management/url-modal.component';

vi.mock('@placeos/ts-client', { spy: true });

describe('UrlManagementService', () => {
    let spectator: SpectatorService<UrlManagementService>;
    let dialog_open: any;
    let notify_open: ReturnType<typeof vi.fn>;

    const createService = createServiceFactory({
        service: UrlManagementService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
            } as any),
            MockProvider(MatDialog, {}),
        ],
    });

    const confirmRef = (reason: string) => {
        const close = vi.fn();
        dialog_open.mockReturnValue({
            componentInstance: { event: NEVER, loading: { set: vi.fn() } },
            afterClosed: () => of({ reason }),
            close,
        });
        return close;
    };

    beforeEach(() => {
        dialog_open = vi.fn(() => ({ afterClosed: () => of(true) }));
        vi.clearAllMocks();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(short_url.query).mockResolvedValue(mockPage({ data: [] }));
        vi.mocked(short_url.destroy).mockResolvedValue(mockReply(''));
        // getShortUrlQRCode() -> svgQr() + URL.createObjectURL()
        vi.mocked(short_url.svgQr).mockResolvedValue(mockReply('<svg />'));
        URL.createObjectURL = vi.fn(() => 'qr-data');
        spectator = createService();
        (spectator.inject(MatDialog) as any).open = dialog_open;
    });

    afterEach(() => {
        vi.useRealTimers();
        setNotifyOutlet(null, true);
    });

    it('should load short URLs and their QR codes after the debounce period', async () => {
        vi.useFakeTimers();
        // The `next` of the 6.x page of `mockPage` gives the next 6.x page
        const next_page = vi.fn(() =>
            Promise.resolve({
                data: [mockData(ShortUrl, { id: 'url-2', name: 'Beta' })],
                total: 2,
                next: null,
            }),
        );
        vi.mocked(short_url.query).mockResolvedValue(
            mockPage({
                data: [mockData(ShortUrl, { id: 'url-1', name: 'Alpha' })],
                total: 2,
                next: next_page,
            }),
        );

        spectator = createService();
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(400);

        expect(short_url.query).toHaveBeenCalledWith({
            q: undefined,
            limit: 200,
        });
        expect(spectator.service.url_list()).toHaveLength(2);
        expect(next_page).toHaveBeenCalledTimes(1);
        expect(short_url.svgQr).toHaveBeenCalledWith({ id: 'url-1' });
        expect(short_url.svgQr).toHaveBeenCalledWith({ id: 'url-2' });
        expect(spectator.service.qr_codes()['url-1']).toBe('qr-data');
    });

    it('should pass the search string through to the query', async () => {
        vi.useFakeTimers();
        spectator.service.setSearchString('meeting');
        TestBed.flushEffects();
        await vi.advanceTimersByTimeAsync(400);

        expect(spectator.service.options()).toEqual({ search: 'meeting' });
        expect(short_url.query).toHaveBeenLastCalledWith({
            q: 'meeting',
            limit: 200,
        });
    });

    it('should merge partial filter updates into the current options', () => {
        spectator.service.setFilters({ search: 'one' });
        spectator.service.setFilters({});
        expect(spectator.service.options()).toEqual({ search: 'one' });
    });

    it('should open the short URL modal when editing', () => {
        spectator.service.editURL({ id: 'url-1' } as ShortURL);
        expect(dialog_open).toHaveBeenCalledWith(ShortUrlModalComponent, {
            data: { id: 'url-1' },
        });
    });

    it('should delete a URL after confirmation and notify success', async () => {
        confirmRef('done');

        await spectator.service.removeURL({
            id: 'url-9',
            name: 'Gone',
        } as ShortURL);

        expect(dialog_open).toHaveBeenCalled();
        expect(short_url.destroy).toHaveBeenCalledWith({ id: 'url-9' });
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should not delete a URL when confirmation is cancelled', async () => {
        confirmRef('cancel');

        await spectator.service.removeURL({
            id: 'url-9',
            name: 'Gone',
        } as ShortURL);

        expect(short_url.destroy).not.toHaveBeenCalled();
        expect(notify_open).not.toHaveBeenCalledWith(
            expect.anything(),
            expect.anything(),
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should cache QR codes and only fetch each one once', async () => {
        const item = { id: 'url-cache' } as ShortURL;
        await spectator.service.loadQrCode(item);
        await spectator.service.loadQrCode(item);

        expect(short_url.svgQr).toHaveBeenCalledTimes(1);
        expect(spectator.service.qr_codes()['url-cache']).toBe('qr-data');
    });
});
