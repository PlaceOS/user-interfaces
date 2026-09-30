## NOTES:

1. Run `bun install` in the root folder of `user-interfaces`
2. Run `bun install` in the project folder of `user-interfaces/apps/outlook-addin`

-   The Yeoman generator for creating the Outlook add-in uses a manual webpack config (in the project folder). To run this webpack server - `bun run dev-server` in the project directory of `user-interfaces/apps/outlook-addin`

-   The docs says Office Add-ins should use HTTPS - https://docs.microsoft.com/en-us/office/dev/add-ins/quickstarts/outlook-quickstart?tabs=yeomangenerator#tryitout

-   The add-in is currently being side-loaded into the Outlook desktop app.
    Get Add-in > `My add-ins` tab > `Add a custom add-in` button > `Add from file` > manifest.xml

## Calendar task pane

The manifest opens `#/calendar` from the Outlook event organizer form. The pane reads the event title, time and room locations from Outlook. It does not ask for them again.

-   Rooms: "Add to meeting" adds the room to the event as an Exchange room resource. Exchange books the room when the user sends the invitation.
-   Desks: "Add to event" reserves the desk at once. It saves a new event first (Outlook does not send invitations for this save). The booking ID is kept in an item custom property. The Outlook item ID and iCalUId are kept in the booking `extension_data`.
-   All day: the pane uses the Office.js preview flag when the client supports it. Otherwise it uses the saved event from PlaceOS when the saved times match. It never infers All day from the duration.
-   Map: each tab has a List and Map view. The map view uses the shared `space-map` and `desk-map` components. Select a room or desk on the map to show its card and Add button.
-   Outside Outlook the pane uses a sample event, so you can use it in the browser with `?mock=true`.

The code is in `src/app/calendar/`. The manifest requires Mailbox 1.8.
