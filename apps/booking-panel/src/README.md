# Panel Configuration

The panel UI consists of three parts:

## Booking Details

![Booking Details](https://aca.im/cdn/images/panel-details.png)

The booking details section of the Panel UI displays the details about the system's state, and current and upcoming bookings.

The details section of the panel binds to the following status variables:


| Name        | Description   | Type  | Example |
| ----------- | ------------- | ----- | ------- |
| hide_details | Hides the booking details displayed on the UI | Boolean |  `false` |
| hide_availability | Hides details related to the availability of the system | Boolean | `true` |
| hide_user | Hides the user details for the displayed booking | Boolean | `true` |
| hide_title | Hides the title of the displayed booking | Boolean | `true` |
| title | Value is display as an extra name for the room | String | `"Awesome Room"` |
| description | Value is displayed as a description of the title field | String | `"Cause reasons"` |
| icon | URL to a image to display to the left of the description | String | `"i/nyan-cat.gif"` |

## User Actions

![User Actions](https://aca.im/cdn/images/panel-options.png)

This section of the panel shows buttons that enable the user to perform actions on the UI.

The currently available actions are New booking, Start meeting and End meeting on the right; View Control UI and Call Waiter on the left.

The user actions sections bind to the following status variables:

| Name        | Description   | Type  | Example |
| ----------- | ------------- | ----- | ------- |
| timeout | Enables start/stop and auto-cancellations. Value specifies the seconds with which the event is cancelled  | Number | `900` |
| cancel_timeout | Value specifies the seconds with which the event is cancelled. Defaults to the value of `timeout`  | Number | `900` |
| can_control | Enables access to the control UI for the associated room | Boolean | `false` |
| has_catering | Enables the catering interface | Boolean | `true`|
| booking_disabled | Prevents user from making bookings using the UI | Boolean | `false` |
| min_duration | Sets the min duration and the default size of the steps on the slider. Defaults to `30` minutes | Number | `30` |
| max_duration | Sets the max duration of a booking in minutes. Defaults to `600` minutes | Number | `60` |
| is_endable | Number of seconds before the end of a booking that the user can end it | Number | `900` |
| ask_end | Automatically ask user if they want to cancel their booking when the endable time begins | Boolean | `false` |
| ask_start | Automatically ask user if they want to start their booking when the pending time begins | Boolean | `false` |
| default_title | Default meeting title if the user has not set one | String | `"Awesome Meeting"` |

## Timeline

![Timeline](https://aca.im/cdn/images/panel-timeline.png)

The timeline section of the panel show the bookings in the system through time and allows the user the select future times for new bookings.

The timeline section binds to the following status variables:


| Name        | Description   | Type  | Example |
| ----------- | ------------- | ----- | ------- |
| timeout | Enables start/stop and auto-cancellations. Value specifies the seconds with which the event is cancelled  | Number | `900` |
| hide_availability | Hides details related to the availability of the system | Boolean | `true` |
| booking_disabled | Prevents user from making bookings using the UI | Boolean | `false` |
| no_timeline_bookings | Disables bookings from timeline and the time picker on the booking modal | Boolean | `false` |
| min_duration | Sets the min duration and the default size of the steps on the slider. Defaults to `30` minutes | Number | `30` |
| max_duration | Sets the max duration of a booking in minutes. Defaults to `600` minutes | Number | `60` |
| default_title | Default meeting title if the user has not set one | String | `"Awesome Meeting"` |
| hide_all | Hides all useful details displayed on the UI | Boolean | `false` |
