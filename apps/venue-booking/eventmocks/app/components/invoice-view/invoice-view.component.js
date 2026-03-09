/**
 * Invoice View Component
 * Displays itemized invoice with payment status
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('invoiceView', {
            bindings: {
                invoice: '<',
                event: '<',
                onPay: '&',
                compact: '<'
            },
            template: `
                <div class="invoice-view" ng-class="{'compact': $ctrl.compact}">
                    <div class="invoice-header">
                        <div class="invoice-title">
                            <h3 ng-if="!$ctrl.compact">Invoice</h3>
                            <h4 ng-if="$ctrl.compact">Payment Summary</h4>
                            <span class="invoice-id" ng-if="$ctrl.invoice.id">{{ $ctrl.invoice.id }}</span>
                        </div>
                        <div class="invoice-status" ng-class="'status-' + $ctrl.getPaymentStatus()">
                            {{ $ctrl.getPaymentStatusLabel() }}
                        </div>
                    </div>

                    <!-- Line Items -->
                    <div class="invoice-items">
                        <div class="invoice-section" ng-if="$ctrl.getVenueItems().length > 0">
                            <h5 ng-if="!$ctrl.compact">Venue</h5>
                            <div class="line-item" ng-repeat="item in $ctrl.getVenueItems()"
                                 ng-class="{'cancelled-item': item.cancelled}">
                                <div class="item-details">
                                    <span class="item-name">{{ item.name }}</span>
                                    <span class="cancelled-label" ng-if="item.cancelled">Cancelled</span>
                                    <span class="item-description" ng-if="item.description && !$ctrl.compact">{{ item.description }}</span>
                                </div>
                                <span class="item-amount">{{ $ctrl.formatCurrency(item.total) }}</span>
                            </div>
                        </div>

                        <div class="invoice-section" ng-if="$ctrl.getServiceItems().length > 0">
                            <h5 ng-if="!$ctrl.compact">Services</h5>
                            <div class="line-item" ng-repeat="item in $ctrl.getServiceItems()"
                                 ng-class="{'cancelled-item': item.cancelled}">
                                <div class="item-details">
                                    <span class="item-name">{{ item.name }}</span>
                                    <span class="cancelled-label" ng-if="item.cancelled">Cancelled</span>
                                    <span class="item-description" ng-if="item.description && !$ctrl.compact">{{ item.description }}</span>
                                </div>
                                <span class="item-amount">{{ $ctrl.formatCurrency(item.total) }}</span>
                            </div>
                        </div>

                        <!-- Refund deductions -->
                        <div class="invoice-section" ng-if="$ctrl.getTotalRefunds() > 0">
                            <h5 ng-if="!$ctrl.compact">Refunds</h5>
                            <div class="line-item refund-line" ng-repeat="refund in $ctrl.getRefundItems()">
                                <div class="item-details">
                                    <span class="item-name">{{ refund.name }} (refund)</span>
                                </div>
                                <span class="item-amount">-{{ $ctrl.formatCurrency(refund.amount) }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Subtotal & Fees -->
                    <div class="invoice-subtotal">
                        <div class="subtotal-row">
                            <span>Subtotal</span>
                            <span>{{ $ctrl.formatCurrency($ctrl.invoice.quote.subtotal) }}</span>
                        </div>
                        <div class="fee-row" ng-repeat="fee in $ctrl.invoice.quote.fees">
                            <span>{{ fee.name }}</span>
                            <span>{{ $ctrl.formatCurrency(fee.amount) }}</span>
                        </div>
                    </div>

                    <!-- Total -->
                    <div class="invoice-total" ng-class="{'cancelled-item': $ctrl.getTotalRefunds() > 0}">
                        <span>Original Total</span>
                        <span>{{ $ctrl.formatCurrency($ctrl.invoice.quote.total) }}</span>
                    </div>

                    <!-- Adjusted Total (after refunds) -->
                    <div class="invoice-adjusted-total" ng-if="$ctrl.getTotalRefunds() > 0">
                        <span>Adjusted Total</span>
                        <span>{{ $ctrl.formatCurrency($ctrl.getAdjustedTotal()) }}</span>
                    </div>

                    <!-- Payment Info -->
                    <div class="invoice-payments" ng-if="$ctrl.invoice.payments && $ctrl.invoice.payments.length > 0">
                        <h5>Payments</h5>
                        <div class="payment-record" ng-repeat="payment in $ctrl.invoice.payments">
                            <div class="payment-info">
                                <span class="payment-method">
                                    <span class="material-icons" ng-if="payment.paymentMethod === 'card'">credit_card</span>
                                    <span class="material-icons" ng-if="payment.paymentMethod === 'fau'">account_balance</span>
                                    <span ng-if="payment.paymentMethod === 'card'">
                                        {{ payment.cardBrand | uppercase }} •••• {{ payment.cardLast4 }}
                                    </span>
                                    <span ng-if="payment.paymentMethod === 'fau'">
                                        FAU: {{ payment.fauCode }}
                                    </span>
                                </span>
                                <span class="payment-date">{{ $ctrl.formatDate(payment.createdAt) }}</span>
                            </div>
                            <div class="payment-amount-status">
                                <span class="payment-amount">{{ $ctrl.formatCurrency(payment.amount) }}</span>
                                <span class="payment-status" ng-class="'status-' + payment.status">
                                    {{ $ctrl.getPaymentStatusLabel(payment.status) }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Amount Due -->
                    <div class="invoice-due" ng-if="$ctrl.getAmountDue() > 0">
                        <div class="due-row">
                            <span>Amount Due</span>
                            <span class="due-amount">{{ $ctrl.formatCurrency($ctrl.getAmountDue()) }}</span>
                        </div>
                        <button class="btn btn-primary" ng-click="$ctrl.payNow()" ng-if="$ctrl.onPay">
                            Pay Now
                        </button>
                    </div>

                    <!-- Paid Badge -->
                    <div class="invoice-paid-badge" ng-if="$ctrl.getAmountDue() <= 0 && $ctrl.invoice.payments.length > 0">
                        <span class="material-icons">check_circle</span>
                        <span>Paid in Full</span>
                    </div>

                    <!-- Download/Print Actions -->
                    <div class="invoice-actions" ng-if="!$ctrl.compact">
                        <button class="btn btn-secondary btn-small" ng-click="$ctrl.downloadInvoice()">
                            <span class="material-icons">download</span>
                            Download PDF
                        </button>
                        <button class="btn btn-secondary btn-small" ng-click="$ctrl.printInvoice()">
                            <span class="material-icons">print</span>
                            Print
                        </button>
                    </div>
                </div>
            `,
            controller: InvoiceViewController
        });

    InvoiceViewController.$inject = ['PaymentService'];

    function InvoiceViewController(PaymentService) {
        var ctrl = this;

        ctrl.formatCurrency = function(amount) {
            return PaymentService.formatCurrency(amount || 0);
        };

        ctrl.formatDate = function(dateStr) {
            if (!dateStr) return '';
            var date = new Date(dateStr);
            return date.toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });
        };

        ctrl.getVenueItems = function() {
            if (!ctrl.invoice || !ctrl.invoice.quote || !ctrl.invoice.quote.lineItems) return [];
            return ctrl.invoice.quote.lineItems.filter(function(item) {
                return item.category === 'venue';
            });
        };

        ctrl.getServiceItems = function() {
            if (!ctrl.invoice || !ctrl.invoice.quote || !ctrl.invoice.quote.lineItems) return [];
            return ctrl.invoice.quote.lineItems.filter(function(item) {
                return item.category === 'service';
            });
        };

        ctrl.getPaymentStatus = function() {
            if (!ctrl.invoice) return 'pending';

            var amountDue = ctrl.getAmountDue();
            if (amountDue <= 0) return 'paid';
            if (ctrl.invoice.payments && ctrl.invoice.payments.length > 0) return 'partial';
            return 'pending';
        };

        ctrl.getPaymentStatusLabel = function(status) {
            if (!status) {
                status = ctrl.getPaymentStatus();
            }
            return PaymentService.getPaymentStatusLabel(status);
        };

        ctrl.getAmountDue = function() {
            if (!ctrl.invoice || !ctrl.invoice.quote) return 0;

            var paid = 0;
            if (ctrl.invoice.payments) {
                paid = ctrl.invoice.payments.reduce(function(sum, payment) {
                    if (payment.status === 'succeeded' || payment.status === 'completed') {
                        return sum + payment.amount;
                    }
                    return sum;
                }, 0);
            }

            return ctrl.invoice.quote.total - paid;
        };

        ctrl.payNow = function() {
            if (ctrl.onPay) {
                ctrl.onPay({ invoice: ctrl.invoice });
            }
        };

        /**
         * Get refund items from cancelled tasks/services
         */
        ctrl.getRefundItems = function() {
            if (!ctrl.event || !ctrl.event.extension_data) return [];

            var refunds = [];
            var workflow = ctrl.event.extension_data.workflow;
            var adhoc = ctrl.event.extension_data.adhoc_services || [];

            // Check cancelled approval tasks
            if (workflow && workflow.approval_tasks) {
                workflow.approval_tasks.forEach(function(task) {
                    if (task.status === 'cancelled' && task.refund_issued > 0) {
                        refunds.push({
                            name: task.stage,
                            amount: task.refund_issued
                        });
                    }
                });
            }

            // Check cancelled ad-hoc services
            adhoc.forEach(function(svc) {
                if (svc.status === 'cancelled' && svc.refund_issued > 0) {
                    refunds.push({
                        name: svc.name,
                        amount: svc.refund_issued
                    });
                }
            });

            return refunds;
        };

        /**
         * Get total refund amount
         */
        ctrl.getTotalRefunds = function() {
            return ctrl.getRefundItems().reduce(function(sum, r) {
                return sum + r.amount;
            }, 0);
        };

        /**
         * Get adjusted total after refunds
         */
        ctrl.getAdjustedTotal = function() {
            if (!ctrl.invoice || !ctrl.invoice.quote) return 0;
            return ctrl.invoice.quote.total - ctrl.getTotalRefunds();
        };

        ctrl.downloadInvoice = function() {
            alert('Invoice PDF download would be generated here.\n\nInvoice: ' + ctrl.invoice.id);
        };

        ctrl.printInvoice = function() {
            window.print();
        };
    }

})();
