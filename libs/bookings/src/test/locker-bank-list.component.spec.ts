import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { OrganisationService, SettingsService } from '@placeos/common';
import { createSettingsServiceMock } from '@placeos/common/tests';
import { MockComponent, MockDirective, MockModule, MockPipe } from 'ng-mocks';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { BookingFormService } from '../lib/booking-form.service';
import { LockerBankListComponent } from '../lib/locker-select-modal/locker-bank-list.component';

describe('LockerBankListComponent', () => {
    let spectator: Spectator<LockerBankListComponent>;
    const options = signal<any>({});
    const available_resources = signal<any[]>([]);
    const loading = signal<string[]>([]);
    const active_region = signal<any>(null);
    const active_building = signal<any>(null);

    const createComponent = createComponentFactory({
        component: LockerBankListComponent,
        declarations: [
            MockComponent(IconComponent),
            MockDirective(AuthenticatedImageDirective),
            MockPipe(LevelPipe, (value) => value as any),
        ],
        imports: [MockModule(MatProgressSpinnerModule)],
        providers: [
            {
                provide: BookingFormService,
                useValue: { options, available_resources, loading },
            },
            {
                provide: OrganisationService,
                useValue: {
                    active_region,
                    active_building,
                    region: null,
                },
            },
            {
                provide: SettingsService,
                useValue: createSettingsServiceMock(),
            },
        ],
    });

    beforeEach(() => {
        vi.clearAllMocks();
        options.set({});
        available_resources.set([]);
        loading.set([]);
        active_region.set(null);
        active_building.set(null);
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should show a zero result count when there are no banks', () => {
        expect(spectator.query('p[count]')).toExist();
        expect(spectator.component.locker_banks()).toEqual([]);
    });

    it('should show the empty state when not loading and no banks exist', () => {
        expect(spectator.query('[empty]')).toExist();
        expect(spectator.query('[loading]')).not.toExist();
    });

    it('should show the loading state while resources are loading', () => {
        loading.set(['lockers']);
        spectator.detectChanges();
        expect(spectator.query('[loading]')).toExist();
        expect(spectator.query('[empty]')).not.toExist();
        expect(spectator.query('mat-spinner')).toExist();
    });

    it('should report favourite banks from the favorites input', () => {
        spectator.setInput('favorites', ['bank-1']);
        expect(spectator.component.isFavourite('bank-1')).toBe(true);
        expect(spectator.component.isFavourite('bank-2')).toBe(false);
    });

    it('should emit onSelect when a bank is selected', () => {
        let emitted: any = null;
        spectator.component.onSelect.subscribe((bank) => (emitted = bank));
        spectator.component.selectLockerBank({ id: 'bank-1' } as any);
        expect(emitted).toEqual({ id: 'bank-1' });
    });
});
