import { Component } from '@angular/core';

@Component({
    selector: 'desk-flow-confirm',
    template: `
        <div topbar class="">
            <a
                btn
                matRipple
                class="clear h-[2.75rem] text-white"
                [routerLink]="['/book', 'desks', 'map']"
            >
                <div class="flex items-center justify-center h-full">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="ml-2 mx-4">Back</span>
                </div>
            </a>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
            }

            [topbar] {
                background-color: #00539f;
            }
        `,
    ],
})
export class DeskFlowConfirmComponent {}
