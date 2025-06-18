import { Component, EventEmitter, Output, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AsyncHandler } from '@placeos/common';

import { DialogEvent, Identity } from 'libs/common/src/lib/types';

export type AttachedResourceRule =
    | ['after_hour' | 'before_hour' | 'is_before' | 'within_hours', number]
    | ['min_length' | 'max_length' | 'visitor_type', string]
    | ['groups', string[]];

export interface AttachedResourceRuleset {
    /** ID of the ruleset. Zone ID, category or tag */
    id: string;
    /** Descriptive name of the ruleset */
    name: string;
    /** List of rules for the id */
    rules: AttachedResourceRule[];
}

export const RULE_TYPES: Identity[] = [
    { id: 'after_hour', name: 'After Hour of Day' },
    { id: 'before_hour', name: 'Before Hour of Day' },
    { id: 'min_length', name: 'Min. Meeting Length' },
    { id: 'max_length', name: 'Max. Meeting Length' },
    { id: 'is_before', name: 'Is Hours before Meeting' },
    { id: 'within_hours', name: 'Within Hours before Meeting' },
    { id: 'visitor_type', name: 'Visitor Type' },
    { id: 'groups', name: 'User in Groups' },
];

export interface AttachedResourceConfigModalData {
    resource_name?: string;
    /** List of catering rules */
    config: AttachedResourceRuleset[];
    /** List of available categories and tags */
    types?: string[];
    require_notes?: boolean;
    saveNotes?: (v: boolean) => void;
}

@Component({
    selector: 'attached-resource-config-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    'RESOURCE.RULESET_HEADER'
                        | translate: { name: resource_name }
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        <main
            class="min-w-[36rem] max-w-lg space-y-4 overflow-auto px-4 pb-4 pt-2 text-center"
        >
            @if (can_save_notes) {
                <settings-toggle
                    [ngModel]="require_notes"
                    (ngModelChange)="saveNotesSetting($event)"
                    [name]="'RESOURCE.REQUIRE_NOTES' | translate"
                ></settings-toggle>
            }
            <button
                btn
                matRipple
                class="w-full"
                (click)="rulesets.push({ id: new_id, rules: [] })"
            >
                {{ 'RESOURCE.RULESET_NEW' | translate }}
            </button>
            @for (set of rulesets; track set; let i = $index) {
                <div class="ruleset mb-2">
                    <div class="mb-2 flex items-center space-x-2">
                        <mat-form-field
                            class="no-subscript flex-1"
                            appearance="outline"
                        >
                            <input
                                matInput
                                name="name"
                                placeholder="Zone ID, Category or Tag"
                                [(ngModel)]="set.name"
                                required
                            />
                            <mat-error>{{
                                'RESOURCE.RULESET_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded"
                            [matMenuTriggerFor]="menu"
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                class="w-52"
                                (click)="
                                    set.rules.push(['', '']);
                                    show_rules = set.id
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">add</icon>
                                    <div>
                                        {{
                                            'RESOURCE.RULESET_ADD_RULE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                (click)="
                                    show_rules =
                                        show_rules !== set.id ? set.id : ''
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        show_rules === set.id
                                            ? 'expand_less'
                                            : 'expand_more'
                                    }}</icon>
                                    <div>
                                        {{
                                            (show_rules === set.id
                                                ? 'RESOURCE.RULESET_HIDE_RULES'
                                                : 'RESOURCE.RULESET_SHOW_RULES'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                (click)="rulesets.splice(i, 1)"
                            >
                                <div
                                    class="flex items-center space-x-2 text-error"
                                >
                                    <icon class="text-2xl">delete</icon>
                                    <div>
                                        {{
                                            'RESOURCE.RULESET_REMOVE_RULES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                    <div
                        name="rules"
                        class="overflow-hidden"
                        [style.height]="
                            (show_rules === set.id ? 4 * set.rules.length : 0) +
                            'em'
                        "
                    >
                        @for (rule of set.rules; track rule; let i = $index) {
                            <div
                                class="relative flex h-16 items-center space-x-2 pl-7"
                            >
                                <div
                                    class="absolute left-3 top-1/2 h-32 w-4 -translate-y-full border-b-2 border-l-2 border-base-200"
                                ></div>
                                <mat-form-field
                                    class="no-subscript flex-1"
                                    appearance="outline"
                                >
                                    <mat-select
                                        name="booking-type"
                                        [(ngModel)]="rule[0]"
                                        placeholder="Select Rule"
                                    >
                                        @for (type of rule_types; track type) {
                                            <mat-option [value]="type.id">
                                                {{ type.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                <mat-form-field
                                    class="no-subscript flex-1"
                                    appearance="outline"
                                >
                                    <input
                                        matInput
                                        name="value"
                                        placeholder="Rule value"
                                        [(ngModel)]="rule[1]"
                                        required
                                    />
                                    <mat-error>{{
                                        'RESOURCE.RULESET_VALUE_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="h-12 w-12 rounded border border-error text-error"
                                    (click)="set.rules.splice(i, 1)"
                                >
                                    <icon>delete</icon>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </main>
        <footer
            class="flex items-center justify-end border-t border-solid border-base-200 px-4 py-2"
        >
            <button btn matRipple class="w-36" (click)="saveChanges()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `,
    styles: [
        `
            [name='rules'] {
                transition: height 200ms;
            }
        `,
    ],
    standalone: false,
})
export class AttachedResourceConfigModalComponent extends AsyncHandler {
    private _data = inject<AttachedResourceConfigModalData>(MAT_DIALOG_DATA);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether changes are being saved */
    public loading = false;
    /** Whether to show rules for a ruleset */
    public show_rules: string;
    public require_notes = this._data.require_notes;
    public readonly resource_name = this._data.resource_name || 'Catering';

    public readonly rulesets: AttachedResourceRuleset[];

    public readonly rule_types: readonly Identity[] = RULE_TYPES;

    public get new_id() {
        return 'ruleset-' + Math.floor(Math.random() * 9999_9999);
    }

    public get can_save_notes() {
        return !!this._data.saveNotes;
    }

    constructor() {
        super();
        const _data = this._data;

        this.rulesets = (_data.config || []).map((set) => {
            set.rules = set.rules.map((i) => [
                i[0],
                JSON.stringify(i[1]),
            ]) as any;
            return set;
        });
    }

    public saveNotesSetting(value: boolean) {
        this.timeout(
            'save-notes',
            () => (this._data.saveNotes ? this._data.saveNotes(value) : ''),
            1000,
        );
    }

    public saveChanges() {
        this.loading = true;
        const rulesets = this.rulesets.map((set) => {
            return {
                ...set,
                rules: set.rules.map((i) => {
                    let value = i[1];
                    try {
                        value = JSON.parse(i[1] as any);
                    } catch (e) {}
                    return [i[0], value];
                }) as any,
            };
        });
        this.event.emit({ reason: 'done', metadata: rulesets });
    }
}
