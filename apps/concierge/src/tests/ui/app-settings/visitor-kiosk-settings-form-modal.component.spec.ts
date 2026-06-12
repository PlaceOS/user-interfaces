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
import { UploadButtonComponent } from '../../../app/ui/app-settings/upload-button.component';
import { VisitorKioskSettingsFormModalComponent } from '../../../app/ui/app-settings/visitor-kiosk-settings-form-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

describe('VisitorKioskSettingsFormModalComponent', () => {
    let spectator: Spectator<VisitorKioskSettingsFormModalComponent>;

    const mock_zone = {
        id: 'zone-1',
        name: 'Test Zone',
        display_name: 'Test Zone Display',
        parent_id: 'zone-parent',
    };

    const createComponent = createComponentFactory({
        component: VisitorKioskSettingsFormModalComponent,
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
                get: jest.fn(() => 'visitor-kiosk_app'),
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
        jest.spyOn(ts_client, 'showMetadata').mockResolvedValue({
            details: {},
        } as never);
        jest.spyOn(ts_client, 'updateMetadata').mockResolvedValue({} as never);
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        (common_mod as any).currentUser = jest.fn(() => ({
            id: 'user-1',
            name: 'Test User',
            email: 'test@example.com',
            groups: ['placeos_admin'],
        }));
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
        expect(form.get('welcome_background')).toBeTruthy();
        expect(form.get('welcome_message')).toBeTruthy();
        expect(form.get('induction_enabled')).toBeTruthy();
        expect(form.get('allow_self_registration')).toBeTruthy();
        expect(form.get('allow_pass_number')).toBeTruthy();
        expect(form.get('allow_printing_label')).toBeTruthy();
        expect(form.get('allow_user_photo')).toBeTruthy();
        expect(form.get('allow_beverages')).toBeTruthy();
        expect(form.get('hide_explore')).toBeTruthy();
        expect(form.get('hide_building_image')).toBeTruthy();
        expect(form.get('checked_in_template')).toBeTruthy();
        expect(form.get('standalone_visitor_location')).toBeTruthy();
    });

    it('should have visitor label size form group', () => {
        const label_size = spectator.component.form.get('visitor_label_size');
        expect(label_size).toBeTruthy();
        expect(label_size.get('width')).toBeTruthy();
        expect(label_size.get('height')).toBeTruthy();
        expect(label_size.get('scale')).toBeTruthy();
    });

    it('should have visitors form group', () => {
        const visitors = spectator.component.form.get('visitors');
        expect(visitors).toBeTruthy();
        expect(visitors.get('allow_all_day')).toBeTruthy();
        expect(visitors.get('max_duration')).toBeTruthy();
    });

    it('should have explore form group', () => {
        const explore = spectator.component.form.get('explore');
        expect(explore).toBeTruthy();
        expect(explore.get('hide_device_fields')).toBeTruthy();
        expect(explore.get('show_legend')).toBeTruthy();
        expect(explore.get('hide_zones')).toBeTruthy();
        expect(explore.get('disable')).toBeTruthy();
        expect(explore.get('disable_actions')).toBeTruthy();
        expect(explore.get('disable_labels')).toBeTruthy();
        expect(explore.get('disable_features')).toBeTruthy();
        expect(explore.get('disable_styles')).toBeTruthy();
        expect(explore.get('show_booking_qr')).toBeTruthy();
        expect(explore.get('use_zone_polygons')).toBeTruthy();
    });

    it('should expose the zone from dialog data', () => {
        expect(spectator.component.zone).toEqual(mock_zone);
    });

    it('should expose settings option constants', () => {
        expect(spectator.component.MAX_DURATION_MINI).toBeTruthy();
        expect(spectator.component.EXPLORE_FEATURE).toBeTruthy();
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
            'visitor-kiosk_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-parent',
            'visitor-kiosk_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-1',
            'visitor-kiosk_app',
        );
    });

    it('should skip parent metadata when parent is same as org', async () => {
        (ts_client.showMetadata as jest.Mock).mockClear();
        // Override the zone to have parent_id === org id
        (spectator.component as any).zone = {
            ...mock_zone,
            parent_id: 'org-1',
        };
        (spectator.component as any)._data = {
            zone: { ...mock_zone, parent_id: 'org-1' },
        };
        await spectator.component.ngOnInit();
        // Should only call for org and zone (not parent separately)
        expect(ts_client.showMetadata).toHaveBeenCalledTimes(2);
    });

    it('should save settings via updateMetadata', async () => {
        await spectator.component.ngOnInit();
        spectator.component.form.patchValue({
            welcome_message: 'Hello Visitors',
        });
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                name: 'visitor-kiosk_app',
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
            'Successfully saved visitor kiosk app settings',
        );
    });

    it('should show error notification when save fails', async () => {
        (ts_client.updateMetadata as jest.Mock).mockRejectedValueOnce({
            message: 'Network error',
        } as never);
        await spectator.component.ngOnInit();
        await spectator.component.save().catch(() => {});
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should add legend item', () => {
        const explore = spectator.component.form.get('explore');
        // Set a mutable array first
        explore.get('legend').setValue([]);
        spectator.component.addLegend();
        expect(explore.value.legend.length).toBe(1);
    });

    it('should remove legend item', () => {
        const explore = spectator.component.form.get('explore');
        explore.get('legend').setValue([
            ['a', '#000'],
            ['b', '#fff'],
        ]);
        spectator.component.removeLegend(0);
        expect(explore.value.legend.length).toBe(1);
    });

    it('should set default visitor label size values', () => {
        const label_size = spectator.component.form.get('visitor_label_size');
        expect(label_size.value.width).toBe(25);
        expect(label_size.value.height).toBe(15);
        expect(label_size.value.scale).toBe(4);
    });

    it('should set default visitor max duration', () => {
        const visitors = spectator.component.form.get('visitors');
        expect(visitors.value.max_duration).toBe(180);
    });

    it('should set edited_by on save', async () => {
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
                    }),
                }),
            }),
        );
    });
});
