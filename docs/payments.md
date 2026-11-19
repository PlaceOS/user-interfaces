# Payments

The apps can take payments for bookings and catering. A PlaceOS payment driver does the work with the payment provider. The apps use the driver only when the building or the organisation has a `payments` binding. Without the binding, the apps do not show payment pages and bookings do not ask for payment.

The first driver uses Stripe. The driver interface is generic, so you can make a driver for a different provider. The interface does not use provider names or provider objects.

Source:

- [Driver contract types](../libs/payments/src/lib/payment.types.ts)
- [Payments service and checkout flow](../libs/payments/src/lib/payments.service.ts)
- [Mock driver](../libs/mocks/src/lib/realtime/payments.ts)

## Set up payments

1. Add the payment driver to a system.
2. Add a `payments` binding to the building zone or to the organisation zone. The value is the system ID, or an object with `id` and `mod`. The default module name is `Payments`.

    ```json
    { "payments": { "id": "sys-payments", "mod": "Payments" } }
    ```

3. Add products in Concierge, on the **Products & services** page. A booking has a price only when a product matches it. Catering items use the prices of the catering menu.
4. Add the `payments` feature to the Workplace and Concierge `features` settings to show the payment pages. See [Workplace settings](settings/workplace.md) and [Concierge settings](settings/concierge.md).

## What users can do

| App       | Who              | Action                                                                                        |
| --------- | ---------------- | --------------------------------------------------------------------------------------------- |
| Workplace | All users        | Pay for a new desk, parking, locker or room booking, and for the catering of a new meeting.   |
| Workplace | All users        | See their payments, their invoices and their saved payment methods on the **Payments** page.  |
| Workplace | All users        | Request an invoice for a payment. Add and remove saved payment methods.                       |
| Workplace | All users        | Complete an open payment of their own that has a reference, on a new link to the hosted page. |
| Concierge | Privileged users | Find the payments of all users by user, status and period. Refund a payment.                  |
| Concierge | Privileged users | Send requested invoices. Make an invoice for products and services and send it to a user.     |
| Concierge | Privileged users | Add, change, archive and restore products and services.                                       |

The driver decides who is privileged. It returns `privileged` in `get_config`. The Concierge pages show a "no access" message to users who are not privileged. The driver must also refuse the privileged methods for these users. The `feature_groups` setting can hide the Concierge links from other user groups, but it is not a security control.

## Checkout flow

The app never sees card numbers. The user pays on a page that the provider hosts.

Only Workplace asks for payment. An app turns the checkout on when it provides the `PAYMENT_CHECKOUT` token with the value `true`. Booking panels, Concierge and the other apps do not provide it. Thus a shared device does not open a payment page, and staff who book for other users do not pay.

1. The app makes line items from the booking. For a room, desk, parking space or locker, there is one item for each resource. For catering, there is one item for each menu item, with the selected options.
2. The app calls `quote`. The driver finds the product of each item and calculates the price. When the total is `0`, the booking does not need payment.
3. The app shows the line items and the total. The user selects a saved payment method or a new payment method.
4. The app calls `create_checkout` with the items and `expected_total`, the total that the user accepted.
    - With a saved method, the driver charges the method. When the provider needs the user to confirm, for example with 3-D Secure, the driver returns a `url`.
    - With a new method, the driver returns the `url` of the hosted payment page. The app opens it in a popup window.
5. The app calls `get_payment` every 2 seconds until the payment is `authorized` or in a final state.
    - When the user closes the popup window first, the payment stays open. The user can select **Reopen payment page**. The app calls `get_payment` first, because the provider can complete the payment after the window closes. When the payment is not complete, the app calls `get_payment_link` to get a new link. The user can also select **Cancel payment**.
    - When the user selects **Cancel payment**, or the check runs for 15 minutes, the app calls `cancel_payment`.
6. The app saves the booking or the event.
    - When the save succeeds, the app calls `capture_payment` with a reference to the booking or the event.
    - When the save fails, the app calls `cancel_payment`. The driver releases the authorization, so the user does not pay for a booking that does not exist.
    - A booking with asset requests is captured after the asset requests save. When they fail, the app removes the booking and calls `cancel_payment`.

