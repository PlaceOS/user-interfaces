# PlaceOS Bookings UI

![Bookings PROD](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-PROD/badge.svg)
![Bookings UAT](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-DEVELOP/badge.svg)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global @angular/cli` to Install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `ng serve`

By default the dev web server proxies all requests to the set live system, if you wish to use a mock system use set `mock` to `true` in the `src/environments/dev/settings.js` file

## Compilation

Compile the application into static files using `ng build`

The command takes the arguments `--prod` to minify the resulting build and `--aot` to compile the angular code using the angular Ahead of Time compiler.

Application/Runtime settings can be found in `src/environment/<build>/settings.js`

## Tests

Unit tests can be run using `npm run test`  

Code coverage can be run using `npm run test`  

## Usage

The compiled UI have 4 primary routes:

`/bootstrap` which is used to set the default displayed system

![Panel Bootstrap](https://aca.im/cdn/images/panel-bootstrap.png)

`/panel` which shows the panel for the given system ID

![Panel](https://aca.im/cdn/images/panel.png)

`/panel-array` which show the panels for the given list of system IDs

![Panel Array](https://aca.im/cdn/images/panel-array.png)

`/panel-select` which shows a list of systems to select from

![Panel Select](https://aca.im/cdn/images/panel-select.png)

### Bootstrapping

The bootstrap page has three methods to set the default system. When a default system is already set the bootstrap page will redirect to the appropriate panel route.

* The first is to select the system from a dropdown on the UI. This is only available when the UI is able to grab the list from the API.
* The second is the manually input the ID of the system into the UI.
* The last is to add the system ID as a query parameter to the URL e.g. `/bootstrap?system_id=sys-B0`

The UI will default to showing the dropdown but can be toggled between manual input using icon on the top right corner.

The default system can be cleared using the query parameter `clear`
e.g. `/bootstrap?clear=true`

The key combination `Shift + Backslash` can also be used to clear the default system and return to the boostrap route from the other routes.

### Panel

The panel route shows the booking details for the given system.
Configuration for the UI is done mostly through the bindings to the `Bookings` module of the given system.

System can be set through a route parameter.
e.g. `/panel/sys-B0`

More details can be found [here](./src/app/shell/panel/README.md)

### Panel Array

The panel array route shows panels for multiple systems.

Setting the list of systems is done using the query parameter `system_ids` which takes a list of comma seperated system IDs.
e.g. `/panel-array?system_ids=sys-B0,sys-B1`

You can also add empty panels to the array by adding empty IDs to the list.
e.g. `/panel-array?system_ids=sys-B0,,,sys-B1` would have 4 panel with 2 blank ones in between the others

If you are displaying more than 2 panels it is recommended to display most of the panel features as the real estate on the screen will become extremely cramped.

### Panel Select

The panel select route displays a list of system tiles to select from, each tile links to it's respective panel UI returning to the panel select after a short period of time.

Setting the list of systems is done using the query parameter `system_ids` which takes a list of comma seperated system IDs.
e.g. `/panel-select?system_ids=sys-B0,sys-B1,sys-B2,sys-B3,sys-B4,sys-B5`


The `icon` binding is used for the images displayed on this UI

## Engine Module Bindings

The UI binds to the `Bookings` module on the given system. If the UI displays a connecting page for more than 10 seconds the given module ID may not have this module or it may be turned off.

The list of bindings used by the UI from the `Bookings` module are as follows:

| Name        | Description   | Type  | Example |
| ----------- | ------------- | ----- | ------- |
| touch_enabled | Whether user input is allowed on the UI | Boolean | `true` |
| timeout | Enables start/stop and auto-cancellations. Value specifies the seconds with which the event is cancelled  | Number | `900` |
| cancel_timeout | Value specifies the seconds with which the event is cancelled. Defaults to the value of `timeout`  | Number | `900` |
| reverse | Reverses the side on which the status is displayed | Boolean | `true` |
| has_accessability | Enables assistive technologies | Boolean | `true` |
| control_url | Control URL associated with the room | String | `http://demo.aca.im/meeting/?sys_id=sys-A0` |
| can_control | Enables access to the control UI for the associated room | Boolean | `false` |
| has_catering | Enables the catering interface | Boolean | `true`|
| hide_details | Hides the booking details displayed on the UI | Boolean |  `false` |
| hide_availability | Hides details related to the availability of the system | Boolean | `true` |
| hide_user | Hides the user details for the displayed booking | Boolean | `true` |
| booking_disabled | Prevents user from making bookings using the UI | Boolean | `false` |
| hide_title | Hides the title of the displayed booking | Boolean | `true` |
| hide_description | Hides the description of the the displayed booking | Boolean | `false` |
| no_timeline_bookings | Disables bookings from timeline and the time picker on the booking modal | Boolean | `false` |
| min_duration | Sets the min duration and the default size of the steps on the slider. Defaults to `30` minutes | Number | `30` |
| max_duration | Sets the max duration of a booking in minutes. Defaults to `600` minutes | Number | `60` |
| business_start | Start time of the day for normal operations of the organisation. Defaults to `08:00` | String | `07:30` |
| business_end | End time of the day for normal operations of the organisation. Defaults to `17:30` | String | `19:00` |
| is_endable | Number of seconds before the end of a booking that the user can end it | Number | `900` |
| ask_end | Automatically ask user if they want to cancel their booking when the endable time begins | Boolean | `false` |
| ask_start | Automatically ask user if they want to start their booking when the pending time begins | Boolean | `false` |
| default_title | Default meeting title if the user has not set one | String | `"Awesome Meeting"` |
| hide_all | Hides all useful details displayed on the UI | Boolean | `false` |
| title | Value is display as an extra name for the room | String | `"Awesome Room"` |
| description | Value is displayed as a description of the title field | String | `"Cause reasons"` |
| icon | URL to a image to display to the left of the description | String | `"i/nyan-cat.gif"` |
| status_override | Mapping of statuses to new display values. If only one pair is provided it will force the panel into that status | Object | `{ "not-bookable": "I'm not bookable at the moment" }` |
| reload | Unix timestamp in seconds to reload the UI at | Number | `1574772460` |
