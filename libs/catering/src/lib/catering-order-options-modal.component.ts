import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { unique } from 'libs/common/src/lib/general';
import { DialogEvent, HashMap } from 'libs/common/src/lib/types';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringOption, CateringOptionGroup } from './catering.interfaces';

export interface CateringOrderOptionsModalData {
    code: string;
    options: CateringOption[];
}

@Component({
    selector: 'app-catering-options-modal',
    template: `
        <header>
            <h3>Select options</h3>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="overflow-auto">
            @for (group of groups; track group) {
                <div
                    class="border-b border-base-200 pb-2 pt-1"
                    [attr.group]="group.name"
                >
                    <div class="p-2 font-medium capitalize">
                        {{ group.name }}
                    </div>
                    <div class="flex flex-col pl-6">
                        @if (!group.multiple) {
                            <mat-radio-group
                                class="flex flex-col"
                                aria-label="Select an option"
                                ngModel
                                (ngModelChange)="
                                    updateGroupOption(group, $event)
                                "
                            >
                                <mat-radio-button class="mx-0 my-1" value="">
                                    <span class="p-2 font-medium">None</span>
                                </mat-radio-button>
                                @for (opt of group?.options; track opt) {
                                    <mat-radio-button
                                        class="mx-0 my-1"
                                        [value]="opt.id"
                                    >
                                        <div
                                            class="flex items-center justify-center"
                                        >
                                            <div
                                                class="w-1/2 flex-1 p-2 font-medium"
                                            >
                                                {{ opt.name }}
                                            </div>
                                            @if (opt.unit_price) {
                                                <div class="text-xs opacity-60">
                                                    +{{
                                                        opt.unit_price / 100
                                                            | currency: code
                                                    }}
                                                </div>
                                            }
                                        </div>
                                    </mat-radio-button>
                                }
                            </mat-radio-group>
                        } @else {
                            @for (opt of group?.options; track opt) {
                                <mat-checkbox
                                    [(ngModel)]="option_state[opt.id]"
                                >
                                    <div
                                        class="flex items-center justify-center"
                                    >
                                        <div
                                            class="w-1/2 flex-1 p-2 font-medium"
                                        >
                                            {{ opt.name }}
                                        </div>
                                        @if (opt.unit_price) {
                                            <div class="text-xs opacity-60">
                                                +{{
                                                    opt.unit_price / 100
                                                        | currency: code
                                                }}
                                            </div>
                                        }
                                    </div>
                                </mat-checkbox>
                            }
                        }
                    </div>
                </div>
            }
        </main>
        <footer class="p-2">
            <button btn matRipple class="w-32" (click)="saveOptions()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `,
    styles: [
        `
            main {
                min-height: 24em;
                width: 24rem;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        MatCheckboxModule,
        MatRadioModule,
        MatDialogModule,
        IconComponent,
        FormsModule,
    ],
})
export class CateringOrderOptionsModalComponent {
    private _data = inject<CateringOrderOptionsModalData>(MAT_DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** List of option groups */
    public readonly groups: CateringOptionGroup[];
    /** Mapping of options to their active state */
    public option_state: HashMap<boolean> = {};
    public readonly code = this._data.code;

    constructor() {
        const groups = unique(
            this._data.options.map((i) => i.group || 'Other'),
        );
        const group_list = [];
        for (const group of groups) {
            const options = this._data.options.filter((i) => i.group === group);
            group_list.push({
                name: group,
                multiple: !!options.find((i) => i.multiple),
                options,
            });
        }
        this.groups = group_list;
    }

    public updateGroupOption(group: CateringOptionGroup, id: string) {
        for (const option of group.options) {
            this.option_state[option.id] = option.id === id;
        }
    }

    public saveOptions() {
        const options = this._data.options.filter(
            (opt) => this.option_state[opt.id],
        );
        this.event.emit({ reason: 'done', metadata: { options } });
    }
}
