import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BookingFormService } from '@placeos/bookings';
import { nextValueFrom, notifyError, SettingsService } from '@placeos/common';

@Component({
    selector: 'landing-quick-book',
    template: `
        <h3 class="mb-2 px-4 font-medium sm:mb-4 sm:text-lg">
            {{ 'APP.WORKPLACE.ONECLICK_LINKS_HEADER' | translate }}
        </h3>
        <div
            class="mx-4 mb-4 flex w-[calc(100%-2rem)] snap-x space-x-2 overflow-auto"
        >
            @if (features.includes('desks')) {
                <button
                    matRipple
                    class="flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    (click)="book('desk')"
                >
                    <div
                        class="relative flex h-16 min-w-[4rem] items-center justify-center rounded bg-base-200"
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
                                    class="absolute inset-0 bg-base-100 opacity-50"
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
            @if (features.includes('parking')) {
                <button
                    matRipple
                    class="flex w-64 min-w-64 snap-start items-center space-x-4 rounded border border-base-200 bg-base-100 p-2 shadow"
                    (click)="book('parking')"
                >
                    <div
                        class="flex h-16 min-w-[4rem] items-center justify-center overflow-hidden rounded bg-base-200"
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
                                    class="absolute inset-0 bg-base-100 opacity-50"
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
    standalone: false,
})
export class LandingQuickBookComponent {
    private _settings = inject(SettingsService);
    private _router = inject(Router);
    private _book_form = inject(BookingFormService);

    public readonly loading = signal('');

    public get features() {
        return this._settings.get('app.features') || [];
    }

    public async book(type: string) {
        if (this.loading()) return;
        if (type === 'space') return;
        this.loading.set(type);
        this._book_form.newForm(type as any);
        this._book_form.setOptions({ type: type as any });
        const resources = await nextValueFrom(
            this._book_form.available_resources,
        );
        if (!resources.length) {
            notifyError(`No ${type} available for the current building`);
            this.loading.set('');
            return;
        }
        this._book_form.form.patchValue({
            resources: [resources[0]],
            asset_id: resources[0].id,
            asset_name: resources[0].name,
        });
        console.log('Resource:', resources[0], type);
        this.loading.set('');
        try {
            await this._book_form.confirmPost();
            this._router.navigate(['/book', type, 'success']);
        } catch {}
        this._book_form.form.reset();
    }
}
