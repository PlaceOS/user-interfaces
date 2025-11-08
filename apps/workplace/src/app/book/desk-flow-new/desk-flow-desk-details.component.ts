import { Component, input, model, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { BookingAsset } from '@placeos/bookings';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'desk-flow-desk-details',
    template: `
        @if (desk()) {
            <div class="relative flex h-full flex-col">
                <button
                    icon
                    matRipple
                    class="absolute right-2 top-2 z-20 sm:hidden"
                    (click)="close.emit()"
                >
                    <icon>close</icon>
                </button>
                <div
                    class="relative flex h-48 items-center justify-center overflow-hidden bg-base-200"
                >
                    @if (desk()?.images?.length) {
                        <img
                            auth
                            [source]="desk()?.images[0]"
                            class="h-full w-full object-cover"
                        />
                    } @else {
                        <img
                            class="m-auto h-32"
                            src="assets/icons/desk-placeholder.svg"
                        />
                    }
                    <button
                        icon
                        matRipple
                        class="absolute right-2 top-2 border border-base-300 bg-base-100"
                        [class.text-info]="fav()"
                        (click)="toggleFav.emit()"
                    >
                        <icon
                            [className]="
                                fav()
                                    ? 'material-symbols-rounded'
                                    : 'material-symbols-outlined'
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
                <div class="flex flex-1 flex-col space-y-4 p-4">
                    <div>
                        <h3 class="text-xl font-medium">
                            {{ desk()?.name || desk()?.id || 'Desk' }}
                        </h3>
                        <div class="mt-2 flex items-center space-x-2 text-sm">
                            <icon class="text-info">place</icon>
                            <p>
                                {{
                                    desk()?.zone?.display_name ||
                                        desk()?.zone?.name ||
                                        'Unknown Location'
                                }}
                            </p>
                        </div>
                    </div>

                    @if (desk()?.description) {
                        <div>
                            <h4 class="mb-1 font-medium">
                                {{ 'COMMON.DESCRIPTION' | translate }}
                            </h4>
                            <p class="text-sm opacity-70">
                                {{ desk()?.description }}
                            </p>
                        </div>
                    }

                    @if (desk()?.features?.length) {
                        <div>
                            <h4 class="mb-2 font-medium">
                                {{ 'COMMON.FEATURES' | translate }}
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                @for (
                                    feature of desk()?.features;
                                    track feature
                                ) {
                                    <div
                                        class="rounded-full border border-base-300 bg-base-200 px-3 py-1 text-xs"
                                    >
                                        {{ feature }}
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    <div class="flex-1"></div>

                    <button
                        btn
                        matRipple
                        class="w-full"
                        [class.inverse]="active()"
                        (click)="activeChange.emit(!active())"
                    >
                        <div class="flex items-center justify-center space-x-2">
                            <icon class="text-xl">{{
                                active() ? 'remove' : 'add'
                            }}</icon>
                            <div>
                                {{
                                    (active()
                                        ? 'COMMON.REMOVE_FROM'
                                        : 'COMMON.ADD_TO'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        }
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        AuthenticatedImageDirective,
    ],
})
export class DeskFlowDeskDetailsComponent {
    public readonly desk = input<BookingAsset | null>(null);
    public readonly active = model(false);
    public readonly fav = input(false);
    public readonly hide_map = input(false);

    public readonly activeChange = output<boolean>();
    public readonly toggleFav = output<void>();
    public readonly close = output<void>();
}
