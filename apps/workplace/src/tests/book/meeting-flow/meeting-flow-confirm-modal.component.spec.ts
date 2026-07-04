import { signal } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { MeetingFlowConfirmModalComponent } from '../../../app/book/meeting-flow/meeting-flow-confirm-modal.component';

jest.mock('@placeos/components', () => ({
    ...jest.requireActual('@placeos/components'),
    openConfirmModal: jest.fn(() =>
        Promise.resolve({ reason: 'done', close: jest.fn() }),
    ),
}));

jest.mock('@placeos/common', () => ({
    ...jest.requireActual('@placeos/common'),
    notifyError: jest.fn(),
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { openConfirmModal } = require('@placeos/components');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { notifyError } = require('@placeos/common');

describe('MeetingFlowConfirmModalComponent', () => {
    let spectator: Spectator<MeetingFlowConfirmModalComponent>;

    const now = Date.now();
    const base_event = () => ({
        title: 'Standup',
        date: now,
        date_end: now + 30 * 60 * 1000,
        duration: 30,
        all_day: false,
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
    const post_form = jest.fn(() => Promise.resolve(true));
    const close = jest.fn();
    const transform = jest.fn(() =>
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
                    cancelPostForm: jest.fn(),
                },
            },
            { provide: MatDialogRef, useValue: { close } },
            MockProvider(MatDialog, { open: jest.fn() }),
            MockProvider(OrganisationService, {
                levelWithID: jest.fn(() => ({
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
                building: { id: 'level-1', timezone: 'Australia/Sydney' } as any,
                currency_code: 'USD',
            }),
            MockProvider(SettingsService, {
                get: jest.fn((k: string) => settings_config[k]),
                time_format: 'h:mm a',
            } as any),
        ],
        componentProviders: [MockProvider(SpacePipe, { transform } as any)],
    });

    const init = async () => {
        spectator = createComponent();
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
        (openConfirmModal as jest.Mock).mockClear();
        (openConfirmModal as jest.Mock).mockResolvedValue({
            reason: 'done',
            close: jest.fn(),
        });
        (notifyError as jest.Mock).mockClear();
        transform.mockClear();
    });

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
        ev.resources[0].approval = true;
        model.set(ev);
        await init();
        expect(spectator.component.requires_approval).toBe(true);
        expect(spectator.query('.bg-warning')).toExist();
    });

    it('should post the form directly and close when a room is selected', async () => {
        await init();
        await spectator.component.postForm();
        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(post_form).toHaveBeenCalledTimes(1);
        expect(close).toHaveBeenCalledWith(true);
    });

    it('should submit when the confirm button is clicked', async () => {
        await init();
        spectator.click('button[name="confirm-meeting"]');
        expect(post_form).toHaveBeenCalledTimes(1);
    });

    it('should confirm before posting when no room is selected', async () => {
        const confirm_close = jest.fn();
        (openConfirmModal as jest.Mock).mockResolvedValueOnce({
            reason: 'done',
            close: confirm_close,
        });
        model.set({ ...base_event(), resources: [] });
        await init();
        await spectator.component.postForm();
        expect(openConfirmModal).toHaveBeenCalledTimes(1);
        expect(confirm_close).toHaveBeenCalledTimes(1);
        expect(post_form).toHaveBeenCalledTimes(1);
        expect(close).toHaveBeenCalledWith(true);
    });

    it('should abort posting when the no-room confirmation is cancelled', async () => {
        (openConfirmModal as jest.Mock).mockResolvedValueOnce({
            reason: 'cancel',
            close: jest.fn(),
        });
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
        expect(notifyError).toHaveBeenCalled();
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
        const clash = spectator.component.err_tooltip({ conflict: true } as any);
        const time = spectator.component.err_tooltip({ conflict: false } as any);
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
});
