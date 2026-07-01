import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormField, form } from '@angular/forms/signals';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { DialogEvent } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'desk-question-modal',
    template: `
        @if (!failure()) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button close icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </main>
        }
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
    imports: [
        IconComponent,
        MatDialogModule,
        MatRippleModule,
        MatRadioModule,
        FormField,
    ],
})
export class DeskQuestionsModalComponent {
    @Output() public readonly event = new EventEmitter<DialogEvent>();

    public readonly model = signal({
        travelled: false,
        unwell: false,
        contact: false,
    });
    public readonly form = form(this.model);
    public readonly failure = signal(false);

    public submit() {
        this.form().markAsTouched();
        if (
            Object.values(this.model()).find(
                (value) => value === true || (value as any) === 'true',
            )
        ) {
            this.failure.set(true);
            return;
        }
        this.event.emit({ reason: 'done' });
    }
}
