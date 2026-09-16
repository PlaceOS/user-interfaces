import { signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/vitest';
import {
    OrganisationService,
    setNotifyOutlet,
    SettingsService,
} from '@placeos/common';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MockProvider } from 'ng-mocks';
import { NEVER, of } from 'rxjs';

import { MeetingFlowConfirmModalComponent } from '../../../app/book/meeting-flow/meeting-flow-confirm-modal.component';

// `openConfirmModal` is a workspace named export and cannot be module-mocked
// under the native builder, so drive its real implementation by mocking the
// injected `MatDialog`. `confirm_reason` controls the confirm result and
// `confirm_modal_close` captures the `result.close()` call.
let confirm_reason = 'done';
const confirm_modal_close = vi.fn();
const dialog_open = vi.fn(() => ({
    componentInstance: { event: NEVER, loading: vi.fn() },
    afterClosed: () => of({ reason: confirm_reason }),
    close: confirm_modal_close,
}));

describe('MeetingFlowConfirmModalComponent', () => {
    let spectator: Spectator<MeetingFlowConfirmModalComponent>;
    let notify_open: any;

    const now = Date.now();
    const base_event = () => ({
        title: 'Standup',
        date: now,
        date_end: now + 30 * 60 * 1000,
        duration: 30,
        all_day: false,
        timezone: 'Australia/Perth',
        host: 'host@x.com',
        resources: [
            {
                id: 'room-1',
                email: 'room@x.com',
                name: 'Room 1',
                display_name: 'Room 1',
                zones: ['level-1'],
                approval: false,
            },
        ],
        attendees: [{ name: 'Bob', email: 'bob@x.com' }],
        recurrence: {},
        catering: [],
        assets: [],
    });

    const model = signal<any>(base_event());
    const loading = signal<string>('');
    const post_form = vi.fn(() => Promise.resolve(true));
    const close = vi.fn();
    const transform = vi.fn(() =>
        Promise.resolve({
            id: 'room-1',
            email: 'room@x.com',
            name: 'Room 1',
            display_name: 'Room 1',
            zones: ['level-1'],
        }),
    );
    const settings_config: Record<string, any> = {};

    const createComponent = createRoutingFactory({
        component: MeetingFlowConfirmModalComponent,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    model,
                    loading,
                    event: null,
                    postForm: post_form,
                    cancelPostForm: vi.fn(),
                },
            },
            { provide: MatDialogRef, useValue: { close } },
            MockProvider(MatDialog, { open: dialog_open } as any),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn(() => ({
                    display_name: 'Level 1',
                    name: 'Level 1',
                })),
                buildings: [
                    {
                        id: 'level-1',
                        name: 'HQ',
                        display_name: 'HQ Building',
                        address: '123 St',
                    },
                ] as any,
                regions: [],
                building: {
                    id: 'level-1',
                    timezone: 'Australia/Sydney',
                } as any,
                currency_code: 'USD',
                locationWithID: vi.fn(() => ({
                    label: 'HQ Building / Level 1',
                    building: { timezone: 'Australia/Sydney' },
                })),
            } as any),
            MockProvider(SettingsService, {
                get: vi.fn((k: string) => settings_config[k]),
                time_format: 'h:mm a',
            } as any),
        ],
        componentProviders: [MockProvider(SpacePipe, { transform } as any)],
    });

    const init = async () => {
        spectator = createComponent();
        // The component imports MatDialogModule, so its injector shadows the
        // TestBed-level MatDialog mock — spy on the instance it actually gets.
        const dialog = spectator.fixture.debugElement.injector.get(MatDialog);
        vi.spyOn(dialog, 'open').mockImplementation(dialog_open as any);
        await spectator.fixture.whenStable();
        spectator.detectChanges();
    };

    beforeEach(() => {
        model.set(base_event());
        loading.set('');
        for (const k of Object.keys(settings_config)) delete settings_config[k];
        post_form.mockClear();
        post_form.mockResolvedValue(true);
        close.mockClear();
        confirm_reason = 'done';
        dialog_open.mockClear();
        confirm_modal_close.mockClear();
        notify_open = vi.fn(() => ({
            onAction: () => ({ subscribe: () => undefined }),
            dismiss: () => undefined,
        }));
        setNotifyOutlet({ open: notify_open } as any, true);
        transform.mockClear();
    });

    afterEach(() => setNotifyOutlet(null as any, true));

    it('should create component', async () => {
        await init();
        expect(spectator.component).toBeTruthy();
    });

    it('should render the booked room and attendee sections', async () => {
        await init();
        expect(spectator.query('[attendee-list]')).toExist();
        expect(spectator.query('button[name="confirm-meeting"]')).toExist();
    });

    it('should report approval requirement and render the warning', async () => {
        const ev = base_event();
        ev.resources.push({
            ...ev.resources[0],
            id: 'room-2',
            email: 'room-2@x.com',
            approval: true,
        });
        model.set(ev);
        await init();
        expect(spectator.component.requires_approval).toBe(true);
        expect(spectator.query('.bg-warning')).toExist();
    });

    it('should post the form directly and close when a room is selected', async () => {
        await init();
        await spectator.component.postForm();
        expect(dialog_open).not.toHaveBeenCalled();
        expect(post_form).toHaveBeenCalledTimes(1);
        expect(close).toHaveBeenCalledWith(true);
    });

    it('should submit when the confirm button is clicked', async () => {
        await init();
        spectator.click('button[name="confirm-meeting"]');
        expect(post_form).toHaveBeenCalledTimes(1);
    });

    it('should confirm before posting when no room is selected', async () => {
        model.set({ ...base_event(), resources: [] });
        await init();
        await spectator.component.postForm();
        expect(dialog_open).toHaveBeenCalledTimes(1);
        expect(confirm_modal_close).toHaveBeenCalledTimes(1);
        expect(post_form).toHaveBeenCalledTimes(1);
        expect(close).toHaveBeenCalledWith(true);
    });

    it('should abort posting when the no-room confirmation is cancelled', async () => {
        confirm_reason = 'cancel';
        model.set({ ...base_event(), resources: [] });
        await init();
        await spectator.component.postForm();
        expect(post_form).not.toHaveBeenCalled();
        expect(close).not.toHaveBeenCalled();
    });

    it('should notify and not close when posting fails', async () => {
        await init();
        post_form.mockRejectedValueOnce(new Error('boom'));
        await spectator.component.postForm();
        expect(notify_open).toHaveBeenCalled();
        expect(close).not.toHaveBeenCalled();
    });

    it('should not close when the form resolves falsy', async () => {
        await init();
        post_form.mockResolvedValueOnce(false as any);
        await spectator.component.postForm();
        expect(close).not.toHaveBeenCalled();
    });

    it('should show a spinner and hide the footer while loading', async () => {
        await init();
        loading.set('Saving');
        spectator.detectChanges();
        expect(spectator.component.loading()).toBe('Saving');
        expect(spectator.query('mat-spinner')).toExist();
        expect(spectator.query('button[name="confirm-meeting"]')).not.toExist();
    });

    it('should choose the clash vs time asset error tooltip', async () => {
        await init();
        const clash = spectator.component.err_tooltip({
            conflict: true,
        } as any);
        const time = spectator.component.err_tooltip({
            conflict: false,
        } as any);
        expect(clash).not.toBe(time);
        expect(clash).toContain('CLASH');
        expect(time).toContain('TIME');
    });

    it('should join catering option names for tooltips', async () => {
        await init();
        expect(
            spectator.component.optionList({
                option_list: [{ name: 'Extra cheese' }, { name: 'No onion' }],
            } as any),
        ).toBe('Extra cheese\nNo onion');
    });

    it('should format an all-day event', async () => {
        model.set({ ...base_event(), all_day: true });
        await init();
        expect(spectator.component.formattedTime()).toBe('All Day');
    });

    it('should format a multi-day event with start and end dates', async () => {
        model.set({
            ...base_event(),
            duration: 48 * 60,
            date_end: now + 48 * 60 * 60 * 1000,
        });
        await init();
        expect(spectator.component.is_multiday).toBe(true);
        expect(spectator.component.formattedTime()).toContain(' - ');
    });

    it('should reflect has_assets from settings', async () => {
        settings_config['app.events.has_assets'] = true;
        await init();
        expect(spectator.component.has_assets).toBe(true);
    });

    it('should use the organiser timezone for multiple rooms', async () => {
        settings_config['app.events.multiple_spaces'] = true;
        settings_config['app.events.use_building_timezone'] = true;
        await init();
        expect(spectator.component.timezone).toBe('Australia/Perth');
    });

    it('should show the local time for a room in another timezone', async () => {
        settings_config['app.events.multiple_spaces'] = true;
        await init();

        expect(spectator.component.roomTime(model().resources[0])).not.toBe('');
        expect(spectator.query('[room-time]')).toExist();
    });

    it('should hide the room time when it matches the organiser timezone', async () => {
        settings_config['app.events.multiple_spaces'] = true;
        model.update((event) => ({
            ...event,
            timezone: 'Australia/Sydney',
        }));
        await init();

        expect(spectator.query('[room-time]')).not.toExist();
    });
});
