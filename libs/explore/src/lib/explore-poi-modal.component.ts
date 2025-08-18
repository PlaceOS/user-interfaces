import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

export interface PointOfInterest {
    id: string;
    name: string;
    level_id: string;
    location: string | [number, number];
    short_link_id: string;
    qr_code?: string;
    qr_link?: string;
    can_search?: boolean;
    image?: string;
    media_type?: 'audio' | 'video';
    media_url?: string;
    extra_details?: [string, string][];
}

@Component({
    selector: `explore-poi-modal`,
    template: `
        <div
            class="h-screen w-full min-w-[20rem] max-w-[28rem] overflow-auto rounded bg-base-100 sm:h-auto"
        >
            <header>
                <h2>{{ item.name }}</h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main>
                @if (
                    !item.image &&
                    !item.media_url &&
                    !item.extra_details?.length
                ) {
                    <p
                        class="m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg bg-base-200 p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item.image) {
                    <img
                        class="h-48 w-full bg-base-300 object-contain"
                        [src]="item.image"
                        [alt]="item.name"
                    />
                }
                @if (item.media_url) {
                    <div
                        class="flex w-full flex-col items-center justify-center space-y-2 border-t border-base-200 p-4"
                    >
                        <button icon matRipple class="h-12 w-12 bg-base-200">
                            <icon>volume_up</icon>
                        </button>
                        <p class="text-xs font-medium">Read Aloud</p>
                    </div>
                }
                @if (item.extra_details?.length) {
                    <div class="text-sm">
                        @for (details of item.extra_details; track $index) {
                            <div
                                class="flex space-x-4 border-t border-base-200 p-4"
                            >
                                <div class="w-20 min-w-20 text-info">
                                    {{ details?.[0] }}
                                </div>
                                <div>{{ details?.[1] }}</div>
                            </div>
                        }
                    </div>
                }
            </main>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        MatDialogModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ExplorePointOfInterestModalComponent {
    public readonly item: PointOfInterest = inject(MAT_DIALOG_DATA);
}
