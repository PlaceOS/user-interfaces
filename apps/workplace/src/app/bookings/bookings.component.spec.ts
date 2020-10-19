import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, ActivatedRoute, convertToParamMap } from '@angular/router';

import { BookingsComponent } from './bookings.component';
import { ApplicationService } from '../../services/app.service';
import { generateMockAppService } from '../../shared/utilities/spec-helpers';
import { MockModule, MockComponent } from 'ng-mocks';
import { BookingSpaceFlowComponent } from './space-flow/space-flow.component';
import { BookingDeskFlowComponent } from './desk-flow/desk-flow.component';
import { TopbarHeaderComponent } from '../../ui/topbar-header/topbar-header.component';
import { FooterMenuComponent } from '../../ui/footer-menu/footer-menu.component';
import { OverlayMenuComponent } from '../../ui/overlay-menu/overlay-menu.component';
import { of } from 'rxjs';

describe('BookingsComponent', () => {
    let component: BookingsComponent;
    let fixture: ComponentFixture<BookingsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookingsComponent,
                MockComponent(BookingSpaceFlowComponent),
                MockComponent(BookingDeskFlowComponent),
                MockComponent(TopbarHeaderComponent),
                MockComponent(FooterMenuComponent),
                MockComponent(OverlayMenuComponent)
            ],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: generateMockAppService()
                },
                {
                    provide: ActivatedRoute,
                    useValue: {
                        paramMap: of(convertToParamMap({})),
                        queryParamMap: of(convertToParamMap({}))
                    }
                }
            ],
            imports: [MockModule(RouterModule.forRoot([]))]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BookingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show space booking flow', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('booking-space-flow')).toBeTruthy();
    });

    it('should show desk booking flow', () => {
        component.flow = 'desks';
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('booking-desk-flow')).toBeTruthy();
    });
});
