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
                <div class="flex h-full items-center justify-center">
                    <app-icon class="text-xl">arrow_back</app-icon>
                    <span class="mx-4 ml-2">Back</span>
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
    standalone: false,
})
export class DeskFlowConfirmComponent {}
