import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogEvent, notifyError } from '@placeos/common';

@Component({
    selector: 'desk-question-modal',
    template: `
        <div *ngIf="!failure; else fail_state" class="relative">
            <h2 class="p-4 text-xl" i18n>COVID-19 Questionnaire</h2>
            <main class="p-4" [formGroup]="form">
                <div class="flex flex-col mb-4">
                    <label i18n>
                        Have you travelled overseas within the last 14
                        days?<span>*</span>
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
                    <label i18n>
                        Are you unwell or experiencing any cold or flu-like
                        symptoms?<span>*</span>
                    </label>
                    <mat-radio-group formControlName="unwell" class="space-x-2">
                        <mat-radio-button [value]="true">Yes</mat-radio-button>
                        <mat-radio-button [value]="false">No</mat-radio-button>
                    </mat-radio-group>
                </div>
                <div class="flex flex-col">
                    <label i18n>
                        Have you had contact with anyone with suspected
                        COVID-19?<span>*</span>
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
                <button btn matRipple (click)="submit()" i18n>Submit</button>
            </footer>
            <button close icon matRipple mat-dialog-close>
                <i class="material-icons">close</i>
            </button>
        </div>
        <ng-template #fail_state>
            <main failure class="pt-8 relative">
                <p class="p-4" i18n>
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <i class="material-icons">close</i>
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
export class DeskQuestionsModalComponent {
    @Output() public event = new EventEmitter<DialogEvent>();

    public form = new FormGroup({
        travelled: new FormControl(false),
        unwell: new FormControl(false),
        contact: new FormControl(false),
    });
    public failure: boolean;

    public submit() {
        this.form.markAllAsTouched();
        if (
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
