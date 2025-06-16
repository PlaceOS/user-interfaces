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
            <icon root [className]="className" [icon]="icon">
                {{ content }}
                <ng-content></ng-content>
            </icon>
            @if (!loading && state) {
                <div [class]="'state center ' + state">
                    <icon>
                        {{ state === 'success' ? 'done' : 'close' }}
                    </icon>
                </div>
            }
            @if (loading) {
                <div class="loader center">
                    <mat-spinner [diameter]="16"></mat-spinner>
                </div>
            }
        </button>
    `,
    styles: [
        `
            .action-icon.fade > icon {
                opacity: 0.35;
            }

            .success {
                pointer-events: none;
            }

            .success icon[root] {
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
    standalone: false,
})
export class ActionIconComponent {
    /** Icon to display */
    @Input() public icon: ApplicationIcon;
    /** Icon to display */
    @Input() public className: string = 'material-symbols-rounded';
    /** Icon to display */
    @Input() public content: string;
    /** Whether action is being processed */
    @Input() public loading: boolean;
    /** Whether action is being processed */
    @Input() public disabled: boolean;
    /** State of the action */
    @Input() public state: 'success' | 'error' | '' = '';
}
