import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { MockModule, MockComponent } from 'ng-mocks';

import { ScheduleEventListItemComponent } from './list-item.component';
import { ApplicationService } from '../../../../services/app.service';
import { IconComponent } from '../../../../ui/icon/icon.component';

describe('ListItemComponent', () => {
    let component: ScheduleEventListItemComponent;
    let fixture: ComponentFixture<ScheduleEventListItemComponent>;
    let service: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ScheduleEventListItemComponent, MockComponent(IconComponent)],
            providers: [{ provide: ApplicationService, useValue: {
                'confirm': jest.fn(),
                'listen': jest.fn(),
                'get': jest.fn(),
                'set': jest.fn()
            } }],
            imports: [MockModule(RouterModule.forRoot([]))]
        }).compileComponents();
        service = TestBed.inject(ApplicationService);
        service.Bookings = {
            'query': jest.fn(),
            'listen': jest.fn(),
            'get': jest.fn(),
            'set': jest.fn()
        }
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ScheduleEventListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
