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
                    <div
                        class="mt-1 inline-flex items-center space-x-1 rounded-full bg-base-200 px-3 py-0.5 text-xs font-medium"
                    >
                        <icon class="text-sm">{{
                            categoryIcon(event.category)
                        }}</icon>
                        <span>{{ categoryName(event.category) }}</span>
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
                            class="mb-1 flex items-center space-x-1 text-xs font-medium opacity-60"
                        >
                            <icon class="text-sm">link</icon>
                            <span>Parent Event</span>
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
                                    <span class="text-xs opacity-40">{{
                                        categoryName(child.category)
                                    }}</span>
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
