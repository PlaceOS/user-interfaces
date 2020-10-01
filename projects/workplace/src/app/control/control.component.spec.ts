import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MockModule } from 'ng-mocks';

import { ControlComponent } from './control.component';
import { ApplicationService } from '../../services/app.service';
import { generateMockAppService } from '../../shared/utilities/spec-helpers';

@Component({
    selector: 'a-topbar-header,a-footer-menu,a-overlay-menu',
    template: '',
    styles: [''],
    inputs: ['show', 'menu']
})
class MockOptionComponents {}

@Component({
    selector: 'a-control-space-list',
    template: '',
    styles: ['']
})
class MockControlSpaceListComponent {}

describe('ControlComponent', () => {
    let component: ControlComponent;
    let fixture: ComponentFixture<ControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ControlComponent, MockOptionComponents, MockControlSpaceListComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: generateMockAppService()
                }
            ],
            imports: [MockModule(RouterModule.forRoot([]))]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show control space list', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a-control-space-list')).toBeTruthy();
    });
});
