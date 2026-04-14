import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { UploadsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { DurationFieldComponent } from '@placeos/form-fields';
import { MockProvider } from 'ng-mocks';
import { of, Subject } from 'rxjs';

import { BookingPanelSettingsModalComponent } from '../../../app/ui/app-settings/booking-panel-settings-modal.component';

import * as common_mod from '@placeos/common';
import * as ts_client from '@placeos/ts-client';

jest.mock('@placeos/ts-client', () => {
    const actual = jest.requireActual('@placeos/ts-client');
    return {
        ...actual,
        querySettings: jest.fn(),
        addSettings: jest.fn(),
        updateSettings: jest.fn(),
    };
});
jest.mock('@placeos/common');

describe('BookingPanelSettingsModalComponent', () => {
    let spectator: Spectator<BookingPanelSettingsModalComponent>;

    const mock_zone = {
        id: 'zone-1',
        name: 'Test Zone',
        display_name: 'Test Panel Zone',
        parent_id: 'zone-parent',
    };

    const MOCK_SETTINGS_STRING = 'min_duration: 15\nmax_duration: 60\n';

    const createComponent = createComponentFactory({
        component: BookingPanelSettingsModalComponent,
        declarations: [
            mockComponent(FullscreenModalShellComponent),
            mockComponent(IconComponent),
            mockComponent(SettingsToggleComponent),
            mockComponent(DurationFieldComponent),
        ],
        providers: [
            MockProvider(MAT_DIALOG_DATA, { zone: mock_zone }),
            MockProvider(MatDialogRef, {
                close: jest.fn(),
                disableClose: false,
            }),
            MockProvider(UploadsService, {
                uploadFileWithProgress: jest.fn(),
            }),
        ],
        imports: [
            NoopAnimationsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
        ],
    });

    beforeEach(() => {
        jest.spyOn(ts_client, 'querySettings').mockReturnValue(
            of({ data: [] }) as any,
        );
        jest.spyOn(ts_client, 'addSettings').mockReturnValue(of({}) as any);
        jest.spyOn(ts_client, 'updateSettings').mockReturnValue(of({}) as any);
        (common_mod as any).notifySuccess = jest.fn();
        (common_mod as any).notifyError = jest.fn();
        (common_mod as any).getInvalidFields = jest.fn(() => []);
        spectator = createComponent();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have a form with booking controls', () => {
        const form = spectator.component.form;
        expect(form.get('disable_book_now')).toBeTruthy();
        expect(form.get('disable_book_now_host')).toBeTruthy();
        expect(form.get('min_duration')).toBeTruthy();
        expect(form.get('max_duration')).toBeTruthy();
    });

    it('should have check-in timing controls', () => {
        const form = spectator.component.form;
        expect(form.get('pending_before')).toBeTruthy();
        expect(form.get('pending_period')).toBeTruthy();
    });

    it('should have meeting display controls', () => {
        const form = spectator.component.form;
        expect(form.get('disable_end_meeting')).toBeTruthy();
        expect(form.get('enable_end_meeting_button')).toBeTruthy();
        expect(form.get('hide_meeting_details')).toBeTruthy();
        expect(form.get('hide_meeting_title')).toBeTruthy();
    });

    it('should have QR code controls', () => {
        const form = spectator.component.form;
        expect(form.get('show_qr_code')).toBeTruthy();
        expect(form.get('hide_qr_text')).toBeTruthy();
        expect(form.get('custom_qr_url')).toBeTruthy();
        expect(form.get('custom_qr_color')).toBeTruthy();
    });

    it('should have URL controls', () => {
        const form = spectator.component.form;
        expect(form.get('control_ui')).toBeTruthy();
        expect(form.get('catering_ui')).toBeTruthy();
        expect(form.get('room_image')).toBeTruthy();
        expect(form.get('offline_image')).toBeTruthy();
    });

    it('should expose the zone from dialog data', () => {
        expect(spectator.component.zone).toEqual(mock_zone);
    });

    it('should have correct default form values', () => {
        const form = spectator.component.form;
        expect(form.value.min_duration).toBe(15);
        expect(form.value.max_duration).toBe(60);
        expect(form.value.pending_before).toBe(5);
        expect(form.value.pending_period).toBe(15);
        expect(form.value.show_qr_code).toBe(true);
        expect(form.value.disable_book_now_host).toBe(true);
    });

    it('should load settings on init', async () => {
        await spectator.component.ngOnInit();
        expect(ts_client.querySettings).toHaveBeenCalledWith({
            parent_id: 'zone-1',
        });
        expect(spectator.component.loading()).toBe('');
    });

    it('should show error and return early when zone id is missing', async () => {
        // Override _data to have empty zone
        (spectator.component as any)._data = { zone: {} };
        (spectator.component as any).zone = {};
        await spectator.component.ngOnInit();
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'Opened booking panel settings modal with invalid zone',
        );
    });

    it('should save new settings via addSettings when no existing settings', async () => {
        // querySettings returns empty on both init load and save load
        jest.spyOn(ts_client, 'querySettings').mockReturnValue(
            of({ data: [] }) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.addSettings).toHaveBeenCalled();
    });

    it('should save existing settings via updateSettings when settings exist', async () => {
        jest.spyOn(ts_client, 'querySettings').mockReturnValue(
            of({
                data: [
                    {
                        id: 'setting-1',
                        encryption_level: 0,
                        settings_string: MOCK_SETTINGS_STRING,
                    },
                ],
            }) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateSettings).toHaveBeenCalled();
    });

    it('should close dialog after save with existing settings', async () => {
        jest.spyOn(ts_client, 'querySettings').mockReturnValue(
            of({
                data: [
                    {
                        id: 'setting-1',
                        encryption_level: 0,
                        settings_string: MOCK_SETTINGS_STRING,
                    },
                ],
            }) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save();
        const dialog_ref = spectator.inject(MatDialogRef);
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should show error when save fails', async () => {
        jest.spyOn(ts_client, 'querySettings').mockReturnValue(
            of({
                data: [
                    {
                        id: 'setting-1',
                        encryption_level: 0,
                        settings_string: MOCK_SETTINGS_STRING,
                    },
                ],
            }) as any,
        );
        const { throwError } = await import('rxjs');
        jest.spyOn(ts_client, 'updateSettings').mockReturnValue(
            throwError(() => new Error('Save failed')) as any,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save().catch(() => {});
        expect(common_mod.notifyError).toHaveBeenCalled();
    });

    it('should handle image upload', () => {
        const upload_subject = new Subject();
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as jest.Mock).mockReturnValue(
            upload_subject.asObservable(),
        );
        const file = new File(['test'], 'test.png', { type: 'image/png' });
        const event = {
            target: {
                files: [file],
            } as any,
        } as Event;

        spectator.component.uploadImage(event, 'room_image');
        expect(uploads.uploadFileWithProgress).toHaveBeenCalledWith(file);
    });

    it('should reject non-image files for upload', () => {
        const file = new File(['test'], 'test.txt', { type: 'text/plain' });
        const event = {
            target: {
                files: [file],
            } as any,
        } as Event;

        spectator.component.uploadImage(event, 'room_image');
        expect(common_mod.notifyError).toHaveBeenCalledWith(
            'File is not an image',
        );
    });

    it('should do nothing when no files selected for upload', () => {
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as jest.Mock).mockClear();

        const event = {
            target: {
                files: [],
            } as any,
        } as Event;

        spectator.component.uploadImage(event, 'room_image');
        expect(uploads.uploadFileWithProgress).not.toHaveBeenCalled();
    });
});
