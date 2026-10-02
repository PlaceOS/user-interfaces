import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { notifyError, settingSignal } from '@placeos/common';
import { TranslatePipe } from '@placeos/components';
import { firstValueFrom, from, timeout } from 'rxjs';

@Component({
    selector: 'landing-quick-book',
    template: `
        <h3 class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
            {{ 'APP.WORKPLACE.ONECLICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="mx-4 mb-4 flex w-[calc(100%-2rem)] snap-x space-x-2 overflow-auto"
        >
            @if (features()?.includes('desks')) {
                <button
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    (click)="book('desk')"
                >
                    <div
                        class="bg-base-200 relative flex h-16 min-w-16 items-center justify-center rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/desk-placeholder.svg"
                        />
                        @if (loading() === 'desk') {
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    class="bg-base-100 absolute inset-0 opacity-50"
                                ></div>
                                <mat-spinner diameter="48"></mat-spinner>
                            </div>
                        }
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_DESKS' | translate }}
                    </div>
                </button>
            }
            @if (features().includes('parking')) {
                <button
                    matRipple
                    class="border-base-200 bg-base-100 flex w-64 min-w-64 snap-start items-center space-x-4 rounded-sm border p-2 shadow-sm"
                    (click)="book('parking')"
                >
                    <div
                        class="bg-base-200 flex h-16 min-w-16 items-center justify-center overflow-hidden rounded-sm"
                    >
                        <img
                            class="h-1/2 w-1/2 object-contain object-center"
                            src="assets/icons/car-placeholder.svg"
                        />
                        @if (loading() === 'parking') {
                            <div
                                class="absolute inset-0 flex items-center justify-center"
                            >
                                <div
                                    class="bg-base-100 absolute inset-0 opacity-50"
                                ></div>
                                <mat-spinner diameter="48"></mat-spinner>
                            </div>
                        }
                    </div>
                    <div class="text-xl">
                        {{ 'APP.WORKPLACE.QUICK_LINK_PARKING' | translate }}
                    </div>
                </button>
            }
        </div>
    `,
    styles: [``],
    imports: [TranslatePipe, MatRippleModule, MatProgressSpinnerModule],
})
export class LandingQuickBookComponent {
    private _router = inject(Router);
    private _book_form = inject(BookingFormService);

    public readonly loading = signal('');
    public readonly features = settingSignal<string[]>('features', []);

    public async book(type: 'desk' | 'parking' | 'space') {
        if (this.loading() || type === 'space') return;
        this.loading.set(type);
        try {
            this._book_form.newForm(type);
            this._book_form.setOptions({ type });
            const resources = await firstValueFrom(
                from(this._book_form.listAvailableResources()).pipe(
                    timeout(15_000),
                ),
            );
            if (!resources.length) {
                notifyError(`No ${type} available for the current building`);
                return;
            }
            this._book_form.model.update((m) => ({
                ...m,
                resources: [resources[0]],
                asset_id: resources[0].id,
                asset_name: resources[0].name,
            }));
            try {
                // Confirmation handles cancellation and reports booking errors.
                await this._book_form.confirmPost();
            } catch {
                return;
            }
            await this._router.navigate(['/book', type, 'success']);
        } catch {
            notifyError(
                `Unable to book a ${type}. Please try again or use Bookings.`,
            );
        } finally {
            this._book_form.resetForm();
            this.loading.set('');
        }
    }
}
