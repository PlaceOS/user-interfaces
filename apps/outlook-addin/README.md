# Outlook add-in

The add-in adds PlaceOS rooms and desks to Outlook calendar events. It opens as a task pane from the **PlaceOS** button on the event organizer form.

Serve and build the app with the Nx targets in `project.json`. Outside Outlook, the app uses the normal PlaceOS login. Use `?mock=true` to use mock data.

## Make the manifest

`manifest.xml` is a template. Make the manifest for a PlaceOS host with this command from the repository root:

```sh
bun apps/outlook-addin/manifest.ts --host example.placeos.com --client-id <client-guid>
```

| Option        | Description                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------ |
| `--host`      | Host name of the PlaceOS server. Do not include the protocol or a path.                                            |
| `--client-id` | Optional. Client ID of the Microsoft Entra app for single sign-on. Without it, the add-in uses the sign-in dialog. |
| `--path`      | Optional. Path of the add-in on the host. The default is `/outlook/`.                                              |
| `--out`       | Optional. Output folder. The default is `dist/outlook`.                                                            |

The script writes `dist/outlook/outlook-<host>.xml`. The add-in ID is the same for all hosts. Increase `<Version>` in the template when you change the manifest, so that Outlook gets the update.

## Install the add-in

- **Organization:** In the Microsoft 365 admin center, open **Settings** > **Integrated apps** > **Upload custom apps**. Select **Office Add-in** and upload the manifest.
- **Test:** Go to `https://aka.ms/olksideload`. In **My add-ins**, select **Add a custom add-in** > **Add from file**, then select the manifest. This works for Outlook on the web, new Outlook on Windows and classic Outlook on Windows.

## Sign in

When the add-in has no PlaceOS token, it gets one in this sequence:

1. Single sign-on with nested app authentication (NAA). MSAL asks Outlook for a Microsoft Entra token for the PlaceOS API. The add-in uses NAA only when the manifest has a client ID and Outlook supports the `NestedAppAuth 1.1` requirement set.
2. A sign-in dialog. The dialog loads the app with `#ms-auth=true` and runs the normal PlaceOS login. Then it sends the PlaceOS token to the task pane.

The code is in `src/app/outlook-auth.ts` and `src/app/app.component.ts`.

### Register the Microsoft Entra app for single sign-on

Do these steps only if you use single sign-on. The Teams app uses the same API scope. Thus one app registration can serve both apps. See [Teams and Microsoft 365 app](../../docs/teams-app.md).

1. In the Azure portal, open **App registrations** and create a registration, or open the registration of the Teams app.
2. Open **Expose an API**. Set the **Application ID URI** to `api://<host>/<client-id>`.
3. Add the scope `access_as_user`. Let admins and users give consent.
4. Open **Authentication**. Add the **Single-page application** platform with the redirect URI `brk-multihub://<host>`. Use only the host, with no path.
5. Use the application (client) ID as `--client-id`.

**Warning:** The add-in sends the Entra token to PlaceOS as the bearer token. The PlaceOS backend must accept Microsoft Entra tokens for this app registration. If the backend does not accept the token, the add-in cannot load the user. In this condition, make the manifest without `--client-id`.

### Known limits

- **Token expiry:** The add-in does not refresh a token that it got from Outlook. When the token expires, API requests fail. Close and open the pane to get a new token. With single sign-on, this is silent.
- **Mobile:** The manifest has only the desktop form factor. Outlook on iOS and Android does not show the add-in.

## Calendar task pane

The manifest opens `#/calendar` from the Outlook event organizer form. The pane reads the event title, time and room locations from Outlook. It does not ask for them again.

- Rooms: "Add to meeting" adds the room to the event as an Exchange room resource. Exchange books the room when the user sends the invitation.
- Desks: "Add to event" reserves the desk at once. It saves a new event first (Outlook does not send invitations for this save). The booking ID is kept in an item custom property. The Outlook item ID and iCalUId are kept in the booking `extension_data`.
- All day: the pane uses the Office.js preview flag when the client supports it. Otherwise it uses the saved event from PlaceOS when the saved times match. It never infers All day from the duration.
- Map: each tab has a List and Map view. The map view uses the shared `space-map` and `desk-map` components. Select a room or desk on the map to show its card and Add button.
- Outside Outlook the pane uses a sample event, so you can use it in the browser with `?mock=true`.

The code is in `src/app/calendar/`. The manifest requires Mailbox 1.8.
