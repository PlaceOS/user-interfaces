import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

@Component({
    selector: 'deal-details-modal',
    template: `
        <div class="relative w-[32rem] max-w-[calc(100vw-2rem)] bg-base-100">
            <div
                class="relative h-48 w-[32rem] max-w-full overflow-hidden rounded-b-lg bg-base-300"
            >
                @if (deal.image) {
                    <img
                        class="h-full w-full object-cover"
                        auth
                        [source]="deal.image"
                        alt="Deal Image"
                    />
                }
                @if (deal.details) {
                    <div
                        class="absolute bottom-2 left-2 max-w-full truncate rounded bg-info px-2 py-1 text-xs text-info-content shadow"
                    >
                        {{ deal.details }}
                    </div>
                }
            </div>
            <header class="flex space-x-2 p-2">
                <h3 class="w-auto px-2 text-xl font-medium">{{ deal.name }}</h3>
                <div class="flex-1"></div>
                <!-- <button
                    btn
                    matRipple
                    class="inverse error space-x-2"
                    (click)="remove.emit()"
                >
                    <icon class="text-2xl text-error">delete</icon>
                    <div class="pr-2">{{ 'COMMON.REMOVE' | translate }}</div>
                </button> -->
            </header>
            <div class="max-h-[60vh] space-y-2 overflow-auto p-4">
                <h4 class="font-medium">
                    {{ 'COMMON.DESCRIPTION' | translate }}
                </h4>
                <p class="pb-4 text-sm">{{ deal.description }}</p>
                <h4 class="font-medium">Validity Period</h4>
                <p class="pb-4 text-sm">
                    {{ deal.expires_at | date: 'mediumDate' }}
                </p>
                <h4 class="font-medium">{{ 'COMMON.TERMS' | translate }}</h4>
                <p class="pb-4 text-sm">{{ deal.terms }}</p>
            </div>
            <button
                icon
                matRipple
                mat-dialog-close
                class="absolute right-2 top-2 bg-base-100"
            >
                <icon>close</icon>
            </button>
        </div>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatDialogModule,
        AuthenticatedImageDirective,
        TranslatePipe,
        IconComponent,
        RouterModule,
        MatRippleModule,
    ],
})
export class DealDetailsModalComponent {
    public readonly deal = inject(MAT_DIALOG_DATA);
    private _dialog_ref = inject(MatDialogRef<DealDetailsModalComponent>);

    public readonly remove = output();

    public close() {
        this._dialog_ref.close();
    }
}
