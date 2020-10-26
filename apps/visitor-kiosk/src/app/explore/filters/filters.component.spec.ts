import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersComponent } from './filters.component';
import { Component, Directive } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'mat-checkbox',
    template: '<ng-container></ng-container>',
    inputs: ['value', 'checked']
})
class MockComponent {
    constructor() {}
}

@Directive({
    selector: '[mat-button]'
})
class MockDirective {
    constructor() {}
}

describe('FiltersComponent', () => {
    let component: FiltersComponent;
    let fixture: ComponentFixture<FiltersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FiltersComponent, MockComponent, MockDirective],
            providers: [
                { provide: MatDialogRef, useValue: { close: jasmine.createSpy() } },
                { provide: MAT_DIALOG_DATA, useValue: {} }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FiltersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
