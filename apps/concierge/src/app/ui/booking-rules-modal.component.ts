import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BookingRuleset,
    OrganisationService,
    i18n,
    nextValueFrom,
    notifyError,
    notifySuccess,
    randomString,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    LevelPipe,
    SimpleTableComponent,
    TranslatePipe,
    openConfirmModal,
} from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BookingRulesFormComponent } from 'libs/form-fields/src/lib/booking-rules-form.component';
import { BehaviorSubject, Observable, combineLatest, of } from 'rxjs';
import {
    catchError,
    filter,
    map,
    shareReplay,
    switchMap,
} from 'rxjs/operators';

@Component({
    selector: 'app-booking-rules-modal',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (view !== 'form'
                    ? 'APP.CONCIERGE.BOOKING_RULES_HEADER'
                    : selected?.id
                      ? 'APP.CONCIERGE.BOOKING_RULES_EDIT'
                      : 'APP.CONCIERGE.BOOKING_RULES_NEW'
                ) | translate: { type: type }
            "
            [loading]="
                loading
                    ? ('APP.CONCIERGE.BOOKING_RULESET_SAVING' | translate)
                    : ''
            "
            [hide_confirm]="true"
            [full_width]="view !== 'form'"
        >
            <div>
                <div
                    class="-mx-2 mb-2 w-[calc(100%+1rem)] rounded-sm bg-info p-4 text-center text-xs text-info-content"
                >
                    {{ 'APP.CONCIERGE.BOOKING_RULES_NOTE' | translate }}
                </div>
                <ng-container [ngSwitch]="view">
                    <booking-rules-form
                        [ruleset]="selected"
                        [save]="activate_save"
                        (rulesetChange)="save($event)"
                        *ngSwitchCase="'form'"
                    />
                    <div class="-mx-2 w-[calc(100%+1rem)] overflow-auto">
                        <simple-table
                            class="block w-full min-w-3xl text-sm"
                            *ngSwitchCase="'list'"
                            [data]="booking_rules"
                            [columns]="[
                                {
                                    key: '_index',
                                    name: ' ',
                                    size: '3.5rem',
                                    content: index_template,
                                },
                                {
                                    key: 'zone',
                                    name: 'RESOURCE.ZONE' | translate,
                                    content: zone_template,
                                },
                                { key: 'name', name: 'FORM.NAME' | translate },
                                {
                                    key: 'auto_approve',
                                    name:
                                        'APP.CONCIERGE.BOOKING_RULES_AUTO_APPROVE'
                                        | translate,
                                    content: bool_template,
                                    size: '5.5rem',
                                },
                                {
                                    key: 'hidden',
                                    name:
                                        'APP.CONCIERGE.BOOKING_RULES_HIDE_MATCHES'
                                        | translate,
                                    content: bool_template,
                                    size: '5.5rem',
                                },
                                {
                                    key: 'conditions',
                                    name:
                                        'APP.CONCIERGE.BOOKING_RULES_CONDITIONS'
                                        | translate,
                                    content: conditions_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    size: '5.5rem',
                                    content: actions_template,
                                },
                            ]"
                        ></simple-table>
                    </div>
                    <ng-template #index_template let-index="index">
                        <div class="m-auto p-4 font-medium">
                            {{ (index || 0) + 1 }}
                        </div>
                    </ng-template>
                    <ng-template #conditions_template let-data="data">
                        <div class="p-4">
                            {{
                                'APP.CONCIERGE.BOOKING_RULES_CONDITIONS_COUNT'
                                    | translate: { count: keyCount(data) }
                            }}
                        </div>
                    </ng-template>
                    <ng-template #zone_template let-data="data">
                        <div class="px-4 py-2" *ngIf="(data | level)?.id">
                            <div>
                                {{ (data | level)?.display_name || data }}
                            </div>
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        </div>
                        <div
                            class="px-4 py-2 font-mono italic"
                            *ngIf="!(data | level)?.id"
                        >
                            {{
                                data === '*'
                                    ? ('RESOURCE.ZONE_ALL' | translate)
                                    : data
                            }}
                        </div>
                    </ng-template>
                    <ng-template #bool_template let-key="key" let-row="row">
                        <div
                            [class.bg-error]="!row.rules[key]"
                            [class.bg-success]="row.rules[key]"
                            class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                        >
                            <icon>{{ row.rules[key] ? 'done' : 'close' }}</icon>
                        </div>
                    </ng-template>
                    <ng-template #actions_template let-row="row">
                        <div
                            class="mx-auto flex w-full flex-col items-center justify-center gap-1 p-1"
                        >
                            <div class="flex items-center gap-1">
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="editRuleset(row)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_EDIT'
                                            | translate
                                    "
                                >
                                    <icon>edit</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="updateRulesetPriority(row, -1)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_PRIORITY_UP'
                                            | translate
                                    "
                                >
                                    <icon>arrow_upward</icon>
                                </button>
                            </div>
                            <div class="flex items-center gap-1">
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="removeRuleset(row)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_REMOVE'
                                            | translate
                                    "
                                >
                                    <icon class="text-error">delete</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    class="rounded-sm"
                                    (click)="updateRulesetPriority(row, 1)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.BOOKING_RULESET_PRIORITY_DOWN'
                                            | translate
                                    "
                                >
                                    <icon>arrow_downward</icon>
                                </button>
                            </div>
                        </div>
                    </ng-template>
                </ng-container>
                <footer
                    class="fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-end space-x-4 rounded-sm border-none bg-base-200 px-4 py-2"
                    [class.max-w-156]="view === 'form'"
                    *ngIf="!loading"
                >
                    <button
                        btn
                        matRipple
                        class="inverse w-36"
                        *ngIf="view === 'form'"
                        (click)="selected = null; view = 'list'"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-36"
                        *ngIf="view !== 'form'"
                        (click)="editRuleset()"
                    >
                        {{ 'APP.CONCIERGE.BOOKING_RULESET_ADD' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="w-36"
                        *ngIf="view === 'form'"
                        (click)="activate_save = !activate_save"
                    >
                        {{ 'APP.CONCIERGE.BOOKING_RULESET_SAVE' | translate }}
                    </button>
                </footer>
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        CommonModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        LevelPipe,
        SimpleTableComponent,
        BookingRulesFormComponent,
        FullscreenModalShellComponent,
    ],
})
export class BookingRulesModalComponent {
    private _data = inject<{
        type: string;
    }>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public loading = false;
    public view = 'list';
    public activate_save = false;
    public selected?: BookingRuleset;
    public readonly change = new BehaviorSubject(0);
    public readonly booking_rules: Observable<BookingRuleset[]> = combineLatest(
        [this._org.active_building, this.change],
    ).pipe(
        filter(([_]) => !!_),
        switchMap(([bld]) => {
            return showMetadata(
                bld.id,
                `${this._data.type}_booking_rules`,
            ).pipe(catchError(() => of({ details: [] })));
        }),
        map(({ details }) => (details instanceof Array ? details : [])),
        shareReplay(1),
    );

