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
        spectator.component.toggleGroup('desks');
        expect(spectator.component.shown_group()).toBe('desks');
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

    it('should hide devices and sensors on the explore map by default', () => {
        const explore = spectator.component.model().explore;
        expect(explore.hide_devices).toBe(true);
        expect(explore.hide_sensors).toBe(true);
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
});
