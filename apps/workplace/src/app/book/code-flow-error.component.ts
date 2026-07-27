import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';

@Component({
    selector: 'code-flow-error',
    template: `
        <div class="bg-base-100 z-50 flex h-full w-full flex-col">
            <main
                class="flex min-h-0 flex-1 flex-col items-center justify-center space-y-2 overflow-y-auto p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{
                        'APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED'
                            | translate: { type: asset_type() }
                    }}
                </h2>
                <div class="py-4">
                    <img src="assets/icons/not-found.svg" class="h-32 sm:h-64" />
                </div>
                <p class="max-w-lg text-center">
                    @switch (type()) {
                        @case ('not_started') {
                            Booking has not started yet. Please try again once
                            the booking has commenced.
                        }
                        @case ('wrong_resource') {
                            You have booking with a different resource.
                        }
                        @default {
                            You do not have a booking. Would you like to book
                            this desk?
                        }
                    }
                </p>
            </main>
            <footer
                class="border-base-200 mt-4 flex w-full shrink-0 items-center justify-center space-x-2 border-t p-2"
            >
                @if (type() === 'not_started') {
                    <a
                        btn
                        matRipple
                        class="w-full max-w-lg"
                        [routerLink]="['/book', 'code']"
                        [queryParams]="{ asset_id: asset_id() }"
                    >
                        {{ 'APP.WORKPLACE.TRY_AGAIN' | translate }}
                    </a>
                }
                @if (type() !== 'not_started') {
                    <a
                        btn
                        matRipple
                        class="w-full max-w-lg"
                        [routerLink]="['/book', 'desk']"
                        [queryParams]="{ asset_id: asset_id() }"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </a>
                }
                <a
                    btn
                    matRipple
                    class="inverse w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 50%;
                flex: 1;
            }
        `,
    ],
    imports: [MatRippleModule, TranslatePipe, RouterModule],
})
export class CodeFlowErrorComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _state = inject(BookingFormService);

    public readonly type = signal('other');
    public readonly asset_type = signal('resource');
    public readonly asset_id = signal('');

    public asset = null;

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe((params) => {
                this.type.set((params.get('type') as any) || 'other');
                this.asset_type.set(
                    (params.get('asset_type') as any) || 'resource',
                );
                this.asset_id.set(params.get('asset_id') as any);
            }),
        );
    }
}
