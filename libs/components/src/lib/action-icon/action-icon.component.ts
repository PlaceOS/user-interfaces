import { Component, Input } from '@angular/core';
import { ApplicationIcon } from '@user-interfaces/common';

@Component({
    selector: 'action-icon',
    template: `
        <div class="action-icon" [class.fade]="state || loading">
            <app-icon [icon]="icon"></app-icon>
            <div class="'state center ' + state" *ngIf="!loading && state">
                <app-icon
                    [icon]="{
                        class: 'material-icons',
                        content: state === 'success' ? 'done' : 'close'
                    }"
                ></app-icon>
            </div>
            <div class="loader center" *ngIf="loading">
                <mat-spinner [diameter]="16"></mat-spinner>
            </div>
        </div>
    `,
    styles: [
        `
            .action-icon {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 2em;
                width: 2em;
            }

            .action-icon.fade > app-icon {
                opacity: 0.35;
            }

            [center] {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `,
    ],
})
export class ActionIconComponent {
    /** Icon to display */
    @Input() public icon: ApplicationIcon;
    /** Whether action is being processed */
    @Input() public loading: boolean;
    /** State of the action */
    @Input() public state: 'success' | 'error' | '' = '';
}
