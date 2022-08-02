import { FeaturesFilterService } from '../app/rooms/features-filter.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { MockComponent, ngMocks } from 'ng-mocks';
import { of } from 'rxjs';
import { take } from 'rxjs/operators';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BookModule } from '../app/rooms/book.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatBottomSheetModule,
    MatBottomSheet,
} from '@angular/material/bottom-sheet';

import { EventFormService } from '@placeos/events';
import { ComponentsModule, MapPinComponent } from '@placeos/components';
import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { mockSpace, mockSpaceWithViews } from './test-mocks';

describe('FeatureFilterService', () => {
    let spectator: SpectatorService<FeaturesFilterService>;

    const createService = createServiceFactory({
        service: FeaturesFilterService,
        imports: [
            ReactiveFormsModule,
            FormsModule,
            MatFormFieldModule,
            BookModule,
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            MatBottomSheetModule,
            ComponentsModule,
        ],
        providers: [
            {
                provide: EventFormService,
                useValue: {
                    available_spaces: of([
                        mockSpace,
                        mockSpace,
                        mockSpace,
                        mockSpaceWithViews,
                    ]) as any,
                },
            },
        ],
        declarations: [
            MockComponent(FindSpaceComponent),
            MockComponent(FilterSpaceComponent),
        ],
    });

    beforeEach(() => {
        spectator = createService();
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create service', () => {
        expect(spectator.service).toBeTruthy();
    });

    it('should store selected features ', async () => {
        await spectator.service.getSelectedFeatures();
        let selections: number = 0;
        spectator.service.features$?.subscribe((features) =>
            features.map((feature) => ((feature.value = true), selections++))
        );
        let selected_features_count;
        spectator.service.selected_features$?.subscribe(
            (features) => (selected_features_count = features?.length)
        );

        expect(selected_features_count).toBe(selections);
    });

    it('should emit a notification if features are selected', async () => {
        let room_with_views;
        spectator.service.features$?.subscribe(
            (features) =>
                (room_with_views = features.find(
                    (feature) => feature.name == 'Views'
                ))
        );
        room_with_views.value = true;
        await spectator.service.getSelectedFeatures();
        await spectator.service.applyFilter();
        await spectator.service.updated_spaces$?.pipe(take(1)).toPromise();

        spectator.service.updated_spaces_emitter?.subscribe((result) =>
            expect(result).toBe(true)
        );
    });

    it('should update spaces based on feature selections', async () => {
        const spaces_before_filter = await spectator.service.spaces$
            .pipe(take(1))
            .toPromise();

        expect(spaces_before_filter.length).toBe(4);

        let room_with_views;
        spectator.service.features$?.subscribe(
            (features) =>
                (room_with_views = features.find(
                    (feature) => feature.name == 'Views'
                ))
        );
        room_with_views.value = true; //mimic selecting Views checkbox
        await spectator.service.getSelectedFeatures();
        await spectator.service.applyFilter();
        spectator.service.updated_spaces$?.subscribe((updated_spaces) =>
            expect(updated_spaces.length).toBe(1)
        );
    });

    it('should clear selected features via the clearFilter method', async () => {
        let room_with_views;
        spectator.service.features$?.subscribe(
            (features) =>
                (room_with_views = features.find(
                    (feature) => feature.name == 'Views'
                ))
        );
        room_with_views.value = true;

        spectator.service.updated_spaces$?.subscribe((updated_spaces) =>
            expect(updated_spaces.length).toBe(1)
        );

        await spectator.service.clearFilter();
        spectator.service.updated_spaces$?.subscribe((updated_spaces) =>
            expect(updated_spaces.length).toBe(null)
        );
    });
});
