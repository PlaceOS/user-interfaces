import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { ConciergeSettingsFormModalComponent } from '../../../app/ui/app-settings/concierge-settings-form-modal.component';
import { UploadButtonComponent } from '../../../app/ui/app-settings/upload-button.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

describe('ConciergeSettingsFormModalComponent', () => {
    let spectator: Spectator<ConciergeSettingsFormModalComponent>;

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
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn(() => 'concierge_app'),
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
        jest.spyOn(ts_client, 'showMetadata').mockReturnValue(
            of({ details: {} }) as any,
        );
        jest.spyOn(ts_client, 'updateMetadata').mockReturnValue(of({}) as any);
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        (common_mod as any).currentUser = jest.fn(() => ({
            id: 'user-1',
            name: 'Test User',
            email: 'test@example.com',
            groups: ['placeos_admin'],
        }));
        (common_mod as any).buildCurrencyOptions = jest.fn(() => []);
        (common_mod as any).VERSION = { hash: 'test-hash' };
        spectator = createComponent();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have a form with expected controls', () => {
        const form = spectator.component.form;
        expect(form.get('logo_light')).toBeTruthy();
        expect(form.get('logo_dark')).toBeTruthy();
        expect(form.get('features')).toBeTruthy();
        expect(form.get('default_route')).toBeTruthy();
        expect(form.get('use_24_hour_time')).toBeTruthy();
        expect(form.get('delegated')).toBeTruthy();
        expect(form.get('week_start')).toBeTruthy();
        expect(form.get('currency')).toBeTruthy();
    });

    it('should have events form group', () => {
        const events = spectator.component.form.get('events');
        expect(events).toBeTruthy();
        expect(events.get('allow_all_day')).toBeTruthy();
        expect(events.get('all_day_period')).toBeTruthy();
        expect(events.get('bookable_hours')).toBeTruthy();
        expect(events.get('day_timeline_view')).toBeTruthy();
        expect(events.get('block_start')).toBeTruthy();
        expect(events.get('block_end')).toBeTruthy();
        expect(events.get('block_height')).toBeTruthy();
        expect(events.get('max_duration')).toBeTruthy();
        expect(events.get('available_period')).toBeTruthy();
    });

    it('should have desks form group', () => {
        const desks = spectator.component.form.get('desks');
        expect(desks).toBeTruthy();
        expect(desks.get('max_assigned_count')).toBeTruthy();
    });

    it('should have visitors form group', () => {
        const visitors = spectator.component.form.get('visitors');
        expect(visitors).toBeTruthy();
        expect(visitors.get('bookable_hours')).toBeTruthy();
        expect(visitors.get('has_parking')).toBeTruthy();
        expect(visitors.get('allow_pass_number')).toBeTruthy();
        expect(visitors.get('allow_printing_label')).toBeTruthy();
    });

    it('should have bookings form group', () => {
        const bookings = spectator.component.form.get('bookings');
        expect(bookings).toBeTruthy();
        expect(bookings.get('allow_all_day')).toBeTruthy();
        expect(bookings.get('all_day_period')).toBeTruthy();
        expect(bookings.get('bookable_hours')).toBeTruthy();
        expect(bookings.get('available_period')).toBeTruthy();
        expect(bookings.get('max_duration')).toBeTruthy();
    });

    it('should have parking form group', () => {
        const parking = spectator.component.form.get('parking');
        expect(parking).toBeTruthy();
        expect(parking.get('allow_all_day')).toBeTruthy();
        expect(parking.get('bookable_hours')).toBeTruthy();
        expect(parking.get('show_users')).toBeTruthy();
        expect(parking.get('show_status_details')).toBeTruthy();
        expect(parking.get('disable_styles')).toBeTruthy();
        expect(parking.get('disable_bookings')).toBeTruthy();
        expect(parking.get('hide_level_selector_on_booking_list')).toBeTruthy();
        expect(parking.get('max_assigned_count')).toBeTruthy();
    });

    it('should have lockers form group', () => {
        const lockers = spectator.component.form.get('lockers');
        expect(lockers).toBeTruthy();
        expect(lockers.get('allow_all_day')).toBeTruthy();
        expect(lockers.get('bookable_hours')).toBeTruthy();
        expect(lockers.get('all_day_default')).toBeTruthy();
        expect(lockers.get('show_calendar_links')).toBeTruthy();
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

    it('should save settings via updateMetadata', async () => {
        await spectator.component.ngOnInit();
        spectator.component.form.patchValue({
            default_route: '/custom-route',
        });
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
        expect(common_mod.notifySuccess).toHaveBeenCalledWith(
            'Successfully saved concierge app settings',
        );
    });

    it('should show error notification when save fails', async () => {
        const { throwError } = await import('rxjs');
        jest.spyOn(ts_client, 'updateMetadata').mockReturnValue(
            throwError(() => ({ message: 'Network error' })) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save().catch(() => {});
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should set loading state during save', async () => {
        let resolve_save: (v?: any) => void;
        jest.spyOn(ts_client, 'updateMetadata').mockReturnValue(
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
