import { Component, input } from '@angular/core';
import { ApplicationIcon } from 'libs/common/src/lib/types';

@Component({
    selector: 'action-icon',
    template: `
        <button
            icon
            matRipple
            class="relative"
            [class.success]="state() === 'success'"
            [disabled]="loading() || disabled()"
            title=""
        >
            <icon root [className]="className()" [icon]="icon()">
                {{ content() }}
                <ng-content></ng-content>
            </icon>
            @if (!loading() && state()) {
                <div [class]="'state center ' + state()">
                    <icon>
                        {{ state() === 'success' ? 'done' : 'close' }}
                    </icon>
                </div>
            }
            @if (loading()) {
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
    public readonly icon = input<ApplicationIcon>(undefined);
    /** Icon to display */
    public readonly className = input<string>('material-symbols-rounded');
    /** Icon to display */
    public readonly content = input<string>(undefined);
    /** Whether action is being processed */
    public readonly loading = input<boolean>(undefined);
    /** Whether action is being processed */
    public readonly disabled = input<boolean>(undefined);
    /** State of the action */
    public readonly state = input<'success' | 'error' | ''>('');
}
