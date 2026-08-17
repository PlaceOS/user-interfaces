import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setCurrentUser,
    setNotifyOutlet,
    SettingsService,
    StaffUser,
} from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { UploadButtonComponent } from '../../../app/ui/app-settings/upload-button.component';
import { WorkplaceSettingsFormModalComponent } from '../../../app/ui/app-settings/workplace-settings-form-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('WorkplaceSettingsFormModalComponent', () => {
    let spectator: Spectator<WorkplaceSettingsFormModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const mock_zone = {
        id: 'zone-1',
        name: 'Test Zone',
        display_name: 'Test Zone Display',
        parent_id: 'zone-parent',
    };

    const createComponent = createComponentFactory({
        component: WorkplaceSettingsFormModalComponent,
        declarations: [
            mockComponent(FullscreenModalShellComponent),
            mockComponent(IconComponent),
            mockComponent(SettingsToggleComponent),
            mockComponent(UploadButtonComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, { zone: mock_zone }),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn(() => 'workplace_app'),
            } as any),
            MockProvider(OrganisationService, {
                organisation: { id: 'org-1' },
            } as any),
        ],
        imports: [
            NoopAnimationsModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatInputModule,
        ],
    });

    beforeEach(() => {
        vi.mocked(ts_client.showMetadata).mockResolvedValue({
            details: {},
        } as never);
        vi.mocked(ts_client.updateMetadata).mockResolvedValue({} as never);
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        setCurrentUser(
            new StaffUser({
                id: 'user-1',
                name: 'Test User',
                email: 'test@example.com',
                groups: ['placeos_admin'],
            }) as any,
        );
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        setCurrentUser(null as any);
        vi.restoreAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have a model with general settings values', () => {
        const model = spectator.component.model();
        expect('logo_light' in model).toBe(true);
        expect('logo_dark' in model).toBe(true);
        expect('features' in model).toBe(true);
        expect('default_route' in model).toBe(true);
        expect('use_24_hour_time' in model).toBe(true);
        expect('use_region' in model).toBe(true);
        expect('week_start' in model).toBe(true);
        expect('currency' in model).toBe(true);
        expect('external_support_url' in model).toBe(true);
        expect('show_changelog' in model).toBe(true);
        expect('support_email' in model).toBe(true);
        expect('catering_provider' in model).toBe(true);
    });

    it('should have events model group for room bookings', () => {
        const events = spectator.component.model().events;
        expect(events).toBeTruthy();
        expect('allow_all_day' in events).toBe(true);
        expect('all_day_period' in events).toBe(true);
        expect('bookable_hours' in events).toBe(true);
        expect('can_book_for_others' in events).toBe(true);
        expect('has_assets' in events).toBe(true);
        expect('allow_externals' in events).toBe(true);
        expect('max_duration' in events).toBe(true);
        expect('allowed_future_days' in events).toBe(true);
        expect('force_host' in events).toBe(true);
        expect('setup' in events).toBe(true);
        expect('breakdown' in events).toBe(true);
        expect('cache_duration_in_days' in events).toBe(true);
    });

    it('should have desks model group', () => {
        const desks = spectator.component.model().desks;
        expect(desks).toBeTruthy();
        expect('allow_all_day' in desks).toBe(true);
        expect('bookable_hours' in desks).toBe(true);
        expect('allow_groups' in desks).toBe(true);
        expect('auto_allocation' in desks).toBe(true);
        expect('max_duration' in desks).toBe(true);
        expect('available_period' in desks).toBe(true);
    });

    it('should have bookings model group', () => {
        const bookings = spectator.component.model().bookings;
        expect(bookings).toBeTruthy();
        expect('allow_all_day' in bookings).toBe(true);
        expect('all_day_period' in bookings).toBe(true);
        expect('bookable_hours' in bookings).toBe(true);
        expect('can_book_for_others' in bookings).toBe(true);
    });

    it('should have parking model group', () => {
        const parking = spectator.component.model().parking;
        expect(parking).toBeTruthy();
        expect('allow_all_day' in parking).toBe(true);
        expect('bookable_hours' in parking).toBe(true);
        expect('show_users' in parking).toBe(true);
        expect('show_status_details' in parking).toBe(true);
        expect('auto_allocation' in parking).toBe(true);
    });

    it('should have lockers model group', () => {
        const lockers = spectator.component.model().lockers;
        expect(lockers).toBeTruthy();
        expect('allow_all_day' in lockers).toBe(true);
        expect('bookable_hours' in lockers).toBe(true);
        expect('show_calendar_links' in lockers).toBe(true);
    });

    it('should have explore model group', () => {
        const explore = spectator.component.model().explore;
        expect(explore).toBeTruthy();
        expect('hide_device_fields' in explore).toBe(true);
        expect('show_legend' in explore).toBe(true);
        expect('hide_zones' in explore).toBe(true);
        expect('hide_devices' in explore).toBe(true);
        expect('hide_sensors' in explore).toBe(true);
        expect(explore.hide_devices).toBe(true);
        expect(explore.hide_sensors).toBe(true);
        expect('disable' in explore).toBe(true);
        expect('disable_actions' in explore).toBe(true);
    });

    it('should expose the zone from dialog data', () => {
        expect(spectator.component.zone).toEqual(mock_zone);
    });

    it('should expose settings option constants', () => {
        expect(spectator.component.AVAILABLE_PERIOD_EXTENDED).toBeTruthy();
        expect(spectator.component.MAX_DURATION_FULL).toBeTruthy();
        expect(spectator.component.MAX_DURATION_SHORT).toBeTruthy();
        expect(spectator.component.WEEK_START).toBeTruthy();
        expect(spectator.component.SETUP_BREAKDOWN).toBeTruthy();
        expect(spectator.component.CACHE_DURATION).toBeTruthy();
        expect(spectator.component.EXPLORE_FEATURE).toBeTruthy();
        expect(spectator.component.BANNER_TYPE).toBeTruthy();
    });

    it('should toggle section groups', () => {
        expect(spectator.component.shown_group()).toBe('');
        spectator.component.toggleGroup('spaces');
        expect(spectator.component.shown_group()).toBe('spaces');
        spectator.component.toggleGroup('spaces');
        expect(spectator.component.shown_group()).toBe('');
        spectator.component.toggleGroup('desks');
        expect(spectator.component.shown_group()).toBe('desks');
    });

    it('should update currency filter', () => {
        expect(spectator.component.currency_filter()).toBe('');
        spectator.component.updateCurrencyFilter('USD');
        expect(spectator.component.currency_filter()).toBe('USD');
    });

    it('should clear currency filter when select closes', () => {
        spectator.component.updateCurrencyFilter('EUR');
        spectator.component.onCurrencySelectStateChange(false);
        expect(spectator.component.currency_filter()).toBe('');
    });

    it('should load settings on init', async () => {
        await spectator.component.ngOnInit();
        expect(ts_client.showMetadata).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('should load metadata from org, parent, and zone', async () => {
        await spectator.component.ngOnInit();
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'org-1',
            'workplace_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-parent',
            'workplace_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-1',
            'workplace_app',
        );
    });

    it('should merge groups and replace atomic setting values', async () => {
        (ts_client.showMetadata as any)
            .mockResolvedValueOnce({
                details: {
                    events: {
                        allow_all_day: true,
                        bookable_hours: { start: 8, end: 17 },
                    },
                },
            })
            .mockResolvedValueOnce({
                details: {
                    events: {
                        hide_notes: true,
                        bookable_hours: { start: 9, end: 18 },
                    },
                },
            })
            .mockResolvedValueOnce({ details: {} });

        await spectator.component.ngOnInit();

        expect(spectator.component.model().events.bookable_hours).toEqual({
            start: 9,
            end: 18,
        });
        expect(spectator.component.model().events.allow_all_day).toBe(true);
        expect(spectator.component.model().events.hide_notes).toBe(true);
        expect(spectator.component.model().events.force_host).toBe('');
    });

    it('should only save settings that override the inherited values', async () => {
        (ts_client.showMetadata as any)
            .mockResolvedValueOnce({
                details: { events: { allow_all_day: true } },
            })
            .mockResolvedValueOnce({
                details: { events: { hide_notes: true } },
            })
            .mockResolvedValueOnce({
                details: { events: { allow_all_day: false } },
            });

        await spectator.component.ngOnInit();
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: {
                    events: { allow_all_day: false },
                    edited_by: expect.any(Object),
                },
            }),
        );
    });

    it('should save settings via updateMetadata', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                name: 'workplace_app',
            }),
        );
    });

    it('should close dialog after successful save', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();
        const dialog_ref = spectator.inject(MatDialogRef);
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should show success notification after save', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(notify_open).toHaveBeenCalledWith(
            'Successfully saved workplace app settings',
            'OK',
            expect.objectContaining({ panelClass: ['success'] }),
        );
    });

    it('should show error notification when save fails', async () => {
        (ts_client.updateMetadata as any).mockRejectedValueOnce({
            message: 'Network error',
        } as never);
        await spectator.component.ngOnInit();
        await spectator.component.save().catch(() => {});
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should add legend item', () => {
        spectator.component.model.update((m) => ({
            ...m,
            explore: { ...m.explore, legend: [] },
        }));
        spectator.component.addLegend();
        const legend = spectator.component.model().explore.legend;
        expect(legend.length).toBe(1);
        expect(legend[0]).toEqual(['', '#1E88E5']);
    });

    it('should remove legend item', () => {
        spectator.component.model.update((m) => ({
            ...m,
            explore: {
                ...m.explore,
                legend: [
                    ['a', '#000'],
                    ['b', '#fff'],
                ],
            },
        }));
        spectator.component.removeLegend(0);
        expect(spectator.component.model().explore.legend.length).toBe(1);
    });

    it('should not remove legend item at invalid index', () => {
        spectator.component.model.update((m) => ({
            ...m,
            explore: { ...m.explore, legend: [['a', '#000']] },
        }));
        spectator.component.removeLegend(5);
        expect(spectator.component.model().explore.legend.length).toBe(1);
    });

    it('should generate date string', () => {
        expect(spectator.component.date_string).toBeTruthy();
        expect(typeof spectator.component.date_string).toBe('string');
    });

    it('should set edited_by with admin role', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: expect.objectContaining({
                    edited_by: expect.objectContaining({
                        role: 'Admin',
                    }),
                }),
            }),
        );
    });

    it('should set edited_by with Support role for support users', async () => {
        setCurrentUser(
            new StaffUser({
                id: 'user-2',
                name: 'Support User',
                email: 'support@example.com',
                groups: ['placeos_support'],
            }) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: expect.objectContaining({
                    edited_by: expect.objectContaining({
                        role: 'Support',
                    }),
                }),
            }),
        );
    });

    it('should set edited_by with User role for regular users', async () => {
        setCurrentUser(
            new StaffUser({
                id: 'user-3',
                name: 'Regular User',
                email: 'user@example.com',
                groups: [],
            }) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: expect.objectContaining({
                    edited_by: expect.objectContaining({
                        role: 'User',
                    }),
                }),
            }),
        );
    });
});
