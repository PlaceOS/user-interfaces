import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';

export type EventStatus = 'draft' | 'pending' | 'approved' | 'rejected';
export type ApprovalStatus = 'pending' | 'completed' | 'rejected';

export interface Approval {
    name: string;
    status: ApprovalStatus;
}

export interface EventService {
    id: string;
    name: string;
    icon: string;
    action: string;
    action_label: string;
}

export interface VenueEvent {
    id: string;
    title: string;
    date: Date;
    venue: string;
    status: EventStatus;
    approvals: Approval[];
    services: EventService[];
    has_missing_documents: boolean;
    has_sla_warning: boolean;
}

@Component({
    selector: 'event-card',
    template: `
        <div
            class="bg-base-100 border-base-300 rounded-lg border p-6 shadow-sm"
        >
            <!-- Event Header -->
            <div class="mb-4 flex items-start justify-between">
                <h3 class="text-xl font-bold">{{ event().title }}</h3>
                <div class="flex items-center gap-2">
                    <!-- Status Badge -->
                    <span
                        class="rounded-full border px-3 py-1 text-sm font-medium"
                        [ngClass]="getStatusBadgeClass(event().status)"
                    >
                        {{ getStatusLabel(event().status) }}
                    </span>
                    <!-- Edit Button -->
                    <button
                        matRipple
                        class="bg-base-200 hover:bg-base-300 flex items-center gap-1 rounded px-2 py-1 text-sm font-medium transition-colors"
                    >
                        <icon class="text-base">edit</icon>
                        <div class="pr-2">Edit</div>
                    </button>
                </div>
            </div>

            <!-- Date and Venue -->
            <div class="mb-4 flex flex-wrap gap-6 text-sm">
                <span>
                    <strong>Date:</strong>
                    {{ formatDate(event().date) }}
                </span>
                <span>
                    <strong>Venue:</strong>
                    {{ event().venue }}
                </span>
            </div>

            <!-- Approval Status Section -->
            @if (event().approvals.length > 0) {
                <div class="bg-base-200/50 mb-4 rounded-lg p-4">
                    <div class="mb-3 flex items-center justify-between">
                        <h4 class="text-sm font-semibold">Approval Status</h4>
                        <span class="text-base-content/70 text-sm">
                            {{ getCompletedApprovals(event().approvals) }}
                            of {{ event().approvals.length }} approvals
                            completed
                        </span>
                    </div>

                    <!-- Progress Bar -->
                    <div
                        class="bg-base-300 mb-4 h-2 overflow-hidden rounded-full"
                    >
                        <div
                            class="bg-success h-full transition-all"
                            [style.width.%]="
                                getApprovalProgress(event().approvals)
                            "
                        ></div>
                    </div>

                    <!-- Approvals List -->
                    <div class="flex flex-col gap-2">
                        @for (
                            approval of event().approvals;
                            track approval.name
                        ) {
                            <div
                                class="bg-base-100 flex items-center justify-between rounded border-l-2 p-3"
                                [class.border-success]="
                                    approval.status === 'completed'
                                "
                                [class.border-base-300]="
                                    approval.status === 'pending'
                                "
                                [class.border-error]="
                                    approval.status === 'rejected'
                                "
                            >
                                <span class="text-sm">{{ approval.name }}</span>
                                <span
                                    class="rounded px-2 py-0.5 text-xs font-semibold uppercase"
                                    [ngClass]="
                                        getApprovalBadgeClass(approval.status)
                                    "
                                >
                                    {{ approval.status }}
                                </span>
                            </div>
                        }
                    </div>
                </div>
            }

            <!-- Warning Badges -->
            @if (event().has_missing_documents || event().has_sla_warning) {
                <div class="mb-4 flex flex-wrap gap-2">
                    @if (event().has_missing_documents) {
                        <span
                            class="bg-warning-light text-warning flex items-center gap-1 rounded px-3 py-1 text-sm font-medium"
                        >
                            <icon class="text-base">description</icon>
                            Missing Documents
                        </span>
                    }
                    @if (event().has_sla_warning) {
                        <span
                            class="bg-warning-light text-warning flex items-center gap-1 rounded px-3 py-1 text-sm font-medium"
                        >
                            <icon class="text-base">warning</icon>
                            Approaching Deadline
                        </span>
                    }
                </div>
            }

            <!-- Event Services Section -->
            @if (event().services.length > 0) {
                <div class="border-base-300 border-t pt-4">
                    <h4 class="mb-3 text-sm font-semibold">Event Services</h4>
                    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        @for (service of event().services; track service.id) {
                            <div
                                class="border-base-300 flex items-center justify-between rounded-lg border p-3"
                            >
                                <div class="flex items-center gap-3">
                                    <icon class="text-2xl">{{
                                        service.icon
                                    }}</icon>
                                    <span class="font-medium">{{
                                        service.name
                                    }}</span>
                                </div>
                                <button
                                    btn
                                    matRipple
                                    class="flex w-32 items-center gap-1 px-4! py-2! text-sm"
                                >
                                    <icon class="text-base">{{
                                        service.action
                                    }}</icon>
                                    {{ service.action_label }}
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `,
    imports: [NgClass, IconComponent, MatRippleModule],
})
export class EventCardComponent {
    public readonly event = input.required<VenueEvent>();

    public getStatusBadgeClass(status: EventStatus): Record<string, boolean> {
        return {
            'bg-warning-light text-warning border-warning':
                status === 'pending',
            'bg-success-light text-success border-success':
                status === 'approved',
            'bg-base-200 text-base-content border-base-300': status === 'draft',
            'bg-error-light text-error border-error': status === 'rejected',
        };
    }

    public getStatusLabel(status: EventStatus): string {
        const labels: Record<EventStatus, string> = {
            pending: 'Pending Approval',
            approved: 'Approved',
            draft: 'Draft',
            rejected: 'Rejected',
        };
        return labels[status];
    }

    public getApprovalBadgeClass(
        status: ApprovalStatus,
    ): Record<string, boolean> {
        return {
            'bg-success-light text-success': status === 'completed',
            'bg-base-200 text-base-content': status === 'pending',
            'bg-error-light text-error': status === 'rejected',
        };
    }

    public getCompletedApprovals(approvals: Approval[]): number {
        return approvals.filter((a) => a.status === 'completed').length;
    }

    public getApprovalProgress(approvals: Approval[]): number {
        if (approvals.length === 0) return 0;
        return (this.getCompletedApprovals(approvals) / approvals.length) * 100;
    }

    public formatDate(date: Date): string {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }
}
