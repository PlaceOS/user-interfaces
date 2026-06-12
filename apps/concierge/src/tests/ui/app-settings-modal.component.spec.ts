import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';
import { MockProvider } from 'ng-mocks';
import { AppSettingsModalComponent } from '../../app/ui/app-settings-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/ts-client');
jest.mock('@placeos/common');

describe('AppSettingsModalComponent', () => {
    let spectator: Spectator<AppSettingsModalComponent>;

    const mock_zone = {
        id: 'zone-1',
        name: 'Test Zone',
        display_name: 'Test Zone Display',
        parent_id: 'zone-parent',
    };

    const createComponent = createComponentFactory({
        component: AppSettingsModalComponent,
        declarations: [mockComponent(IconComponent)],
        providers: [
            MockProvider(MAT_DIALOG_DATA, { zone: mock_zone }),
            MockProvider(MatDialogRef, {
                close: jest.fn(),
                disableClose: false,
            }),
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
            MatCheckboxModule,
            MatProgressSpinnerModule,
        ],
    });

    beforeEach(() => {
        jest.spyOn(ts_client, 'showMetadata').mockResolvedValue({
            details: {},
        } as never);
        jest.spyOn(ts_client, 'updateMetadata').mockResolvedValue({} as never);
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        spectator = createComponent();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have a form with general controls', () => {
        const form = spectator.component.form;
        expect(form.get('use_24_hour_time')).toBeTruthy();
        expect(form.get('features')).toBeTruthy();
    });

    it('should have events form group', () => {
        const events = spectator.component.form.get('events');
        expect(events).toBeTruthy();
        expect(events.get('allow_all_day')).toBeTruthy();
        expect(events.get('can_book_for_others')).toBeTruthy();
        expect(events.get('has_assets')).toBeTruthy();
        expect(events.get('has_catering')).toBeTruthy();
        expect(events.get('allow_externals')).toBeTruthy();
    });

    it('should have desks form group', () => {
        const desks = spectator.component.form.get('desks');
        expect(desks).toBeTruthy();
        expect(desks.get('allow_all_day')).toBeTruthy();
    });

    it('should expose available features list', () => {
        expect(spectator.component.available_features).toContain('spaces');
        expect(spectator.component.available_features).toContain('desks');
        expect(spectator.component.available_features).toContain('explore');
        expect(spectator.component.available_features).toContain('parking');
    });

    it('should expose landing features list', () => {
        expect(spectator.component.landing_features).toContain(
            'show_quick_links',
        );
        expect(spectator.component.landing_features).toContain(
            'hide_colleagues',
        );
    });

    it('should expose room features list', () => {
        expect(spectator.component.room_features).toContain('allow_all_day');
        expect(spectator.component.room_features).toContain(
            'can_book_for_others',
        );
        expect(spectator.component.room_features).toContain('has_catering');
    });

    it('should expose feature descriptions', () => {
        expect(spectator.component.feature_descriptions['spaces']).toBe(
            'Book Rooms',
        );
        expect(spectator.component.feature_descriptions['desks']).toBe(
            'Book Desks',
        );
        expect(
            spectator.component.feature_descriptions['use_24_hour_time'],
        ).toBe('Use 24 Hour Time');
    });

    it('should expose the zone from dialog data', () => {
        expect(spectator.component.zone).toEqual(mock_zone);
    });

    it('should load settings on init', async () => {
        await spectator.component.ngOnInit();
        expect(ts_client.showMetadata).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
    });

    it('should load metadata from zone, parent, and org', async () => {
        await spectator.component.ngOnInit();
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-1',
            'workplace_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'zone-parent',
            'workplace_app',
        );
        expect(ts_client.showMetadata).toHaveBeenCalledWith(
            'org-1',
            'workplace_app',
        );
    });

    it('should populate active_features from loaded settings', async () => {
        jest.spyOn(ts_client, 'showMetadata').mockResolvedValue({
            details: {
                features: ['spaces', 'desks'],
                use_24_hour_time: true,
            },
        } as never);
        await spectator.component.ngOnInit();
        expect(spectator.component.active_features['spaces']).toBe(true);
        expect(spectator.component.active_features['desks']).toBe(true);
        expect(spectator.component.active_features['use_24_hour_time']).toBe(
            true,
        );
    });

    it('should save settings via updateMetadata', async () => {
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                name: 'workplace_app',
                description: 'Workplace Application Settings',
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
            'Successfully saved settings',
        );
    });

    it('should show error notification when save fails', async () => {
        jest.spyOn(ts_client, 'updateMetadata').mockRejectedValue({
            message: 'Network error',
        } as never);
        await spectator.component.ngOnInit();
        await spectator.component.save().catch(() => {});
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should update form values from active_features before save', () => {
        spectator.component.active_features = {
            spaces: true,
            desks: false,
            explore: true,
            parking: false,
            help: true,
            schedule: false,
            wfh: true,
            use_24_hour_time: true,
        };
        spectator.component.updateFormValues();
        const features = spectator.component.form.value.features;
        expect(features).toContain('spaces');
        expect(features).not.toContain('desks');
        expect(features).toContain('explore');
        expect(features).toContain('help');
        expect(features).toContain('wfh');
    });

    it('should filter features list to only available_features', () => {
        spectator.component.active_features = {
            spaces: true,
            use_24_hour_time: true, // not in available_features
            allow_all_day: true, // not in available_features
        };
        spectator.component.updateFormValues();
        const features = spectator.component.form.value.features;
        expect(features).toContain('spaces');
        expect(features).not.toContain('use_24_hour_time');
        expect(features).not.toContain('allow_all_day');
    });

    it('should copy desks to bookings in updateFormValues', () => {
        (spectator.component.form.get('desks') as any).patchValue({
            allow_all_day: true,
        });
        spectator.component.updateFormValues();
        expect(spectator.component.form.value.bookings.allow_all_day).toEqual(
            spectator.component.form.value.desks.allow_all_day,
        );
    });

    it('should set loading and disableClose during init', async () => {
        const dialog_ref = spectator.inject(MatDialogRef);
        const init_promise = spectator.component.ngOnInit();
        expect(spectator.component.loading()).toBe('Loading settings...');
        await init_promise;
        expect(spectator.component.loading()).toBe('');
    });
});
