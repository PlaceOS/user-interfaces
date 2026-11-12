import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { mockComponent, mockDirective } from '@placeos/common/tests';
import { MockProvider } from 'ng-mocks';
import {
    ControlStateService,
    RoomInput,
    SystemState,
} from '../app/control-state.service';

import {
    AuthenticatedImageDirective,
    CustomTooltipComponent,
    IconComponent,
} from '@placeos/components';
import { TopbarHeaderComponent } from '../app/topbar-header.component';
import { ActionModalComponent } from '../app/ui/action-modal.component';
import { PowerTooltipComponent } from '../app/ui/power-tooltip.component';
import { VideoCallStateService } from '../app/video-call/video-call-state.service';

describe('TopbarHeaderComponent', () => {
    let spectator: Spectator<TopbarHeaderComponent>;
    let can_change_room = true;
    const dialog_close = vi.fn();
    const system = signal<SystemState>({});
    const microphones = signal<unknown[]>([]);
    const camera_list = signal<Partial<RoomInput>[]>([]);
    const join_modes = signal<Record<string, { name: string }>>({});
    const joined = signal<{ room_ids: string[] } | null>(null);
    const hide_join_button = signal(false);
    const join_status = signal<[boolean, boolean]>([false, false]);
    const speaker_track = signal<boolean | null>(null);
    const createComponent = createComponentFactory({
        component: TopbarHeaderComponent,
        declarations: [
            mockComponent(IconComponent),
            mockComponent(CustomTooltipComponent),
            mockDirective(AuthenticatedImageDirective),
        ],
        providers: [
            MockProvider(SettingsService, { get: vi.fn(), theme: 'light' }),
            MockProvider(OrganisationService, {
                active_building: signal({} as any),
            }),
            MockProvider(ControlStateService, {
                system,
                mic_list: signal([]),
                microphones,
                camera_list,
                lights: signal([]),
                blinds: signal([]),
                lighting_scenes: signal([]),
                lighting_levels: signal([]),
                joined,
                join_modes,
                join_status,
                hide_join_button,
                help_items: signal({}),
                room_accessories: signal([]),
                powerOff: vi.fn(),
                changeRoom: vi.fn(),
                canChangeRoom: vi.fn(() => can_change_room),
            } as any),
            MockProvider(MatDialog, {
                open: vi.fn(() => ({ close: dialog_close })) as any,
            }),
            MockProvider(VideoCallStateService, {
                call: signal(null),
                connected: signal(null),
                speaker_track,
            }),
        ],
        imports: [MatMenuModule],
    });

    beforeEach(() => {
        can_change_room = true;
        system.set({});
        microphones.set([]);
        camera_list.set([]);
        join_modes.set({});
        joined.set(null);
        hide_join_button.set(false);
        join_status.set([false, false]);
        speaker_track.set(null);
        vi.clearAllMocks();
        vi.useFakeTimers();
    });

    afterEach(() => vi.useRealTimers());

    it('should open change room after holding the logo', () => {
        spectator = createComponent();
        spectator.component.startHold();
        vi.advanceTimersByTime(3000);
        expect(
            spectator.inject(ControlStateService).changeRoom,
        ).toHaveBeenCalled();
    });

    it('should not change room when the logo is released early', () => {
        spectator = createComponent();
        spectator.component.startHold();
        vi.advanceTimersByTime(2000);
        spectator.component.cancelHold();
        vi.advanceTimersByTime(2000);
        expect(
            spectator.inject(ControlStateService).changeRoom,
        ).not.toHaveBeenCalled();
    });

    it('should show each action only when the room supports it', () => {
        spectator = createComponent();
        const action = (id: string) =>
            spectator.component.action_list().find((_) => _.id === id);
        expect(action('phone').show).toBe(false);
        expect(action('join').show).toBe(false);
        expect(action('camera').show).toBe(false);
        expect(action('mics').show).toBe(false);

        system.set({ dial_bindings: {}, ringing: true });
        join_modes.set({ a: { name: 'A' }, b: { name: 'B' } });
        joined.set({ room_ids: ['r1', 'r2'] });
        camera_list.set([{ id: 'cam-1' }]);
        microphones.set([{ name: 'Lectern' }]);
        expect(action('phone')).toMatchObject({ show: true, enabled: true });
        expect(action('join')).toMatchObject({ show: true, enabled: true });
        expect(action('camera').show).toBe(true);
        expect(action('mics').show).toBe(true);

        // The codec moves the camera itself while speaker tracking
        speaker_track.set(true);
        hide_join_button.set(true);
        expect(action('camera').show).toBe(false);
        expect(action('join').show).toBe(false);
    });

    it('should not change room on a fixed device', () => {
        can_change_room = false;
        spectator = createComponent();
        spectator.component.startHold();
        vi.advanceTimersByTime(3000);
        expect(
            spectator.inject(ControlStateService).changeRoom,
        ).not.toHaveBeenCalled();
    });

    it('should hide the lighting scenes action when the room has no scenes', () => {
        spectator = createComponent();
        const action = spectator.component
            .action_list()
            .find((_) => _.id === 'lighting_scenes');
        expect(action.show).toBe(false);
    });

    it('should open a popup action in a fullscreen dialog', () => {
        spectator = createComponent();
        spectator.component.openAction({ id: 'power', name: 'Power' });
        expect(spectator.inject(MatDialog).open).toHaveBeenCalledWith(
            ActionModalComponent,
            expect.objectContaining({
                panelClass: 'fullscreen-dialog',
                ariaLabelledBy: 'action-modal-title',
                data: { title: 'Power', component: PowerTooltipComponent },
            }),
        );
    });

    it('should run a direct action without a dialog', () => {
        spectator = createComponent();
        const action = vi.fn();
        spectator.component.openAction({ id: 'help', name: 'Help', action });
        expect(action).toHaveBeenCalled();
        expect(spectator.inject(MatDialog).open).not.toHaveBeenCalled();
    });

    it('should close the action dialog with the topbar', () => {
        spectator = createComponent();
        spectator.component.openAction({ id: 'power', name: 'Power' });
        spectator.fixture.destroy();
        expect(dialog_close).toHaveBeenCalled();
    });

    it('should lock the controls on a locked secondary room', () => {
        spectator = createComponent();
        expect(spectator.component.locked()).toBe(false);
        join_status.set([false, true]);
        expect(spectator.component.locked()).toBe(true);
    });
});
