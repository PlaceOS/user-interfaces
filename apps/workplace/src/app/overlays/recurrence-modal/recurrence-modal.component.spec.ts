import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockModule, MockComponent } from 'ng-mocks';

import { RecurrenceModalComponent } from './recurrence-modal.component';
import { IconComponent } from '../../ui/icon/icon.component';
import { DateFieldComponent } from '../../ui/custom-fields/date-field/date-field.component';

import * as dayjs from 'dayjs';

describe('RecurrenceModalComponent', () => {
    let fixture: ComponentFixture<RecurrenceModalComponent>;
    let component: RecurrenceModalComponent;
    let item: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                RecurrenceModalComponent,
                MockComponent(IconComponent),
                MockComponent(DateFieldComponent),
            ],
            providers: [
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        details: {
                            date: dayjs().startOf('m').valueOf(),
                        },
                    },
                },
            ],
            imports: [
                CommonModule,
                NoopAnimationsModule,
                FormsModule,
                ReactiveFormsModule,
                MockModule(MatSelectModule),
                MockModule(MatFormFieldModule),
                MockModule(MatProgressSpinnerModule),
                MockModule(MatDialogModule),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(RecurrenceModalComponent);
        item = TestBed.inject(MAT_DIALOG_DATA);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should allow saving changes to the recurrence details', (done) => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const button_el = compiled.querySelector('footer button');
        expect(button_el).toBeTruthy();
        component.event.subscribe((event) => {
            expect(event.reason).toBe('done');
            done();
        });
        component.form.controls.end.setValue(dayjs().endOf('d').valueOf());
        button_el.dispatchEvent(new Event('click'));
    });
});
