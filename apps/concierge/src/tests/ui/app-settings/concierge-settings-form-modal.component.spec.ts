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

    /** Return the given metadata details for each zone ID. */
    const mockMetadata = (details: Record<string, Record<string, unknown>>) =>
        vi
            .mocked(ts_client.showMetadata)
            .mockImplementation(
                async (id: string) => ({ details: details[id] || {} }) as never,
            );

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
            }),
        );
        spectator = createComponent();
    });

    afterEach(() => {
        setNotifyOutlet(null, true);
        setCurrentUser(null);
        vi.restoreAllMocks();
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

    it('should close with an error when existing settings fail to load', async () => {
        vi.mocked(ts_client.showMetadata).mockRejectedValue('offline');

        await spectator.component.ngOnInit();

        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalled();
        expect(spectator.component.loading()).toBe('');
        expect(notify_open).toHaveBeenCalledWith(
            expect.stringContaining('offline'),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
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
        expect(spectator.component.loading()).toBe('');
    });

    it('should not save inherited values as overrides', async () => {
        mockMetadata({
            'org-1': { visitors: { allow_pass_number: true } },
            'zone-parent': { visitors: { allow_printing_label: true } },
        });

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

    it('should save a locker period that differs from the inherited booking period', async () => {
        mockMetadata({ 'org-1': { bookings: { available_period: 30 } } });

        await spectator.component.ngOnInit();
        // Locker readers fall back to `bookings.available_period`
        expect(spectator.component.model().lockers.available_period).toBe(30);
        spectator.component.form.lockers.available_period().value.set(7);
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: {
                    lockers: { available_period: 7 },
                    edited_by: expect.any(Object),
                },
            }),
        );
    });

    it('should save a booking period chosen from unset', async () => {
        await spectator.component.ngOnInit();
        expect(spectator.component.model().bookings.available_period).toBe(
            null,
        );
        spectator.component.form.bookings.available_period().value.set(7);
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: {
                    bookings: { available_period: 7 },
                    edited_by: expect.any(Object),
                },
            }),
        );
    });

    it('should save only stored settings when nothing changed', async () => {
        mockMetadata({
            'org-1': { bookings: { available_period: 30 } },
            'zone-1': {
                default_route: '/visitors',
                lockers: { max_duration: 240 },
            },
        });

        await spectator.component.ngOnInit();
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: {
                    default_route: '/visitors',
                    lockers: { max_duration: 240 },
                    edited_by: expect.any(Object),
                },
            }),
        );
    });

    it('should save a toggle turned on from an unset default', async () => {
        await spectator.component.ngOnInit();
        // Room bookings treat an unset `events.allow_edit` as off
        spectator.component.model.update((m) => ({
            ...m,
            events: { ...m.events, allow_edit: true },
        }));
        await spectator.component.save();

        expect(ts_client.updateMetadata).toHaveBeenCalledWith(
            'zone-1',
            expect.objectContaining({
                details: {
                    events: { allow_edit: true },
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
        let resolve_save: (v?: unknown) => void;
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
});
