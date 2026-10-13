import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { CalendarEvent } from '@placeos/common';
import { mockComponent } from '@placeos/common/tests';
import { IconComponent } from '@placeos/components';

import { PanelViewActionsComponent } from '../../app/new-panel/panel-view-actions.component';
import { PanelStateService } from '../../app/panel-state.service';

describe('PanelViewActionsComponent', () => {
    let spectator: Spectator<PanelViewActionsComponent>;
    const status = signal('free');
    const current = signal<CalendarEvent | null>(null);
    const bookings = signal<CalendarEvent[]>([]);
    const panel_settings = signal<Record<string, unknown>>({});
    let features: string[] = [];
    const state = {
        status,
        current,
        bookings,
        clock: signal(Date.now()),
        setting: (name: string) => panel_settings()[name],
        hasFeature: (name: string) => features.includes(name),
        quickBook: vi.fn(),
        extendMeeting: vi.fn(),
        viewControl: vi.fn(),
        viewCatering: vi.fn(),
        confirmWaiter: vi.fn(),
    };
    const createComponent = createComponentFactory({
        component: PanelViewActionsComponent,
        declarations: [mockComponent(IconComponent)],
        providers: [{ provide: PanelStateService, useValue: state }],
        detectChanges: false,
    });

    beforeEach(() => {
        status.set('free');
        current.set(null);
        bookings.set([]);
        panel_settings.set({});
        features = [];
        vi.clearAllMocks();
        spectator = createComponent();
    });

    it('should show no buttons when no features are on', () => {
        panel_settings.set({ control_ui: 'https://control' });
        spectator.detectChanges();
        expect('button').not.toExist();
    });

    it('should book the room with a quick book button', () => {
        features = ['quick_book'];
        spectator.detectChanges();
        expect(spectator.queryAll('[quick-book]').length).toBe(3);
        spectator.click('[quick-book]');
        expect(state.quickBook).toHaveBeenCalledWith(15);
    });

    it('should hide quick book when the booking form needs a host', () => {
        features = ['quick_book'];
        panel_settings.set({ disable_book_now_host: false });
        spectator.detectChanges();
        expect('[quick-book]').not.toExist();
    });

    it('should extend a meeting when the room is free after it', () => {
        features = ['extend_meeting'];
        status.set('busy');
        current.set(
            new CalendarEvent({
                id: 'event-1',
                date: Date.now(),
                duration: 30,
            }),
        );
        spectator.detectChanges();
        spectator.click('[extend]');
        expect(state.extendMeeting).toHaveBeenCalled();
    });

    it('should show room services for configured UIs', () => {
        features = ['room_services'];
        panel_settings.set({ control_ui: 'https://control' });
        spectator.detectChanges();
        expect('[room-control]').toExist();
        expect('[catering]').not.toExist();
        spectator.click('[call-waiter]');
        expect(state.confirmWaiter).toHaveBeenCalled();
    });
});
