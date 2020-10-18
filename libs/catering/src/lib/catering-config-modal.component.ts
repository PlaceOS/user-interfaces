import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CateringRuleset, RULE_TYPES } from './catering.interfaces';

import { DialogEvent, Identity } from '@user-interfaces/common';

export interface CateringConfigModalData {
    /** List of catering rules */
    config: CateringRuleset[];
    /** List of available categories and tags */
    types?: string[];
}

@Component({
    selector: 'catering-config-modal',
    template: `
        <header>
            <h3>Edit Catering Configuration</h3>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <main class="overflow-auto text-center">
            <button mat-button (click)="rulesets.push({ id: new_id, rules: [] })">
                New Ruleset
            </button>
            <div *ngFor="let set of rulesets" class="ruleset">
                <div class="flex">
                    <mat-form-field class="flex-1" appearance="outline">
                        <input
                            matInput
                            name="name"
                            placeholder="Zone ID, Category or Tag"
                            [(ngModel)]="set.name"
                            required
                        />
                        <mat-error>Ruleset name is required</mat-error>
                    </mat-form-field>
                    <button
                        mat-icon-button
                        class="mb-6"
                        (click)="set.rules.push(['', '']); show_rules = set.id"
                    >
                        <app-icon className="material-icons">add</app-icon>
                    </button>
                    <button
                        mat-icon-button
                        class="mb-6"
                        [disabled]="!set.rules.length"
                        (click)="show_rules = show_rules !== set.id ? set.id : ''"
                    >
                        <app-icon className="material-icons">{{
                            show_rules === set.id ? 'expand_less' : 'expand_more'
                        }}</app-icon>
                    </button>
                </div>
                <div
                    name="rules"
                    class="bg-gray-100 rounded overflow-hidden"
                    [style.height]="(show_rules === set.id ? 3.5 * set.rules.length : 0) + 'em'"
                >
                    <div class="flex px-2 h-14 space-x-2" *ngFor="let rule of set.rules">
                        <mat-form-field class="flex-1" appearance="outline">
                            <mat-select
                                name="booking-type"
                                [(ngModel)]="rule[0]"
                                placeholder="Select Rule"
                            >
                                <mat-option *ngFor="let type of rule_types" [value]="type.id">
                                    {{ type.name }}
                                </mat-option>
                            </mat-select>
                        </mat-form-field>
                        <mat-form-field class="flex-1" appearance="outline">
                            <input
                                matInput
                                name="value"
                                placeholder="Rule value"
                                [(ngModel)]="rule[1]"
                                required
                            />
                            <mat-error>Rule value is required</mat-error>
                        </mat-form-field>
                    </div>
                </div>
            </div>
        </main>
        <footer class="flex p-2 items-center justify-center border-none border-t border-solid border-gray-300">
            <button mat-button (click)="saveChanges()">Save Changes</button>
        </footer>
    `,
    styles: [
        `
            [name='rules'] {
                transition: height 200ms;
            }

            main {
                width: 32em;
                padding: 0.5em 1em 1em;
            }

            main button.mat-button {
                margin: 0 auto 0.5em;
                min-width: 12em;
            }
        `,
    ],
})
export class CateringConfigModalComponent {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether changes are being saved */
    public loading: boolean = false;
    /** Whether to show rules for a ruleset */
    public show_rules: string;

    public readonly rulesets: CateringRuleset[];

    public readonly rule_types: readonly Identity[] = RULE_TYPES;

    public get new_id() {
        return 'ruleset-' + Math.floor(Math.random() * 9999_9999);
    }

    constructor(@Inject(MAT_DIALOG_DATA) private _data: CateringConfigModalData) {
        this.rulesets = (_data.config || []).map((set) => {
            set.rules = set.rules.map((i) => [i[0], JSON.stringify(i[1])]) as any;
            return set;
        });
    }

    public saveChanges() {
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
