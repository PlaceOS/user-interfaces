# Remote debugging

Remote debugging lets a person find problems on a device from a different location. A PlaceOS driver finds a device by its device ID. The driver can:

- Get the logs of the device, and set the log level.
- Get the status of the device: version, network, memory, storage, signed-in user and errors.
- Get the values of app settings.
- Get the local storage keys.
- Open a route of the app.
- Reload the app, or clear the service worker caches and reload.
- Get a snapshot of the screen, or a short animation as an animated WebP or GIF.

The device ID is the same ID that remote setup uses. See [Device ID](remote-setup.md#device-id). Tabs of the same app in one browser have the same device ID, so use one tab of the app while you debug it.

## Enable remote debugging

1. Add a system with the `RemoteDebug` driver. See [Driver interface](#driver-interface).
2. Add the `remote_debug` binding to the organisation zone. The device reads the bindings of the organisation zone itself, so remote debugging also works in apps that do not load zone bindings, such as Booking Panel.

Earlier versions sent each console call to a `Logger` driver through the `remote_logger` binding. This version does not use that binding. If a site uses it, add the `RemoteDebug` driver and the `remote_debug` binding before you update the devices.

The value is the system ID, or an object with the system ID and the module name:

```json
{
    "remote_debug": { "id": "sys-XXXXXXXX", "module": "RemoteDebug" }
}
```

| Field    | Type   | Default         | Description                              |
| -------- | ------ | --------------- | ---------------------------------------- |
| `id`     | string | –               | System that has the RemoteDebug driver.  |
| `module` | string | `"RemoteDebug"` | Name of the driver module in the system. |

Remote debugging works in each app that uses `PlaceOS_Service`. The source is `libs/common/src/lib/remote-debug.ts`. The log format is in `libs/common/src/lib/log-format.ts`.

## What a device collects

Capture starts when the app starts. The device collects:

- Calls to `console.debug`, `console.log`, `console.info`, `console.warn` and `console.error`. Angular errors go to `console.error`.
- Uncaught errors.
- Unhandled promise rejections.

The device keeps the last 8,000 entries in memory, 8 MB maximum. See [Memory](#memory). It does not keep entries in storage, so a reload removes them. One request gets 1,000 of these entries maximum. To get older entries, use `before`. See [Get older entries](#get-older-entries).

When the organisation loads and there is no `remote_debug` binding, capture stops and the device removes its entries. If the device cannot read the bindings, for example after it starts offline, capture continues and the device reads the bindings again each minute. When the app starts without the organisation, as Signage does, the device uses the `org_zone` of the authority config. If there is no organisation zone yet, the device tries again each minute.

Each entry is plain text. Before the device keeps an entry, it:

- Applies the console format directives, such as `%s` and `%d`.
- Removes `%c` styles and their CSS arguments.
- Removes ANSI colour codes.
- Changes objects to JSON text. The JSON stops at 4 levels of nested objects. A circular reference shows as `[Circular]`.
- Removes credential values from addresses, such as `?token=`. See `scrubSecrets` in `libs/common/src/lib/sentry.ts`.
- Limits the text to 2,000 characters.

## Memory

Remote debugging uses 32 MB of memory on a device maximum:

| Part           | Maximum | Description                                                                                                     |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| Log entries    | 8 MB    | 8,000 entries maximum. When there is more, the oldest entries are removed first.                                |
| Send queue     | 2 MB    | 1,000 entries maximum. Most entries are the same entries as the log entries.                                    |
| Screen capture | 22 MB   | Only while a `snapshot` or `animation` command runs. See [Snapshots and animations](#snapshots-and-animations). |

The device estimates the memory of an entry as 2 bytes for each character of the message, and 64 bytes for the entry. A typical entry has 100 to 200 characters, so 8,000 entries use approximately 3 MB. If all entries have 2,000 characters, the device keeps approximately 2,000 entries.

A screen capture counts the inlined files (4 MB maximum), the canvas and video images (2 MB for each frame maximum), the SVG markup and its encoded copy, the canvas pixels and 4 MB for the file. If a frame needs more than 22 MB, the command fails. Use a smaller `width`. The memory that the browser uses to draw the SVG is not known to the page, so it is not counted. For example, a 1,280 pixel snapshot of the Control setup screen is estimated at approximately 10 MB: 4 MB of canvas, 4 MB kept for the file, and less than 2 MB for the fonts and markup.

## Log levels

| Level   | Entries                                                           |
| ------- | ----------------------------------------------------------------- |
| `debug` | `console.debug`                                                   |
| `info`  | `console.log` and `console.info`                                  |
| `warn`  | `console.warn`                                                    |
| `error` | `console.error`, uncaught errors and unhandled promise rejections |

A request gets the entries at its level and the levels below it in this table.

When `window.debug` is on, ts-client logs each driver call. The device does not collect the ts-client lines of its own `post_logs` and `command_result` calls.

Most app logs use `log()` from `libs/common/src/lib/general.ts`. These logs show only when `window.debug` is on. While a request at the `debug` level is active, the device shows these logs also when `window.debug` is off.

## Admin views

Admin and support users can debug devices from two places. Both show the logs of a device, start and stop live logs at a level, load older entries, download the logs, send commands, and show the results, including snapshots and animations. The text of the views is in English, the same as the other debugging tools.

- **Concierge, Remote Debugging.** Add `remote-debug` to the Concierge `features` setting to show the link in the admin part of the sidebar. The page lists the devices of the driver, with a green dot for the devices that are online. Type in the field to filter the list by ID, app or address. The list shows 100 devices maximum. You can also open any device ID, for example from the setup screen of the device. The device ID is in the `device` query parameter, so you can share a link to a device.
- **Signage Manager, display Admin tab.** The tab shows for admin and support users. It lists the devices that show the display: devices that remote setup set up with the display, and devices that the driver saw on the player route of the display. You can also open another device ID.

The shared parts are `RemoteDebugPanelComponent` and `RemoteDebugViewService` in `libs/components`.

## Driver interface

The driver is not part of this repository. The apps expect this interface. The type definitions are in `libs/common/src/lib/remote-debug.ts`.

### Bindings

| Binding       | Type                             | Description                                                                                  |
| ------------- | -------------------------------- | -------------------------------------------------------------------------------------------- |
| `device:<id>` | `RemoteDebugDeviceState \| null` | Log request and commands for the device with this ID. For example `device:DEV-3F9A0C12B7E4`. |

```ts
interface RemoteDebugDeviceState {
    /** Active log request. `null` or not set when there is none */
    logs?: RemoteLogRequest | null;
    /** Commands for the device, oldest first. The device reads the first 20 */
    commands?: RemoteDebugCommand[];
}

interface RemoteLogRequest {
    /** Unique ID of the request. A device applies each ID one time */
    id: string;
    /** Lowest level to send. The driver can change it while the request is active */
    level: 'debug' | 'info' | 'warn' | 'error';
    /** Most buffered entries to send first. The device picks the newest entries that match. Default and maximum 1,000. `0` sends only new entries */
    history?: number;
    /** Send only buffered entries with a `seq` lower than this value. Use it to get older entries, 1,000 at a time */
    before?: number;
    /** Milliseconds that the device sends new entries after it gets the request. Default 15 minutes, maximum 1 hour */
    duration?: number;
}

type RemoteDebugCommand =
    | { id: string; type: 'status' | 'storage' | 'reload' | 'clear_cache' }
    /** Values of these settings keys, such as `app.title`. 50 keys maximum */
    | { id: string; type: 'settings'; keys: string[] }
    /** Open this route of the app, such as `/bootstrap`. Must start with `/` */
    | { id: string; type: 'navigate'; path: string }
    /** Image of the screen. `width` in pixels, default 1,280, maximum 1,920 */
    | { id: string; type: 'snapshot'; width?: number }
    /**
     * Short animation of the screen. `width` in pixels, default 640, maximum 960.
     * `duration` in milliseconds, default 5,000, maximum 10,000. `fps` default 2,
     * maximum 5. `format` default `webp`
     */
    | {
          id: string;
          type: 'animation';
          width?: number;
          duration?: number;
          fps?: number;
          format?: 'webp' | 'gif';
      };
```

### Methods that the device calls

| Method                                                  | Description                                                                                                     |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `post_logs(device_id, request_id, entries, device)`     | Add the entries to the logs of the request. Ignore the call if `request_id` is not the active request.          |
| `command_result(device_id, command_id, result, device)` | Keep the result of the command and remove the command from `commands`.                                          |
| `register(device)`                                      | Fixed devices only. Add or update the device in `devices` and set its `last_seen`. See [Call load](#call-load). |

```ts
interface RemoteLogEntry {
    /** Number of the entry on the device. Starts at 1 when the app loads. A gap shows entries below the requested level, or entries that were dropped */
    seq: number;
    /** Unix epoch in milliseconds on the device clock */
    timestamp: number;
    level: 'debug' | 'info' | 'warn' | 'error';
    source: 'console' | 'error' | 'rejection';
    /** Plain text. 2,000 characters maximum */
    message: string;
}

interface RemoteDebugResult {
    ok: boolean;
    /** Data of the command. See the commands table */
    data?: unknown;
    /** Reason that the command failed */
    error?: string;
}

interface RemoteDebugDevice {
    id: string;
    /** Name of the app: the `app.name` setting, else the name in the console log tag */
    app: string;
    version: string;
    /** Git hash of the build */
    build: string;
    /** Page address, without credentials */
    url: string;
    user_agent: string;
    /** Unix epoch in milliseconds when the app loaded. A new value shows that the app reloaded */
    started_at: number;
}
```

### Commands

| Command       | Data of the result                                 | Description                                                                                                                                                                               |
| ------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`      | `RemoteDebugStatus`                                | Status of the device. See below.                                                                                                                                                          |
| `settings`    | Value of each key. `null` when a key has no value. | Values of the settings keys, as the app reads them now. Local overrides are included. A field with a credential, such as a token, a password or a value in `keys`, shows as `[Filtered]`. |
| `storage`     | `{ key: string; length: number }[]`                | Local storage keys and the length of each value. The device does not send values.                                                                                                         |
| `navigate`    | `{ url: string }`                                  | Open a route of the app. The command fails if the route does not open.                                                                                                                    |
| `reload`      | `null`                                             | Reload the app after the result is sent.                                                                                                                                                  |
| `clear_cache` | `{ caches: number; workers: number }`              | Remove all Cache Storage caches and service worker registrations, then reload the app.                                                                                                    |
| `snapshot`    | `RemoteDebugMedia`                                 | Image of the screen. See [Snapshots and animations](#snapshots-and-animations).                                                                                                           |
| `animation`   | `RemoteDebugMedia`                                 | Short animation of the screen. See [Snapshots and animations](#snapshots-and-animations).                                                                                                 |

`RemoteDebugStatus` has these fields:

| Field               | Description                                                                      |
| ------------------- | -------------------------------------------------------------------------------- |
| `device`            | `RemoteDebugDevice`.                                                             |
| `device_time`       | Device clock. Compare it with the driver clock to find clock errors.             |
| `timezone`          | Time zone of the device, such as `Australia/Sydney`.                             |
| `language`          | Language of the browser.                                                         |
| `online`            | Whether the browser has a network connection.                                    |
| `websocket`         | Whether the PlaceOS websocket is connected.                                      |
| `visible`           | Whether the app shows on the screen.                                             |
| `native`            | Whether the app runs in the mobile app shell.                                    |
| `screen`            | `width`, `height` and `pixel_ratio` of the screen.                               |
| `memory`            | `used` and `limit` of JavaScript memory in bytes. Only in Chromium browsers.     |
| `storage`           | `usage` and `quota` of the origin storage in bytes.                              |
| `service_worker`    | `active`: a service worker controls the page. `new_version`: an update is ready. |
| `user`              | `id` and `email` of the signed-in user. `null` before sign in.                   |
| `building_id`       | Active building.                                                                 |
| `setting_overrides` | Keys of the local settings overrides from the settings debug panel.              |
| `log_counts`        | Entries since the app loaded, for each level.                                    |
| `last_error`        | Last `error` entry. `null` when there is none.                                   |
| `buffered`          | Entries that the device keeps now.                                               |
| `log_request`       | ID of the active log request. `null` when there is none.                         |

The device removes credentials from addresses in the result. The JSON of a result has 100,000 characters maximum. A larger result fails with the error `Result is too large`.

### Snapshots and animations

A web page cannot read the pixels of the screen without a permission prompt. Thus the device draws the page again from its DOM: it copies the page and its styles into an SVG `foreignObject`, and draws the SVG on a canvas. The source is `libs/common/src/lib/screen-capture.ts` and `libs/common/src/lib/image-encoders.ts`. The app loads this code only when it gets the first `snapshot` or `animation` command.

The device uploads the file to PlaceOS uploads with the `support` permission, so only support and admin users can read it. The result holds the upload ID, and the file is at `/api/engine/v2/uploads/<upload_id>/url`. A file is 4 MB maximum. The user that the device signs in as must be able to upload files. If the upload fails or takes more than 2 minutes, the command fails.

The native apps cannot upload yet. `@placeos/cloud-uploads` sends upload requests to `/api/engine/v2/uploads` on the page origin, which is a local address in the native apps, and its `initUploads` ignores the `endpoint` option. Snapshots and animations work in the native apps when the library uses the API address.

The file does not go through the driver, because PlaceOS logs each argument of a driver call at the `info` level. Also, `post_logs` batches show in the PlaceOS logs.

```ts
interface RemoteDebugMedia {
    /** `image/webp` or `image/png` for a snapshot. `image/webp` or `image/gif` for an animation */
    mime: string;
    width: number;
    height: number;
    frames: number;
    /** Milliseconds of the animation. `0` for a snapshot */
    duration: number;
    /** Bytes of the file */
    bytes: number;
    /** ID of the PlaceOS upload. In mock mode, a `blob:` URL of the file in the page */
    upload_id: string;
}
```

- A snapshot is WebP. Browsers that cannot encode WebP, such as Safari, send PNG.
- An animation is an animated WebP. With `format: 'gif'`, or in a browser that cannot encode WebP, it is a GIF. The GIF palette comes from the most common colours of the first frame.
- The device takes the frames at `fps`. If a frame takes longer to draw than the time between frames, the next frame is later. Each frame shows for the real time until the next frame, and the last frame shows until the end of `duration`. Capture stops early when the file would be larger than 4 MB, or when the window changes size.
- The capture shows the visible area of the page, scaled to `width`.
- CSS animations and transitions show at their current state.
- Each style sheet, font and image that the device reads for the capture has 10 seconds. A file that the device cannot read in time shows as an empty area.

What the capture cannot show:

- Content that the page cannot read shows as an empty area: images from other origins without CORS, and canvases and videos from other origins.
- All iframes, also iframes from the same origin. They show as an empty area.
- Scroll positions inside the page.
- The values of password fields.

Timing: in Chrome on a desktop computer, a 1,280 pixel snapshot of the Control setup screen takes about 0.4 seconds and is about 20 KB. A 4 second animation at 3 frames each second and 640 pixels is about 90 KB as WebP or GIF. Slower devices take longer for each frame.

### Methods and bindings for the admin views

Devices do not use these methods and bindings. The admin views (see [Admin views](#admin-views)) use them. The types are in `libs/common/src/lib/remote-debug.ts`.

| Method                                    | Description                                                                                                                                                                                                              |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request_logs(device_id, level, options)` | Set `logs` in `device:<device_id>` to a request with a new, unique ID.                                                                                                                                                   |
| `set_level(device_id, level)`             | Change the `level` of the active request. Keep the same request ID.                                                                                                                                                      |
| `stop_logs(device_id)`                    | Set `logs` in `device:<device_id>` to `null`.                                                                                                                                                                            |
| `send_command(device_id, type, options)`  | Add a command with a new, unique ID to `commands`. Returns the command ID, or `null` when the command is not valid or the device has 20 commands. `options` holds the command fields, such as `keys`, `path` or `width`. |

The driver shows what it gets in these bindings:

| Binding        | Type                                                               | Description                                                                                                                                              |
| -------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `devices`      | `Record<string, RemoteDebugDevice & { last_seen: number }>`        | Devices that registered or called the driver, by device ID.                                                                                              |
| `logs:<id>`    | `{ device: RemoteDebugDevice \| null; entries: RemoteLogEntry[] }` | Entries of the app session in `device.started_at`, ordered by `seq`, oldest first. When `started_at` changes, remove the entries of the earlier session. |
| `results:<id>` | `{ id; type; result: RemoteDebugResult; received_at }[]`           | Last command results, oldest first. A `snapshot` or `animation` result holds the upload ID of its file.                                                  |

### How a device applies the binding

1. The device listens to the `device:<id>` binding of its own ID.
2. When `logs` has a request with a new ID, the device sends its newest buffered entries at the requested level. `history` sets the number of entries, 1,000 maximum. `before` sends only entries with a lower `seq`.
3. The device then sends new entries at the requested level, one time each second. One call has 100 entries maximum. One call runs at a time.
4. When `logs` has the same request ID with a different `level` or `duration`, the device uses the new level. It does not send the buffered entries again. The duration starts again.
5. The request ends when `logs` changes to `null` or to a value that is not a request, or when the duration ends. After the duration ends, the device does not apply that request ID again until the app reloads.
6. The device runs the commands that it did not run before, one at a time and oldest first. After each command, it calls `command_result`.

If a `post_logs` call fails, the device sends the same entries again in the next call. 1,000 entries and 2 MB maximum wait to send. When more entries wait, the device removes the oldest entries first. The gap in `seq` shows this.

A device runs each command ID one time. It saves the last 50 command IDs in local storage before it runs a command, so a reload does not run a command again. If local storage is not available, `reload` and `clear_cache` fail. This prevents a reload loop. The device does not send a failed `command_result` call again.

### Get older entries

A device keeps 8,000 entries, but one request gets 1,000 maximum. To get older entries:

1. Find the lowest `seq` that the driver has for the device.
2. Set a new request with that value in `before`.
3. Do this again until the device sends no entries, or until `seq` is 1.

Each request also sends new entries while it is active. Keep the entries ordered by `seq`.

### Driver requirements

- Make a new, unique ID for each request and each command.
- Keep 20 commands maximum for each device.
- Set `logs` to `null` when the request ends. A device that reloads applies a request that is still in the binding.
- Remove stale commands. A stale command is a command without a result after a time limit, for example 15 minutes.
- Ignore entries that have a `seq` that the driver has already for the same `started_at`. A device sends a failed batch again, and a batch can arrive after a timeout.
- Only let users who can debug devices read `devices`, `logs:<id>` and `results:<id>`, set requests and send commands. `reload`, `clear_cache` and `navigate` change what a device shows. Any device that can sign in can call `post_logs`, `command_result` and `register`, and read its own `device:<id>` binding.
- The driver cannot check that a caller owns a device ID. Keep the user that first called for each device ID, and ignore calls for that ID from other users. Use `devices` as information from the devices, not to give access.
- Snapshots and animations show what is on the screen, for example names and meeting titles. The uploads need the `support` permission to read. Remove them after a time limit. A device can finish an upload after its command timed out, so the driver does not get that upload ID. Also find old uploads by their file name, which starts with `remote-debug-`.
- Keep a limit on the data for each device. Keep at least the 8,000 entries that a device can have, so that [Get older entries](#get-older-entries) works, and for example the last 50 results. Keep 1,000 devices maximum. When there are more, remove the devices with the oldest `last_seen` first.
- Remove entries and results after a time limit, for example 7 days, also for a device that still registers.
- Set `last_seen` on each call from the device: `register`, `post_logs` and `command_result`. Remove stale devices, for example after 7 days.

### Mock driver

In mock mode, the `remote_debug` binding of each zone points to the mock system `sys-remote-debug`. The mock is in `libs/mocks/src/lib/realtime/remote-debug.ts`. It has all the methods and bindings in this section. The mock devices `DEV-MOCK0001` and `DEV-MOCK0002` have seeded logs.

The app in mock mode is also a device of the mock. A request or a command for the ID of the app shows the result in `logs:<id>` and `results:<id>`. The mock keeps the last 50 results for each device. Uploads are not mocked, so in mock mode the device does not upload: the upload ID is a `blob:` URL of the file in the page.

Use the [Admin views](#admin-views) in mock mode. The browser console also has the mock module as `app.remote_debug`, for example to add fixed devices for the views to list:

```js
const id = localStorage.getItem('PLACEOS.DEVICE_ID');
app.remote_debug.call('send_command', [id, 'snapshot']);
// After the result arrives, open the file in a new tab
const last = app.remote_debug[`results:${id}`].at(-1);
window.open(last.result.data.upload_id);
// A device for the views to list
app.remote_debug.call('register', [{ id: 'DEV-3F9A0C12B7E4', app: 'Signage', version: '1', build: 'a', url: 'https://placeos.test/signage/#/signage/sys-1', user_agent: '', started_at: Date.now() }]);
```

### Call load

A device that is not fixed, such as a staff browser, calls the driver only while it has an active request or a new command.

A fixed device also calls `register` so that the admin views list it. A fixed device is signed in with an API key, or was set up as a fixed device, for example from its bootstrap screen (ts-client `isFixedDevice()`). The first call is after a random wait of 60 seconds maximum, so that devices that start together, for example after a power cut, spread their calls. Then the device calls `register` one time each 15 minutes. For 1,000 fixed devices, this is approximately one call each second.

The admin views show a device as online when it called the driver in the last 35 minutes: two heartbeats and 5 minutes.

While a request is active, a device makes one `post_logs` call each second maximum. One call has 100 entries maximum, so a call is approximately 200 KB maximum.
