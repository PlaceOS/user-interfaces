import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';

import { Component, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    BookingRuleConditions,
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
    TranslatePipe,
    openConfirmModal,
} from '@placeos/components';
import { showMetadata, updateMetadata } from '@placeos/ts-client';
import { BookingRulesFormComponent } from 'libs/form-fields/src/lib/booking-rules-form.component';
import { combineLatest, from, of } from 'rxjs';
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
                (view() !== 'form'
                    ? 'APP.CONCIERGE.BOOKING_RULES_HEADER'
                    : selected()?.id
                      ? 'APP.CONCIERGE.BOOKING_RULES_EDIT'
                      : 'APP.CONCIERGE.BOOKING_RULES_NEW'
                ) | translate: { type: type }
            "
            [loading]="
                loading()
                    ? ('APP.CONCIERGE.BOOKING_RULESET_SAVING' | translate)
                    : ''
            "
            [hide_close]="view() === 'form'"
            [hide_confirm]="true"
            [full_width]="view() !== 'form'"
        >
            <div>
                <div
                    class="bg-info text-info-content -mx-2 mb-2 w-[calc(100%+1rem)] rounded-sm p-4 text-center text-xs"
                >
                    {{ 'APP.CONCIERGE.BOOKING_RULES_NOTE' | translate }}
                </div>
                @switch (view()) {
                    @case ('form') {
                        <booking-rules-form
                            [ruleset]="selected()"
                            [save]="activate_save()"
                            (rulesetChange)="save($event)"
                        />
                    }
                    @case ('list') {
                        <div class="-mx-2 w-[calc(100%+1rem)] overflow-auto">
                            <div
                                class="border-base-300 grid min-w-3xl border text-sm"
                                [style.grid-template-columns]="TABLE_COLUMNS"
                            >
                                <div
                                    class="bg-base-300 border-base-200 border-b px-4 py-2 font-medium"
                                ></div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{ 'RESOURCE.ZONE' | translate }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{ 'FORM.NAME' | translate }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{
                                        'APP.CONCIERGE.BOOKING_RULES_AUTO_APPROVE'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{
                                        'APP.CONCIERGE.BOOKING_RULES_HIDE_MATCHES'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                >
                                    {{
                                        'APP.CONCIERGE.BOOKING_RULES_CONDITIONS'
                                            | translate
                                    }}
                                </div>
                                <div
                                    class="bg-base-300 border-base-200 flex h-full items-center border-b border-l px-4 py-2 font-medium"
                                ></div>
                            </div>
                            <div
                                cdkDropList
                                (cdkDropListDropped)="drop($event)"
                                class="min-w-3xl"
                            >
                                @for (
                                    row of booking_rules();
                                    track row.id;
                                    let i = $index
                                ) {
                                    <div
                                        cdkDrag
                                        cdkDragLockAxis="y"
                                        class="border-base-300 border-x border-b"
                                    >
                                        <div
                                            class="border-base-content bg-base-300 h-14 rounded-sm border-2 border-dashed opacity-50"
                                            *cdkDragPlaceholder
                                        ></div>
                                        <div
                                            class="bg-base-100 grid text-sm"
                                            [style.grid-template-columns]="
                                                TABLE_COLUMNS
                                            "
                                        >
                                            <div
                                                class="border-base-200 flex items-center justify-center border-r"
                                            >
                                                <button
                                                    icon
                                                    matRipple
                                                    cdkDragHandle
                                                    class="cursor-grab rounded-sm"
                                                    [matTooltip]="
                                                        'APP.CONCIERGE.BOOKING_RULESET_REORDER'
                                                            | translate
                                                    "
                                                >
                                                    <icon>drag_indicator</icon>
                                                </button>
                                            </div>
                                            <div
                                                class="border-base-200 flex items-center border-r"
                                            >
                                                @if ((row.zone | level)?.id) {
                                                    <div class="px-4 py-2">
                                                        <div>
                                                            {{
                                                                (
                                                                    row.zone
                                                                    | level
                                                                )
                                                                    ?.display_name ||
                                                                    row.zone
                                                            }}
                                                        </div>
                                                        <div
                                                            class="font-mono text-[0.625rem] opacity-30"
                                                        >
                                                            {{ row.zone }}
                                                        </div>
                                                    </div>
                                                } @else {
                                                    <div
                                                        class="px-4 py-2 font-mono italic"
                                                    >
                                                        {{
                                                            row.zone === '*'
                                                                ? ('RESOURCE.ZONE_ALL'
                                                                  | translate)
                                                                : row.zone
                                                        }}
                                                    </div>
                                                }
                                            </div>
                                            <div
                                                class="border-base-200 border-r p-4"
                                            >
                                                {{ row.name }}
                                            </div>
                                            <div
                                                class="border-base-200 flex items-center justify-center border-r"
                                            >
                                                <div
                                                    [class.bg-error]="
                                                        !row.rules?.auto_approve
                                                    "
                                                    [class.bg-success]="
                                                        row.rules?.auto_approve
                                                    "
                                                    class="flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                                                >
                                                    <icon>{{
                                                        row.rules?.auto_approve
                                                            ? 'done'
                                                            : 'close'
                                                    }}</icon>
                                                </div>
                                            </div>
                                            <div
                                                class="border-base-200 flex items-center justify-center border-r"
                                            >
                                                <div
                                                    [class.bg-error]="
                                                        !row.rules?.hidden
                                                    "
                                                    [class.bg-success]="
                                                        row.rules?.hidden
                                                    "
                                                    class="flex h-8 w-8 items-center justify-center rounded-sm text-2xl text-white"
                                                >
                                                    <icon>{{
                                                        row.rules?.hidden
                                                            ? 'done'
                                                            : 'close'
                                                    }}</icon>
                                                </div>
                                            </div>
                                            <div
                                                class="border-base-200 flex cursor-pointer items-center border-r p-4 select-none"
                                                (click)="toggleExpanded(row.id)"
                                            >
                                                <icon class="mr-1 text-2xl">{{
                                                    isExpanded(row.id)
                                                        ? 'keyboard_arrow_down'
                                                        : 'chevron_right'
                                                }}</icon>
                                                {{
                                                    'APP.CONCIERGE.BOOKING_RULES_CONDITIONS_COUNT'
                                                        | translate
                                                            : {
                                                                  count: keyCount(
                                                                      row.conditions
                                                                  ),
                                                              }
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center justify-center gap-1 p-1"
                                            >
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
                                                    (click)="removeRuleset(row)"
                                                    [matTooltip]="
                                                        'APP.CONCIERGE.BOOKING_RULESET_REMOVE'
                                                            | translate
                                                    "
                                                >
                                                    <icon class="text-error"
                                                        >delete</icon
                                                    >
                                                </button>
                                            </div>
                                        </div>
                                        @if (isExpanded(row.id)) {
                                            <div
                                                class="bg-base-200 border-base-300 border-t px-6 py-3"
                                            >
                                                @if (
                                                    conditionKeys(
                                                        row.conditions
                                                    ).length
                                                ) {
                                                    <div
                                                        class="flex flex-wrap gap-x-8 gap-y-2 text-xs"
                                                    >
                                                        @for (
                                                            key of conditionKeys(
                                                                row.conditions
                                                            );
                                                            track key
                                                        ) {
                                                            <div
                                                                class="flex items-baseline gap-2"
                                                            >
                                                                <span
                                                                    class="font-medium opacity-60"
                                                                >
                                                                    {{
                                                                        CONDITION_LABELS[
                                                                            key
                                                                        ]
                                                                            | translate
                                                                    }}:
                                                                </span>
                                                                <span>{{
                                                                    formatConditionValue(
                                                                        key,
                                                                        row
                                                                            .conditions[
                                                                            key
                                                                        ]
                                                                    )
                                                                }}</span>
                                                            </div>
                                                        }
                                                    </div>
                                                } @else {
                                                    <div
                                                        class="text-xs opacity-30"
                                                    >
                                                        No conditions configured
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                } @empty {
                                    <div
                                        class="border-base-300 flex items-center justify-center border-x border-b p-8 opacity-30"
                                    >
                                        No rulesets configured
                                    </div>
                                }
                            </div>
                        </div>
                    }
                }
                @if (!loading()) {
                    <footer
                        class="bg-base-200 fixed bottom-0 left-1/2 z-10 mx-auto my-2 flex w-[calc(100%-1rem)] -translate-x-1/2 items-center justify-end space-x-4 rounded-sm border-none px-4 py-2"
                        [class.max-w-156]="view() === 'form'"
                    >
                        @if (view() === 'form') {
                            <button
                                btn
                                matRipple
                                class="inverse w-36"
                                (click)="selected.set(null); view.set('list')"
                            >
                                {{ 'COMMON.BACK' | translate }}
                            </button>
                        }
                        @if (view() !== 'form') {
                            <button
                                btn
                                matRipple
                                class="w-36"
                                (click)="editRuleset()"
                            >
                                {{
                                    'APP.CONCIERGE.BOOKING_RULESET_ADD'
                                        | translate
                                }}
                            </button>
                        }
                        @if (view() === 'form') {
                            <button
                                btn
                                matRipple
                                class="w-36"
                                (click)="
                                    activate_save.update((state) => !state)
                                "
                            >
                                {{
                                    'APP.CONCIERGE.BOOKING_RULESET_SAVE'
                                        | translate
                                }}
                            </button>
                        }
                    </footer>
                }
            </div>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        MatDialogModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MatTooltipModule,
        LevelPipe,
        DragDropModule,
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

    public readonly loading = signal(false);
    public readonly view = signal<'list' | 'form'>('list');
    public readonly activate_save = signal(false);
    public readonly selected = signal<BookingRuleset | null>(null);
    public readonly change = signal(0);
    public readonly show_children = signal<Record<string, boolean>>({});
    private readonly _booking_rules = combineLatest([
        this._org.active_building,
        toObservable(this.change),
    ]).pipe(
        filter(([_]) => !!_),
        switchMap(([bld]) => {
            return from(
                showMetadata(bld.id, `${this._data.type}_booking_rules`),
            ).pipe(catchError(() => of({ details: [] })));
        }),
        map(({ details }) => (details instanceof Array ? details : [])),
        shareReplay(1),
    );
    public readonly booking_rules = toSignal(this._booking_rules, {
        initialValue: [] as BookingRuleset[],
    });

    public readonly type = this._data.type;
    public readonly TABLE_COLUMNS = '3.5rem 1fr 1fr 5.5rem 5.5rem 1fr 5.5rem';
    public readonly CONDITION_LABELS: Record<string, string> = {
        groups: 'BOOKINGS.CONDITION_GROUPS',
        locations: 'BOOKINGS.CONDITION_LOCATION',
        tags: 'BOOKINGS.CONDITION_TAGS',
        min_length: 'BOOKINGS.CONDITION_MIN_LENGTH',
        max_length: 'BOOKINGS.CONDITION_MAX_LENGTH',
        is_before: 'BOOKINGS.CONDITION_WITHIN',
        is_after: 'BOOKINGS.CONDITION_AFTER',
        is_between: 'BOOKINGS.CONDITION_BETWEEN_HOURS',
        is_period: 'BOOKINGS.CONDITION_BETWEEN_DATES',
        resource_ids: 'BOOKINGS.CONDITION_RESOURCES',
    };

    public keyCount(item: Record<string, any>): number {
        return Object.keys(item).length;
    }

    public conditionKeys(conditions: BookingRuleConditions): string[] {
        return Object.keys(conditions || {});
    }

    public formatConditionValue(key: string, value: any): string {
        if (value == null) return '';
        if (key === 'min_length' || key === 'max_length') {
            const minutes = Number(value);
            if (minutes < 60) return `${minutes} min`;
            const hours = Math.floor(minutes / 60);
            const remaining = minutes % 60;
            return remaining > 0
                ? `${hours} hr ${remaining} min`
                : `${hours} hr`;
        }
        if (key === 'is_between' && Array.isArray(value)) {
            const pad = (n: number) => String(n).padStart(2, '0');
            return `${pad(value[0])}:00 - ${pad(value[1])}:00`;
        }
        if (key === 'is_period' && Array.isArray(value)) {
            return `${new Date(value[0]).toLocaleDateString()} - ${new Date(value[1]).toLocaleDateString()}`;
        }
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        return `${value}`;
    }

    public isExpanded(id: string): boolean {
        return !!this.show_children()[id];
    }

    public toggleExpanded(id: string): void {
        this.show_children.update((state) => ({
            ...state,
            [id]: !state[id],
        }));
    }

    public editRuleset(ruleset?: BookingRuleset) {
        this.view.set('form');
        this.selected.set(ruleset || null);
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
        const rules = await nextValueFrom(this._booking_rules);
        const index = rules.findIndex((_) => _.id === ruleset.id);
        if (index >= 0) {
            rules.splice(index, 1);
            await updateMetadata(this._org.building.id, {
                name: `${this.type}_booking_rules`,
                description: `${this.type} Booking Rules`,
                details: rules,
            }).catch((_) => {
                notifyError('Error removing booking rules.');
                throw _;
            });
            this.change.set(Date.now());
        }
        notifySuccess('Successfully removed booking rules.');
        result.close();
    }

    public async drop(event: CdkDragDrop<BookingRuleset[]>) {
        if (event.previousIndex === event.currentIndex) return;
        const rules = await nextValueFrom(this._booking_rules);
        moveItemInArray(rules, event.previousIndex, event.currentIndex);
        await updateMetadata(this._org.building.id, {
            name: `${this.type}_booking_rules`,
            description: `${this.type} Booking Rules`,
            details: rules,
        }).catch((_) => {
            notifyError('Error saving booking rules order change.');
            throw _;
        });
        notifySuccess('Successfully updated booking rules order.');
        this.change.set(Date.now());
    }

    public async save(new_ruleset?: BookingRuleset) {
        this.loading.set(true);
        const rules = await nextValueFrom(this._booking_rules);
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
        }).catch((_) => {
            notifyError(
                i18n('APP.CONCIERGE.BOOKING_RULESET_ERROR', { error: _ }),
            );
            throw _;
        });
        this.loading.set(false);
        this.view.set('list');
        notifySuccess(i18n('APP.CONCIERGE.BOOKING_RULESET_SUCCESS'));
    }
}
