import { Component } from '@angular/core';

@Component({
    selector: 'facilities-status',
    template: `
        <div class="rounded-lg flex-1 w-full shadow-sm p-6">
            <h3 class="mt-0 mb-4">People Count</h3>
            <div class="w-full flex items-center border mb-2 rounded-lg">
                <div name="status" class="rounded-full">
                    <app-icon [icon]="{ class: 'material-icons', content: 'account_circle' }"></app-icon>
                </div>
                <div class="flex-1 text-bold text-xs">{{ 'Admin Services' }}</div>
                <div class="text-bold p-4">{{ '24' }}</div>
            </div>
            <div class="text-right text-bold mr-4">Total: {{ total || 0 }}</div>
        </div>
        <div class="rounded w-full shadow-sm p-6">
            <h3 class="mt-0 mb-2">Mood</h3>
            <div name="mood" class="flex items-center w-full border rounded-lg overflow-hidden">
                <app-icon class="bg-light text-2xl px-1" [icon]="{ class: 'material-icons', content: 'sentiment_very_satisfied' }"></app-icon>
                <div class="px-4 text-sm text-bold">4/5 Satisfied</div>
            </div>
            <h4>Feedback:</h4>
            <p>{{ feedback }}</p>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: #f8f8f8;
                width: 20em;
                padding: 2em;
            }

            .border {
                border: 1px solid rgba(0,0,0, 0.1);
            }

            :host > div {
                background-color: #fff;
            }

            .bg-light {
                background-color: rgba(0,0,0,0.05);
            }

            [name="mood"] app-icon {

            }

            [name="status"] {
                margin: .5em;
                border: 4px solid #21a453;
                border-radius: 100%;
            }
        `
    ],
})
export class FacilitiesStatusComponent {
    public feedback: string;
    public total: number;

}