    public readonly type = this._data.type;

    public keyCount(item: Record<string, any>): number {
        return Object.keys(item).length;
    }

    public editRuleset(ruleset?: BookingRuleset) {
        this.view = 'form';
        this.selected = ruleset;
    }

    public async removeRuleset(ruleset: BookingRuleset) {
        const result = await openConfirmModal(
            {
                title: 'Remove Booking Ruleset',
                content: `Are you sure you want to remove the booking ruleset for ${ruleset.name}?`,
                icon: { content: 'delete' },
                confirm_text: 'Remove Ruleset',
                cancel_text: 'Cancel',
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading('Removing Ruleset...');
        const rules = await nextValueFrom(this.booking_rules);
        const index = rules.findIndex((_) => _.id === ruleset.id);
        if (index >= 0) {
            rules.splice(index, 1);
            await updateMetadata(this._org.building.id, {
                name: `${this.type}_booking_rules`,
                description: `${this.type} Booking Rules`,
                details: rules,
            })
                .toPromise()
                .catch((_) => {
                    notifyError('Error removing booking rules.');
                    throw _;
                });
            this.change.next(Date.now());
        }
        notifySuccess('Successfully removed booking rules.');
        result.close();
    }

    public async updateRulesetPriority(
        ruleset: BookingRuleset,
        position_change: number,
    ) {
        const rules = await nextValueFrom(this.booking_rules);
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
        this.loading = true;
        const rules = await nextValueFrom(this.booking_rules);
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
                notifyError(
                    i18n('APP.CONCIERGE.BOOKING_RULESET_ERROR', { error: _ }),
                );
                throw _;
            });
        this.loading = false;
        this.view = 'list';
        notifySuccess(i18n('APP.CONCIERGE.BOOKING_RULESET_SUCCESS'));
    }
}
