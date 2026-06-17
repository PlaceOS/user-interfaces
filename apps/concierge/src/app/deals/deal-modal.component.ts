import { CommonModule } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import {
    AuthenticatedImageDirective,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

@Component({
    selector: 'app-deal-modal',
    template: `
        <div class="bg-base-100 relative w-lg max-w-[80vw]">
            <div
                class="bg-base-300 relative h-48 w-lg max-w-full overflow-hidden rounded-b-lg"
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
                        class="bg-info text-info-content absolute bottom-2 left-2 max-w-full truncate rounded-sm px-2 py-1 text-xs shadow-sm"
                    >
                        {{ deal.details }}
                    </div>
                }
            </div>
            <header class="flex space-x-2 p-2">
                <h3 class="w-auto px-2 text-xl font-medium">{{ deal.name }}</h3>
                <div class="flex-1"></div>
                <a
                    btn
                    matRipple
                    class="space-x-2"
                    [routerLink]="['/deals-n-offers', 'manage', deal.id]"
                    (click)="close()"
                >
                    <icon class="text-2xl">edit</icon>
                    <div class="pr-2">{{ 'COMMON.EDIT' | translate }}</div>
                </a>
                <button
                    btn
                    matRipple
                    class="inverse error space-x-2"
                    (click)="remove.emit()"
                >
                    <icon class="text-error text-2xl">delete</icon>
                    <div class="pr-2">{{ 'COMMON.REMOVE' | translate }}</div>
                </button>
            </header>
            <div class="max-h-[60vh] space-y-2 overflow-auto p-4">
                <h4 class="font-medium">
                    {{ 'COMMON.DESCRIPTION' | translate }}
                </h4>
                <p class="max-w-[] pb-4 text-sm">{{ deal.description }}</p>
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
                class="bg-base-100 absolute top-2 right-2"
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
export class DealModalComponent {
    public readonly deal = inject(MAT_DIALOG_DATA);
    private _dialog_ref = inject(MatDialogRef<DealModalComponent>);

    public readonly remove = output();

    public close() {
        this._dialog_ref.close();
    }
}
