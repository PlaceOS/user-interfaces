import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    AssetRequest,
    LocaleService,
    SettingsService,
    Space,
} from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { AssetListFieldComponent } from '../lib/asset-list-field.component';
import { AssetStateService } from '../lib/asset-state.service';

describe('AssetListFieldComponent', () => {
    let spectator: Spectator<AssetListFieldComponent>;
    let settings_mock: any;
    let dialog_result: any[] | undefined;
    let exact_time = false;
    const disabled_rooms = signal<string[]>([]);
    const open_dialog = vi.fn(() => ({
        afterClosed: () => of(dialog_result),
        componentInstance: {
            offset: () => 0,
            exact_time: () => exact_time,
            offset_day: () => 0,
        },
    }));

    const createComponent = createComponentFactory({
        component: AssetListFieldComponent,
        providers: [
            {
                provide: SettingsService,
                useFactory: () => settings_mock,
            },
            MockProvider(AssetStateService, {
                disabled_rooms,
                setOptions: vi.fn(),
            }),
            MockProvider(LocaleService, { get: vi.fn((value) => value) }),
        ],
    });

    beforeEach(() => {
        settings_mock = createSettingsServiceMock();
        dialog_result = undefined;
        exact_time = false;
        disabled_rooms.set([]);
        open_dialog.mockClear();
        spectator = createComponent();
        (spectator.component as any)._dialog = { open: open_dialog };
    });

    it('should show the empty state when there are no requests', () => {
        spectator.detectChanges();
        expect('[list]').not.toExist();
        expect(spectator.query('p')).toHaveText(
            'No asset requests for this booking',
        );
    });

    it('should render a card for each asset request', () => {
        const request = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', name: 'Projector', quantity: 2 }],
        });
        spectator.component.setValue([request]);
        spectator.detectChanges();

        expect(spectator.queryAll('[request]')).toHaveLength(1);
    });

    it('should notify the form control when the value changes', () => {
        const on_change = vi.fn();
        spectator.component.registerOnChange(on_change);
        const request = new AssetRequest({ id: 'req-1', items: [] });

        spectator.component.setValue([request]);

        expect(on_change).toHaveBeenCalledWith([request]);
    });

    it('should hydrate written values into asset requests', () => {
        spectator.component.writeValue([
            { id: 'req-1', items: [{ id: 'a', quantity: 1 }] } as any,
        ]);

        const requests = spectator.component.asset_requests();
        expect(requests).toHaveLength(1);
        expect(requests[0]).toBeInstanceOf(AssetRequest);
        expect(requests[0].items).toEqual([{ id: 'a', quantity: 1 }]);
    });

    it('should remove a request', () => {
        const request = new AssetRequest({ id: 'req-1', items: [] });
        spectator.component.setValue([request]);

        spectator.component.removeRequest(request);

        expect(spectator.component.asset_requests()).toEqual([]);
    });

    it('should duplicate a request with a new id', () => {
        const request = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', quantity: 1 }],
        });
        spectator.component.setValue([request]);

        spectator.component.duplicateRequest(request);

        const requests = spectator.component.asset_requests();
        expect(requests).toHaveLength(2);
        expect(requests[1].id).not.toBe('req-1');
        expect(requests[1].items).toEqual(request.items);
    });

    it('should remove a single item from a request', () => {
        const request = new AssetRequest({
            id: 'req-1',
            items: [
                { id: 'a', quantity: 1 },
                { id: 'b', quantity: 1 },
            ],
        });
        spectator.component.setValue([request]);

        spectator.component.removeRequestItem(request, {
            id: 'a',
        } as any);

        const requests = spectator.component.asset_requests();
        expect(requests).toHaveLength(1);
        expect(requests[0].items.map((_) => _.id)).toEqual(['b']);
    });

    it('should drop the request when its last item is removed', () => {
        const request = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', quantity: 1 }],
        });
        spectator.component.setValue([request]);

        spectator.component.removeRequestItem(request, {
            id: 'a',
        } as any);

        expect(spectator.component.asset_requests()).toEqual([]);
    });

    it('should toggle the expanded state of a request', () => {
        spectator.component.toggleRequest('req-1');
        expect(spectator.component.show_request()['req-1']).toBe(true);

        spectator.component.toggleRequest('req-1');
        expect(spectator.component.show_request()['req-1']).toBe(false);
    });

    it('should disable request mutations when the form control is disabled', async () => {
        spectator.component.setValue([
            new AssetRequest({
                id: 'req-1',
                items: [{ id: 'a', quantity: 1 }],
            }),
        ]);
        spectator.component.setDisabledState(true);

        await spectator.fixture.whenStable();

        expect(spectator.component.disabled()).toBe(true);
        expect(
            spectator.query<HTMLButtonElement>(
                'button[name="remove-asset-request"]',
            )?.disabled,
        ).toBe(true);
        expect(
            spectator.query<HTMLButtonElement>(
                'button[name="remove-asset-request-item"]',
            )?.disabled,
        ).toBe(true);
    });

    it('should disable selection when asset availability is disabled for the room', () => {
        spectator.setInput('options', {
            resources: [new Space({ id: 'room-1' })],
        });
        expect(spectator.component.disabled()).toBe(false);

        disabled_rooms.set(['room-1']);
        spectator.detectChanges();

        expect(spectator.component.disabled()).toBe(true);
        expect(spectator.query('button[add-space]')).not.toExist();
        expect(spectator.query('p')).toHaveText(
            'Assets are not available for the selected space and/or time',
        );
        spectator.component.editRequest();
        expect(open_dialog).not.toHaveBeenCalled();
    });

    it('should toggle the asset in the saved favourites', () => {
        settings_mock.get.mockReturnValue(['b']);
        spectator.component.toggleFavourite({ id: 'a' } as any);

        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'favourite_assets',
            ['b', 'a'],
        );
    });

    it('should flag requests that clash or end after the booking', () => {
        const items = [{ id: 'a', name: 'Projector', quantity: 1 }];
        spectator.setInput('options', {
            date: new Date(2030, 0, 1, 9).valueOf(),
            duration: 60,
        });
        spectator.setInput('rejected_ids', ['rejected']);
        spectator.component.writeValue([
            { id: 'ok', items },
            { id: 'late', items, deliver_offset: 90 },
            { id: 'rejected', items },
            { id: 'conflict', items, conflict: true },
        ] as any);
        spectator.detectChanges();

        const flagged = spectator
            .queryAll('[request]')
            .map((card) => !!card.querySelector('.bg-error'));
        expect(flagged).toEqual([false, true, true, true]);
        const [, late, rejected, conflict] =
            spectator.component.asset_requests();
        expect(spectator.component.err_tooltip(late)).toBe(
            'FORM.ASSETS_TIME_ERROR',
        );
        expect(spectator.component.err_tooltip(rejected)).toBe(
            'FORM.ASSETS_CLASH_ERROR',
        );
        expect(spectator.component.err_tooltip(conflict)).toBe(
            'FORM.ASSETS_CLASH_ERROR',
        );
    });

    it('should add a new request with a distinct asset for each unit', () => {
        dialog_result = [
            {
                id: 'a',
                name: 'Projector',
                quantity: 2,
                assets: [{ id: 'x1' }, { id: 'x2' }],
            },
        ];

        spectator.component.editRequest();

        const requests = spectator.component.asset_requests();
        expect(requests).toHaveLength(1);
        expect([...requests[0].items[0].item_ids].sort()).toEqual(['x1', 'x2']);
    });

    it('should reject a quantity larger than the available assets', () => {
        dialog_result = [
            { id: 'a', name: 'Projector', quantity: 2, assets: [{ id: 'x1' }] },
        ];

        spectator.component.editRequest();

        expect(spectator.component.asset_requests()).toEqual([]);
    });

    it('should pass the quantities of the other requests to the modal', () => {
        const editing = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', quantity: 1 }],
        });
        spectator.component.setValue([
            editing,
            new AssetRequest({
                id: 'req-2',
                items: [{ id: 'a', quantity: 2 }],
            }),
            new AssetRequest({
                id: 'req-3',
                items: [{ id: 'a', quantity: 3 }],
            }),
        ]);
        const date = new Date(2026, 5, 22, 9, 30).valueOf();
        spectator.setInput('options', { date, duration: 60, all_day: true });

        spectator.component.editRequest(editing);

        const { data } = (open_dialog.mock.calls[0] as any)[1];
        expect(data.requested).toEqual({ a: 5 });
        // All day bookings ask for assets from the start of the day
        expect(data.details.date).toBe(new Date(2026, 5, 22).valueOf());
        expect(data.details.duration).toBe(24 * 60);
    });

    it('should replace the edited request instead of adding one', () => {
        const editing = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', name: 'Projector', quantity: 1 }],
        });
        spectator.component.setValue([editing]);
        dialog_result = [
            {
                id: 'a',
                name: 'Projector',
                quantity: 2,
                assets: [{ id: 'x1' }, { id: 'x2' }],
            },
        ];

        spectator.component.editRequest(editing);

        const requests = spectator.component.asset_requests();
        expect(requests.map((_) => _.id)).toEqual(['req-1']);
        expect(requests[0].items[0].quantity).toBe(2);
    });

    it('should count units held by other requests against the available assets', () => {
        const other = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', name: 'Projector', quantity: 1 }],
        });
        spectator.component.setValue([other]);
        dialog_result = [
            {
                id: 'a',
                name: 'Projector',
                quantity: 2,
                assets: [{ id: 'x1' }, { id: 'x2' }],
            },
        ];

        spectator.component.editRequest();

        expect(spectator.component.asset_requests()).toEqual([other]);
    });

    it('should deliver at the booking start when exact time is set', () => {
        exact_time = true;
        spectator.setInput('options', {
            date: new Date(2030, 0, 1, 9, 30).valueOf(),
            duration: 60,
        });
        dialog_result = [
            { id: 'a', name: 'Projector', quantity: 1, assets: [{ id: 'x1' }] },
        ];

        spectator.component.editRequest();

        expect(spectator.component.asset_requests()[0].deliver_time).toBe(9.5);
    });

    it('should keep the existing requests when the modal is cancelled', () => {
        const request = new AssetRequest({
            id: 'req-1',
            items: [{ id: 'a', quantity: 1 }],
        });
        spectator.component.setValue([request]);
        dialog_result = undefined;

        spectator.component.editRequest();

        expect(spectator.component.asset_requests()).toEqual([request]);
    });
});
