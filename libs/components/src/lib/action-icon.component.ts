import { Component, Input } from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';

@Component({
    selector: 'action-icon',
    template: `
        <button
            icon
            matRipple
            class="relative"
            [class.success]="state === 'success'"
            [disabled]="loading || disabled"
            title=""
        >
            <app-icon root [className]="className" [icon]="icon">
                {{ content }}
                <ng-content></ng-content>
            </app-icon>
            <div [class]="'state center ' + state" *ngIf="!loading && state">
                <app-icon>
                    {{ state === 'success' ? 'done' : 'close' }}
                </app-icon>
            </div>
            <div class="loader center" *ngIf="loading">
                <mat-spinner [diameter]="16"></mat-spinner>
            </div>
        </button>
    `,
    styles: [
        `
            .action-icon.fade > app-icon {
                opacity: 0.35;
            }

            .success {
                pointer-events: none;
            }

            .success app-icon[root] {
                opacity: 0.2;
            }

            .state.success {
                color: #388e3c;
            }

            .state.error {
                color: #e53935;
            }
        `,
    ],
})
export class ActionIconComponent {
    /** Icon to display */
    @Input() public icon: ApplicationIcon;
    /** Icon to display */
    @Input() public className: string = 'material-icons';
    /** Icon to display */
    @Input() public content: string;
    /** Whether action is being processed */
    @Input() public loading: boolean;
    /** Whether action is being processed */
    @Input() public disabled: boolean;
    /** State of the action */
    @Input() public state: 'success' | 'error' | '' = '';
}
