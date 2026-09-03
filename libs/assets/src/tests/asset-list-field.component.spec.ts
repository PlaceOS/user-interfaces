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
    const disabled_rooms = signal<string[]>([]);
    const open_dialog = vi.fn(() => ({
        afterClosed: () => of(dialog_result),
        componentInstance: {
            offset: () => 0,
            exact_time: () => false,
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
        disabled_rooms.set([]);
        open_dialog.mockClear();
        spectator = createComponent();
        (spectator.component as any)._dialog = { open: open_dialog };
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
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

    it('should reflect the disabled state', () => {
        spectator.component.setDisabledState(true);
        expect(spectator.component.disabled()).toBe(true);
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

    it('should add a favourite when the asset is not saved', () => {
        settings_mock.get.mockReturnValue([]);
        spectator.component.toggleFavourite({ id: 'a' } as any);

        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'favourite_assets',
            ['a'],
        );
    });

    it('should remove a favourite when the asset is already saved', () => {
        settings_mock.get.mockReturnValue(['a', 'b']);
        spectator.component.toggleFavourite({ id: 'a' } as any);

        expect(settings_mock.saveUserSetting).toHaveBeenCalledWith(
            'favourite_assets',
            ['b'],
        );
    });

    it('should add a new request from the select modal result', () => {
        dialog_result = [
            { id: 'a', name: 'Projector', quantity: 1, assets: [{ id: 'x1' }] },
        ];

        spectator.component.editRequest();

        const requests = spectator.component.asset_requests();
        expect(open_dialog).toHaveBeenCalled();
        expect(requests).toHaveLength(1);
        expect(requests[0].items[0].id).toBe('a');
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
