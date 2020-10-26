import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MockModule } from 'ng-mocks';

import { HelpComponent } from './help.component';
import { ApplicationService } from '../../services/app.service';
import { generateMockAppService } from '../../shared/utilities/spec-helpers';

@Component({
    selector: 'a-topbar-header,a-footer-menu,a-overlay-menu',
    template: '',
    styles: [''],
    inputs: ['show', 'menu']
})
class MockOptionComponents { }

@Component({
    selector: 'a-help-option-list',
    template: '',
    styles: ['']
})
class MockHelpOptionListComponent { }

describe('HelpComponent', () => {
    let component: HelpComponent;
    let fixture: ComponentFixture<HelpComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HelpComponent, MockOptionComponents, MockHelpOptionListComponent],
            providers: [
                { provide: ApplicationService, useValue: generateMockAppService() },
            ],
            imports: [MockModule(RouterModule.forRoot([]))]
        }).compileComponents();
        fixture = TestBed.createComponent(HelpComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show help option list', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a-help-option-list')).toBeTruthy();
    });
});
