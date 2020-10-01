import { ExploreSpaceStatusComponent } from './space-status.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ApplicationService } from 'src/app/services/app.service';
import { generateMockAppService } from 'src/app/shared/utilities/mock.helpers.spec';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: '[binding]',
    template: '',
    inputs: ['sys', 'mod', 'bind', 'exec', 'model']
})
class MockBindingComponent {}

describe('ExploreSpaceStatusComponent', () => {
    let component: ExploreSpaceStatusComponent;
    let fixture: ComponentFixture<ExploreSpaceStatusComponent>;
    let app_service: any;

    beforeEach(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [ExploreSpaceStatusComponent, MockBindingComponent],
            providers: [
                { provide: ApplicationService, useValue: app_service },
                { provide: MatDialog, useValue: { open: () => null }}
            ],
            imports: []
        }).compileComponents();
        fixture = TestBed.createComponent(ExploreSpaceStatusComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create an instance', () => {
        expect(component).toBeTruthy();
    });

    it('should update statuses', () => {
        // TODO
    });

    it('should update listeners', () => {

    });

    it('should update points of interest', () => {

    });
});
