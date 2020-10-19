import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { NewUserModalComponent } from './new-user-modal.component';
import { IconComponent } from 'src/app/ui/icon/icon.component';
import { MockModule } from 'ng-mocks';

@Component({
    selector: 'user-form',
    template: '',
    styles: [''],
    inputs: ['form'],
})
class MockUserForm {}

describe('NewUserModalComponent', () => {
    let component: NewUserModalComponent;
    let fixture: ComponentFixture<NewUserModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NewUserModalComponent, IconComponent, MockUserForm],
            providers: [
                {
                    provide: MatDialogRef,
                    useValue: {
                        close: jest.fn(),
                    },
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        user: {},
                    },
                },
            ],
            imports: [MatProgressSpinnerModule, APipesModule, MockModule(MatDialogModule)],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NewUserModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show the form', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('user-form')).toBeTruthy();
    });

    it('should show the action buttons', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('footer button').length).toBe(2);
    });

    it('should emit user details on save', (done) => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelectorAll('footer button')[1];
        expect(element).toBeTruthy();
        component.form.controls.name.setValue('support');
        component.form.controls.organisation.setValue('placeOS');
        component.form.controls.email.setValue('support@aca.im');
        component.event.subscribe((event) => {
            if (event.reason === 'done') {
                expect(event.metadata.name).toBe('support');
                expect(event.metadata.organisation).toBe('placeOS');
                expect(event.metadata.email).toBe('support@aca.im');
                done();
            }
        });
        element.dispatchEvent(new Event('click'));
    });
});
