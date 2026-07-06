import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { setNotifyOutlet, UploadsService } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import {
    FullscreenModalShellComponent,
    IconComponent,
    SettingsToggleComponent,
} from '@placeos/components';
import { DurationFieldComponent } from '@placeos/form-fields';
import { MockProvider } from 'ng-mocks';
import { Subject } from 'rxjs';

import { BookingPanelSettingsModalComponent } from '../../../app/ui/app-settings/booking-panel-settings-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('BookingPanelSettingsModalComponent', () => {
    let spectator: Spectator<BookingPanelSettingsModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

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
                close: vi.fn(),
                disableClose: false,
            }),
            MockProvider(UploadsService, {
                uploadFileWithProgress: vi.fn(),
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
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        vi.mocked(ts_client.querySettings).mockResolvedValue({
            data: [],
        } as never);
        vi.mocked(ts_client.addSettings).mockResolvedValue({} as never);
        vi.mocked(ts_client.updateSettings).mockResolvedValue({} as never);
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null as any, true);
        vi.restoreAllMocks();
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should have a model with booking values', () => {
        const model = spectator.component.model();
        expect('disable_book_now' in model).toBe(true);
        expect('disable_book_now_host' in model).toBe(true);
        expect('min_duration' in model).toBe(true);
        expect('max_duration' in model).toBe(true);
    });

    it('should have check-in timing values', () => {
        const model = spectator.component.model();
        expect('pending_before' in model).toBe(true);
        expect('pending_period' in model).toBe(true);
    });

    it('should have meeting display values', () => {
        const model = spectator.component.model();
        expect('disable_end_meeting' in model).toBe(true);
        expect('enable_end_meeting_button' in model).toBe(true);
        expect('hide_meeting_details' in model).toBe(true);
        expect('hide_meeting_title' in model).toBe(true);
    });

    it('should have QR code values', () => {
        const model = spectator.component.model();
        expect('show_qr_code' in model).toBe(true);
        expect('hide_qr_text' in model).toBe(true);
        expect('custom_qr_url' in model).toBe(true);
        expect('custom_qr_color' in model).toBe(true);
    });

    it('should have URL values', () => {
        const model = spectator.component.model();
        expect('control_ui' in model).toBe(true);
        expect('catering_ui' in model).toBe(true);
        expect('room_image' in model).toBe(true);
        expect('offline_image' in model).toBe(true);
    });

    it('should expose the zone from dialog data', () => {
        expect(spectator.component.zone).toEqual(mock_zone);
    });

    it('should have correct default model values', () => {
        const model = spectator.component.model();
        expect(model.min_duration).toBe(15);
        expect(model.max_duration).toBe(60);
        expect(model.pending_before).toBe(5);
        expect(model.pending_period).toBe(15);
        expect(model.show_qr_code).toBe(true);
        expect(model.disable_book_now_host).toBe(true);
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
        expect(notify_open).toHaveBeenCalledWith(
            'Opened booking panel settings modal with invalid zone',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should save new settings via addSettings when no existing settings', async () => {
        // querySettings returns empty on both init load and save load
        (ts_client.querySettings as any).mockResolvedValueOnce({
            data: [],
        });
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.addSettings).toHaveBeenCalled();
    });

    it('should save existing settings via updateSettings when settings exist', async () => {
        (ts_client.querySettings as any).mockResolvedValue({
            data: [
                {
                    id: 'setting-1',
                    encryption_level: 0,
                    settings_string: MOCK_SETTINGS_STRING,
                },
            ],
        });
        await spectator.component.ngOnInit();
        await spectator.component.save();
        expect(ts_client.updateSettings).toHaveBeenCalled();
    });

    it('should close dialog after save with existing settings', async () => {
        (ts_client.querySettings as any).mockResolvedValue({
            data: [
                {
                    id: 'setting-1',
                    encryption_level: 0,
                    settings_string: MOCK_SETTINGS_STRING,
                },
            ],
        });
        await spectator.component.ngOnInit();
        await spectator.component.save();
        const dialog_ref = spectator.inject(MatDialogRef);
        expect(dialog_ref.close).toHaveBeenCalled();
    });

    it('should show error when save fails', async () => {
        (ts_client.querySettings as any).mockResolvedValue({
            data: [
                {
                    id: 'setting-1',
                    encryption_level: 0,
                    settings_string: MOCK_SETTINGS_STRING,
                },
            ],
        });
        (ts_client.updateSettings as any).mockRejectedValueOnce(
            new Error('Save failed') as never,
        );
        await spectator.component.ngOnInit();
        await spectator.component.save().catch(() => {});
        expect(notify_open).toHaveBeenCalledWith(
            expect.anything(),
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should handle image upload', () => {
        const upload_subject = new Subject();
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockReturnValue(
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
        expect(notify_open).toHaveBeenCalledWith(
            'File is not an image',
            'OK',
            expect.objectContaining({ panelClass: ['error'] }),
        );
    });

    it('should do nothing when no files selected for upload', () => {
        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileWithProgress as any).mockClear();

        const event = {
            target: {
                files: [],
            } as any,
        } as Event;

        spectator.component.uploadImage(event, 'room_image');
        expect(uploads.uploadFileWithProgress).not.toHaveBeenCalled();
    });
});
