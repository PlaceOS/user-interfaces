import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { BaseClass } from '@user-interfaces/common';

@Component({
    selector: 'booking-desk-questions',
    templateUrl: './desk-questions.component.html',
    styleUrls: ['./desk-questions.component.scss'],
})
export class BookingDeskQuestionsComponent extends BaseClass implements OnInit {
    /** Show Error */
    public show_error: boolean;
    /** Question Form */
    public form: FormGroup = new FormGroup({
        travelled: new FormControl(null, Validators.required),
        unwell: new FormControl(null, Validators.required),
        contact: new FormControl(null, Validators.required),
    });
    /** Events */
    @Output() public event = new EventEmitter<string>();
    public questions = [
        {
            label: 'Have you travelled overseas within the last 14 days?',
            field: 'travelled',
        },
        {
            label: 'Are you unwell or experiencing any cold or flu-like symptoms?',
            field: 'unwell',
        },
        {
            label: 'Have you had contact with anyone with suspected COVID-19?',
            field: 'contact',
        },
    ];
    /** Whether form is submitted */
    public touched = false;

    constructor() {
        super();
    }

    public ngOnInit(): void {}

    public setValue(field, value) {
        if (this.form.value[field] === value) {
            this.form.patchValue({ [field]: !value });
            return;
        }
        this.form.patchValue({ [field]: value });
    }

    public next(): void {
        this.touched = true;
        if (this.form.valid) {
            const value = this.form.value;
            if (Object.values(value).some((i) => i)) {
                this.show_error = true;
            } else {
                this.event.emit('questions');
            }
        }
    }
}
