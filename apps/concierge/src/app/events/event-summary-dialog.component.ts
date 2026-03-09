import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { CalendarEvent } from '@placeos/common';
import { addMinutes, format } from 'date-fns';

import {
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
    EventOrderDetail,
    getEventOrder,
    getEventFamilyOrders,
} from './event-approvals-mock.data';
import {
    CateringMenuItem,
    UNIT_LABELS,
    getMenuItemById,
} from '../room-manager/ucla-catering-menu';
import { EventApprovalStateService } from './event-approval-state.service';
import { EventFinanceStateService } from './event-finance-state.service';
import {
    BillableCategory,
    BILLABLE_CATEGORY_DISPLAY,
    FinancialDocument,
    FinancialLineItem,
    MOCK_FINANCIAL_DOCUMENTS,
} from './event-finance-mock.data';
import { generateFinancePdf } from './event-finance-pdf.util';

export interface EventSummaryData {
    event?: MockApprovalEvent;
    calendar_event?: CalendarEvent;
}

interface ApprovalItem {
    id: string;
    category: ApprovalCategory;
    title: string;
    status: string;
    is_adhoc: boolean;
}

interface ResolvedOrderItem {
    menu_item: CateringMenuItem;
    quantity: number;
    notes?: string;
    line_total: number;
}

interface OrderGroup {
    label: string;
    icon: string;
    items: ResolvedOrderItem[];
    subtotal: number;
}

