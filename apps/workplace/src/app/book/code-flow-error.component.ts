import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { AsyncHandler } from '@placeos/common';

const VALID_TYPES = ['not_started', 'wrong_resource', 'other'];

@Component({
    selector: 'code-flow-success',
    template: `
        <div class="absolute inset-0 z-50 flex flex-col bg-base-100">
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{
                        'APP.WORKPLACE.RESOURCE_CHECKED_IN_FAILED'
                            | translate: { type: asset_type() }
                    }}
                </h2>
                <div class="py-4">
                    <img src="assets/icons/not-found.svg" class="h-64" />
                </div>
                <p class="max-w-[32rem] text-center">
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
                class="mt-4 flex w-full items-center justify-center space-x-2 border-t border-base-200 p-2"
            >
                @if (type() === 'not_started') {
                    <a
                        btn
                        matRipple
                        class="w-full max-w-[32rem]"
                        [routerLink]="['/book', 'code']"
                        [queryParams]="{ asset_id: asset_id }"
                    >
                        {{ 'APP.WORKPLACE.TRY_AGAIN' | translate }}
                    </a>
                }
                @if (type() === 'no_booking') {
                    <a
                        btn
                        matRipple
                        class="w-full max-w-[32rem]"
                        [routerLink]="['/book', 'desk']"
                        [queryParams]="{ asset_id: asset_id }"
                    >
                        {{ 'COMMON.BOOK' | translate }}
                    </a>
                }
                <a
                    btn
                    matRipple
                    class="inverse w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
    standalone: false,
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
