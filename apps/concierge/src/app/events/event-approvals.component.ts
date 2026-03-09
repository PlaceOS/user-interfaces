import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent } from '@placeos/components';
import { notifyError, notifySuccess } from '@placeos/common';
import { isMock } from '@placeos/ts-client';
import { format } from 'date-fns';

import {
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    EventRole,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
    ROLE_DISPLAY_NAMES,
    ROLE_PERMISSIONS,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';
import { EventSyncService } from './event-sync.service';
import {
    EventSummaryDialogComponent,
    EventSummaryData,
} from './event-summary-dialog.component';

@Component({
    selector: 'event-approvals',
    template: `
        <div class="mb-4 rounded border border-base-300 bg-base-100 p-4">
            <!-- Header row -->
            <div class="mb-3 flex items-center justify-between">
                <button
                    class="flex items-center space-x-1 text-base font-medium"
                    (click)="collapsed = !collapsed"
                >
                    <icon
                        class="text-lg transition-transform"
                        [style.transform]="
                            collapsed ? 'rotate(-90deg)' : 'rotate(0)'
                        "
                        >expand_more</icon
                    >
                    <span>
                        @if (show_declined()) {
                            Declined Events ({{ visible_events().length }})
                        } @else {
                            Pending Approvals ({{
                                visible_events().length
                            }})
                        }
                    </span>
                </button>
                @if (_sync.connected$ | async) {
                    <span
                        class="ml-2 flex items-center space-x-1 text-xs text-gray-600"
                    >
                        <icon class="text-success text-xs"
                            >cloud_done</icon
                        >
                        <span>Sync active</span>
                    </span>
                }

                @if (is_mock) {
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-56"
                    >
                        <mat-select
                            [ngModel]="role()"
                            (ngModelChange)="
                                _approval_state.setRole($event)
                            "
                            placeholder="Select Role"
                        >
                            @for (role of role_list; track role.value) {
                                <mat-option [value]="role.value">
                                    {{ role.label }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                }
            </div>

            <!-- Collapsible body -->
            @if (!collapsed) {
                @if (visible_events().length === 0) {
                    <div
                        class="flex flex-col items-center justify-center py-8 text-gray-600"
                    >
                        <icon class="mb-2 text-4xl">{{
                            show_declined() ? 'cancel' : 'check_circle'
                        }}</icon>
                        <span class="text-sm">{{
                            show_declined()
                                ? 'No declined events'
                                : 'No pending approvals for this role'
                        }}</span>
                    </div>
                } @else {
                    @for (
                        group of grouped_events();
                        track group.category
                    ) {
                        <div class="mb-4">
                            <div
                                class="mb-2 flex items-center space-x-2 text-sm font-medium text-gray-600"
                            >
                                <icon class="text-base">{{
                                    group.icon
                                }}</icon>
                                <span>{{ group.label }}</span>
                            </div>
                            <div class="flex flex-wrap gap-3">
                                @for (
                                    event of group.events;
                                    track event.id
                                ) {
                                    <div
                                        class="w-80 rounded-lg border border-base-300 bg-base-100 p-3"
                                    >
                                        <div
                                            class="mb-1 flex items-center justify-between"
                                        >
                                            <div
                                                class="flex items-center space-x-1 text-sm font-semibold"
                                            >
                                                <span>{{ event.title }}</span>
                                                @if (
                                                    event.id.startsWith(
                                                        'sync-'
                                                    )
                                                ) {
                                                    <span
                                                        class="rounded bg-blue-100 px-1 text-[10px] font-normal text-blue-600"
                                                        >Eventmocks</span
                                                    >
                                                }
                                            </div>
                                            <button
                                                icon
                                                matRipple
                                                class="h-7 w-7"
                                                (click)="
                                                    showSummary(event)
                                                "
                                            >
                                                <icon
                                                    class="text-base text-gray-600"
                                                    >info</icon
                                                >
                                            </button>
                                        </div>
                                        <div
                                            class="mb-1 text-xs text-gray-600"
                                        >
                                            {{
                                                formatDate(event.date)
                                            }}
                                            &middot;
                                            {{
                                                formatTime(event.date)
                                            }}
                                        </div>
                                        <div
                                            class="mb-1 flex items-center space-x-1 text-xs text-gray-600"
                                        >
                                            <icon class="text-xs"
                                                >location_on</icon
                                            >
                                            <span>{{
                                                event.location
                                            }}</span>
                                        </div>
                                        <div
                                            class="mb-2 flex items-center space-x-1 text-xs text-gray-600"
                                        >
                                            <icon class="text-xs"
                                                >person</icon
                                            >
                                            <span>{{
                                                event.organiser
                                            }}</span>
                                        </div>

                                        <!-- Action buttons or status -->
                                        <div
                                            class="flex items-center space-x-2 pt-1"
                                        >
                                            @if (
                                                status()?.[event.id] ===
                                                'approved'
                                            ) {
                                                <button
                                                    btn
                                                    disabled
                                                    class="border-success bg-success-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                >
                                                    <div class="ml-2">
                                                        Approved
                                                    </div>
                                                    <icon
                                                        class="text-success text-2xl"
                                                        >done</icon
                                                    >
                                                </button>
                                            } @else if (
                                                status()?.[event.id] ===
                                                'declined'
                                            ) {
                                                <button
                                                    btn
                                                    disabled
                                                    class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                >
                                                    <div class="ml-2">
                                                        Declined
                                                    </div>
                                                    <icon
                                                        class="text-error text-2xl"
                                                        >close</icon
                                                    >
                                                </button>
                                            } @else if (
                                                group.permission ===
                                                'approve'
                                            ) {
                                                <button
                                                    btn
                                                    matRipple
                                                    class="border-success bg-success-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                    (click)="
                                                        setStatus(
                                                            event.id,
                                                            'approved'
                                                        )
                                                    "
                                                >
                                                    <div class="ml-2">
                                                        Approve
                                                    </div>
                                                    <icon
                                                        class="text-success text-2xl"
                                                        >done</icon
                                                    >
                                                </button>
                                                <button
                                                    btn
                                                    matRipple
                                                    class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                    (click)="
                                                        setStatus(
                                                            event.id,
                                                            'declined'
                                                        )
                                                    "
                                                >
                                                    <div class="ml-2">
                                                        Decline
                                                    </div>
                                                    <icon
                                                        class="text-error text-2xl"
                                                        >close</icon
                                                    >
                                                </button>
                                                @if (
                                                    can_delegate() &&
                                                    !delegated()[
                                                        event.id
                                                    ] &&
                                                    getDelegableRoles(
                                                        event.category
                                                    ).length
                                                ) {
                                                    <button
                                                        btn
                                                        matRipple
                                                        class="border-base-300 bg-base-200 flex items-center space-x-1"
                                                        [matMenuTriggerFor]="
                                                            delegateMenu
                                                        "
                                                    >
                                                        <icon
                                                            class="text-xl"
                                                            >person_add</icon
                                                        >
                                                    </button>
                                                    <mat-menu
                                                        #delegateMenu="matMenu"
                                                    >
                                                        @for (
                                                            r of getDelegableRoles(
                                                                event.category
                                                            );
                                                            track r.value
                                                        ) {
                                                            <button
                                                                mat-menu-item
                                                                (click)="
                                                                    delegateTo(
                                                                        event.id,
                                                                        r.value
                                                                    )
                                                                "
                                                            >
                                                                {{
                                                                    r.label
                                                                }}
                                                            </button>
                                                        }
                                                    </mat-menu>
                                                }
                                            } @else if (
                                                group.permission ===
                                                'reject_safety'
                                            ) {
                                                <button
                                                    btn
                                                    matRipple
                                                    class="border-error bg-error-light flex min-w-0 flex-1 items-center space-x-1 text-black"
                                                    (click)="
                                                        setStatus(
                                                            event.id,
                                                            'declined'
                                                        )
                                                    "
                                                >
                                                    <div class="ml-2">
                                                        Reject
                                                    </div>
                                                    <icon
                                                        class="text-error text-2xl"
                                                        >close</icon
                                                    >
                                                </button>
                                            } @else {
                                                <span
                                                    class="text-xs italic text-gray-600"
                                                    >View only</span
                                                >
                                            }
                                        </div>

                                        <!-- Delegation status -->
                                        @if (delegated()[event.id]) {
                                            <div
                                                class="mt-2 flex items-center space-x-1 text-xs"
                                            >
                                                <icon
                                                    class="text-info text-sm"
                                                    >person</icon
                                                >
                                                <span
                                                    class="text-info font-medium"
                                                >
                                                    Delegated to
                                                    {{
                                                        getRoleName(
                                                            delegated()[
                                                                event.id
                                                            ]
                                                        )
                                                    }}
                                                </span>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    }
                }
            }
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [
        CommonModule,
        AsyncPipe,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatRippleModule,
        MatMenuModule,
        MatDialogModule,
        IconComponent,
    ],
})
export class EventApprovalsComponent {
    readonly _approval_state = inject(EventApprovalStateService);
    readonly _sync = inject(EventSyncService);
    private _dialog = inject(MatDialog);
    readonly is_mock = isMock();
    collapsed = false;

    private _all_events = toSignal(this._approval_state.all_events$, {
        initialValue: MOCK_APPROVAL_EVENTS,
    });

    readonly show_declined = input(false);
    readonly delegated = signal<Record<string, EventRole>>({});

    readonly status = toSignal(this._approval_state.status$, {
        initialValue: {},
    });
    readonly role = toSignal(this._approval_state.role$, {
        initialValue: 'global_admin' as EventRole,
    });

    readonly role_list = (
        Object.keys(ROLE_DISPLAY_NAMES) as EventRole[]
    ).map((value) => ({
        value,
        label: ROLE_DISPLAY_NAMES[value],
    }));

    readonly visible_events = computed(() => {
        const role = this.role();
        const statuses = this.status();
        const show_declined = this.show_declined();
        const all_events = this._all_events();
        const perms = ROLE_PERMISSIONS[role];
        const visible_categories = [
            ...perms.can_approve,
            ...perms.can_view,
        ];
        if (
            perms.reject_safety &&
            !visible_categories.includes('safety')
        ) {
            visible_categories.push('safety');
        }
        let events = all_events.filter((e) =>
            visible_categories.includes(e.category),
        );
        if (show_declined) {
            events = events.filter((e) => statuses[e.id] === 'declined');
        } else {
            events = events.filter((e) => !statuses[e.id]);
        }
        return events;
    });

    readonly grouped_events = computed(() => {
        const role = this.role();
        const perms = ROLE_PERMISSIONS[role];
        const events = this.visible_events();
        this.status();

        const category_set = new Set(events.map((e) => e.category));
        const groups: {
            category: ApprovalCategory;
            label: string;
            icon: string;
            permission: 'approve' | 'view' | 'reject_safety';
            events: MockApprovalEvent[];
        }[] = [];

        for (const cat of category_set) {
            let permission: 'approve' | 'view' | 'reject_safety' = 'view';
            if (perms.can_approve.includes(cat)) {
                permission = 'approve';
            } else if (cat === 'safety' && perms.reject_safety) {
                permission = 'reject_safety';
            }
            groups.push({
                category: cat,
                label: CATEGORY_DISPLAY_NAMES[cat],
                icon: CATEGORY_ICONS[cat],
                permission,
                events: events.filter((e) => e.category === cat),
            });
        }

        return groups;
    });

    readonly can_delegate = computed(() => {
        const role = this.role();
        return role === 'global_admin' || role === 'campus_admin';
    });

    showSummary(event: MockApprovalEvent): void {
        this._dialog.open(EventSummaryDialogComponent, {
            data: { event } as EventSummaryData,
        });
    }

    getParentTitle(parent_id: string): string {
        const all = this._all_events();
        const parent = all.find((e) => e.id === parent_id);
        return parent?.title || '';
    }

    getChildren(event_id: string): MockApprovalEvent[] {
        const all = this._all_events();
        return all.filter((e) => e.parent_event === event_id);
    }

    getCategoryIcon(category: ApprovalCategory): string {
        return CATEGORY_ICONS[category];
    }

    getCategoryName(category: ApprovalCategory): string {
        return CATEGORY_DISPLAY_NAMES[category];
    }

    getDelegableRoles(
        category: ApprovalCategory,
    ): { value: EventRole; label: string }[] {
        return (Object.keys(ROLE_PERMISSIONS) as EventRole[])
            .filter(
                (r) =>
                    r !== this.role() &&
                    ROLE_PERMISSIONS[r].can_approve.includes(category),
            )
            .map((r) => ({ value: r, label: ROLE_DISPLAY_NAMES[r] }));
    }

    delegateTo(event_id: string, role: EventRole): void {
        this.delegated.update((d) => ({ ...d, [event_id]: role }));
    }

    getRoleName(role: EventRole): string {
        return ROLE_DISPLAY_NAMES[role] || role;
    }

    setStatus(event_id: string, status: 'approved' | 'declined'): void {
        this._approval_state.setStatus(event_id, status);
        const all = this._all_events();
        const event = all.find((e) => e.id === event_id);
        if (status === 'declined' && event) {
            const organiser_email =
                event.organiser
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, '.') + '@ucla.edu';
            notifyError(
                `Rejection email sent to ${organiser_email}: "${event.title}" has been declined.`,
            );
        } else if (status === 'approved') {
            notifySuccess('Approval recorded successfully.');
        }
    }

    formatDate(ts: number): string {
        return format(ts, 'EEE, d MMM');
    }

    formatTime(ts: number): string {
        return format(ts, 'h:mm a');
    }
}