The hosted page goes back to `assets/payment-complete.html` of the app. This page only closes the popup window. The app gets the result from the driver, not from the page.

The payment details show **Complete payment** only for an open payment of the user that has a `reference`. A payment without a reference has no saved booking. If the user completed it, they would pay for nothing. After the payment completes, the app captures it for its reference. When the browser blocks the popup window, the app shows an error and does not call the driver. The driver must release open payments without a reference when the provider session expires.

Changes to saved bookings and events are not charged. Group bookings are not charged, because the app saves one booking for each member and has no combined checkout. A recurring booking is charged as one booking. External catering is not charged, because the driver cannot get its prices.

## Driver contract

The [types file](../libs/payments/src/lib/payment.types.ts) is the source of truth for the methods, the arguments and the return values. The mock driver implements the same type, so a change to the contract that the mock does not follow fails the build.

Rules for all methods:

- Amounts are integers in the minor unit of the currency, for example cents. A currency without a minor unit, for example JPY, uses whole units.
- Currencies are ISO 4217 codes, for example `AUD`.
- Times are unix seconds.
- Arguments are positional, in the order of the type.
- The driver gets the current user from the request. Users who are not privileged get only their own payments, invoices and payment methods, whatever filter they send.
- Lists that can be long return a page: `{ items, next_cursor }`. The page size is 1 to 100. The last page has no `next_cursor`.
- To show an error to the user, the driver raises an error with a readable message.

### Methods for all users

| Method                  | Arguments               | Returns                | Description                                                                                                                          |
| ----------------------- | ----------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `get_config`            | –                       | `PaymentConfig`        | Provider name, default currency, `privileged` and the optional `capabilities` of the driver.                                         |
| `quote`                 | `items`                 | `PaymentQuote`         | Price of the line items. The driver must calculate all prices.                                                                       |
| `create_checkout`       | `request`               | `CheckoutSession`      | Start a payment. The driver must refuse the request when its total is not equal to `expected_total`.                                 |
| `get_payment`           | `id`                    | `Payment`              | One payment.                                                                                                                         |
| `get_payment_link`      | `id`, `return_url`      | `HostedSession`        | New link to the hosted page of a `pending` or `requires_action` payment. The payment ID stays the same. Fails for other states.      |
| `capture_payment`       | `id`, `reference`       | `Payment`              | Take an authorized payment and link it to the booking or the event.                                                                  |
| `cancel_payment`        | `id`                    | `Payment`              | Release a payment that is not taken. Refund a payment that is taken.                                                                 |
| `list_payments`         | `query`                 | `PaymentPage<Payment>` | Payments, newest first.                                                                                                              |
| `list_payment_methods`  | –                       | `PaymentMethod[]`      | Saved payment methods of the current user.                                                                                           |
| `create_setup_session`  | `return_url`            | `HostedSession`        | Hosted page to add a payment method.                                                                                                 |
| `remove_payment_method` | `id`                    | –                      | Remove a saved payment method of the current user.                                                                                   |
| `request_invoice`       | `payment_id`, `billing` | `Invoice`              | Ask for an invoice for a payment. The invoice has the `requested` status until staff send it. A driver can also send it immediately. |
| `list_invoices`         | `query`                 | `PaymentPage<Invoice>` | Invoices, newest first.                                                                                                              |
| `list_products`         | `query`                 | `PaymentProduct[]`     | Products. Archived products only when `include_inactive` is `true`.                                                                  |

### Methods for privileged users

| Method           | Arguments                | Returns          | Description                                                                                             |
| ---------------- | ------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------- |
| `refund_payment` | `id`, `amount`, `reason` | `Payment`        | Refund a part of a payment, or all of it when `amount` is `null`.                                       |
| `send_invoice`   | `id`, `email`            | `Invoice`        | Send a requested or draft invoice. `email` replaces the address of the user when it is not `null`.      |
| `create_invoice` | `request`                | `Invoice`        | Make an invoice for products and services. With `send`, the driver sends it to the user.                |
| `save_product`   | `product`                | `PaymentProduct` | Make a product when it has no `id`, else change it. To archive a product, save it with `active: false`. |

