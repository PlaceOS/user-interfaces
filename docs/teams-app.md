# Teams and Microsoft 365 app

The workplace app can run as a personal tab in Microsoft Teams, Outlook and the Microsoft 365 app. The app package in `apps/workplace/teams/` adds the tab. The tab loads the workplace app from the PlaceOS host.

## How the tab works

1. The tab URL has the query `?host=teams`. Without this query, the app starts as a normal web app.
2. With the query, the app loads `@microsoft/teams-js` and calls `app.initialize()`. If the host does not answer in 5 seconds, the app starts as a normal web app.
3. The tab frame cannot show the Microsoft login page. Thus the app does not redirect to the PlaceOS login page in the tab.
4. If the tab has no PlaceOS token, the app gets a token in this sequence:
    1. Single sign-on (SSO) with `authentication.getAuthToken()`.
    2. A sign-in window from `authentication.authenticate()`. This window loads the app with `?host=teams-auth` and runs the normal PlaceOS login. Then it sends the PlaceOS token to the tab.
    3. If a host blocks the sign-in window, the tab shows a **Sign in** button. The user selects the button to open the window again.

The code is in `libs/common/src/lib/teams-host.ts`. `PlaceOS_Service.init()` calls it. The **Sign in** button is in `apps/workplace/src/app/app.component.ts`.

## Build the app package

Run this command from the repository root:

```sh
bun apps/workplace/teams/package.ts --host example.placeos.com --app-id <app-guid> --client-id <client-guid>
```

| Option        | Description                                                                                                 |
| ------------- | ----------------------------------------------------------------------------------------------------------- |
| `--host`      | Host name of the PlaceOS server. Do not include the protocol or a path.                                     |
| `--app-id`    | Teams app ID. Make a new GUID for each package. Keep the same GUID for updates to the same package.         |
| `--client-id` | Optional. Client ID of the Microsoft Entra app for SSO. Without it, the tab always uses the sign-in window. |
| `--path`      | Optional. Path of the workplace app on the host. The default is `/workplace/`.                              |
| `--out`       | Optional. Output folder. The default is `dist/teams`.                                                       |

The script writes the package to `dist/teams/workplace-<host>.zip`. The script uses the `zip` command.

The template is `apps/workplace/teams/manifest.json`. It uses app manifest schema 1.30. Microsoft 365 hosts need schema 1.13 or later.

## Register the Microsoft Entra app for SSO

Do these steps only if you use SSO.

1. In the Azure portal, open **App registrations** and create a registration.
2. Open **Expose an API**.
3. Set the **Application ID URI** to `api://<host>/<client-id>`.
4. Add the scope `access_as_user`. Let admins and users give consent.
5. In **Authorized client applications**, add all of these client IDs with the `access_as_user` scope:

    | Client application                    | Client ID                              |
    | ------------------------------------- | -------------------------------------- |
    | Teams desktop, mobile                 | `1fec8e78-bce4-4aaf-ab1b-5451cc387264` |
    | Teams web                             | `5e3ce6c0-2b1f-4285-8d4b-75ee78787346` |
    | Microsoft 365 web                     | `4765445b-32c6-49b0-83e6-1d93765276ca` |
    | Microsoft 365 desktop                 | `0ec893e0-5785-4de6-99da-4ed124e5296c` |
    | Microsoft 365 mobile, Outlook desktop | `d3590ed6-52b3-4102-aeff-aad2292ab01c` |
    | Outlook web                           | `bc59ab01-8403-45c6-8796-ac3ef710b3e3` |
    | Outlook mobile                        | `27922004-5251-4030-b22d-91ecd9a37ea4` |

6. Use the application (client) ID as `--client-id`.

The Outlook add-in can use the same app registration for single sign-on. It needs one more redirect URI. See [Outlook add-in](../apps/outlook-addin/README.md#register-the-microsoft-entra-app-for-single-sign-on).

The source of the client IDs is [Extend a Teams personal tab across Microsoft 365](https://learn.microsoft.com/en-us/microsoftteams/platform/m365-apps/extend-m365-teams-personal-tab).

**Warning:** The app sends the SSO token to PlaceOS as the bearer token. The PlaceOS backend must accept Microsoft Entra tokens for this app registration. The `aud` claim of the token is the client ID or the Application ID URI. If the backend does not accept the token, the app cannot load the user. In this condition, build the package without `--client-id`.

## Configure the PlaceOS host

The hosts show the tab in a frame. The PlaceOS host must let these hosts frame the workplace app.

1. Remove the `X-Frame-Options` header from the workplace app responses, or do not set it to `DENY` or `SAMEORIGIN`.
2. Add these values to the `frame-ancestors` directive of the `Content-Security-Policy` header:

```http
Content-Security-Policy: frame-ancestors 'self' https://*.cloud.microsoft https://teams.microsoft.com https://*.teams.microsoft.com https://*.microsoft365.com https://*.office.com https://outlook.office.com https://outlook.office365.com https://outlook-sdf.office.com https://outlook-sdf.office365.com
```

Microsoft moves its web hosts to `*.cloud.microsoft`. Keep all of the values.

## Deploy the app

1. In the Teams admin center, open **Teams apps** > **Manage apps**.
2. Select **Upload new app** and upload the package.
3. Make sure that the app permission policies allow the app.
4. To pin the app in Teams, open **Teams apps** > **Setup policies**. Add the app to **Pinned apps**, then assign the policy to users.

The app is then also available in Outlook and the Microsoft 365 app, in **More apps**. A pin in Teams does not pin the app in Outlook or the Microsoft 365 app. You can also deploy the app from the Microsoft 365 admin center, in **Settings** > **Integrated apps**.

For a test, a user can upload the package in Teams from **Apps** > **Manage your apps** > **Upload an app**.

## Known limits

- **Token expiry:** The app does not refresh a token that it got from the host. When the token expires, API requests fail. Reload the tab to get a new token. With SSO, this is silent.
- **Sign out:** Sign out goes to the PlaceOS logout page in the tab frame. This can fail in the frame.
- **External links:** `libs/components/src/lib/user-controls.component.ts` and `libs/explore/src/lib/explore-spaces.service.ts` use `window.open()`. Web hosts usually open a new browser tab. Desktop and mobile hosts are not validated. A follow-up can use `app.openLink()` from teams-js in the host.
- **Classic Outlook for Windows:** Support for Microsoft 365 personal tabs in classic Outlook is not validated.
- **Storage:** In web hosts, the browser can partition the storage of the tab frame. The tab keeps its own copy of the token. Thus a sign-in in a normal browser tab does not sign in the Teams tab.
