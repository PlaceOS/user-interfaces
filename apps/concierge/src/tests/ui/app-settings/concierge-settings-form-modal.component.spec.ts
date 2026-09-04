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
import { ConciergeSettingsFormModalComponent } from '../../../app/ui/app-settings/concierge-settings-form-modal.component';
import { UploadButtonComponent } from '../../../app/ui/app-settings/upload-button.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('ConciergeSettingsFormModalComponent', () => {
    let spectator: Spectator<ConciergeSettingsFormModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

    const mock_zone = {
        id: 'zone-1',
        name: 'Test Zone',
        display_name: 'Test Zone Display',
        parent_id: 'zone-parent',
    };

    const createComponent = createComponentFactory({
        component: ConciergeSettingsFormModalComponent,
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
                get: vi.fn(() => 'concierge_app'),
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

    it('should have a model with expected values', () => {
        const model = spectator.component.model();
        expect('logo_light' in model).toBe(true);
        expect('logo_dark' in model).toBe(true);
        expect('features' in model).toBe(true);
        expect('default_route' in model).toBe(true);
        expect('use_24_hour_time' in model).toBe(true);
        expect('delegated' in model).toBe(true);
        expect('week_start' in model).toBe(true);
        expect('currency' in model).toBe(true);
    });

    it('should have events model group', () => {
        const events = spectator.component.model().events;
        expect(events).toBeTruthy();
        expect('allow_all_day' in events).toBe(true);
        expect('all_day_period' in events).toBe(true);
        expect('bookable_hours' in events).toBe(true);
        expect('day_timeline_view' in events).toBe(true);
        expect('block_start' in events).toBe(true);
        expect('block_end' in events).toBe(true);
        expect('block_height' in events).toBe(true);
        expect('max_duration' in events).toBe(true);
        expect('available_period' in events).toBe(true);
    });

    it('should have desks model group', () => {
        const desks = spectator.component.model().desks;
        expect(desks).toBeTruthy();
        expect('max_assigned_count' in desks).toBe(true);
    });

    it('should have visitors model group', () => {
        const visitors = spectator.component.model().visitors;
        expect(visitors).toBeTruthy();
        expect('bookable_hours' in visitors).toBe(true);
        expect('has_parking' in visitors).toBe(true);
        expect('allow_pass_number' in visitors).toBe(true);
        expect('allow_printing_label' in visitors).toBe(true);
        expect('all_visitors_action_window' in visitors).toBe(true);
    });

    it('should have bookings model group', () => {
        const bookings = spectator.component.model().bookings;
        expect(bookings).toBeTruthy();
        expect('allow_all_day' in bookings).toBe(true);
        expect('all_day_period' in bookings).toBe(true);
        expect('bookable_hours' in bookings).toBe(true);
        expect('available_period' in bookings).toBe(true);
        expect('max_duration' in bookings).toBe(true);
    });

    it('should have parking model group', () => {
        const parking = spectator.component.model().parking;
        expect(parking).toBeTruthy();
        expect('allow_all_day' in parking).toBe(true);
        expect('bookable_hours' in parking).toBe(true);
        expect('show_users' in parking).toBe(true);
        expect('show_status_details' in parking).toBe(true);
        expect('disable_styles' in parking).toBe(true);
        expect('disable_bookings' in parking).toBe(true);
        expect('hide_level_selector_on_booking_list' in parking).toBe(true);
        expect('allow_deleting' in parking).toBe(true);
        expect('max_assigned_count' in parking).toBe(true);
    });

    it('should have lockers model group', () => {
        const lockers = spectator.component.model().lockers;
        expect(lockers).toBeTruthy();
        expect('allow_all_day' in lockers).toBe(true);
        expect('bookable_hours' in lockers).toBe(true);
        expect('all_day_default' in lockers).toBe(true);
        expect('show_calendar_links' in lockers).toBe(true);
    });

    it('should expose the zone from dialog data', () => {
        expect(spectator.component.zone).toEqual(mock_zone);
    });

    it('should expose settings option constants', () => {
        expect(spectator.component.AVAILABLE_PERIOD_SHORT).toBeTruthy();
        expect(spectator.component.AVAILABLE_PERIOD_EXTENDED).toBeTruthy();
        expect(spectator.component.MAX_DURATION_FULL).toBeTruthy();
        expect(spectator.component.WEEK_START).toBeTruthy();
        expect(spectator.component.BLOCK_START).toBeTruthy();
        expect(spectator.component.BLOCK_END).toBeTruthy();
        expect(spectator.component.BLOCK_HEIGHT).toBeTruthy();
        expect(spectator.component.DAY_TIMELINE_VIEW).toBeTruthy();
        expect(spectator.component.BANNER_TYPE).toBeTruthy();
    });

    it('should toggle section groups', () => {
        expect(spectator.component.shown_group()).toBe('');
        spectator.component.toggleGroup('spaces');
        expect(spectator.component.shown_group()).toBe('spaces');
        spectator.component.toggleGroup('spaces');
        expect(spectator.component.shown_group()).toBe('');
        spectator.component.toggleGroup('visitors');
        expect(spectator.component.shown_group()).toBe('visitors');
        spectator.component.toggleGroup('parking');
        expect(spectator.component.shown_group()).toBe('parking');
    });

    it('should update currency filter', () => {
        expect(spectator.component.currency_filter()).toBe('');
        spectator.component.updateCurrencyFilter('USD');
        expect(spectator.component.currency_filter()).toBe('USD');
    });

    it('should clear currency filter when select closes', () => {
        spectator.component.updateCurrencyFilter('EUR');
        expect(spectator.component.currency_filter()).toBe('EUR');
        spectator.component.onCurrencySelectStateChange(false);
        expect(spectator.component.currency_filter()).toBe('');
    });

    it('should not clear currency filter when select opens', () => {
        spectator.component.updateCurrencyFilter('EUR');
        spectator.component.onCurrencySelectStateChange(true);
        expect(spectator.component.currency_filter()).toBe('EUR');
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
            'concierge_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-parent',
            'concierge_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-1',
            'concierge_app',
        );
    });

    it('should not save inherited values as overrides', async () => {
        (ts_client.showMetadata as any)
            .mockResolvedValueOnce({
                details: { visitors: { allow_pass_number: true } },
            })
            .mockResolvedValueOnce({
                details: { visitors: { allow_printing_label: true } },
            })
            .mockResolvedValueOnce({ details: {} });

        await spectator.component.ngOnInit();
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: {
                    edited_by: expect.any(Object),
                },
            }),
        );
    });

    it('should save settings via updateMetadata', async () => {
        await spectator.component.ngOnInit();
        spectator.component.model.update((m) => ({
            ...m,
            default_route: '/custom-route',
        }));
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                name: 'concierge_app',
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
            'Successfully saved concierge app settings',
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

    it('should set loading state during save', async () => {
        let resolve_save: (v?: any) => void;
        vi.mocked(ts_client.updateMetadata).mockReturnValue(
            new Promise<any>((res) => {
                resolve_save = res;
            }) as any,
        );
        await spectator.component.ngOnInit();
        const save_promise = spectator.component.save();
        expect(spectator.component.loading()).toBe('Saving settings...');
        resolve_save();
        await save_promise.catch(() => {});
    });

    it('should generate date string', () => {
        expect(spectator.component.date_string).toBeTruthy();
        expect(typeof spectator.component.date_string).toBe('string');
    });

    it('should set edited_by on save with admin role', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: expect.objectContaining({
                    edited_by: expect.objectContaining({
                        id: 'user-1',
                        name: 'Test User',
                        email: 'test@example.com',
                        role: 'Admin',
                    }),
                }),
            }),
        );
    });
});
