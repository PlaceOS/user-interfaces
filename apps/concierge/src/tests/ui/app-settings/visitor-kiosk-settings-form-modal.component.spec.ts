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
import { VisitorKioskSettingsFormModalComponent } from '../../../app/ui/app-settings/visitor-kiosk-settings-form-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('VisitorKioskSettingsFormModalComponent', () => {
    let spectator: Spectator<VisitorKioskSettingsFormModalComponent>;
    let notify_open: ReturnType<typeof vi.fn>;

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
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(SettingsService, {
                get: vi.fn(() => 'visitor-kiosk_app'),
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
        expect('welcome_background' in model).toBe(true);
        expect('welcome_message' in model).toBe(true);
        expect('induction_enabled' in model).toBe(true);
        expect('allow_self_registration' in model).toBe(true);
        expect('allow_pass_number' in model).toBe(true);
        expect('allow_printing_label' in model).toBe(true);
        expect('allow_user_photo' in model).toBe(true);
        expect('allow_beverages' in model).toBe(true);
        expect('hide_explore' in model).toBe(true);
        expect('hide_building_image' in model).toBe(true);
        expect('checked_in_template' in model).toBe(true);
        expect('standalone_visitor_location' in model).toBe(true);
    });

    it('should have visitor label size model group', () => {
        const label_size = spectator.component.model().visitor_label_size;
        expect(label_size).toBeTruthy();
        expect('width' in label_size).toBe(true);
        expect('height' in label_size).toBe(true);
        expect('scale' in label_size).toBe(true);
    });

    it('should have visitors model group', () => {
        const visitors = spectator.component.model().visitors;
        expect(visitors).toBeTruthy();
        expect('allow_all_day' in visitors).toBe(true);
        expect('max_duration' in visitors).toBe(true);
    });

    it('should have explore model group', () => {
        const explore = spectator.component.model().explore;
        expect(explore).toBeTruthy();
        expect('hide_device_fields' in explore).toBe(true);
        expect('show_legend' in explore).toBe(true);
        expect('hide_zones' in explore).toBe(true);
        expect('disable' in explore).toBe(true);
        expect('disable_actions' in explore).toBe(true);
        expect('disable_labels' in explore).toBe(true);
        expect('disable_features' in explore).toBe(true);
        expect('disable_styles' in explore).toBe(true);
        expect('show_booking_qr' in explore).toBe(true);
        expect('use_zone_polygons' in explore).toBe(true);
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
        (ts_client.showMetadata as any).mockClear();
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

    it('should compare organisation settings against application defaults', async () => {
        (ts_client.showMetadata as any).mockClear();
        (ts_client.showMetadata as any).mockResolvedValueOnce({
            details: { welcome_message: 'Organisation welcome' },
        });
        (spectator.component as any).zone = {
            ...mock_zone,
            id: 'org-1',
            parent_id: '',
        };
        (spectator.component as any)._data = {
            zone: { ...mock_zone, id: 'org-1', parent_id: '' },
        };

        await spectator.component.ngOnInit();
        await spectator.component.save();

        expect(ts_client.showMetadata).toHaveBeenCalledTimes(1);
        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'org-1',
            expect.objectContaining({
                details: expect.objectContaining({
                    welcome_message: 'Organisation welcome',
                }),
            }),
        );
    });

    it('should save an empty string that clears an inherited value', async () => {
        (ts_client.showMetadata as any)
            .mockResolvedValueOnce({
                details: { welcome_message: 'Organisation welcome' },
            })
            .mockResolvedValueOnce({
                details: { welcome_message: 'Region welcome' },
            })
            .mockResolvedValueOnce({ details: {} });

        await spectator.component.ngOnInit();
        spectator.component.model.update((model) => ({
            ...model,
            welcome_message: '',
        }));
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: expect.objectContaining({ welcome_message: '' }),
            }),
        );
    });

    it('should save settings via updateMetadata', async () => {
        await spectator.component.ngOnInit();
        spectator.component.model.update((m) => ({
            ...m,
            welcome_message: 'Hello Visitors',
        }));
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
        expect(notify_open).toHaveBeenCalledWith(
            'Successfully saved visitor kiosk app settings',
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
        // Set a mutable array first
        spectator.component.model.update((m) => ({
            ...m,
            explore: { ...m.explore, legend: [] },
        }));
        spectator.component.addLegend();
        expect(spectator.component.model().explore.legend.length).toBe(1);
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

    it('should set default visitor label size values', () => {
        const label_size = spectator.component.model().visitor_label_size;
        expect(label_size.width).toBe(25);
        expect(label_size.height).toBe(15);
        expect(label_size.scale).toBe(4);
    });

    it('should set default visitor max duration', () => {
        const visitors = spectator.component.model().visitors;
        expect(visitors.max_duration).toBe(180);
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
