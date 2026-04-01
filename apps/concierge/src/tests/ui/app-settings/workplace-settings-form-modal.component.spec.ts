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

import { UploadButtonComponent } from '../../../app/ui/app-settings/upload-button.component';
import { WorkplaceSettingsFormModalComponent } from '../../../app/ui/app-settings/workplace-settings-form-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

describe('WorkplaceSettingsFormModalComponent', () => {
    let spectator: Spectator<WorkplaceSettingsFormModalComponent>;

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
            MockProvider(MatDialogRef, { close: jest.fn() }),
            MockProvider(SettingsService, {
                get: jest.fn(() => 'workplace_app'),
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

    it('should have a form with general settings controls', () => {
        const form = spectator.component.form;
        expect(form.get('logo_light')).toBeTruthy();
        expect(form.get('logo_dark')).toBeTruthy();
        expect(form.get('features')).toBeTruthy();
        expect(form.get('default_route')).toBeTruthy();
        expect(form.get('use_24_hour_time')).toBeTruthy();
        expect(form.get('use_region')).toBeTruthy();
        expect(form.get('week_start')).toBeTruthy();
        expect(form.get('currency')).toBeTruthy();
        expect(form.get('external_support_url')).toBeTruthy();
        expect(form.get('support_email')).toBeTruthy();
        expect(form.get('catering_provider')).toBeTruthy();
    });

    it('should have events form group for room bookings', () => {
        const events = spectator.component.form.get('events');
        expect(events).toBeTruthy();
        expect(events.get('allow_all_day')).toBeTruthy();
        expect(events.get('all_day_period')).toBeTruthy();
        expect(events.get('can_book_for_others')).toBeTruthy();
        expect(events.get('has_assets')).toBeTruthy();
        expect(events.get('allow_externals')).toBeTruthy();
        expect(events.get('max_duration')).toBeTruthy();
        expect(events.get('allowed_future_days')).toBeTruthy();
        expect(events.get('force_host')).toBeTruthy();
        expect(events.get('setup')).toBeTruthy();
        expect(events.get('breakdown')).toBeTruthy();
        expect(events.get('cache_duration_in_days')).toBeTruthy();
    });

    it('should have desks form group', () => {
        const desks = spectator.component.form.get('desks');
        expect(desks).toBeTruthy();
        expect(desks.get('allow_all_day')).toBeTruthy();
        expect(desks.get('allow_groups')).toBeTruthy();
        expect(desks.get('auto_allocation')).toBeTruthy();
        expect(desks.get('max_duration')).toBeTruthy();
        expect(desks.get('available_period')).toBeTruthy();
    });

    it('should have bookings form group', () => {
        const bookings = spectator.component.form.get('bookings');
        expect(bookings).toBeTruthy();
        expect(bookings.get('allow_all_day')).toBeTruthy();
        expect(bookings.get('all_day_period')).toBeTruthy();
        expect(bookings.get('can_book_for_others')).toBeTruthy();
    });

    it('should have parking form group', () => {
        const parking = spectator.component.form.get('parking');
        expect(parking).toBeTruthy();
        expect(parking.get('allow_all_day')).toBeTruthy();
        expect(parking.get('show_users')).toBeTruthy();
        expect(parking.get('auto_allocation')).toBeTruthy();
    });

    it('should have lockers form group', () => {
        const lockers = spectator.component.form.get('lockers');
        expect(lockers).toBeTruthy();
        expect(lockers.get('allow_all_day')).toBeTruthy();
        expect(lockers.get('show_calendar_links')).toBeTruthy();
    });

    it('should have explore form group', () => {
        const explore = spectator.component.form.get('explore');
        expect(explore).toBeTruthy();
        expect(explore.get('hide_device_fields')).toBeTruthy();
        expect(explore.get('show_legend')).toBeTruthy();
        expect(explore.get('hide_zones')).toBeTruthy();
        expect(explore.get('disable')).toBeTruthy();
        expect(explore.get('disable_actions')).toBeTruthy();
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
        expect(common_mod.notifySuccess).toHaveBeenCalledWith(
            'Successfully saved workplace app settings',
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

    it('should add legend item', () => {
        const explore = spectator.component.form.get('explore');
        explore.patchValue({ legend: [] } as any);
        spectator.component.addLegend();
        expect(explore.value.legend.length).toBe(1);
        expect(explore.value.legend[0]).toEqual(['', '#1E88E5']);
    });

    it('should remove legend item', () => {
        const explore = spectator.component.form.get('explore');
        explore.patchValue({
            legend: [
                ['a', '#000'],
                ['b', '#fff'],
            ],
        } as any);
        spectator.component.removeLegend(0);
        expect(explore.value.legend.length).toBe(1);
    });

    it('should not remove legend item at invalid index', () => {
        const explore = spectator.component.form.get('explore');
        (explore as any).patchValue({ legend: [['a', '#000']] });
        spectator.component.removeLegend(5);
        expect(explore.value.legend.length).toBe(1);
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
        (common_mod as any).currentUser = jest.fn(() => ({
            id: 'user-2',
            name: 'Support User',
            email: 'support@example.com',
            groups: ['placeos_support'],
        }));
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
        (common_mod as any).currentUser = jest.fn(() => ({
            id: 'user-3',
            name: 'Regular User',
            email: 'user@example.com',
            groups: [],
        }));
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
