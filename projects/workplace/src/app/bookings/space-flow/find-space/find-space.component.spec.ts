import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockComponent, MockModule } from 'ng-mocks';

import { BookingFindSpaceComponent } from './find-space.component';
import { generateMockAppService } from '../../../../shared/utilities/spec-helpers';
import { ApplicationService } from '../../../../services/app.service';
import { BookingSpaceItemComponent } from './item/item.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { BookingSpaceFiltersComponent } from './filters/filters.component';

describe('BookingFindSpaceComponent', () => {
    let component: BookingFindSpaceComponent;
    let fixture: ComponentFixture<BookingFindSpaceComponent>;
    let app_service: any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [
                BookingFindSpaceComponent,
                MockComponent(IconComponent),
                MockComponent(BookingSpaceFiltersComponent),
                MockComponent(BookingSpaceItemComponent),
            ],
            providers: [{ provide: ApplicationService, useValue: app_service }],
            imports: [ScrollingModule, MockModule(MatProgressSpinnerModule)],
        }).compileComponents();
    }));

    beforeEach(() => {
        app_service.Spaces.list.mockReturnValue([]);
        fixture = TestBed.createComponent(BookingFindSpaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should list available spaces', () => {
        // TODO
    });
});
