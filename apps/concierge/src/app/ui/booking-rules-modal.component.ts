import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    BookingRuleset,
    notifyError,
    notifySuccess,
    randomString,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
    take,
} from 'rxjs/operators';

@Component({
    selector: 'app-booking-rules-modal',
    template: `
        <header>
            <h2 class="capitalize" *ngIf="view !== 'form'">
                {{ type }} Booking Rules
            </h2>
            <h2 class="capitalize" *ngIf="view === 'form'">
                {{ selected?.id ? 'Edit' : 'New' }} {{ type }} Booking Ruleset
            </h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="w-[48rem] max-w-[80vw] max-h-[65vh] h-[65vh] overflow-auto"
            *ngIf="!loading; else load_state"
        >
            <ng-container [ngSwitch]="view">
                <booking-rules-form
                    [ruleset]="selected"
                    [save]="activate_save"
                    (rulesetChange)="save($event)"
                    *ngSwitchCase="'form'"
                ></booking-rules-form>
                <custom-table
                    [dataSource]="booking_rules"
                    [columns]="[
                        '_index',
                        'zone',
                        'name',
                        'auto_approve',
                        'hidden',
                        'conditions',
                        'actions'
                    ]"
                    [display_column]="[
                        ' ',
                        'Zone',
                        'Name',
                        'Auto-Approve',
                        'Hide Matches',
                        'Conditions',
                        ' '
                    ]"
                    [column_size]="[
                        '3r',
                        '10r',
                        'flex',
                        '7r',
                        '7r',
                        '7r',
                        '7r'
                    ]"
                    [template]="{
                        auto_approve: auto_approve_template,
                        hidden: hidden_template,
                        conditions: conditions_template,
                        actions: actions_template
                    }"
                    *ngSwitchDefault
                ></custom-table>
                <ng-template #auto_approve_template let-row="row">
                    {{ row.rules.auto_approve ? 'Yes' : 'No' }}
                </ng-template>
                <ng-template #hidden_template let-row="row">
                    {{ row.rules.hidden ? 'Yes' : 'No' }}
                </ng-template>
                <ng-template #conditions_template let-data="data">
                    {{ keyCount(data) }} Conditions
                </ng-template>
                <ng-template #actions_template let-row="row" let-index="index">
                    <div class="w-full flex items-center  justify-end">
                        <button
                            icon
                            matRipple
                            (click)="editRuleset(row)"
                            matTooltip="Edit Ruleset"
                        >
                            <app-icon>edit</app-icon>
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="updateRulesetPriority(row, -1)"
                            matTooltip="Increase Ruleset Priority"
                        >
                            <app-icon>arrow_upward</app-icon>
                        </button>
                        <button
                            icon
                            matRipple
                            (click)="updateRulesetPriority(row, 1)"
                            matTooltip="Decrease Ruleset Priority"
                        >
                            <app-icon>arrow_downward</app-icon>
                        </button>
                    </div>
                </ng-template>
            </ng-container>
        </main>
        <footer
            class="flex items-center justify-end space-x-2 p-2 border-t border-gray-200"
            *ngIf="!loading"
        >
            <button
                btn
                matRipple
                class="inverse w-36"
                *ngIf="view !== 'form'"
                mat-dialog-close
            >
                Close
            </button>
            <button
                btn
                matRipple
                class="inverse w-36"
                *ngIf="view === 'form'"
                (click)="selected = null; view = 'list'"
            >
                Back
            </button>
            <button
                btn
                matRipple
                class="w-36"
                *ngIf="view !== 'form'"
                (click)="editRuleset()"
            >
                Add Ruleset
            </button>
            <button
                btn
                matRipple
                class="w-36"
                *ngIf="view === 'form'"
                (click)="activate_save = !activate_save"
            >
                Save Ruleset
            </button>
        </footer>
        <ng-template #load_state>
            <main class="flex flex-col items-center justify-center h-full">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-2">Saving Booking Rules...</p>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class BookingRulesModalComponent {
    public loading = false;
    public view = 'list';
    public activate_save = false;
    public selected?: BookingRuleset;
    public readonly change = new BehaviorSubject(0);
    public readonly booking_rules: Observable<BookingRuleset[]> = combineLatest(
        [this._org.active_building, this.change]
    ).pipe(
        filter(([_]) => !!_),
        switchMap(([bld]) => {
            return showMetadata(
                bld.id,
                `${this._data.type}_booking_rules`
            ).pipe(catchError(() => of({ details: [] })));
        }),
        map(({ details }) => (details instanceof Array ? details : [])),
        shareReplay(1)
    );

    public readonly type = this._data.type;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { type: string },
        private _org: OrganisationService
    ) {}

    public keyCount(item: Record<string, any>): number {
        return Object.keys(item).length;
    }

    public editRuleset(ruleset?: BookingRuleset) {
        this.view = 'form';
        this.selected = ruleset;
    }

    public async updateRulesetPriority(
        ruleset: BookingRuleset,
        position_change: number
    ) {
        const rules = await this.booking_rules.pipe(take(1)).toPromise();
        // Move ruleset up or down in array based on position change
        const index = rules.findIndex((_) => _.id === ruleset.id);
        if (index >= 0) {
            const new_index = index + position_change;
            if (new_index < 0 || new_index >= rules.length) return;
            rules.splice(index, 1);
            rules.splice(new_index, 0, ruleset);
            await updateMetadata(this._org.building.id, {
                name: `${this.type}_booking_rules`,
                description: `${this.type} Booking Rules`,
                details: rules,
            })
                .toPromise()
                .catch((_) => {
                    notifyError('Error saving booking rules order change.');
                    throw _;
                });
            notifySuccess('Successfully updated booking rules order.');
            this.change.next(Date.now());
        }
    }

    public async save(new_ruleset?: BookingRuleset) {
        console.log('New Ruleset', new_ruleset);
        this.loading = true;
        const rules = await this.booking_rules.pipe(take(1)).toPromise();
        if (new_ruleset) {
            const index = rules.findIndex((_) => _.id === new_ruleset?.id);
            if (index >= 0) {
                rules[index] = new_ruleset;
            } else {
                rules.push({
                    id: `ruleset-${randomString(8)}`,
                    ...new_ruleset,
                });
            }
        }
        await updateMetadata(this._org.building.id, {
            name: `${this.type}_booking_rules`,
            description: `${this.type} Booking Rules`,
            details: rules,
        })
            .toPromise()
            .catch((_) => {
                notifyError('Error saving booking rules.');
                throw _;
            });
        this.loading = false;
        this.view = 'list';
        notifySuccess('Successfully saved booking rules.');
    }
}