@Component({
    selector: 'event-summary-dialog',
    template: `
        <div class="w-[56rem] max-h-[85vh] max-w-full overflow-y-auto">
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
            <div class="flex flex-col md:flex-row">
                <!-- Left column -->
                <div
                    class="flex-1 border-r border-base-300 px-6 py-5 space-y-6"
                >
                    <!-- Event Information -->
                    <div>
                        <h4 class="mb-3 text-sm font-semibold opacity-70">
                            Event Information
                        </h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >person</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Organizer</div>
                                    <div class="font-medium">{{ event.organiser }}</div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >mail</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Email</div>
                                    <div class="text-info">{{ organiserEmail() }}</div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >schedule</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Date & Time</div>
                                    <div class="font-medium">
                                        {{ formatDate(event.date) }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ formatTime(event.date) }} &ndash;
                                        {{ formatTime(addMins(event.date, event.duration_minutes)) }}
                                        ({{ event.duration_minutes }} min)
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >location_on</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Location</div>
                                    <div>{{ event.location }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Order Details -->
                    @if (order_groups.length) {
                        <div>
                            <h4 class="mb-3 text-sm font-semibold opacity-70">
                                {{ order_section_title }}
                            </h4>
                            @if (event_order?.guest_count) {
                                <div class="mb-3 flex items-center space-x-2 text-xs opacity-60">
                                    <icon class="text-sm">group</icon>
                                    <span>{{ event_order.guest_count }} guests</span>
                                </div>
                            }
                            <div class="rounded border border-base-300 divide-y divide-base-300">
                                @for (group of order_groups; track group.label) {
                                    <div class="p-3 space-y-2">
                                        <div class="flex items-center space-x-2 text-sm font-medium">
                                            <icon class="text-base opacity-50">{{ group.icon }}</icon>
                                            <span>{{ group.label }}</span>
                                        </div>
                                        <div class="space-y-1.5 text-sm">
                                            @for (item of group.items; track item.menu_item.id) {
                                                <div class="flex justify-between items-start">
                                                    <div class="flex-1 min-w-0">
                                                        <div>{{ item.menu_item.name }}</div>
                                                        <div class="text-xs opacity-50">
                                                            {{ item.quantity }} &times;
                                                            {{ formatCurrency(item.menu_item.default_price) }}{{ unitLabel(item.menu_item.unit) }}
                                                        </div>
                                                        @if (item.notes) {
                                                            <div class="text-xs italic opacity-40 mt-0.5">
                                                                {{ item.notes }}
                                                            </div>
                                                        }
                                                    </div>
                                                    <div class="font-medium whitespace-nowrap pl-3">
                                                        {{ formatCurrency(item.line_total) }}
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                        @if (group.items.length > 1) {
                                            <div class="flex justify-between text-xs pt-1 border-t border-base-200">
                                                <span class="opacity-50">Subtotal</span>
                                                <span class="font-medium">{{ formatCurrency(group.subtotal) }}</span>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                            @if (order_groups.length > 1) {
                                <div class="flex justify-between text-sm font-semibold mt-2 px-1">
                                    <span>Total</span>
                                    <span>{{ formatCurrency(order_grand_total) }}</span>
                                </div>
                            }
                        </div>
                    }

                    <!-- Payment & Invoice -->
                    @if (all_declined) {
                        <div>
                            <h4 class="mb-3 text-sm font-semibold opacity-70">
                                Payment & Invoice
                            </h4>
                            <div class="rounded border border-error/30 bg-error/5 p-4 text-center">
                                <icon class="text-error text-3xl mb-2">cancel</icon>
                                <p class="text-sm font-medium text-error">
                                    Event Request Cancelled
                                </p>
                                <p class="text-xs opacity-60 mt-1">
                                    All approvals were declined. No deposit required.
                                </p>
                            </div>
                        </div>
                    } @else if (quote) {
                        <div>
                            <h4 class="mb-3 text-sm font-semibold opacity-70">
                                Payment & Invoice
                            </h4>
                            <div class="rounded border border-base-300 p-4 space-y-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-lg opacity-50">receipt</icon>
                                        <span class="text-sm font-medium">{{ quote.doc_number }}</span>
                                    </div>
                                    <span
                                        class="rounded-full px-2 py-0.5 text-xs font-medium"
                                        [class]="quoteStatusClass()"
                                    >
                                        {{ quoteStatusLabel() }}
                                    </span>
                                </div>

                                <!-- Line items -->
                                <div class="space-y-1.5 text-sm">
                                    @for (item of quote.line_items; track item.id) {
                                        @if (dialog_editing_item_id() === item.id) {
                                            <div class="rounded border border-info/40 bg-info/5 p-2 space-y-2">
                                                <input
                                                    class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                    placeholder="Description"
                                                    [ngModel]="dialog_edit_form().description"
                                                    (ngModelChange)="updateDialogField('description', $event)"
                                                />
                                                <div class="grid grid-cols-3 gap-2">
                                                    <div>
                                                        <label class="text-xs opacity-50">Qty</label>
                                                        <input
                                                            type="number"
                                                            class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                            [ngModel]="dialog_edit_form().quantity"
                                                            (ngModelChange)="updateDialogField('quantity', +$event)"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label class="text-xs opacity-50">Unit Price</label>
                                                        <input
                                                            type="number"
                                                            class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                            [ngModel]="dialog_edit_form().unit_price"
                                                            (ngModelChange)="updateDialogField('unit_price', +$event)"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label class="text-xs opacity-50">Tax %</label>
                                                        <input
                                                            type="number"
                                                            class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                            [ngModel]="dialog_edit_form().tax_rate"
                                                            (ngModelChange)="updateDialogField('tax_rate', +$event)"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="flex justify-end space-x-2">
                                                    <button icon matRipple class="h-6 w-6 text-error" (click)="dialogCancelEdit()">
                                                        <icon class="text-sm">close</icon>
                                                    </button>
                                                    <button icon matRipple class="h-6 w-6 text-success" (click)="dialogSaveEdit(item.id)">
                                                        <icon class="text-sm">check</icon>
                                                    </button>
                                                </div>
                                            </div>
                                        } @else {
                                            <div class="flex justify-between items-center">
                                                <div>
                                                    <div class="font-medium">{{ item.description }}</div>
                                                </div>
                                                <div class="flex items-center space-x-2">
                                                    <div class="font-medium whitespace-nowrap">
                                                        {{ formatCurrency(item.line_total) }}
                                                    </div>
                                                    @if (dialogCanEdit()) {
                                                        <button icon matRipple class="h-5 w-5 opacity-50 hover:opacity-100" (click)="dialogStartEdit(item)">
                                                            <icon class="text-xs">edit</icon>
                                                        </button>
                                                        @if (dialog_confirming_delete_id() === item.id) {
                                                            <span class="text-xs text-error font-medium">Delete?</span>
                                                            <button matRipple class="rounded bg-error px-1.5 py-0.5 text-xs font-medium text-white" (click)="dialogConfirmRemove(item.id)">Yes</button>
                                                            <button matRipple class="rounded border border-base-300 px-1.5 py-0.5 text-xs font-medium" (click)="dialog_confirming_delete_id.set(null)">No</button>
                                                        } @else {
                                                            <button icon matRipple class="h-5 w-5 opacity-50 hover:opacity-100 hover:text-error" (click)="dialog_confirming_delete_id.set(item.id)">
                                                                <icon class="text-xs">delete</icon>
                                                            </button>
                                                        }
                                                    }
                                                </div>
                                            </div>
                                        }
                                    }
                                </div>

                                <!-- Add new item in dialog -->
                                @if (dialog_adding_new_item()) {
                                    <div class="rounded border border-success/40 bg-success/5 p-2 space-y-2">
                                        <div class="text-xs font-medium">New Line Item</div>
                                        <input
                                            class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                            placeholder="Description"
                                            [ngModel]="dialog_edit_form().description"
                                            (ngModelChange)="updateDialogField('description', $event)"
                                        />
                                        <div class="grid grid-cols-3 gap-2">
                                            <div>
                                                <label class="text-xs opacity-50">Qty</label>
                                                <input
                                                    type="number"
                                                    class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                    [ngModel]="dialog_edit_form().quantity"
                                                    (ngModelChange)="updateDialogField('quantity', +$event)"
                                                />
                                            </div>
                                            <div>
                                                <label class="text-xs opacity-50">Unit Price</label>
                                                <input
                                                    type="number"
                                                    class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                    [ngModel]="dialog_edit_form().unit_price"
                                                    (ngModelChange)="updateDialogField('unit_price', +$event)"
                                                />
                                            </div>
                                            <div>
                                                <label class="text-xs opacity-50">Tax %</label>
                                                <input
                                                    type="number"
                                                    class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                    [ngModel]="dialog_edit_form().tax_rate"
                                                    (ngModelChange)="updateDialogField('tax_rate', +$event)"
                                                />
                                            </div>
                                        </div>
                                        <div class="flex justify-end space-x-2">
                                            <button icon matRipple class="h-6 w-6 text-error" (click)="dialog_adding_new_item.set(false)">
                                                <icon class="text-sm">close</icon>
                                            </button>
                                            <button icon matRipple class="h-6 w-6 text-success" (click)="dialogSaveAdd()">
                                                <icon class="text-sm">check</icon>
                                            </button>
                                        </div>
                                    </div>
                                }
                                @if (dialogCanEdit() && !dialog_adding_new_item() && !dialog_editing_item_id()) {
                                    <button
                                        matRipple
                                        class="flex w-full items-center justify-center space-x-1 rounded border border-dashed border-base-300 px-2 py-1 text-xs opacity-60 hover:opacity-100"
                                        (click)="dialogStartAdd()"
                                    >
                                        <icon class="text-sm">add</icon>
                                        <span>Add Item</span>
                                    </button>
                                }

                                <div class="border-t border-base-300 pt-2 space-y-1 text-sm">
                                    <div class="flex justify-between">
                                        <span class="opacity-60">Subtotal</span>
                                        <span>{{ formatCurrency(quote.subtotal) }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="opacity-60">Tax</span>
                                        <span>{{ formatCurrency(quote.tax_total) }}</span>
                                    </div>
                                    <div class="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>{{ formatCurrency(quote.total) }}</span>
                                    </div>
                                </div>

                                @if (deposit) {
                                    <div class="border-t border-base-300 pt-2">
                                        <div class="flex justify-between text-sm">
                                            <div class="flex items-center space-x-1.5">
                                                <icon class="text-base opacity-50">payments</icon>
                                                <span>Deposit ({{ deposit.deposit_percent }}%)</span>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <span class="font-medium">{{ formatCurrency(deposit.total) }}</span>
                                                <span
                                                    class="rounded-full px-2 py-0.5 text-xs font-medium"
                                                    [class]="depositStatusClass()"
                                                >
                                                    {{ depositStatusLabel() }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <div class="flex gap-2 pt-1">
                                    <button
                                        matRipple
                                        class="flex items-center space-x-1 rounded border border-base-300 px-3 py-1.5 text-xs font-medium hover:bg-base-200"
                                        (click)="downloadQuotePdf()"
                                    >
                                        <icon class="text-base">download</icon>
                                        <span>Download PDF</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <!-- Right column -->
                <div class="flex-1 px-6 py-5 space-y-6">
                    @if (approval_items.length) {
                        <!-- Approval Progress -->
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="text-sm font-semibold opacity-70">
                                    Approval Progress
                                </h4>
                                <span class="text-sm font-medium">
                                    {{ approvalPercent() }}% Complete
                                </span>
                            </div>
                            <mat-progress-bar
                                mode="determinate"
                                [value]="approvalPercent()"
                                class="rounded"
                            />
                            <div class="mt-1 text-xs opacity-50">
                                {{ approvedCount() }} of {{ approval_items.length }} approvals complete
                            </div>
                        </div>

                        <!-- Approval Timeline -->
                        <div>
                            <h4 class="mb-3 text-sm font-semibold opacity-70">
                                Approval Timeline
                            </h4>

                            <!-- Submitted entry -->
                            <div class="flex items-start space-x-3 pb-4">
                                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-info">
                                    <icon class="text-sm text-white">send</icon>
                                </span>
                                <div>
                                    <div class="text-sm font-medium">Event Submitted</div>
                                    <div class="text-xs opacity-50">
                                        {{ formatDateTime(event.date - 7 * 24 * 60 * 60 * 1000) }}
                                    </div>
                                </div>
                            </div>

                            <!-- Approval entries -->
                            <div class="space-y-3">
                                @for (item of approval_items; track item.id) {
                                    <div class="flex items-start space-x-3">
                                        @switch (item.status) {
                                            @case ('approved') {
                                                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success">
                                                    <icon class="text-sm text-white">check_circle</icon>
                                                </span>
                                            }
                                            @case ('declined') {
                                                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-error">
                                                    <icon class="text-sm text-white">cancel</icon>
                                                </span>
                                            }
                                            @default {
                                                <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning">
                                                    <icon class="text-sm text-white">schedule</icon>
                                                </span>
                                            }
                                        }
                                        <div class="flex-1 min-w-0">
                                            <div class="flex items-center justify-between">
                                                <div class="text-sm font-medium">
                                                    {{ categoryName(item.category) }}
                                                </div>
                                                <span
                                                    class="text-xs font-medium"
                                                    [class.text-success]="item.status === 'approved'"
                                                    [class.text-error]="item.status === 'declined'"
                                                    [class.text-warning]="item.status === 'pending'"
                                                >
                                                    {{ item.status === 'approved' ? 'Approved' : item.status === 'declined' ? 'Declined' : 'Pending' }}
                                                </span>
                                            </div>
                                            @if (item.status === 'approved') {
                                                <div class="text-xs opacity-50 mt-0.5">
                                                    Completed
                                                </div>
                                            }
                                            @if (item.status === 'pending') {
                                                <div class="text-xs text-warning mt-0.5">
                                                    Awaiting approval
                                                </div>
                                            }
                                            @if (item.status === 'declined') {
                                                <div class="text-xs text-error mt-0.5">
                                                    Action required
                                                </div>
                                            }
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    } @else {
                        <!-- No approvals needed — event confirmed -->
                        <div class="rounded border border-success/30 bg-success/5 p-5 text-center">
                            <span class="flex mx-auto mb-2 h-10 w-10 items-center justify-center rounded-full bg-success">
                                <icon class="text-xl text-white">check_circle</icon>
                            </span>
                            <p class="text-sm font-semibold text-success">Event Confirmed</p>
                            <p class="text-xs opacity-60 mt-1">No approvals required for this event.</p>
                        </div>
                    }

                    <!-- Related Services -->
                    @if (child_events.length || !event.parent_event) {
                        <div>
                            <div class="flex items-center justify-between mb-2">
                                <h4 class="text-sm font-semibold opacity-70">
                                    Related Services
                                </h4>
                                <button
                                    matRipple
                                    class="flex items-center space-x-1 rounded px-2 py-1 text-xs opacity-60 hover:opacity-100 hover:bg-base-200"
                                    (click)="show_cancelled.set(!show_cancelled())"
                                >
                                    <icon class="text-sm">{{ show_cancelled() ? 'visibility' : 'visibility_off' }}</icon>
                                    <span>{{ show_cancelled() ? 'Hide' : 'Show' }} Cancelled</span>
                                </button>
                            </div>
                            <div class="space-y-1.5">
                                @for (child of regular_child_events; track child.id) {
                                    <div
                                        [class.opacity-40]="getStatus(child.id) === 'declined'"
                                    >
                                        <div class="flex items-center justify-between text-sm">
                                            <div class="flex items-center space-x-2 min-w-0">
                                                <span
                                                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded"
                                                    [class]="serviceBadgeColor(child.category)"
                                                >
                                                    <icon class="text-xs text-white">{{
                                                        categoryIcon(child.category)
                                                    }}</icon>
                                                </span>
                                                <span [class.line-through]="getStatus(child.id) === 'declined'">
                                                    {{ child.title }}
                                                </span>
                                            </div>
                                            <span
                                                class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                                                [class]="serviceStatusClass(getStatus(child.id))"
                                            >
                                                {{ serviceStatusLabel(getStatus(child.id)) }}
                                            </span>
                                        </div>
                                        @if (child.refund_deadline && getStatus(child.id) !== 'declined') {
                                            <div class="ml-8 mt-0.5 flex items-center space-x-1">
                                                @if (editing_refund_id() === child.id) {
                                                    <input
                                                        type="date"
                                                        class="rounded border border-base-300 bg-base-100 px-1.5 py-0.5 text-xs"
                                                        [ngModel]="editing_refund_date()"
                                                        (ngModelChange)="editing_refund_date.set($event)"
                                                    />
                                                    <button icon matRipple class="h-5 w-5 text-success" (click)="saveEditRefund(child.id)">
                                                        <icon class="text-xs">check</icon>
                                                    </button>
                                                    <button icon matRipple class="h-5 w-5 text-error" (click)="cancelEditRefund()">
                                                        <icon class="text-xs">close</icon>
                                                    </button>
                                                } @else {
                                                    @if (isRefundable(child)) {
                                                        <span class="text-xs text-success">
                                                            Refundable until {{ formatRefundDeadline(child) }}
                                                        </span>
                                                    } @else {
                                                        <span class="text-xs text-error">
                                                            Non-refundable (since {{ formatRefundDeadline(child) }})
                                                        </span>
                                                    }
                                                    <button icon matRipple class="h-5 w-5 opacity-40 hover:opacity-100" (click)="startEditRefund(child)">
                                                        <icon class="text-[10px]">edit</icon>
                                                    </button>
                                                }
                                            </div>
                                        }
                                    </div>
                                }
                            </div>

                            <!-- Last-Minute Additions -->
                            @if (adhoc_child_events.length) {
                                <div class="border-t border-base-300 mt-3 pt-3">
                                    <button
                                        matRipple
                                        class="flex w-full items-center justify-between text-sm font-semibold opacity-70 hover:opacity-100 py-1"
                                        (click)="show_adhoc.set(!show_adhoc())"
                                    >
                                        <span>Last-Minute Additions</span>
                                        <icon class="text-base">{{ show_adhoc() ? 'expand_less' : 'expand_more' }}</icon>
                                    </button>
                                    @if (show_adhoc()) {
                                        <div class="space-y-2 mt-2">
                                            @for (child of adhoc_child_events; track child.id) {
                                                <div
                                                    class="rounded border border-warning/30 bg-warning/5 p-2.5 text-sm"
                                                    [class.opacity-40]="getStatus(child.id) === 'declined'"
                                                >
                                                    <div class="flex items-center justify-between">
                                                        <div class="flex items-center space-x-2 min-w-0">
                                                            <span
                                                                class="flex h-6 w-6 shrink-0 items-center justify-center rounded"
                                                                [class]="serviceBadgeColor(child.category)"
                                                            >
                                                                <icon class="text-xs text-white">{{
                                                                    categoryIcon(child.category)
                                                                }}</icon>
                                                            </span>
                                                            <span [class.line-through]="getStatus(child.id) === 'declined'">
                                                                {{ child.title }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div class="flex items-center justify-between mt-1.5 ml-8">
                                                        <span class="text-xs opacity-50">
                                                            Added {{ child.added_date ? formatDateTime(child.added_date) : 'recently' }}
                                                        </span>
                                                        <div class="flex items-center space-x-1.5">
                                                            <span class="rounded-full bg-warning/20 text-warning px-2 py-0.5 text-xs font-medium">
                                                                Ad-hoc
                                                            </span>
                                                            <span
                                                                class="rounded-full px-2 py-0.5 text-xs font-medium"
                                                                [class]="serviceStatusClass(getStatus(child.id))"
                                                            >
                                                                {{ serviceStatusLabel(getStatus(child.id)) }}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                            }

                            <!-- Add Ad-Hoc Service -->
                            @if (!event.parent_event) {
                                @if (adding_adhoc_service()) {
                                    <div class="rounded border border-warning/40 bg-warning/5 p-3 space-y-3 mt-3">
                                        <div class="text-xs font-semibold opacity-70">New Ad-Hoc Service</div>
                                        <mat-select
                                            placeholder="Select category"
                                            [value]="adhoc_form().category"
                                            (selectionChange)="updateAdhocField('category', $event.value)"
                                            class="w-full rounded border border-base-300 bg-base-100 text-sm"
                                        >
                                            @for (opt of ADHOC_CATEGORY_OPTIONS; track opt.key) {
                                                <mat-option [value]="opt.key">
                                                    {{ opt.label }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                        <input
                                            class="w-full rounded border border-base-300 bg-base-100 px-2 py-1.5 text-sm"
                                            placeholder="Service title"
                                            [ngModel]="adhoc_form().title"
                                            (ngModelChange)="updateAdhocField('title', $event)"
                                        />
                                        <div>
                                            <label class="text-xs opacity-50">Unit price (optional, for invoice)</label>
                                            <input
                                                type="number"
                                                class="w-full rounded border border-base-300 bg-base-100 px-2 py-1.5 text-sm"
                                                [ngModel]="adhoc_form().unit_price"
                                                (ngModelChange)="updateAdhocField('unit_price', +$event)"
                                            />
                                        </div>
                                        <div class="flex justify-end space-x-2">
                                            <button icon matRipple class="h-7 w-7 text-error" (click)="cancelAddAdhoc()">
                                                <icon class="text-base">close</icon>
                                            </button>
                                            <button icon matRipple class="h-7 w-7 text-success" (click)="saveAddAdhoc()">
                                                <icon class="text-base">check</icon>
                                            </button>
                                        </div>
                                    </div>
                                } @else {
                                    <button
                                        matRipple
                                        class="flex w-full items-center justify-center space-x-1.5 rounded border border-dashed border-warning/50 px-3 py-2 text-xs font-medium text-warning hover:bg-warning/5 mt-3"
                                        (click)="startAddAdhoc()"
                                    >
                                        <icon class="text-sm">add_circle</icon>
                                        <span>Add Ad-Hoc Service</span>
                                    </button>
                                }
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        FormsModule,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatProgressBarModule,
        MatSelectModule,
    ],
})
export class EventSummaryDialogComponent {
    readonly data = inject<EventSummaryData>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);
    private _approval_state = inject(EventApprovalStateService);
    private _finance_state = inject(EventFinanceStateService);

    private readonly _documents_signal = toSignal(
        this._finance_state.documents$,
        { initialValue: [] as FinancialDocument[] },
    );

    private readonly _currency_formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    private readonly _approval_status_signal = toSignal(
        this._approval_state.status$,
        { initialValue: this._approval_state.status },
    );

    readonly show_cancelled = signal(false);
    readonly show_adhoc = signal(true);
    readonly editing_refund_id = signal<string | null>(null);
    readonly editing_refund_date = signal('');

    readonly ADHOC_CATEGORY_OPTIONS: { key: ApprovalCategory; label: string; icon: string }[] = [
        { key: 'dining', label: 'Catering & Dining', icon: 'restaurant' },
        { key: 'av_tech', label: 'AV & Production', icon: 'videocam' },
        { key: 'setup', label: 'Setup & Furniture', icon: 'table_restaurant' },
        { key: 'safety', label: 'Safety & Security', icon: 'shield' },
        { key: 'parking', label: 'Parking & Transport', icon: 'local_parking' },
        { key: 'services', label: 'Event Services', icon: 'home_repair_service' },
    ];

    readonly adding_adhoc_service = signal(false);
    readonly adhoc_form = signal<{ category: ApprovalCategory | ''; title: string; unit_price: number }>({
        category: '', title: '', unit_price: 0,
    });

    private readonly _category_to_billable: Record<string, BillableCategory> = {
        venue: 'venue_hire', dining: 'catering', av_tech: 'av_equipment',
        safety: 'security', setup: 'setup',
        services: 'miscellaneous', parking: 'miscellaneous', events: 'miscellaneous',
    };

    startAddAdhoc(): void {
        this.adding_adhoc_service.set(true);
        this.adhoc_form.set({ category: '', title: '', unit_price: 0 });
    }

    cancelAddAdhoc(): void {
        this.adding_adhoc_service.set(false);
    }

    saveAddAdhoc(): void {
        const form = this.adhoc_form();
        if (!form.category || !form.title.trim()) return;

        const new_event: MockApprovalEvent = {
            id: 'appr-adhoc-' + Date.now(),
            title: form.title.trim(),
            category: form.category as ApprovalCategory,
            date: this.event.date,
            duration_minutes: this.event.duration_minutes,
            location: this.event.location,
            organiser: this.event.organiser,
            parent_event: this.event.id,
            is_adhoc: true,
            added_date: Date.now(),
        };

        MOCK_APPROVAL_EVENTS.push(new_event);

        if (form.unit_price > 0) {
            const q = this.quote;
            if (q) {
                const billable_category = this._category_to_billable[form.category] || 'miscellaneous';
                this._finance_state.addLineItem(q.id, {
                    description: `${form.title.trim()} (Ad-hoc)`,
                    category: billable_category,
                    quantity: 1,
                    unit_price: form.unit_price,
                    tax_rate: 0.1,
                });
            }
        }

        this._approval_state.refresh();
        this.adding_adhoc_service.set(false);
    }

    updateAdhocField(field: string, value: any): void {
        this.adhoc_form.set({ ...this.adhoc_form(), [field]: value });
    }

    /** Returns a MockApprovalEvent (real or synthesised from CalendarEvent). */
    get event(): MockApprovalEvent {
        if (this.data.event) return this.data.event;
        const ce = this.data.calendar_event!;
        return {
            id: ce.id,
            title: ce.title,
            category: 'venue' as ApprovalCategory,
            date: ce.date,
            duration_minutes: ce.duration,
            location: (ce as any).space?.display_name || ce.location || '',
            organiser: ce.organiser?.name || ce.host || 'Unknown',
        };
    }

    get parent_event(): MockApprovalEvent | null {
        if (!this.data.event?.parent_event) return null;
        return (
            MOCK_APPROVAL_EVENTS.find(
                (e) => e.id === this.data.event!.parent_event,
            ) || null
        );
    }

    get child_events(): MockApprovalEvent[] {
        if (!this.data.event) return [];
        return MOCK_APPROVAL_EVENTS.filter(
            (e) => e.parent_event === this.data.event!.id,
        );
    }

    get regular_child_events(): MockApprovalEvent[] {
        const children = this.child_events.filter((e) => !e.is_adhoc);
        if (this.show_cancelled()) return children;
        return children.filter((e) => this.getStatus(e.id) !== 'declined');
    }

    get adhoc_child_events(): MockApprovalEvent[] {
        return this.child_events.filter((e) => e.is_adhoc);
    }

    /** Build the approval checklist from the event and its children. */
    get approval_items(): ApprovalItem[] {
        if (this.data.event) {
            const root = this.parent_event || this.event;
            const children = MOCK_APPROVAL_EVENTS.filter(
                (e) => e.parent_event === root.id,
            );
            return [root, ...children].map((evt) => ({
                id: evt.id,
                category: evt.category,
                title: evt.title,
                status: this.getStatus(evt.id),
                is_adhoc: evt.is_adhoc ?? false,
            }));
        }
        const ce = this.data.calendar_event;
        if (!ce) return [];
        const reqs = (ce as any).extension_data?.requirements;
        if (!reqs) return [];
        return Object.entries(reqs)
            .filter(([_, status]) => status !== undefined)
            .map(([category, status]) => ({
                id: `${ce.id}-${category}`,
                category: category as ApprovalCategory,
                title: CATEGORY_DISPLAY_NAMES[category as ApprovalCategory] || category,
                status: (status as string) || 'pending',
                is_adhoc: false,
            }));
    }

    /** The quote linked to this event (or its parent). Reactive — reflects edits. */
    get quote(): FinancialDocument | null {
        if (!this.data.event) return null;
        const root_id = this.parent_event?.id || this.event.id;
        const docs = this._documents_signal();
        return (
            docs.find(
                (d) => d.event_id === root_id && d.doc_type === 'quote',
            ) || null
        );
    }

    /** The deposit invoice linked to this event's quote. Only shown when all approvals have been actioned. */
    get deposit(): FinancialDocument | null {
        if (!this.data.event) return null;
        const q = this.quote;
        if (!q) return null;
        const all_actioned = this.approval_items.every(
            (i) => i.status === 'approved' || i.status === 'declined',
        );
        if (!all_actioned) return null;
        const docs = this._documents_signal();
        return (
            docs.find(
                (d) =>
                    d.converted_from === q.id &&
                    d.invoice_type === 'deposit',
            ) || null
        );
    }

    /** True when every approval has been declined — event is effectively cancelled */
    get all_declined(): boolean {
        const items = this.approval_items;
        return (
            items.length > 0 && items.every((i) => i.status === 'declined')
        );
    }

    /** Order for this specific event. */
    get event_order(): EventOrderDetail | undefined {
        if (!this.data.event) return undefined;
        return getEventOrder(this.data.event.id);
    }

    /** Resolved order groups ready for display. */
    get order_groups(): OrderGroup[] {
        if (!this.data.event) return [];
        const evt = this.data.event;
        const is_parent = !evt.parent_event &&
            MOCK_APPROVAL_EVENTS.some((e) => e.parent_event === evt.id);
        if (is_parent) {
            return this._resolveAggregatedOrders(evt.id);
        }
        const order = getEventOrder(evt.id);
        if (!order) return [];
        return this._resolveOrderGroups(order);
    }

    /** Grand total across all order groups. */
    get order_grand_total(): number {
        return this.order_groups.reduce((sum, g) => sum + g.subtotal, 0);
    }

    /** Section title based on event category. */
    get order_section_title(): string {
        if (!this.data.event) return 'Order Details';
        const is_parent = !this.data.event.parent_event &&
            MOCK_APPROVAL_EVENTS.some((e) => e.parent_event === this.data.event!.id);
        if (is_parent) return 'Order Details';
        const titles: Record<string, string> = {
            dining: 'Catering Order',
            av_tech: 'AV & Equipment',
            setup: 'Setup & Furniture',
            services: 'Event Services',
        };
        return titles[this.data.event.category] || 'Order Details';
    }

    approvedCount(): number {
        return this.approval_items.filter((i) => i.status === 'approved')
            .length;
    }

    approvalPercent(): number {
        const items = this.approval_items;
        if (!items.length) return 0;
        return Math.round((this.approvedCount() / items.length) * 100);
    }

    getStatus(event_id: string): string {
        return this._approval_status_signal()[event_id] || 'pending';
    }

    categoryIcon(category: string): string {
        return CATEGORY_ICONS[category] || 'event';
    }

    categoryName(category: string): string {
        return CATEGORY_DISPLAY_NAMES[category] || category;
    }

    organiserEmail(): string {
        if (this.data.calendar_event) {
            return this.data.calendar_event.organiser?.email || this.data.calendar_event.host || '';
        }
        return (
            this.event.organiser
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '.') + '@ucla.edu'
        );
    }

    quoteStatusLabel(): string {
        const q = this.quote;
        if (!q) return '';
        const has_pending = this.approval_items.some(
            (i) => i.status === 'pending',
        );
        if (has_pending && q.status === 'draft')
            return 'Awaiting Approvals';
        return q.status.charAt(0).toUpperCase() + q.status.slice(1);
    }

    quoteStatusClass(): string {
        const s = this.quote?.status;
        const has_pending = this.approval_items.some(
            (i) => i.status === 'pending',
        );
        if (has_pending && s === 'draft')
            return 'bg-warning/20 text-warning';
        if (s === 'accepted') return 'bg-success/20 text-success';
        if (s === 'draft') return 'bg-base-200 text-base-content';
        if (s === 'sent') return 'bg-info/20 text-info';
        return 'bg-base-200 text-base-content';
    }

    depositStatusLabel(): string {
        const d = this.deposit;
        if (!d) return '';
        return d.status.charAt(0).toUpperCase() + d.status.slice(1);
    }

    depositStatusClass(): string {
        const s = this.deposit?.status;
        if (s === 'paid') return 'bg-success/20 text-success';
        if (s === 'invoiced') return 'bg-warning/20 text-warning';
        if (s === 'overdue') return 'bg-error/20 text-error';
        return 'bg-base-200 text-base-content';
    }

    private readonly _service_badge_colors: Record<string, string> = {
        venue: 'bg-blue-600',
        dining: 'bg-amber-600',
        av_tech: 'bg-purple-600',
        safety: 'bg-red-600',
        events: 'bg-teal-600',
        parking: 'bg-indigo-600',
        setup: 'bg-orange-600',
        services: 'bg-cyan-600',
    };

    serviceBadgeColor(category: string): string {
        return this._service_badge_colors[category] || 'bg-gray-500';
    }

    serviceStatusClass(status: string): string {
        if (status === 'approved') return 'bg-success/20 text-success';
        if (status === 'declined') return 'bg-error/20 text-error';
        return 'bg-warning/20 text-warning';
    }

    serviceStatusLabel(status: string): string {
        if (status === 'approved') return 'Approved';
        if (status === 'declined') return 'Cancelled';
        return 'Pending';
    }

    // ── Line item editing in dialog ─────────────────────────────────

    readonly dialog_editing_item_id = signal<string | null>(null);
    readonly dialog_adding_new_item = signal(false);
    readonly dialog_confirming_delete_id = signal<string | null>(null);
    readonly dialog_edit_form = signal<{
        description: string;
        quantity: number;
        unit_price: number;
        tax_rate: number;
    }>({
        description: '',
        quantity: 1,
        unit_price: 0,
        tax_rate: 10,
    });

    dialogCanEdit(): boolean {
        const q = this.quote;
        if (!q) return false;
        const editable_statuses = ['draft', 'sent', 'accepted', 'invoiced'];
        return (
            editable_statuses.includes(q.status) &&
            this._finance_state.canPerformAction('edit_line_items')
        );
    }

    dialogStartEdit(item: FinancialLineItem): void {
        this.dialog_editing_item_id.set(item.id);
        this.dialog_edit_form.set({
            description: item.description,
            quantity: item.quantity,
            unit_price: item.unit_price,
            tax_rate: item.tax_rate * 100,
        });
    }

    dialogCancelEdit(): void {
        this.dialog_editing_item_id.set(null);
    }

    dialogSaveEdit(item_id: string): void {
        const q = this.quote;
        if (!q) return;
        const form = this.dialog_edit_form();
        this._finance_state.updateLineItem(q.id, item_id, {
            description: form.description,
            quantity: form.quantity,
            unit_price: form.unit_price,
            tax_rate: form.tax_rate / 100,
        });
        this.dialogCancelEdit();
    }

    dialogRemoveItem(item_id: string): void {
        const q = this.quote;
        if (!q) return;
        this._finance_state.removeLineItem(q.id, item_id);
    }

    dialogConfirmRemove(item_id: string): void {
        this.dialogRemoveItem(item_id);
        this.dialog_confirming_delete_id.set(null);
    }

    dialogStartAdd(): void {
        this.dialog_adding_new_item.set(true);
        this.dialog_edit_form.set({
            description: '',
            quantity: 1,
            unit_price: 0,
            tax_rate: 10,
        });
    }

    dialogSaveAdd(): void {
        const q = this.quote;
        if (!q) return;
        const form = this.dialog_edit_form();
        this._finance_state.addLineItem(q.id, {
            description: form.description,
            category: 'miscellaneous' as BillableCategory,
            quantity: form.quantity,
            unit_price: form.unit_price,
            tax_rate: form.tax_rate / 100,
        });
        this.dialog_adding_new_item.set(false);
    }

    updateDialogField(field: string, value: any): void {
        this.dialog_edit_form.set({ ...this.dialog_edit_form(), [field]: value });
    }

    // ── Refund deadline editing ────────────────────────────────────

    isRefundable(child: MockApprovalEvent): boolean {
        return !child.refund_deadline || Date.now() < child.refund_deadline;
    }

    formatRefundDeadline(child: MockApprovalEvent): string {
        if (!child.refund_deadline) return '';
        return format(child.refund_deadline, 'd MMM yyyy');
    }

    startEditRefund(child: MockApprovalEvent): void {
        this.editing_refund_id.set(child.id);
        this.editing_refund_date.set(
            child.refund_deadline
                ? format(child.refund_deadline, 'yyyy-MM-dd')
                : '',
        );
    }

    saveEditRefund(child_id: string): void {
        const date_str = this.editing_refund_date();
        const evt = MOCK_APPROVAL_EVENTS.find((e) => e.id === child_id);
        if (evt && date_str) {
            evt.refund_deadline = new Date(date_str).valueOf();
        }
        this.editing_refund_id.set(null);
        this._approval_state.refresh();
    }

    cancelEditRefund(): void {
        this.editing_refund_id.set(null);
    }

    formatCurrency(value: number): string {
        return this._currency_formatter.format(value);
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

    formatDateTime(ts: number): string {
        return format(ts, 'd MMM yyyy, h:mm a');
    }

    addMins(ts: number, mins: number): number {
        return addMinutes(ts, mins).valueOf();
    }

    downloadQuotePdf(): void {
        if (this.quote) generateFinancePdf(this.quote);
    }

    unitLabel(unit: string): string {
        return UNIT_LABELS[unit] || '';
    }

    /** Resolve an order into display groups by menu category. */
    private _resolveOrderGroups(order: EventOrderDetail): OrderGroup[] {
        const group_map = new Map<string, ResolvedOrderItem[]>();
        for (const line of order.items) {
            const menu_item = getMenuItemById(line.menu_item_id);
            if (!menu_item) continue;
            const key = menu_item.category;
            const resolved: ResolvedOrderItem = {
                menu_item,
                quantity: line.quantity,
                notes: line.notes,
                line_total: line.quantity * menu_item.default_price,
            };
            if (!group_map.has(key)) group_map.set(key, []);
            group_map.get(key)!.push(resolved);
        }
        const groups: OrderGroup[] = [];
        for (const [key, items] of group_map) {
            groups.push({
                label: this._categoryGroupLabel(key),
                icon: this._categoryGroupIcon(key),
                items,
                subtotal: items.reduce((s, i) => s + i.line_total, 0),
            });
        }
        return groups;
    }

    /** Merge all child orders for a parent event, then resolve. */
    private _resolveAggregatedOrders(parent_id: string): OrderGroup[] {
        const family_orders = getEventFamilyOrders(parent_id);
        if (!family_orders.length) return [];
        const merged: EventOrderDetail = {
            event_id: parent_id,
            items: family_orders.flatMap((o) => o.items),
        };
        return this._resolveOrderGroups(merged);
    }

    private _categoryGroupLabel(category: string): string {
        const labels: Record<string, string> = {
            breakfast: 'Breakfast',
            brunch: 'Brunch',
            lunch: 'Lunch',
            dinner: 'Dinner',
            breaks: 'Breaks & Snacks',
            reception: 'Reception & Hors d\'oeuvres',
            beverages: 'Beverages',
            bakery: 'Bakery & Pastries',
            gameday: 'Gameday',
            setup: 'Setup & Furniture',
            av_rental: 'AV Equipment',
            av_staffing: 'AV Staffing',
            service_charges: 'Service Charges',
        };
        return labels[category] || category;
    }

    private _categoryGroupIcon(category: string): string {
        const icons: Record<string, string> = {
            breakfast: 'free_breakfast',
            brunch: 'brunch_dining',
            lunch: 'lunch_dining',
            dinner: 'dinner_dining',
            breaks: 'cookie',
            reception: 'wine_bar',
            beverages: 'local_cafe',
            bakery: 'bakery_dining',
            gameday: 'sports_football',
            setup: 'table_restaurant',
            av_rental: 'videocam',
            av_staffing: 'engineering',
            service_charges: 'receipt_long',
        };
        return icons[category] || 'category';
    }
}
