import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';

import { ExploreDeskStatusComponent } from './desk-status.component';
import { ApplicationService } from 'src/app/services/app.service';
import { generateMockAppService } from 'src/app/shared/utilities/mock.helpers.spec';

@Component({
    selector: '[binding]',
    template: '',
    inputs: ['sys', 'mod', 'bind', 'exec', 'model', 'params']
})
class MockBindingComponent {}

describe('ExploreDeskStatusComponent', () => {
    let component: ExploreDeskStatusComponent;
    let fixture: ComponentFixture<ExploreDeskStatusComponent>;
    let app_service: any;

    beforeEach(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [ExploreDeskStatusComponent, MockBindingComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: app_service
                }
            ],
            imports: []
        }).compileComponents();
        fixture = TestBed.createComponent(ExploreDeskStatusComponent);
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
