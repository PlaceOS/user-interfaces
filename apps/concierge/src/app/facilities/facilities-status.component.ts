import { Component, signal } from '@angular/core';
import { IconComponent } from '@placeos/components';

@Component({
    selector: 'facilities-status',
    template: `
        <div class="bg-base-100 w-full flex-1 rounded-lg p-6 shadow-xs">
            <h3 class="mt-0 mb-4">People Count</h3>
            <div
                class="border-base-200 mb-2 flex w-full items-center rounded-lg border"
            >
                <div name="status" class="rounded-full">
                    <icon>account_circle</icon>
                </div>
                <div class="text-bold flex-1 text-xs">
                    {{ 'Admin Services' }}
                </div>
                <div class="text-bold p-4">{{ '24' }}</div>
            </div>
            <div class="text-bold mr-4 text-right">Total: {{ total() }}</div>
        </div>
        <div class="bg-base-100 w-full rounded-sm p-6 shadow-xs">
            <h3 class="mt-0 mb-2">Mood</h3>
            <div
                name="mood"
                class="border-base-200 flex w-full items-center overflow-hidden rounded-lg border"
            >
                <icon
                    class="bg-light px-1 text-2xl"
                    [icon]="{
                        class: 'material-symbols-rounded',
                        content: 'sentiment_very_satisfied',
                    }"
                ></icon>
                <div class="text-bold px-4 text-sm">4/5 Satisfied</div>
            </div>
            <h4>Feedback:</h4>
            <p>{{ feedback() }}</p>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 20em;
                padding: 2em;
            }

            .bg-light {
                background-color: rgba(0, 0, 0, 0.05);
            }

            [name='mood'] icon {
            }

            [name='status'] {
                margin: 0.5em;
                border: 4px solid #21a453;
                border-radius: 100%;
            }
        `,
    ],
    imports: [IconComponent],
})
export class FacilitiesStatusComponent {
    public readonly feedback = signal('');
    public readonly total = signal(0);
}
