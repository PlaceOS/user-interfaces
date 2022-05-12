import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventFormService } from '@placeos/events';

@Component({
    selector: 'meeting-flow-form',
    template: `
        <div class="absolute inset-0 bg-gray-100 overflow-auto">
            <div
                class="max-w-full w-[768px] mx-auto sm:my-4 bg-white border border-gray-300"
            >
                <h2
                    class="w-full p-4 sm:py-4 sm:px-16 text-2xl font-medium border-b border-gray-300"
                >
                    Book Meeting
                </h2>
                <form
                    class="p-4 sm:py-4 sm:px-16 divide-y divide-gray-300 space-y-2"
                    [formGroup]="form"
                >
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center mb-4">
                            <div
                                class="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                1
                            </div>
                            <div class="text-xl">Details</div>
                        </h3>
                        <meeting-form-details [form]="form"></meeting-form-details>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center mb-4">
                            <div
                                class="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                2
                            </div>
                            <div class="text-xl">Attendees</div>
                        </h3>
                        <a-user-list-field
                            formControlName="attendees"
                        ></a-user-list-field>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center mb-4">
                            <div
                                class="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                3
                            </div>
                            <div class="text-xl">Room</div>
                        </h3>
                        <space-list-field formControlName="spaces"></space-list-field>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                4
                            </div>
                            <div class="text-xl">Catering</div>
                        </h3>
                        <catering-list-field formControlName="catering"></catering-list-field>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center">
                            <div
                                class="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                5
                            </div>
                            <div class="text-xl">Assets</div>
                        </h3>
                        <asset-list-field formControlName="assets"></asset-list-field>
                    </section>
                    <section class="p-2">
                        <h3 class="space-x-2 flex items-center mb-4">
                            <div
                                class="bg-gray-100 rounded-full h-6 w-6 flex items-center justify-center"
                            >
                                6
                            </div>
                            <div class="text-xl">Notes</div>
                        </h3>
                        <div class="w-full flex flex-col">
                            <label for="notes"
                                >General information for attendees</label
                            >
                            <mat-form-field appearance="outline">
                                <textarea
                                    matInput
                                    name="notes"
                                    formControlName="body"
                                    placeholder="Notes..."
                                ></textarea>
                            </mat-form-field>
                        </div>
                    </section>
                    <section>
                        <button mat-button confirm (click)="toConfirmPage()">
                            Go to Confirm
                        </button>
                        <button
                            mat-button
                            clear-form
                            class="inverse"
                            (click)="clearForm()"
                        >
                            Clear Form
                        </button>
                    </section>
                </form>
            </div>
        </div>
    `,
    styles: [],
})
export class MeetingFlowFormComponent {
    public get form() {
        return this._state.form;
    }

    public readonly clearForm = () => this._state.clearForm();

    public readonly toConfirmPage = () =>
        this._router.navigate(['/book', 'new-space', 'confirm']);

    constructor(private _state: EventFormService, private _router: Router) {}
}