### Capabilities

A driver lists the optional features that it supports in `capabilities`. The apps hide the actions of missing features.

| Capability       | Actions                                                                                                                                                        |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `saved_methods`  | Pay with a saved method. Add and remove saved methods.                                                                                                         |
| `refunds`        | Refund a payment.                                                                                                                                              |
| `invoices`       | Request, list and send invoices.                                                                                                                               |
| `manual_capture` | The driver authorizes first and takes the payment on `capture_payment`. Without it, the driver takes the payment immediately, and `cancel_payment` refunds it. |

### Payment status

| Status               | Meaning                                                         |
| -------------------- | --------------------------------------------------------------- |
| `pending`            | The user has not paid yet.                                      |
| `requires_action`    | The user must confirm the payment on the hosted page.           |
| `authorized`         | The money is held. The app captures it after the booking saves. |
| `succeeded`          | The payment is taken.                                           |
| `partially_refunded` | A part of the payment is refunded.                              |
| `refunded`           | All of the payment is refunded.                                 |
| `cancelled`          | The payment is released or stopped before it was taken.         |
| `failed`             | The provider declined the payment.                              |

## How the driver prices items

Each line item has a `resource_type`. Prices come from different places for different types:

- `room`, `desk`, `parking`, `locker` and `asset`: the driver finds the active product with the same `resource_type`. When the product has `resource_ids`, the resource must be in the list. When the product has `zone_ids`, the zone of the resource must be in the list. When more than one product matches, the driver uses the most specific product: resource IDs first, then zones, then the type only.
- `catering`: the driver uses the catering menu in the `catering` metadata of the zone. The price is `unit_price` plus the `unit_price` of each selected option, in cents.
- `service`, and items with a `product_id`: the driver uses that product.

The `unit` of the product sets the quantity:

| Unit      | Quantity                                                                               |
| --------- | -------------------------------------------------------------------------------------- |
| `booking` | 1 for each booking.                                                                    |
| `hour`    | The `duration` in hours, rounded up. Without a `duration`, the `quantity` of the item. |
| `day`     | The `duration` in days, rounded up. Without a `duration`, the `quantity` of the item.  |
| `item`    | The `quantity` of the item.                                                            |

## Stripe driver notes

The first driver uses these Stripe features:

| Contract                              | Stripe                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Customer of a user                    | A Customer with the PlaceOS user ID in its metadata                                                                                                           |
| `create_checkout` with a new method   | A Checkout Session in `payment` mode with `capture_method: manual`                                                                                            |
| `create_checkout` with a saved method | A PaymentIntent with `off_session: false` and `confirm: true`. `requires_action` returns the `next_action` URL                                                |
| `get_payment_link`                    | The URL of the open Checkout Session, or the `next_action` URL of the PaymentIntent. When the session is expired, a new Checkout Session for the same payment |
| `capture_payment`, `cancel_payment`   | PaymentIntent capture and cancel. A refund when the PaymentIntent is captured                                                                                 |
| `create_setup_session`                | A Checkout Session in `setup` mode                                                                                                                            |
| Invoices                              | Stripe Invoices. `url` is `hosted_invoice_url` and `pdf_url` is `invoice_pdf`                                                                                 |
| Products                              | Products with one Price. `resource_type`, `resource_ids`, `zone_ids` and `unit` go in the metadata                                                            |

Keep the secret key in the driver settings. The apps do not need a publishable key, because the user pays on the hosted page.

## Mock mode

The mock driver does not run by default, so that the mock booking flows do not ask for payment. To turn it on, set this local storage key and reload the app:

```js
localStorage.setItem('PLACEOS.mock_payments', 'true');
```

In mock mode, the current user is privileged. A hosted page counts as paid after 4 seconds. A saved card is authorized immediately.
