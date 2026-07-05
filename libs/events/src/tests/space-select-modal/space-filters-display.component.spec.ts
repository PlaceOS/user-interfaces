import { signal } from '@angular/core';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { BuildingLevel, OrganisationService } from '@placeos/common';
import { mockComponent } from 'libs/common/src/tests/test-helpers';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { MockProvider } from 'ng-mocks';
import { EventFormService } from '../../lib/event-form.service';
import { SpaceFiltersDisplayComponent } from '../../lib/space-select-modal/space-filters-display.component';

describe('SpaceFiltersDisplayComponent', () => {
    let spectator: Spectator<SpaceFiltersDisplayComponent>;
    const date = new Date('2024-06-12T10:00:00').valueOf();
    const model = signal({ date, duration: 90, all_day: false });
    const options = signal<any>({ zones: ['lvl-1'] });
    const filters = signal<any>({ features: ['vc', 'whiteboard'] });
    const level = new BuildingLevel({
        id: 'lvl-1',
        name: 'Level 1',
        display_name: 'First Floor',
    });
    const createComponent = createComponentFactory({
        component: SpaceFiltersDisplayComponent,
        providers: [
            MockProvider(EventFormService, {
                options: options as any,
                filters: filters as any,
                model: model as any,
                setFilters: vi.fn(),
            }),
            MockProvider(OrganisationService, {
                levelWithID: vi.fn((zones: string[]) =>
                    zones?.includes('lvl-1') ? level : null,
                ),
            }),
        ],
        declarations: [mockComponent(IconComponent)],
    });

    beforeEach(() => {
        model.set({ date, duration: 90, all_day: false });
        filters.set({ features: ['vc', 'whiteboard'] });
        options.set({ zones: ['lvl-1'] });
        spectator = createComponent();
    });

    it('should create component', () =>
        expect(spectator.component).toBeTruthy());

    it('should compute the booking end time from the duration', () => {
        expect(spectator.component.start()).toBe(date);
        expect(spectator.component.end()).toBe(date + 90 * 60 * 1000);
    });

    it('should show the selected level as the location', () => {
        spectator.detectChanges();
        expect(spectator.component.location()).toBe('First Floor');
        expect('[zone]').toHaveText('First Floor');
    });

    it('should list the active feature filters', () => {
        spectator.detectChanges();
        expect(spectator.queryAll('[name="remove-space-filter"]')).toHaveLength(
            2,
        );
    });

    it('should allow removing a single feature filter', () => {
        spectator.component.removeFeature('vc');
        expect(spectator.inject(EventFormService).setFilters).toHaveBeenCalledWith(
            { features: ['whiteboard'] },
        );
    });

    it('should allow clearing all feature filters', () => {
        spectator.detectChanges();
        spectator.click('[name="clear-space-filters"]');
        expect(spectator.inject(EventFormService).setFilters).toHaveBeenCalledWith(
            { features: [] },
        );
    });

    it('should show all day instead of times for all day bookings', () => {
        spectator.detectChanges();
        model.update((m) => ({ ...m, all_day: true }));
        spectator.detectChanges();
        expect(spectator.component.all_day()).toBe(true);
    });
});
