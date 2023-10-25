import { Component, EventEmitter, Inject, Output } from '@angular/core';
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
        <header>
            <h3>Edit {{ resource_name }} Configuration</h3>
            <button icon mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="overflow-auto text-center max-w-lg min-w-[32rem] px-4 pt-2 pb-4 space-y-2"
        >
            <div
                class="text-left p-2 rounded bg-base-200"
                *ngIf="can_save_notes"
            >
                <mat-checkbox
                    [ngModel]="require_notes"
                    (ngModelChange)="saveNotesSetting($event)"
                >
                    Require notes for orders
                </mat-checkbox>
            </div>
            <button
                btn
                matRipple
                class="w-full"
                (click)="rulesets.push({ id: new_id, rules: [] })"
            >
                New Ruleset
            </button>
            <div
                *ngFor="let set of rulesets; let i = index"
                class="ruleset mb-2"
            >
                <div class="flex items-center mb-2 space-x-2">
                    <mat-form-field
                        class="flex-1 no-subscript"
                        appearance="outline"
                    >
                        <input
                            matInput
                            name="name"
                            placeholder="Zone ID, Category or Tag"
                            [(ngModel)]="set.name"
                            required
                        />
                        <mat-error>Ruleset name is required</mat-error>
                    </mat-form-field>
                    <button icon matRipple [matMenuTriggerFor]="menu">
                        <app-icon>more_vert</app-icon>
                    </button>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            (click)="
                                set.rules.push(['', '']); show_rules = set.id
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">add</app-icon>
                                <div>Add Rule</div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="
                                show_rules = show_rules !== set.id ? set.id : ''
                            "
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon class="text-2xl">{{
                                    show_rules === set.id
                                        ? 'expand_less'
                                        : 'expand_more'
                                }}</app-icon>
                                <div>
                                    {{
                                        show_rules === set.id ? 'Hide' : 'Show'
                                    }}
                                    Rules
                                </div>
                            </div>
                        </button>
                        <button mat-menu-item (click)="rulesets.splice(i, 1)">
                            <div class="flex items-center space-x-2 text-error">
                                <app-icon class="text-2xl">delete</app-icon>
                                <div>Remove Ruleset</div>
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
                    <div
                        class="flex items-center pl-7 h-16 space-x-2 relative"
                        *ngFor="let rule of set.rules; let i = index"
                    >
                        <div
                            class="absolute left-3 top-1/2 -translate-y-full w-4 h-32 border-b-2 border-l-2 border-base-200"
                        ></div>
                        <mat-form-field
                            class="flex-1 no-subscript"
                            appearance="outline"
                        >
                            <mat-select
                                name="booking-type"
                                [(ngModel)]="rule[0]"
                                placeholder="Select Rule"
                            >
                                <mat-option
                                    *ngFor="let type of rule_types"
                                    [value]="type.id"
                                >
                                    {{ type.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field
                            class="flex-1 no-subscript"
                            appearance="outline"
                        >
                            <input
                                matInput
                                name="value"
                                placeholder="Rule value"
                                [(ngModel)]="rule[1]"
                                required
                            />
                            <mat-error>Rule value is required</mat-error>
                        </mat-form-field>
                        <button icon matRipple (click)="set.rules.splice(i, 1)">
                            <app-icon>delete</app-icon>
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <footer
            class="flex py-2 px-4 items-center justify-end border-t border-solid border-base-200"
        >
            <button btn matRipple class="w-36" (click)="saveChanges()">
                Save Changes
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
})
export class AttachedResourceConfigModalComponent extends AsyncHandler {
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

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: AttachedResourceConfigModalData
    ) {
        super();
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
            1000
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
