import { signal } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { createRoutingFactory, Spectator } from '@ngneat/spectator/jest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { EventFormService, SpacePipe } from '@placeos/events';
import { MockProvider } from 'ng-mocks';

import { MeetingFlowConfirmComponent } from '../../../app/book/meeting-flow/meeting-flow-confirm.component';

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

describe('MeetingFlowConfirmComponent', () => {
    let spectator: Spectator<MeetingFlowConfirmComponent>;

    const now = Date.now();
    const base_event = () => ({
        title: 'Standup',
        date: now,
        date_end: now + 30 * 60 * 1000,
        duration: 30,
        all_day: false,
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
    const dismiss = jest.fn();
    const transform = jest.fn(() =>
        Promise.resolve({
            id: 'room-1',
            email: 'room@x.com',
            name: 'Room 1',
            display_name: 'Room 1',
            zones: ['level-1'],
        }),
    );
    const settings_config: Record<string, any> = {
        'app.events.use_building_timezone': false,
    };

    const createComponent = createRoutingFactory({
        component: MeetingFlowConfirmComponent,
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    model,
                    loading,
                    postForm: post_form,
                    cancelPostForm: jest.fn(),
                },
            },
            { provide: MatBottomSheetRef, useValue: { dismiss } },
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
                building: { timezone: 'Australia/Sydney' } as any,
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
        settings_config['app.events.use_building_timezone'] = false;
        post_form.mockClear();
        post_form.mockResolvedValue(true);
        dismiss.mockClear();
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

    it('should render the meeting title and attendee section', async () => {
        await init();
        expect(spectator.query('[details] h3')?.textContent).toContain(
            'Standup',
        );
        expect(spectator.query('section[attendees]')).toExist();
    });

    it('should hide the attendee section when there are none', async () => {
        model.set({ ...base_event(), attendees: [] });
        await init();
        expect(spectator.query('section[attendees]')).not.toExist();
    });

    it('should resolve and show the booked room via the space pipe', async () => {
        await init();
        expect(transform).toHaveBeenCalledWith('room@x.com');
        expect(spectator.query('section[spaces]')).toExist();
        expect(spectator.component.location).toBe('123 St');
    });

    it('should report approval requirement from resources', async () => {
        const ev = base_event();
        ev.resources[0].approval = true;
        model.set(ev);
        await init();
        expect(spectator.component.requires_approval).toBe(true);
        expect(spectator.query('.bg-warning')).toExist();
    });

    it('should post the form directly when a room is selected', async () => {
        await init();
        await spectator.component.postForm();
        expect(openConfirmModal).not.toHaveBeenCalled();
        expect(post_form).toHaveBeenCalledTimes(1);
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should submit when the confirm button is clicked', async () => {
        await init();
        spectator.click('button[name="confirm-meeting"]');
        expect(post_form).toHaveBeenCalledTimes(1);
    });

    it('should confirm before posting when no room is selected', async () => {
        model.set({ ...base_event(), resources: [] });
        transform.mockResolvedValueOnce(null as any);
        await init();
        await spectator.component.postForm();
        expect(openConfirmModal).toHaveBeenCalledTimes(1);
        expect(post_form).toHaveBeenCalledTimes(1);
        expect(dismiss).toHaveBeenCalledWith(true);
    });

    it('should not post when the no-room confirmation is cancelled', async () => {
        model.set({ ...base_event(), resources: [] });
        transform.mockResolvedValueOnce(null as any);
        (openConfirmModal as jest.Mock).mockResolvedValueOnce({
            reason: 'cancel',
            close: jest.fn(),
        });
        await init();
        await spectator.component.postForm();
        expect(openConfirmModal).toHaveBeenCalledTimes(1);
        expect(post_form).not.toHaveBeenCalled();
        expect(dismiss).not.toHaveBeenCalled();
    });

    it('should notify and rethrow, not dismissing, when posting fails', async () => {
        await init();
        post_form.mockRejectedValueOnce(new Error('nope'));
        await expect(spectator.component.postForm()).rejects.toThrow('nope');
        expect(notifyError).toHaveBeenCalled();
        expect(dismiss).not.toHaveBeenCalled();
    });

    it('should disable the confirm button while loading', async () => {
        await init();
        loading.set('Saving');
        spectator.detectChanges();
        expect(
            spectator.query('button[name="confirm-meeting"]'),
        ).toHaveProperty('disabled', true);
    });

    it('should format an all-day event', async () => {
        model.set({ ...base_event(), all_day: true });
        await init();
        expect(spectator.component.formattedTime()).toBe('COMMON.ALL_DAY');
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

    it('should not expose a timezone unless building timezone is enabled', async () => {
        await init();
        expect(spectator.component.timezone).toBe('');
        expect(spectator.component.tz).toBe('');
    });

    it('should expose the building timezone when configured', async () => {
        settings_config['app.events.use_building_timezone'] = true;
        await init();
        expect(spectator.component.timezone).toBe('Australia/Sydney');
        expect(spectator.component.tz).toMatch(/[+-]\d{2}/);
    });
});
