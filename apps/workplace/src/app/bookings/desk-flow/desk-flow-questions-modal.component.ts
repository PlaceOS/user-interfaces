import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogEvent, notifyError } from '@user-interfaces/common';

@Component({
    selector: 'desk-flow-question',
    template: `
        <div *ngIf="!failure; else fail_state" class="relative">
            <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
            <main class="p-4" [formGroup]="form">
                <div class="flex flex-col mb-4">
                    <label>
                        Have you travelled overseas within the last 14 days?
                    </label>
                    <mat-radio-group
                        formControlName="travelled"
                        class="space-x-2"
                    >
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
                <div class="flex flex-col mb-4">
                    <label>
                        Are you unwell or experiencing any cold or flu-like
                        symptoms?
                    </label>
                    <mat-radio-group formControlName="unwell" class="space-x-2">
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
                <div class="flex flex-col">
                    <label>
                        Have you had contact with anyone with suspected
                        COVID-19?
                    </label>
                    <mat-radio-group
                        formControlName="contact"
                        class="space-x-2"
                    >
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
            </main>
            <footer class="flex justify-center items-center p-2">
                <button mat-button (click)="submit()">Submit</button>
            </footer>
            <button close mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </div>
        <ng-template #fail_state>
            <main class="pt-8 relative">
                <p class="p-4">
                    Your request to work from the office has been rejected based on
                    your response to the compulsory Covid-19 questions. Please feel
                    free to submit a new request when circumstances change in a way
                    that changes your answer to the questions.
                </p>
                <button close mat-icon-button mat-dialog-close>
                    <app-icon className="material-icons">close</app-icon>
                </button>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                width: 24rem;
                max-width: calc(100vw - 4.5rem);
            }

            [close] {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
            }
        `,
    ],
})
export class DeskFlowQuestionsModalComponent implements OnInit {
    @Output() public event = new EventEmitter<DialogEvent>();

    public form: FormGroup;
    public failure: boolean;

    public ngOnInit() {
        this.form = new FormGroup({
            travelled: new FormControl('', [Validators.required]),
            unwell: new FormControl('', [Validators.required]),
            contact: new FormControl('', [Validators.required]),
        });
    }

    public submit() {
        this.form.markAllAsTouched();
        if (!this.form.valid) {
            notifyError('All the questions must be answered');
            return;
        } else if (
            Object.keys(this.form.value).find(
                (key) =>
                    this.form.value[key] === true ||
                    this.form.value[key] === 'true'
            )
        ) {
            this.failure = true;
            return;
        }
        this.event.emit({ reason: 'done' });
    }
}
