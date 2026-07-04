import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { OrganisationService, ShortURL } from '@placeos/common';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import * as common_mod from '@placeos/common';
import * as component_mod from '@placeos/components';
import { UrlManagementService } from '../../app/url-management/url-management.service';
import { ShortUrlModalComponent } from '../../app/url-management/url-modal.component';

jest.mock('@placeos/components');
jest.mock('@placeos/common', () => {
    const actual = jest.requireActual('@placeos/common');
    return {
        ...actual,
        queryShortURLs: jest.fn(() => Promise.resolve([])),
        deleteShortURL: jest.fn(() => Promise.resolve()),
        getShortUrlQRCode: jest.fn(() => Promise.resolve('qr-data')),
        notifyError: jest.fn(),
        notifySuccess: jest.fn(),
    };
});

describe('UrlManagementService', () => {
    let spectator: SpectatorService<UrlManagementService>;
    let dialog_open: jest.Mock;

    const createService = createServiceFactory({
        service: UrlManagementService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal({ id: 'bld-1' }),
            } as any),
            MockProvider(MatDialog, {} as any),
        ],
    });

    beforeEach(() => {
        dialog_open = jest.fn(() => ({ afterClosed: () => of(true) }) as any);
        (component_mod as any).openConfirmModal = jest.fn(async () => ({
            reason: 'done',
            loading: jest.fn(),
            close: jest.fn(),
        }));
        jest.clearAllMocks();
        (common_mod.queryShortURLs as jest.Mock).mockResolvedValue([]);
        (common_mod.getShortUrlQRCode as jest.Mock).mockResolvedValue(
            'qr-data',
        );
        spectator = createService();
        (spectator.inject(MatDialog) as any).open = dialog_open;
    });

    afterEach(() => jest.useRealTimers());

    it('should load short URLs and their QR codes after the debounce period', async () => {
        jest.useFakeTimers();
        (common_mod.queryShortURLs as jest.Mock).mockResolvedValue([
            { id: 'url-1', name: 'Alpha' },
            { id: 'url-2', name: 'Beta' },
        ]);

        spectator = createService();
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(400);

        expect(common_mod.queryShortURLs).toHaveBeenCalledWith({
            q: undefined,
            limit: 1000,
        });
        expect(spectator.service.url_list()).toHaveLength(2);
        expect(common_mod.getShortUrlQRCode).toHaveBeenCalledWith('url-1');
        expect(common_mod.getShortUrlQRCode).toHaveBeenCalledWith('url-2');
        expect(spectator.service.qr_codes()['url-1']).toBe('qr-data');
    });

    it('should pass the search string through to the query', async () => {
        jest.useFakeTimers();
        spectator.service.setSearchString('meeting');
        TestBed.flushEffects();
        await jest.advanceTimersByTimeAsync(400);

        expect(spectator.service.options()).toEqual({ search: 'meeting' });
        expect(common_mod.queryShortURLs).toHaveBeenLastCalledWith({
            q: 'meeting',
            limit: 1000,
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
        await spectator.service.removeURL({
            id: 'url-9',
            name: 'Gone',
        } as ShortURL);

        expect(component_mod.openConfirmModal).toHaveBeenCalled();
        expect(common_mod.deleteShortURL).toHaveBeenCalledWith('url-9');
        expect(common_mod.notifySuccess).toHaveBeenCalled();
    });

    it('should not delete a URL when confirmation is cancelled', async () => {
        (component_mod.openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'cancel',
            loading: jest.fn(),
            close: jest.fn(),
        });

        await spectator.service.removeURL({
            id: 'url-9',
            name: 'Gone',
        } as ShortURL);

        expect(common_mod.deleteShortURL).not.toHaveBeenCalled();
        expect(common_mod.notifySuccess).not.toHaveBeenCalled();
    });

    it('should cache QR codes and only fetch each one once', async () => {
        const item = { id: 'url-cache' } as ShortURL;
        await spectator.service.loadQrCode(item);
        await spectator.service.loadQrCode(item);

        expect(common_mod.getShortUrlQRCode).toHaveBeenCalledTimes(1);
        expect(spectator.service.qr_codes()['url-cache']).toBe('qr-data');
    });
});
