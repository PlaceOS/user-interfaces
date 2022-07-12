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

import { RoomConfirmService } from '../app/rooms/room-confirm.service';
import { RoomTileComponent } from '../app/rooms/room-tile/room-tile.component';
import { FindSpaceComponent } from '../app/rooms/find-space/find-space.component';
import { FilterSpaceComponent } from '../app/rooms/filter-space/filter-space.component';
import { mockRoomConfirmService, mockSpace } from './test-mocks';

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
                    available_spaces: of(null) as any,
                },
            },
        ],
        declarations: [
            MockComponent(FindSpaceComponent),
            MockComponent(FilterSpaceComponent),
        ],
    });

    beforeEach(() => {
        jest.clearAllMocks();
        jest.resetModules();
        ngMocks.reset();
    });

    it('should create service', () => {
        spectator = createService();
        expect(spectator.service).toBeTruthy();
    });
});
