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
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';

export interface EventSummaryData {
    event: MockApprovalEvent;
}

interface ApprovalItem {
    id: string;
    category: ApprovalCategory;
    title: string;
    status: string;
}

@Component({
    selector: 'event-summary-dialog',
    template: `
        <div class="w-[56rem] max-w-full">
            <!-- Header -->
            <div
                class="flex items-start justify-between border-b border-base-300 px-6 py-5"
            >
                <div class="flex items-center space-x-3">
                    <span
                        class="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary"
                    >
                        <icon class="text-xl">event</icon>
                    </span>
                    <div>
                        <h3 class="text-lg font-semibold">
                            {{ event.title }}
                        </h3>
                        <div class="text-sm opacity-60">
                            {{ event.organiser }} &middot;
                            {{ formatDateShort(event.date) }}
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

            <!-- Two-column body -->
            <div class="flex">
                <!-- Left: Event Details -->
                <div
                    class="flex-1 border-r border-base-300 px-6 py-5 space-y-5"
                >
                    <h4 class="text-sm font-semibold opacity-70">
                        Event Details
                    </h4>

                    <div class="space-y-3">
                        <div class="flex items-start space-x-3">
                            <icon class="mt-0.5 text-lg opacity-50"
                                >schedule</icon
                            >
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
                            <icon class="mt-0.5 text-lg opacity-50"
                                >person</icon
                            >
                            <div class="text-sm">{{ event.organiser }}</div>
                        </div>
                    </div>

                    <!-- Contact Details -->
                    <div>
                        <h4 class="mb-2 text-sm font-semibold opacity-70">
                            Contact Details
                        </h4>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-base opacity-50">mail</icon>
                            <span class="text-info">{{
                                organiserEmail()
                            }}</span>
                        </div>
                    </div>

                    <!-- Related Services -->
                    @if (child_events.length) {
                        <div>
                            <h4 class="mb-2 text-sm font-semibold opacity-70">
                                Related Services
                            </h4>
                            <div class="space-y-1.5">
                                @for (
                                    child of child_events;
                                    track child.id
                                ) {
                                    <div
                                        class="flex items-center space-x-2 text-sm"
                                    >
                                        <icon class="text-base opacity-50">{{
                                            categoryIcon(child.category)
                                        }}</icon>
                                        <span>{{ child.title }}</span>
                                    </div>
                                }
                            </div>
                        </div>
                    }

                    @if (parent_event) {
                        <div>
                            <h4 class="mb-2 text-sm font-semibold opacity-70">
                                Parent Event
                            </h4>
                            <div
                                class="flex items-center space-x-2 text-sm"
                            >
                                <icon class="text-base opacity-50"
                                    >link</icon
                                >
                                <span>{{ parent_event.title }}</span>
                                <span class="text-xs opacity-40"
                                    >&middot;
                                    {{ parent_event.location }}</span
                                >
                            </div>
                        </div>
                    }
                </div>

                <!-- Right: Approval Checklist -->
                <div class="flex-1 px-6 py-5 space-y-4">
                    <h4 class="text-sm font-semibold opacity-70">
                        Approval Checklist
                    </h4>

                    <div class="space-y-2">
                        @for (
                            item of approval_items;
                            track item.id
                        ) {
                            <div
                                class="rounded border border-base-300 px-4 py-3"
                            >
                                <div class="text-sm font-medium">
                                    {{ categoryName(item.category) }}
                                </div>
                                <div class="mt-1 flex items-center space-x-1.5">
                                    @switch (item.status) {
                                        @case ('approved') {
                                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-success">
                                                <icon class="text-xs text-white">done</icon>
                                            </span>
                                            <span class="text-sm text-success font-medium">Approved</span>
                                        }
                                        @case ('declined') {
                                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-error">
                                                <icon class="text-xs text-white">close</icon>
                                            </span>
                                            <span class="text-sm text-error font-medium">Declined</span>
                                        }
                                        @default {
                                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-warning">
                                                <icon class="text-xs text-white">schedule</icon>
                                            </span>
                                            <span class="text-sm text-warning font-medium">Pending</span>
                                        }
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
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

    /** Build the approval checklist from the event and its children. */
    get approval_items(): ApprovalItem[] {
        const items: ApprovalItem[] = [];
        const root = this.parent_event || this.event;
        const children = MOCK_APPROVAL_EVENTS.filter(
            (e) => e.parent_event === root.id,
        );
        const all_events = [root, ...children];

        for (const evt of all_events) {
            items.push({
                id: evt.id,
                category: evt.category,
                title: evt.title,
                status: this.getStatus(evt.id),
            });
        }
        return items;
    }

    getStatus(event_id: string): string {
        return this._approval_state.status[event_id] || 'pending';
    }

    categoryIcon(category: string): string {
        return CATEGORY_ICONS[category] || 'event';
    }

    categoryName(category: string): string {
        return CATEGORY_DISPLAY_NAMES[category] || category;
    }

    organiserEmail(): string {
        return (
            this.event.organiser
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '.') + '@hancock.com'
        );
    }

    formatDate(ts: number): string {
        return format(ts, 'EEEE, d MMMM yyyy');
    }

    formatDateShort(ts: number): string {
        return format(ts, 'd MMM yyyy');
    }

    formatTime(ts: number): string {
        return format(ts, 'h:mm a');
    }

    addMins(ts: number, mins: number): number {
        return addMinutes(ts, mins).valueOf();
    }
}
