# User Stories - Caterer UI

This document outlines the user stories for the Caterer UI application, which enables caterers to manage their menus and fulfill catering orders for workplace events.

## Personas

- **Caterer**: A catering provider who manages menu items and fulfills orders for events
- **Catering Manager**: A caterer with additional permissions to configure booking rules and settings

---

## Menu Management

### Viewing Menu Items

**US-MENU-001**: View menu items list
- As a caterer
- I want to view all my menu items in a table format
- So that I can see what items are available for ordering

**US-MENU-002**: View menu item details
- As a caterer
- I want to see the details of each menu item (name, category, price, description, options)
- So that I can verify the information is correct

**US-MENU-003**: View item availability by zone
- As a caterer
- I want to see which zones each menu item is available in
- So that I can ensure items are offered in the correct locations

### Adding Menu Items

**US-MENU-004**: Add new menu item
- As a caterer
- I want to add a new menu item with name, category, price, and description
- So that customers can order this item for their events

**US-MENU-005**: Add images to menu item
- As a caterer
- I want to upload images for my menu items
- So that customers can see what they are ordering

**US-MENU-006**: Add tags to menu item
- As a caterer
- I want to add tags/attributes to menu items (e.g., vegan, gluten-free, halal)
- So that customers can filter items based on dietary requirements

### Editing Menu Items

**US-MENU-007**: Edit menu item details
- As a caterer
- I want to edit the details of an existing menu item
- So that I can update pricing, descriptions, or other information

**US-MENU-008**: Enable/disable menu item per zone
- As a caterer
- I want to enable or disable a menu item for specific zones
- So that I can control item availability by location

**US-MENU-009**: Delete menu item
- As a caterer
- I want to delete a menu item that is no longer offered
- So that customers cannot order discontinued items

### Managing Item Options

**US-MENU-010**: Add option group to menu item
- As a caterer
- I want to add option groups to a menu item (e.g., "Size", "Toppings")
- So that customers can customize their orders

**US-MENU-011**: Add option to option group
- As a caterer
- I want to add individual options within a group with names and prices
- So that customers have specific choices to select from

**US-MENU-012**: Configure multiple selection for option group
- As a caterer
- I want to specify whether customers can select multiple options from a group
- So that I can control how customization works (e.g., one size vs multiple toppings)

**US-MENU-013**: Edit item option
- As a caterer
- I want to edit the name or price of an existing option
- So that I can update option details as needed

**US-MENU-014**: Delete item option
- As a caterer
- I want to remove an option from a menu item
- So that discontinued options are no longer available

### Bulk Operations

**US-MENU-015**: Import menu from file
- As a caterer
- I want to bulk import menu items from a CSV or structured file
- So that I can quickly add many items without entering them one by one

---

## Order Management

### Viewing Orders

**US-ORDER-001**: View orders for selected date
- As a caterer
- I want to view all catering orders for a specific date
- So that I can see what needs to be prepared and delivered

**US-ORDER-002**: View order details
- As a caterer
- I want to see the full details of an order (items, quantities, options, delivery time, location)
- So that I can prepare the order correctly

**US-ORDER-003**: View order notes
- As a caterer
- I want to view special instructions or notes attached to an order
- So that I can accommodate special requests

**US-ORDER-004**: View event/host information
- As a caterer
- I want to see the event details and host contact information
- So that I can coordinate delivery and resolve any issues

**US-ORDER-005**: View order charge code and invoice number
- As a caterer
- I want to see the charge code and invoice number for each order
- So that I can track billing and accounting

### Filtering Orders

**US-ORDER-006**: Filter orders by date range
- As a caterer
- I want to filter orders by date range
- So that I can plan for upcoming orders or review past orders

**US-ORDER-007**: Filter orders by zone/level
- As a caterer
- I want to filter orders by building zone or level
- So that I can organize deliveries by location

**US-ORDER-008**: Filter orders by caterer/provider
- As a caterer
- I want to filter orders by caterer/provider name
- So that I can see only orders assigned to my company

**US-ORDER-009**: Search orders
- As a caterer
- I want to search orders by item name, option, location, or host
- So that I can quickly find specific orders

### Order Status Management

**US-ORDER-010**: Accept an order
- As a caterer
- I want to accept a pending order
- So that the customer knows their order is confirmed

**US-ORDER-011**: Mark order as preparing
- As a caterer
- I want to mark an order as "preparing"
- So that the status reflects that food is being prepared

**US-ORDER-012**: Mark order as ready
- As a caterer
- I want to mark an order as "ready"
- So that delivery staff know it can be picked up

**US-ORDER-013**: Mark order as delivered
- As a caterer
- I want to mark an order as "delivered"
- So that the order is recorded as complete

**US-ORDER-014**: Cancel an order
- As a caterer
- I want to cancel an order
- So that cancelled orders are properly tracked

**US-ORDER-015**: Mark individual item as complete
- As a caterer
- I want to mark individual items within an order as complete
- So that I can track progress on orders with multiple items

### Real-time Updates

**US-ORDER-016**: Receive automatic order updates
- As a caterer
- I want orders to automatically refresh
- So that I see new orders without manually refreshing the page

---

## Configuration & Settings

### Booking Rules

**US-CONFIG-001**: Configure event types for catering
- As a catering manager
- I want to define which event types can have catering orders
- So that only appropriate events can order catering

**US-CONFIG-002**: Configure catering rules by event attributes
- As a catering manager
- I want to set rules based on event characteristics
- So that catering availability matches business requirements

### Room Management

**US-CONFIG-003**: Enable catering for specific rooms
- As a catering manager
- I want to enable catering delivery for specific rooms/spaces
- So that only eligible spaces can receive catering

**US-CONFIG-004**: Disable catering for specific rooms
- As a catering manager
- I want to disable catering for certain rooms
- So that rooms without catering facilities are excluded

### Charge Codes

**US-CONFIG-005**: View charge codes list
- As a catering manager
- I want to view the list of available charge codes
- So that I can see what billing options are configured

**US-CONFIG-006**: Add charge code
- As a catering manager
- I want to add a new charge code
- So that customers can use it for billing their orders

**US-CONFIG-007**: Edit charge code
- As a catering manager
- I want to edit an existing charge code
- So that I can update billing information

**US-CONFIG-008**: Delete charge code
- As a catering manager
- I want to delete a charge code
- So that outdated codes are removed

### General Settings

**US-CONFIG-009**: Require order notes
- As a catering manager
- I want to configure whether order notes are mandatory
- So that I always receive necessary information from customers

---

## Navigation & Access

### Authentication

**US-AUTH-001**: Log in to application
- As a caterer
- I want to log in using my PlaceOS credentials
- So that I can access the catering management system

**US-AUTH-002**: View unauthorized message
- As a user without caterer permissions
- I want to see a clear message that I don't have access
- So that I understand why I cannot use the application

### Navigation

**US-NAV-001**: Navigate to menu management
- As a caterer
- I want to navigate to the menu management view
- So that I can manage my menu items

**US-NAV-002**: Navigate to orders view
- As a caterer
- I want to navigate to the orders view
- So that I can manage catering orders

**US-NAV-003**: Select active building/zone
- As a caterer
- I want to select the building or zone I'm working with
- So that I see relevant menu items and orders for that location

---

## Multi-Tenancy & Access Control

**US-ACCESS-001**: View only my company's orders
- As a caterer belonging to a provider group
- I want to see only orders assigned to my catering company
- So that I don't see orders meant for other caterers

**US-ACCESS-002**: Manage only my company's menu items
- As a caterer belonging to a provider group
- I want to manage only menu items for my catering company
- So that I cannot modify other caterers' menus
