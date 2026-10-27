import { NgComponentOutlet } from '@angular/common';
import { Component, inject, Injector, Type } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    CustomTooltipData,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

/** ID of the dialog title. Pass it as `ariaLabelledBy` to name the dialog. */
export const ACTION_MODAL_TITLE_ID = 'action-modal-title';

export interface ActionModalData {
    /** Name of the action. The popup hides its own title on phones. */
    title: string;
    /** Popup that the topbar shows in a tooltip on larger screens */
    component: Type<unknown>;
}

/**
 * Fullscreen dialog for a topbar action on phones.
 * Shows the same popup component as the desktop tooltip.
 */
@Component({
    selector: 'action-modal',
    template: `
        <div
            class="bg-base-100 text-base-content flex h-full w-full flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
        >
            <div
                class="border-base-200 flex items-center gap-2 border-b py-2 pr-2 pl-4"
            >
                <h2
                    class="min-w-0 flex-1 truncate text-lg font-medium"
                    [id]="title_id"
                >
                    {{ title }}
                </h2>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon aria-hidden="true">close</icon>
                </button>
            </div>
            <div
                action-content
                class="flex flex-1 flex-col overflow-auto *:flex *:flex-1 *:flex-col"
            >
                <ng-container
                    *ngComponentOutlet="component; injector: injector"
                />
            </div>
        </div>
    `,
    imports: [
        NgComponentOutlet,
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class ActionModalComponent {
    private _data = inject<ActionModalData>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<ActionModalComponent>>(MatDialogRef);

    public readonly title_id = ACTION_MODAL_TITLE_ID;
    public readonly title = this._data.title;
    public readonly component = this._data.component;
    /** Lets the popup close itself, as it does in the tooltip */
    public readonly injector = Injector.create({
        providers: [
            {
                provide: CustomTooltipData,
                useValue: {
                    data: undefined,
                    close: () => this._dialog_ref.close(),
                },
            },
        ],
        parent: inject(Injector),
    });
}
