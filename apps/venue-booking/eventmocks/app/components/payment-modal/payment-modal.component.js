/**
 * Payment Modal Component
 * Handles credit card, FAU/recharge codes, and split payments
 */

(function() {
    'use strict';

    angular.module('uclaEventsApp')
        .component('paymentModal', {
            bindings: {
                quote: '<',
                onPaymentComplete: '&',
                onClose: '&'
            },
            template: `
                <div class="payment-modal-overlay" ng-click="$ctrl.close()">
                    <div class="payment-modal" ng-click="$event.stopPropagation()" role="dialog" aria-modal="true" aria-labelledby="payment-modal-title">
                        <div class="payment-modal-header">
                            <h2 id="payment-modal-title">Complete Payment</h2>
                            <button class="btn-close" ng-click="$ctrl.close()" aria-label="Close payment modal">
                                <span class="material-icons" aria-hidden="true">close</span>
                            </button>
                        </div>

                        <div class="payment-modal-body">
                            <!-- Quote Summary -->
                            <div class="payment-quote-summary">
                                <h3>Order Summary</h3>
                                <div class="quote-items">
                                    <div class="quote-item" ng-repeat="item in $ctrl.quote.lineItems">
                                        <span class="item-name">{{ item.name }}</span>
                                        <span class="item-price">{{ $ctrl.formatCurrency(item.total) }}</span>
                                    </div>
                                </div>
                                <div class="quote-subtotal">
                                    <span>Subtotal</span>
                                    <span>{{ $ctrl.formatCurrency($ctrl.quote.subtotal) }}</span>
                                </div>
                                <div class="quote-fees">
                                    <div class="fee-item" ng-repeat="fee in $ctrl.quote.fees">
                                        <span>{{ fee.name }}</span>
                                        <span>{{ $ctrl.formatCurrency(fee.amount) }}</span>
                                    </div>
                                </div>
                                <div class="quote-total">
                                    <span>Total</span>
                                    <span>{{ $ctrl.formatCurrency($ctrl.quote.total) }}</span>
                                </div>
                            </div>

                            <!-- Payment Method Selection -->
                            <div class="payment-method-selector">
                                <h3>Payment Method</h3>
                                <div class="method-options" role="group" aria-label="Payment method options">
                                    <button class="method-option"
                                            ng-class="{'selected': $ctrl.paymentMethod === 'card'}"
                                            ng-click="$ctrl.selectMethod('card')">
                                        <span class="material-icons">credit_card</span>
                                        <span>Credit Card</span>
                                    </button>
                                    <button class="method-option"
                                            ng-class="{'selected': $ctrl.paymentMethod === 'fau'}"
                                            ng-click="$ctrl.selectMethod('fau')">
                                        <span class="material-icons">account_balance</span>
                                        <span>FAU/Recharge</span>
                                    </button>
                                    <button class="method-option"
                                            ng-class="{'selected': $ctrl.paymentMethod === 'split'}"
                                            ng-click="$ctrl.selectMethod('split')">
                                        <span class="material-icons">call_split</span>
                                        <span>Split Payment</span>
                                    </button>
                                </div>
                            </div>

                            <!-- Credit Card Form -->
                            <div class="payment-form card-form" ng-if="$ctrl.paymentMethod === 'card'">
                                <div class="stripe-badge">
                                    <span class="material-icons">lock</span>
                                    Secured by Stripe
                                </div>

                                <div class="form-group">
                                    <label for="card-number">Card Number</label>
                                    <div class="card-input-wrapper">
                                        <input type="text"
                                               id="card-number"
                                               class="form-control"
                                               ng-model="$ctrl.cardDetails.cardNumber"
                                               ng-change="$ctrl.formatCardNumber()"
                                               placeholder="1234 5678 9012 3456"
                                               maxlength="19">
                                        <span class="card-brand" ng-if="$ctrl.cardBrand">
                                            <img ng-src="{{ $ctrl.getCardBrandIcon() }}" alt="{{ $ctrl.cardBrand }}">
                                        </span>
                                    </div>
                                </div>

                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="card-expiry">Expiry Date</label>
                                        <input type="text"
                                               id="card-expiry"
                                               class="form-control"
                                               ng-model="$ctrl.cardDetails.expiry"
                                               placeholder="MM/YY"
                                               maxlength="5"
                                               ng-change="$ctrl.formatExpiry()">
                                    </div>
                                    <div class="form-group">
                                        <label for="card-cvc">CVC</label>
                                        <input type="text"
                                               id="card-cvc"
                                               class="form-control"
                                               ng-model="$ctrl.cardDetails.cvc"
                                               placeholder="123"
                                               maxlength="4">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="card-name">Cardholder Name</label>
                                    <input type="text"
                                           id="card-name"
                                           class="form-control"
                                           ng-model="$ctrl.cardDetails.name"
                                           placeholder="Name on card">
                                </div>

                                <div class="form-group">
                                    <label for="card-zip">Billing ZIP Code</label>
                                    <input type="text"
                                           id="card-zip"
                                           class="form-control"
                                           ng-model="$ctrl.cardDetails.zip"
                                           placeholder="90095"
                                           maxlength="10">
                                </div>
                            </div>

                            <!-- FAU/Recharge Form -->
                            <div class="payment-form fau-form" ng-if="$ctrl.paymentMethod === 'fau'">
                                <div class="fau-info">
                                    <span class="material-icons">info</span>
                                    <p>Enter your UCLA FAU (Full Accounting Unit) code for internal billing. This will be submitted for departmental approval.</p>
                                </div>

                                <div class="form-group">
                                    <label for="fau-code">FAU Code *</label>
                                    <input type="text"
                                           id="fau-code"
                                           class="form-control"
                                           ng-model="$ctrl.fauDetails.fauCode"
                                           placeholder="X-XXXXXX-XXXXX-XXXXX"
                                           ng-change="$ctrl.formatFAU()">
                                    <small class="help-text">Format: Fund-Account-Cost Center-Fund</small>
                                </div>

                                <div class="form-group">
                                    <label for="fau-department">Department</label>
                                    <input type="text"
                                           id="fau-department"
                                           class="form-control"
                                           ng-model="$ctrl.fauDetails.department"
                                           placeholder="Department name">
                                </div>

                                <div class="form-group">
                                    <label for="fau-approver-email">Budget Approver Email</label>
                                    <input type="email"
                                           id="fau-approver-email"
                                           class="form-control"
                                           ng-model="$ctrl.fauDetails.approverEmail"
                                           placeholder="approver@ucla.edu">
                                    <small class="help-text">Notification will be sent for approval</small>
                                </div>

                                <div class="form-group">
                                    <label for="fau-description">Cost Center Description</label>
                                    <textarea id="fau-description"
                                              class="form-control"
                                              ng-model="$ctrl.fauDetails.description"
                                              rows="2"
                                              placeholder="Brief description for accounting records"></textarea>
                                </div>
                            </div>

                            <!-- Split Payment Form -->
                            <div class="payment-form split-form" ng-if="$ctrl.paymentMethod === 'split'">
                                <div class="split-info">
                                    <span class="material-icons">info</span>
                                    <p>Split the payment between multiple methods. The total must equal {{ $ctrl.formatCurrency($ctrl.quote.total) }}.</p>
                                </div>

                                <div class="split-items">
                                    <div class="split-item" ng-repeat="split in $ctrl.splits track by $index">
                                        <div class="split-header">
                                            <span class="split-number">Payment {{ $index + 1 }}</span>
                                            <button class="btn-remove" ng-click="$ctrl.removeSplit($index)" ng-if="$ctrl.splits.length > 2" aria-label="Remove payment {{ $index + 1 }}">
                                                <span class="material-icons" aria-hidden="true">close</span>
                                            </button>
                                        </div>

                                        <div class="split-method-row">
                                            <div class="form-group method-select">
                                                <label>Method</label>
                                                <select class="form-control" ng-model="split.method">
                                                    <option value="card">Credit Card</option>
                                                    <option value="fau">FAU/Recharge</option>
                                                </select>
                                            </div>
                                            <div class="form-group amount-input">
                                                <label>Amount</label>
                                                <div class="input-with-prefix">
                                                    <span class="prefix">$</span>
                                                    <input type="number"
                                                           class="form-control"
                                                           ng-model="split.amount"
                                                           ng-change="$ctrl.updateSplitTotal()"
                                                           min="0"
                                                           step="0.01">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- Card details for split -->
                                        <div class="split-details" ng-if="split.method === 'card'">
                                            <div class="form-group">
                                                <label>Card Number</label>
                                                <input type="text"
                                                       class="form-control"
                                                       ng-model="split.details.cardNumber"
                                                       placeholder="1234 5678 9012 3456"
                                                       maxlength="19">
                                            </div>
                                            <div class="form-row">
                                                <div class="form-group">
                                                    <label>Expiry</label>
                                                    <input type="text"
                                                           class="form-control"
                                                           ng-model="split.details.expiry"
                                                           placeholder="MM/YY"
                                                           maxlength="5">
                                                </div>
                                                <div class="form-group">
                                                    <label>CVC</label>
                                                    <input type="text"
                                                           class="form-control"
                                                           ng-model="split.details.cvc"
                                                           placeholder="123"
                                                           maxlength="4">
                                                </div>
                                            </div>
                                        </div>

                                        <!-- FAU details for split -->
                                        <div class="split-details" ng-if="split.method === 'fau'">
                                            <div class="form-group">
                                                <label>FAU Code</label>
                                                <input type="text"
                                                       class="form-control"
                                                       ng-model="split.details.fauCode"
                                                       placeholder="X-XXXXXX-XXXXX-XXXXX">
                                            </div>
                                            <div class="form-group">
                                                <label>Department</label>
                                                <input type="text"
                                                       class="form-control"
                                                       ng-model="split.details.department"
                                                       placeholder="Department name">
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-secondary btn-add-split" ng-click="$ctrl.addSplit()" ng-if="$ctrl.splits.length < 4">
                                    <span class="material-icons">add</span>
                                    Add Another Payment
                                </button>

                                <div class="split-summary" ng-class="{'valid': $ctrl.splitTotalValid, 'invalid': !$ctrl.splitTotalValid}">
                                    <div class="split-summary-row">
                                        <span>Split Total:</span>
                                        <span>{{ $ctrl.formatCurrency($ctrl.splitTotal) }}</span>
                                    </div>
                                    <div class="split-summary-row">
                                        <span>Required:</span>
                                        <span>{{ $ctrl.formatCurrency($ctrl.quote.total) }}</span>
                                    </div>
                                    <div class="split-remaining" ng-if="!$ctrl.splitTotalValid">
                                        <span ng-if="$ctrl.splitRemaining > 0">Remaining: {{ $ctrl.formatCurrency($ctrl.splitRemaining) }}</span>
                                        <span ng-if="$ctrl.splitRemaining < 0">Over by: {{ $ctrl.formatCurrency(-$ctrl.splitRemaining) }}</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Error Message -->
                            <div class="payment-error" ng-if="$ctrl.error">
                                <span class="material-icons">error</span>
                                <span>{{ $ctrl.error }}</span>
                            </div>
                        </div>

                        <div class="payment-modal-footer">
                            <button class="btn btn-secondary" ng-click="$ctrl.close()" ng-disabled="$ctrl.processing">
                                Cancel
                            </button>
                            <button class="btn btn-primary" ng-click="$ctrl.processPayment()" ng-disabled="$ctrl.processing || !$ctrl.isFormValid()">
                                <span ng-if="!$ctrl.processing">
                                    Pay {{ $ctrl.formatCurrency($ctrl.quote.total) }}
                                </span>
                                <span ng-if="$ctrl.processing" class="processing">
                                    <span class="spinner"></span>
                                    Processing...
                                </span>
                            </button>
                        </div>

                        <!-- Success State -->
                        <div class="payment-success" ng-if="$ctrl.paymentComplete">
                            <div class="success-icon">
                                <span class="material-icons">check_circle</span>
                            </div>
                            <h3>Payment Successful!</h3>
                            <p ng-if="$ctrl.paymentMethod === 'card'">
                                Your payment of {{ $ctrl.formatCurrency($ctrl.quote.total) }} has been processed.
                            </p>
                            <p ng-if="$ctrl.paymentMethod === 'fau'">
                                Your FAU charge of {{ $ctrl.formatCurrency($ctrl.quote.total) }} has been submitted for approval.
                            </p>
                            <p ng-if="$ctrl.paymentMethod === 'split'">
                                Your split payment of {{ $ctrl.formatCurrency($ctrl.quote.total) }} has been processed.
                            </p>
                            <div class="receipt-info" ng-if="$ctrl.paymentResult">
                                <p>Confirmation: {{ $ctrl.paymentResult.id }}</p>
                            </div>
                            <button class="btn btn-primary" ng-click="$ctrl.finishPayment()">
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            `,
            controller: PaymentModalController
        });

    PaymentModalController.$inject = ['PaymentService'];

    function PaymentModalController(PaymentService) {
        var ctrl = this;

        ctrl.paymentMethod = 'card';
        ctrl.processing = false;
        ctrl.error = null;
        ctrl.paymentComplete = false;
        ctrl.paymentResult = null;

        // Card details
        ctrl.cardDetails = {
            cardNumber: '',
            expiry: '',
            cvc: '',
            name: '',
            zip: ''
        };
        ctrl.cardBrand = null;

        // FAU details
        ctrl.fauDetails = {
            fauCode: '',
            department: '',
            approverEmail: '',
            description: ''
        };

        // Split payment
        ctrl.splits = [];
        ctrl.splitTotal = 0;
        ctrl.splitRemaining = 0;
        ctrl.splitTotalValid = false;

        ctrl.$onInit = function() {
            ctrl.initSplits();
        };

        ctrl.selectMethod = function(method) {
            ctrl.paymentMethod = method;
            ctrl.error = null;
        };

        ctrl.formatCurrency = function(amount) {
            return PaymentService.formatCurrency(amount || 0);
        };

        // Card formatting
        ctrl.formatCardNumber = function() {
            var cleaned = ctrl.cardDetails.cardNumber.replace(/\D/g, '');
            var formatted = cleaned.match(/.{1,4}/g);
            ctrl.cardDetails.cardNumber = formatted ? formatted.join(' ') : cleaned;
            ctrl.cardBrand = PaymentService.detectCardBrand(cleaned);
        };

        ctrl.formatExpiry = function() {
            var cleaned = ctrl.cardDetails.expiry.replace(/\D/g, '');
            if (cleaned.length >= 2) {
                ctrl.cardDetails.expiry = cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
            }
        };

        ctrl.getCardBrandIcon = function() {
            var icons = {
                'visa': 'https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg',
                'mastercard': 'https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg',
                'amex': 'https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg',
                'discover': 'https://js.stripe.com/v3/fingerprinted/img/discover-ac52cd46f89fa40a29a0bfb954e33173.svg'
            };
            return icons[ctrl.cardBrand] || '';
        };

        // FAU formatting
        ctrl.formatFAU = function() {
            var cleaned = ctrl.fauDetails.fauCode.replace(/[^\d-]/g, '');
            ctrl.fauDetails.fauCode = cleaned;
        };

        // Split payment functions
        ctrl.initSplits = function() {
            ctrl.splits = [
                { method: 'card', amount: 0, details: {} },
                { method: 'fau', amount: 0, details: {} }
            ];
            ctrl.updateSplitTotal();
        };

        ctrl.addSplit = function() {
            if (ctrl.splits.length < 4) {
                ctrl.splits.push({ method: 'card', amount: 0, details: {} });
            }
        };

        ctrl.removeSplit = function(index) {
            if (ctrl.splits.length > 2) {
                ctrl.splits.splice(index, 1);
                ctrl.updateSplitTotal();
            }
        };

        ctrl.updateSplitTotal = function() {
            ctrl.splitTotal = ctrl.splits.reduce(function(sum, split) {
                return sum + (parseFloat(split.amount) || 0);
            }, 0);
            ctrl.splitRemaining = ctrl.quote.total - ctrl.splitTotal;
            ctrl.splitTotalValid = Math.abs(ctrl.splitRemaining) < 0.01;
        };

        // Validation
        ctrl.isFormValid = function() {
            if (ctrl.paymentMethod === 'card') {
                return ctrl.cardDetails.cardNumber.replace(/\s/g, '').length === 16 &&
                       ctrl.cardDetails.expiry.length === 5 &&
                       ctrl.cardDetails.cvc.length >= 3 &&
                       ctrl.cardDetails.name.length > 0;
            }

            if (ctrl.paymentMethod === 'fau') {
                return ctrl.fauDetails.fauCode.length > 0;
            }

            if (ctrl.paymentMethod === 'split') {
                if (!ctrl.splitTotalValid) return false;

                return ctrl.splits.every(function(split) {
                    if (split.amount <= 0) return false;

                    if (split.method === 'card') {
                        return split.details.cardNumber &&
                               split.details.cardNumber.replace(/\s/g, '').length === 16 &&
                               split.details.expiry && split.details.expiry.length === 5 &&
                               split.details.cvc && split.details.cvc.length >= 3;
                    }

                    if (split.method === 'fau') {
                        return split.details.fauCode && split.details.fauCode.length > 0;
                    }

                    return false;
                });
            }

            return false;
        };

        // Process payment
        ctrl.processPayment = function() {
            ctrl.processing = true;
            ctrl.error = null;

            var paymentPromise;

            if (ctrl.paymentMethod === 'card') {
                paymentPromise = PaymentService.processStripePayment(ctrl.cardDetails, ctrl.quote.total);
            } else if (ctrl.paymentMethod === 'fau') {
                paymentPromise = PaymentService.processFAUPayment(ctrl.fauDetails, ctrl.quote.total);
            } else if (ctrl.paymentMethod === 'split') {
                paymentPromise = PaymentService.processSplitPayment(ctrl.splits, ctrl.quote.total);
            }

            paymentPromise
                .then(function(result) {
                    ctrl.processing = false;
                    ctrl.paymentComplete = true;
                    ctrl.paymentResult = result;
                })
                .catch(function(error) {
                    ctrl.processing = false;
                    ctrl.error = error.error || 'Payment failed. Please try again.';
                });
        };

        ctrl.finishPayment = function() {
            ctrl.onPaymentComplete({
                payment: ctrl.paymentResult,
                method: ctrl.paymentMethod,
                quote: ctrl.quote
            });
        };

        ctrl.close = function() {
            if (!ctrl.processing) {
                ctrl.onClose();
            }
        };
    }

})();
