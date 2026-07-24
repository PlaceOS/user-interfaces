import { signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent, MockProvider } from 'ng-mocks';
import { ScheduleFilterCardComponent } from '../../app/schedule/schedule-filter-card.component';
import { ScheduleStateService } from '../../app/schedule/schedule-state.service';

describe('ScheduleFilterCardComponent', () => {
    let spectator: Spectator<ScheduleFilterCardComponent>;
    const createComponent = createComponentFactory({
        component: ScheduleFilterCardComponent,
        providers: [
            MockProvider(ScheduleStateService, {
                filters: signal({
                    shown_types: [],
                    show_bookings_for_others: false,
                }),
                toggleType: vi.fn(),
                toggleBookingsForOthers: vi.fn(),
                setDate: vi.fn(),
            } as any),
            MockProvider(MatBottomSheetRef, { dismiss: vi.fn() }),
            MockProvider(SettingsService, { get: vi.fn() }),
        ],
        declarations: [MockComponent(IconComponent)],
        imports: [MatCheckboxModule, FormsModule],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });
});
