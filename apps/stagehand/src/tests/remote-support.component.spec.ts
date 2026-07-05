import type { Mock } from 'vitest';
import { signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService } from '@placeos/common';
import { MockComponent, MockProvider } from 'ng-mocks';

import { CameraSnapshotModalComponent } from '../app/camera-snapshot-modal.component';
import { DashboardsService } from '../app/dashboards/dashboards.service';
import { RemoteSupportComponent } from '../app/remote-support.component';
import { SupportService } from '../app/support.service';

const room = (over: Record<string, any> = {}) => ({
    id: 'sys-1',
    name: 'alpha',
    display_name: 'Alpha Room',
    zones: ['bld-1'],
    created_at: 0,
    camera_snapshot_urls: [] as string[],
    ...over,
});

describe('RemoteSupportComponent', () => {
    let spectator: Spectator<RemoteSupportComponent>;
    let region_id: any;
    let building_id: any;
    let dashboard_alerts: any;
    let space_list: any;
    let dialog_open: Mock;
    let navigate: Mock;

    const createComponent = createComponentFactory({
        component: RemoteSupportComponent,
        shallow: true,
        detectChanges: false,
        // Render nothing: these tests exercise the component's signals, computeds
        // and methods, not its (heavy) template with the sidebar + data table.
        overrideComponents: [[RemoteSupportComponent, { set: { template: '' } }]],
        providers: [
            MockProvider(DashboardsService, {} as any),
            MockProvider(SupportService, {} as any),
            MockProvider(OrganisationService, {
                regions: [],
                buildings: [],
            } as any),
            MockProvider(MatDialog, {} as any),
            MockProvider(Router, {} as any),
            MockProvider(ActivatedRoute, {
                snapshot: { queryParams: {} },
            } as any),
        ],
    });

    beforeEach(() => {
        region_id = signal('');
        building_id = signal('');
        dashboard_alerts = signal<any[]>([]);
        space_list = signal<any[]>([]);
        dialog_open = vi.fn();
        navigate = vi.fn();
        spectator = createComponent({
            providers: [
                {
                    provide: DashboardsService,
                    useValue: {
                        region_id,
                        building_id,
                        dashboard_alerts,
                        setDashboard: vi.fn(),
                        listenForDashboardAlerts: vi.fn(),
                        setRegionFromParams: vi.fn(),
                    },
                },
                { provide: SupportService, useValue: { space_list } },
                { provide: MatDialog, useValue: { open: dialog_open } },
                { provide: Router, useValue: { navigate } },
            ],
        });
    });

    it('should append a cache-busting timestamp to snapshot urls', () => {
        expect(spectator.component.snapshotUrl('')).toBe('');
        const url = spectator.component.snapshotUrl('http://host/snap');
        expect(url).toMatch(/^http:\/\/host\/snap\?t=\d+$/);
        const with_query = spectator.component.snapshotUrl('http://host/snap?a=1');
        expect(with_query).toMatch(/^http:\/\/host\/snap\?a=1&t=\d+$/);
    });

    it('should read the first camera snapshot url for a space', () => {
        expect(
            spectator.component.cameraSnapshotFeed({
                camera_snapshot_urls: ['http://one', 'http://two'],
            }),
        ).toBe('http://one');
        expect(spectator.component.cameraSnapshotFeed({})).toBe('');
    });

    it('should track per-room status, only storing real changes', () => {
        const space = room() as any;
        spectator.component.setStatus(space, 'busy');
        expect(spectator.component.status()['sys-1']).toBe('busy');
        const previous_ref = spectator.component.status();
        spectator.component.setStatus(space, 'busy');
        // unchanged value must not replace the map reference
        expect(spectator.component.status()).toBe(previous_ref);
    });

    it('should set and clear the current booking for a room', () => {
        const space = room() as any;
        const event = { id: 'evt-1', title: 'Standup' } as any;
        spectator.component.setCurrentBooking(space, event);
        expect(spectator.component.current()['sys-1']).toBe(event);

        spectator.component.setCurrentBooking(space, null as any);
        expect(spectator.component.current()['sys-1']).toBeUndefined();
    });

    it('should set and clear the next booking for a room', () => {
        const space = room() as any;
        const event = { id: 'evt-2', title: 'Review' } as any;
        spectator.component.setNextBooking(space, event);
        expect(spectator.component.next()['sys-1']).toBe(event);

        spectator.component.setNextBooking(space, null as any);
        expect(spectator.component.next()['sys-1']).toBeUndefined();
    });

    it('should mirror the support service space list into the room list', () => {
        space_list.set([room({ id: 'a' }), room({ id: 'b' })]);
        TestBed.flushEffects();
        expect(spectator.component.room_list().map((r) => r.id)).toEqual([
            'a',
            'b',
        ]);
    });

    it('should scope zone rooms to the selected building', () => {
        spectator.component.room_list.set([
            room({ id: 'a', zones: ['bld-1'] }),
            room({ id: 'b', zones: ['bld-2'] }),
        ] as any);
        building_id.set('bld-1');
        expect(spectator.component.zone_rooms().map((r) => r.id)).toEqual(['a']);
    });

    it('should attach matching alerts to each room and de-duplicate them', () => {
        spectator.component.room_list.set([
            room({ id: 'a' }),
            room({ id: 'b' }),
        ] as any);
        dashboard_alerts.set([
            { id: 'al-1', location: 'a', severity: 'critical' },
            { id: 'al-1', location: 'a', severity: 'critical' },
            { id: 'al-2', location: 'b', severity: 'warning' },
        ]);
        const data = spectator.component.room_data();
        expect(data.find((r) => r.id === 'a')?.issues).toHaveLength(2);
        // room_alerts de-duplicates by id across rooms
        expect(spectator.component.room_alerts().map((a) => a.id)).toEqual([
            'al-1',
            'al-2',
        ]);
        expect(spectator.component.critical_alerts()).toBe(1);
    });

    it('should filter rooms by the selected state', () => {
        spectator.component.room_list.set([
            room({ id: 'a', name: 'a', display_name: 'A' }),
            room({ id: 'b', name: 'b', display_name: 'B' }),
        ] as any);
        spectator.component.setStatus(room({ id: 'a' }) as any, 'busy');
        spectator.component.setStatus(room({ id: 'b' }) as any, 'free');

        spectator.component.state.set('in_use');
        expect(spectator.component.filtered_rooms().map((r) => r.id)).toEqual([
            'a',
        ]);

        spectator.component.state.set('available');
        expect(spectator.component.filtered_rooms().map((r) => r.id)).toEqual([
            'b',
        ]);
    });

    it('should filter rooms by search term over name and display name', () => {
        spectator.component.room_list.set([
            room({ id: 'a', name: 'boardroom', display_name: 'Boardroom' }),
            room({ id: 'b', name: 'kitchen', display_name: 'Kitchen' }),
        ] as any);
        spectator.component.search_term.set('board');
        expect(spectator.component.filtered_rooms().map((r) => r.id)).toEqual([
            'a',
        ]);
    });

    it('should filter rooms that only have issues when state is `issues`', () => {
        spectator.component.room_list.set([
            room({ id: 'a' }),
            room({ id: 'b' }),
        ] as any);
        dashboard_alerts.set([
            { id: 'al-1', location: 'a', severity: 'warning' },
        ]);
        spectator.component.state.set('issues');
        expect(spectator.component.filtered_rooms().map((r) => r.id)).toEqual([
            'a',
        ]);
    });

    it('should sort alert columns by number of alerts', () => {
        expect(spectator.component.alert_sort([1, 2], [1, 2, 3])).toBe(-1);
        expect(spectator.component.alert_sort([], [1])).toBe(-1);
        expect(spectator.component.alert_sort([1, 2], [1])).toBe(1);
    });

    it('should open the camera snapshot dialog with the room feed data', () => {
        const space = room({
            camera_snapshot_urls: ['http://feed'],
            camera_url: 'http://manage',
            display_name: 'Alpha Room',
        }) as any;
        spectator.component.openCameraSnapshot(space);
        expect(dialog_open).toHaveBeenCalledWith(CameraSnapshotModalComponent, {
            data: {
                camera_snapshot_urls: ['http://feed'],
                camera_url: 'http://manage',
                room_name: 'Alpha Room',
            },
        });
    });
});
