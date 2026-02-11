import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { addMinutes, format } from 'date-fns';

import {
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';

export interface EventSummaryData {
    event: MockApprovalEvent;
}

@Component({
    selector: 'event-summary-dialog',
    template: `
        <div class="w-[28rem] max-w-full">
            <div
                class="flex items-start justify-between border-b border-base-300 p-5"
            >
                <div>
                    <h3 class="text-lg font-semibold">
                        {{ event.title }}
                    </h3>
                    <div class="mt-1 flex items-center space-x-2">
                        <div
                            class="inline-flex items-center space-x-1 rounded-full bg-base-200 px-3 py-0.5 text-xs font-medium"
                        >
                            <icon class="text-sm">{{
                                categoryIcon(event.category)
                            }}</icon>
                            <span>{{ categoryName(event.category) }}</span>
                        </div>
                        <div
                            class="inline-flex items-center space-x-1 rounded-full border px-2.5 py-0.5 text-xs font-medium"
                            [class.border-success]="getStatus(event.id) === 'approved'"
                            [class.text-success]="getStatus(event.id) === 'approved'"
                            [class.border-warning]="getStatus(event.id) === 'pending'"
                            [class.text-warning]="getStatus(event.id) === 'pending'"
                            [class.border-error]="getStatus(event.id) === 'declined'"
                            [class.text-error]="getStatus(event.id) === 'declined'"
                        >
                            <div
                                class="h-2 w-2 rounded-full"
                                [class.bg-success]="getStatus(event.id) === 'approved'"
                                [class.bg-warning]="getStatus(event.id) === 'pending'"
                                [class.bg-error]="getStatus(event.id) === 'declined'"
                            ></div>
                            <span>{{ getStatusLabel(event.id) }}</span>
                        </div>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="h-8 w-8"
                    (click)="dialogRef.close()"
                >
                    <icon class="text-xl">close</icon>
                </button>
            </div>

            <div class="space-y-4 p-5">
                <div class="flex items-start space-x-3">
                    <icon class="mt-0.5 text-lg opacity-50">schedule</icon>
                    <div>
                        <div class="text-sm font-medium">
                            {{ formatDate(event.date) }}
                        </div>
                        <div class="text-xs opacity-60">
                            {{ formatTime(event.date) }} &ndash;
                            {{
                                formatTime(
                                    addMins(
                                        event.date,
                                        event.duration_minutes
                                    )
                                )
                            }}
                            ({{ event.duration_minutes }} min)
                        </div>
                    </div>
                </div>

                <div class="flex items-start space-x-3">
                    <icon class="mt-0.5 text-lg opacity-50"
                        >location_on</icon
                    >
                    <div class="text-sm">{{ event.location }}</div>
                </div>

                <div class="flex items-start space-x-3">
                    <icon class="mt-0.5 text-lg opacity-50">person</icon>
                    <div class="text-sm">{{ event.organiser }}</div>
                </div>

                @if (parent_event) {
                    <div
                        class="rounded border border-base-300 bg-base-200/50 p-3"
                    >
                        <div
                            class="mb-1 flex items-center justify-between"
                        >
                            <div class="flex items-center space-x-1 text-xs font-medium opacity-60">
                                <icon class="text-sm">link</icon>
                                <span>Parent Event</span>
                            </div>
                            <div
                                class="inline-flex items-center space-x-1 rounded-full border px-2 py-0.5 text-xs font-medium"
                                [class.border-success]="getStatus(parent_event.id) === 'approved'"
                                [class.text-success]="getStatus(parent_event.id) === 'approved'"
                                [class.border-warning]="getStatus(parent_event.id) === 'pending'"
                                [class.text-warning]="getStatus(parent_event.id) === 'pending'"
                                [class.border-error]="getStatus(parent_event.id) === 'declined'"
                                [class.text-error]="getStatus(parent_event.id) === 'declined'"
                            >
                                <div
                                    class="h-1.5 w-1.5 rounded-full"
                                    [class.bg-success]="getStatus(parent_event.id) === 'approved'"
                                    [class.bg-warning]="getStatus(parent_event.id) === 'pending'"
                                    [class.bg-error]="getStatus(parent_event.id) === 'declined'"
                                ></div>
                                <span>{{ getStatusLabel(parent_event.id) }}</span>
                            </div>
                        </div>
                        <div class="text-sm font-medium">
                            {{ parent_event.title }}
                        </div>
                        <div class="text-xs opacity-60">
                            {{ parent_event.location }}
                        </div>
                    </div>
                }

                @if (child_events.length) {
                    <div>
                        <div
                            class="mb-2 flex items-center space-x-1 text-xs font-medium opacity-60"
                        >
                            <icon class="text-sm">account_tree</icon>
                            <span>Related Services</span>
                        </div>
                        <div class="space-y-1">
                            @for (
                                child of child_events;
                                track child.id
                            ) {
                                <div
                                    class="flex items-center justify-between rounded border border-base-300 px-3 py-2 text-sm"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon
                                            class="text-base opacity-50"
                                            >{{
                                                categoryIcon(
                                                    child.category
                                                )
                                            }}</icon
                                        >
                                        <span>{{ child.title }}</span>
                                    </div>
                                    <div class="flex items-center space-x-2">
                                        <span class="text-xs opacity-40">{{
                                            categoryName(child.category)
                                        }}</span>
                                        <div
                                            class="flex items-center space-x-1 rounded-full border px-2 py-0.5 text-xs font-medium"
                                            [class.border-success]="getStatus(child.id) === 'approved'"
                                            [class.text-success]="getStatus(child.id) === 'approved'"
                                            [class.border-warning]="getStatus(child.id) === 'pending'"
                                            [class.text-warning]="getStatus(child.id) === 'pending'"
                                            [class.border-error]="getStatus(child.id) === 'declined'"
                                            [class.text-error]="getStatus(child.id) === 'declined'"
                                        >
                                            <div
                                                class="h-1.5 w-1.5 rounded-full"
                                                [class.bg-success]="getStatus(child.id) === 'approved'"
                                                [class.bg-warning]="getStatus(child.id) === 'pending'"
                                                [class.bg-error]="getStatus(child.id) === 'declined'"
                                            ></div>
                                            <span>{{ getStatusLabel(child.id) }}</span>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
    ],
})
export class EventSummaryDialogComponent {
    readonly data = inject<EventSummaryData>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);
    private _approval_state = inject(EventApprovalStateService);

    get event(): MockApprovalEvent {
        return this.data.event;
    }

    get parent_event(): MockApprovalEvent | null {
        if (!this.event.parent_event) return null;
        return (
            MOCK_APPROVAL_EVENTS.find(
                (e) => e.id === this.event.parent_event,
            ) || null
        );
    }

    get child_events(): MockApprovalEvent[] {
        return MOCK_APPROVAL_EVENTS.filter(
            (e) => e.parent_event === this.event.id,
        );
    }

    getStatus(event_id: string): string {
        return this._approval_state.status[event_id] || 'pending';
    }

    getStatusLabel(event_id: string): string {
        const status = this.getStatus(event_id);
        return status === 'approved'
            ? 'Approved'
            : status === 'declined'
              ? 'Declined'
              : 'Pending';
    }

    categoryIcon(category: string): string {
        return CATEGORY_ICONS[category] || 'event';
    }

    categoryName(category: string): string {
        return CATEGORY_DISPLAY_NAMES[category] || category;
    }

    formatDate(ts: number): string {
        return format(ts, 'EEEE, d MMMM yyyy');
    }

    formatTime(ts: number): string {
        return format(ts, 'h:mm a');
    }

    addMins(ts: number, mins: number): number {
        return addMinutes(ts, mins).valueOf();
    }
}
