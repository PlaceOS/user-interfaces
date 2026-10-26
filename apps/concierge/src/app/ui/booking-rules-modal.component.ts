import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
    CdkDragDrop,
    DragDropModule,
    moveItemInArray,
} from '@angular/cdk/drag-drop';

import { Component, Injector, inject, resource, signal } from '@angular/core';
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
import { restoreFocusAfterRender } from './restore-focus';

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
                                                    [attr.aria-label]="
                                                        'APP.CONCIERGE.BOOKING_RULESET_REORDER'
                                                            | translate
                                                    "
                                                    [attr.aria-description]="
                                                        'COMMON.REORDER_HINT'
                                                            | translate
                                                    "
                                                    (keydown.arrowup)="
                                                        $event.preventDefault();
                                                        move(i, i - 1)
                                                    "
                                                    (keydown.arrowdown)="
                                                        $event.preventDefault();
                                                        move(i, i + 1)
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
                                                            class="font-mono text-[0.625rem] opacity-70"
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
                                            <button
                                                type="button"
                                                class="border-base-200 flex items-center border-r p-4 text-left select-none"
                                                (click)="toggleExpanded(row.id)"
                                                [attr.aria-expanded]="
                                                    isExpanded(row.id)
                                                "
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
                                            </button>
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
                                                    [attr.aria-label]="
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
                                                    <dl
                                                        class="grid grid-cols-[max-content_1fr] gap-x-4 gap-y-2 text-sm"
                                                    >
                                                        @for (
                                                            key of conditionKeys(
                                                                row.conditions
                                                            );
                                                            track key
                                                        ) {
                                                            <dt
                                                                class="font-medium opacity-70"
                                                            >
                                                                {{
                                                                    CONDITION_LABELS[
                                                                        key
                                                                    ]
                                                                        | translate
                                                                }}
                                                            </dt>
                                                            <dd
                                                                class="min-w-0 break-words"
                                                            >
                                                                {{
                                                                    formatConditionValue(
                                                                        key,
                                                                        row
                                                                            .conditions[
                                                                            key
                                                                        ]
                                                                    )
                                                                }}
                                                            </dd>
                                                        }
                                                    </dl>
                                                } @else {
                                                    <div
                                                        class="text-xs opacity-70"
                                                    >
                                                        No conditions configured
                                                    </div>
                                                }
                                            </div>
                                        }
                                    </div>
                                } @empty {
                                    <div
                                        class="border-base-300 flex items-center justify-center border-x border-b p-8 opacity-70"
                                    >
                                        {{
                                            load_failed()
                                                ? 'Failed to load booking rulesets'
                                                : 'No rulesets configured'
                                        }}
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
    private _announcer = inject(LiveAnnouncer);
    private _injector = inject(Injector);

    public readonly loading = signal(false);
    public readonly view = signal<'list' | 'form'>('list');
    public readonly activate_save = signal(false);
    public readonly selected = signal<BookingRuleset | null>(null);
    public readonly change = signal(0);
    /** True while a new order saves. Blocks more moves until it is stored */
    public readonly saving_order = signal(false);
    /** True when the stored rulesets could not be read. */
    public readonly load_failed = signal(false);
    public readonly show_children = signal<Record<string, boolean>>({});
    private readonly _booking_rules = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            change: this.change(),
        }),
        defaultValue: [] as BookingRuleset[],
        loader: async ({ params }) => {
            this.load_failed.set(false);
            if (!params.building) return [];
            try {
                const { details } = await showMetadata(
                    params.building,
                    `${this._data.type}_booking_rules`,
                );
                return details instanceof Array
                    ? this.normaliseRulesetIds(details)
                    : [];
            } catch {
                this.load_failed.set(true);
                return [];
            }
        },
    });
    public readonly booking_rules = this._booking_rules.value;

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

    public normaliseRulesetIds(rules: BookingRuleset[]): BookingRuleset[] {
        const ids = new Set<string>();
        return rules.map((rule) => {
            let id = rule.id;
            while (!id || ids.has(id)) id = `ruleset-${randomString(8)}`;
            ids.add(id);
            return id === rule.id ? rule : { ...rule, id };
        });
    }

    public formatConditionValue(key: string, value: unknown): string {
        if (value == null) return '';
        if (key === 'min_length' || key === 'max_length') {
            const minutes = Number(value);
            if (minutes < 60)
                return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
            const hours = Math.floor(minutes / 60);
            const remaining = minutes % 60;
            const hour_text = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
            return remaining > 0
                ? `${hour_text} ${remaining} ${remaining === 1 ? 'minute' : 'minutes'}`
                : hour_text;
        }
        if (key === 'is_between' && Array.isArray(value)) {
            const pad = (n: number) => String(n).padStart(2, '0');
            return `${pad(value[0])}:00 to ${pad(value[1])}:00`;
        }
        if (key === 'is_period' && Array.isArray(value)) {
            return `${new Date(value[0]).toLocaleDateString()} to ${new Date(value[1]).toLocaleDateString()}`;
        }
        if (Array.isArray(value)) {
            return value.join(', ');
        }
        return `${value}`;
    }

    /**
     * Writes replace the whole stored list, so only allow them when the
     * displayed list is fully loaded. Otherwise a failed or in-progress
     * load would write an empty list over the stored rulesets.
     */
    private _canWrite(): boolean {
        if (!this.load_failed() && !this._booking_rules.isLoading()) {
            return true;
        }
        notifyError('Booking rulesets are not loaded. Please try again.');
        return false;
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
        if (!this._canWrite()) return result.close();
        result.loading('Removing Ruleset...');
        const rules = [...this.booking_rules()];
        const index = rules.findIndex((_) => _.id === ruleset.id);
        try {
            if (index >= 0) {
                rules.splice(index, 1);
                await updateMetadata(this._org.building.id, {
                    name: `${this.type}_booking_rules`,
                    description: `${this.type} Booking Rules`,
                    details: rules,
                });
                this.change.set(Date.now());
            }
            notifySuccess('Successfully removed booking rules.');
        } catch {
            notifyError('Error removing booking rules.');
        } finally {
            result.close();
        }
    }

    public drop(event: CdkDragDrop<BookingRuleset[]>) {
        return this.move(event.previousIndex, event.currentIndex);
    }

    /**
     * Move a ruleset and save the new order. Drag and drop, and the arrow keys
     * on the drag handle, use it. The list shows the new order at once, so the
     * rows and the keyboard focus stay in place. A failed save reloads the
     * stored order.
     */
    public async move(from: number, to: number) {
        const rules = [...this.booking_rules()];
        if (from === to || to < 0 || to >= rules.length) return;
        if (this.saving_order() || !this._canWrite()) return;
        moveItemInArray(rules, from, to);
        restoreFocusAfterRender(this._injector);
        this._booking_rules.value.set(rules);
        this.saving_order.set(true);
        try {
            await updateMetadata(this._org.building.id, {
                name: `${this.type}_booking_rules`,
                description: `${this.type} Booking Rules`,
                details: rules,
            });
            notifySuccess('Successfully updated booking rules order.');
            this._announcer.announce(
                i18n('COMMON.MOVED_TO_POSITION', {
                    position: to + 1,
                    count: rules.length,
                }),
            );
        } catch {
            notifyError('Error saving booking rules order change.');
            this._booking_rules.reload();
        } finally {
            this.saving_order.set(false);
        }
    }

    public async save(new_ruleset?: BookingRuleset) {
        if (!this._canWrite()) return;
        this.loading.set(true);
        const rules = [...this.booking_rules()];
        if (new_ruleset) {
            const selected = this.selected();
            const index = selected
                ? rules.findIndex(
                      (rule) => rule === selected || rule.id === selected.id,
                  )
                : -1;
            if (index >= 0) {
                rules[index] = new_ruleset;
            } else {
                rules.push(new_ruleset);
            }
        }
        const unique_rules = this.normaliseRulesetIds(rules);
        try {
            await updateMetadata(this._org.building.id, {
                name: `${this.type}_booking_rules`,
                description: `${this.type} Booking Rules`,
                details: unique_rules,
            });
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.BOOKING_RULESET_ERROR', { error: e }),
            );
            return;
        } finally {
            this.loading.set(false);
        }
        this.change.update((value) => value + 1);
        this.view.set('list');
        notifySuccess(i18n('APP.CONCIERGE.BOOKING_RULESET_SUCCESS'));
    }
}
