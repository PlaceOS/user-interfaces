import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { isPublicMode } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { PageHeadingDirective } from '../components/page-heading.directive';
import { CheckinStateService } from './checkin-state.service';

@Component({
    selector: 'checkin-error',
    template: `
        <div
            class="bg-base-100 relative m-4 flex flex-col items-center space-y-4 overflow-hidden rounded-sm px-16 py-4 text-center shadow-sm"
        >
            <h1 pageHeading class="pb-2 text-2xl">
                {{ 'APP.VISITOR_KIOSK.SEE_RECEPTION' | translate }}
            </h1>
            @if (error(); as error_message) {
                <p>{{ error_message }}</p>
            }
            <p>{{ 'APP.VISITOR_KIOSK.RECEPTION_ASSIST' | translate }}</p>
            @if (!is_public_mode()) {
                <div class="flex items-center gap-2">
                    <a
                        btn
                        matRipple
                        class="inverse w-32"
                        [routerLink]="['..', 'scan']"
                    >
                        {{ 'COMMON.RETRY' | translate }}
                    </a>
                    <a btn matRipple class="w-32" [routerLink]="['/welcome']">
                        {{ 'APP.VISITOR_KIOSK.CONFIRM' | translate }}
                    </a>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host > div {
                width: 28rem;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    imports: [
        PageHeadingDirective,
        TranslatePipe,
        MatRippleModule,
        RouterModule,
    ],
})
export class CheckinErrorComponent {
    private _checkin = inject(CheckinStateService);

    public readonly error = this._checkin.error;
    public readonly is_public_mode = isPublicMode;
}
