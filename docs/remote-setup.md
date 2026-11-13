# Remote setup

Remote setup lets a person set up a fixed device from a phone. It works for the Booking Panel, Control and Signage apps.

1. The device shows its setup screen with a QR code.
2. The person scans the QR code. The setup flow opens in Concierge (Booking Panel and Control) or Signage Manager (Signage).
3. The person selects a system and sends it to the device. The device applies the system and opens it.

The setup flow can also clear the configuration on a device. The device then goes back to its setup screen.

## Enable remote setup

1. Add a system with the `RemoteSetup` driver. See [Driver interface](#driver-interface).
2. Add the `remote_setup` object to the authority config of the domain:

```json
{
    "remote_setup": {
        "system_id": "sys-XXXXXXXX",
        "module": "RemoteSetup"
    }
}
```

| Field       | Type   | Default         | Description                                                                             |
| ----------- | ------ | --------------- | --------------------------------------------------------------------------------------- |
| `system_id` | string | –               | System that has the RemoteSetup driver. Remote setup is off when this field is not set. |
| `module`    | string | `"RemoteSetup"` | Name of the driver module in the system.                                                |

The QR code shows only when `system_id` is set and the `connected` binding of the module is `true`.

To show a Remote Setup link in the Concierge sidebar, add `remote-setup` to the Concierge `features` setting. Signage Manager shows a QR code button in the Displays header when `system_id` is set.

## Setup flow address

Each device app has a `remote_setup_url` setting for the address that the QR code opens. The device adds `?device=<id>` to the address.

| App           | Default address                                           |
| ------------- | --------------------------------------------------------- |
| Booking Panel | `https://<PlaceOS domain>/concierge/#/remote-setup`       |
| Control       | `https://<PlaceOS domain>/concierge/#/remote-setup`       |
| Signage       | `https://<PlaceOS domain>/signage-manager/#/remote-setup` |

The default uses the PlaceOS domain, not the address of the page. Thus the QR code also works in the mobile apps, where the page address is a local address.

## Device ID

Each device makes a random ID the first time that it starts. The ID is `DEV-` and 12 uppercase hexadecimal characters, such as `DEV-3F9A0C12B7E4`. A device that already has an ID in an older format keeps that ID. The device keeps the ID in local storage under `PLACEOS.DEVICE_ID`. Remote logging uses the same ID. The setup screen shows the ID below the QR code, so that a person can also type it in the setup flow. The setup flow ignores the case of a typed ID.

If the app data is cleared, the device makes a new ID.

## Driver interface

The driver is not part of this repository. The apps expect this interface.

Only devices that are not set up register with the driver. A device registers while it shows its setup screen. A device that is set up does not call the driver. It only reads the bindings.

### Bindings

| Binding         | Type                                | Description                                                                      |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------- |
| `connected`     | boolean                             | Whether the driver is ready. The QR code shows only when the value is `true`.    |
| `devices`       | `Record<string, RemoteSetupDevice>` | Devices that registered, by device ID. 1,000 devices maximum.                    |
| `device_<id>`   | `RemoteSetupCommand \| null`        | Configure command for the device with this ID. `null` when there is no command.  |
| `clear_list`    | `string[]`                          | IDs of the devices to clear. An ID stays in the list until the device registers. |
| `clear_systems` | `RemoteSetupSystemClear[]`          | Apps and systems whose devices must clear. An entry stays for 15 minutes.        |

```ts
interface RemoteSetupDevice {
    id: string;
    app: 'booking-panel' | 'control' | 'signage';
    /** Configuration from the last completed command. `null` after `register` */
    config: RemoteSetupConfig | null;
    /** Unix epoch in milliseconds of the last `register` or `complete` call */
    last_seen: number;
    /** ID of the last command that the device completed */
    last_command?: string;
}

interface RemoteSetupConfig {
    /** System that the device shows. For signage, the display system */
    system_id: string;
    /** Signage only. Template that the display shows */
    template_id?: string;
    /** Booking Panel only. Open the events view of the system */
    event_view?: boolean;
}

interface RemoteSetupSystemClear {
    id: string;
    /** Devices of this app clear */
    app: 'booking-panel' | 'control' | 'signage';
    /** Devices that show this system clear */
    system_id: string;
    issued_at: number;
}

interface RemoteSetupCommand {
    id: string;
    config: RemoteSetupConfig;
    issued_at: number;
}
```

The type definitions are in `libs/common/src/lib/remote-setup.ts`.

### Methods

| Method                            | Returns    | Called by  | Description                                                                                                                                                                                                                                                             |
| --------------------------------- | ---------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `register(device_id, app)`        | –          | Device     | Add or update the device in `devices`. Set its `config` to `null` and set `last_seen`. Remove `device_id` from `clear_list`. The device calls this method while it shows its setup screen: after a random wait, and then every 15 minutes. See [Call load](#call-load). |
| `configure(device_id, config)`    | command ID | Setup flow | Set a configure command in `device_<device_id>`. Fail if the device is not in `devices`.                                                                                                                                                                                |
| `clear(device_id)`                | –          | Setup flow | Add `device_id` to `clear_list`. The device does not have to be in `devices`, because a device that is set up does not register.                                                                                                                                        |
| `clear_system(app, system_id)`    | –          | Setup flow | Add an entry with a new, unique ID to `clear_systems`.                                                                                                                                                                                                                  |
| `complete(device_id, command_id)` | –          | Device     | If `command_id` is the command in `device_<device_id>`: set the device `config` from the command, set `last_command` and `last_seen`, and set `device_<device_id>` to `null`.                                                                                           |

### Driver requirements

- Make a new, unique command ID for each `configure` call. A device applies a command ID one time only.
- Keep 1,000 devices maximum in `devices`. When there are more, remove the devices with the oldest `last_seen` first.
- Keep 1,000 IDs maximum in `clear_list`. When there are more, remove the oldest IDs first.
- Remove an entry from `clear_systems` 15 minutes after `clear_system` adds it. Keep 1,000 entries maximum.
- Remove stale devices. A stale device is a device that did not call `register` or `complete` in a time limit, for example 7 days.
- Remove stale commands. A stale command is a command that the device did not complete in a time limit, for example 15 minutes.
- Remove stale IDs from `clear_list`, for example after 7 days.
- Only let users who can set up devices call `configure`, `clear` and `clear_system`. Any device that can sign in can call `register` and `complete`.

The apps do not remove stale data and do not retry a failed `complete` call. They use the driver limits above for these cases.

### Call load

Only devices on their setup screen call `register`. Thus a restart of many devices that are set up, for example after a power cut, an app update or a driver restart, does not cause calls to the driver.

A device on its setup screen waits a random time of 10 seconds maximum before its first `register` call. This spreads the calls of many devices that start at the same time. The heartbeat starts after the first call, so the heartbeats also stay spread. The wait is short, because the setup flow cannot send a configure command to a device before it registers. The setup flow shows the device when it registers.

The bindings do not cause calls to the driver. PlaceOS sends binding values from its status store.

If there are more devices than the device limit, `devices` keeps the devices that registered last. A device on its setup screen registers in 10 seconds, so it is in `devices` when a person sets it up.

## How a device applies a change

The device sends the change to its bootstrap route, the same as a setup link:

| App           | Configure                                                             | Clear                    |
| ------------- | --------------------------------------------------------------------- | ------------------------ |
| Booking Panel | `#/bootstrap?system_id=<id>` (adds `&event=true` for the events view) | `#/bootstrap?clear=true` |
| Control       | `#/bootstrap?system_id=<id>`                                          | `#/bootstrap?clear=true` |
| Signage       | `#/bootstrap?display=<id>` (adds `&template=<id>` for a template)     | `#/bootstrap?clear=true` |

A device applies a configure command from `device_<id>`, then calls `complete`.

A device that is set up clears its configuration when its ID is in `clear_list`. It then shows its setup screen and registers. The `register` call removes the ID from `clear_list`. A device that shows its setup screen does not clear again. The setup flow shows that the clear is done when the ID goes out of `clear_list`.

A device that is set up also clears its configuration when an entry in `clear_systems` has its app and the system that it shows. The device keeps the IDs of the last 20 entries that it applied, and it does not apply an entry again. Thus a person can set up the device with the same system again while the entry is in the list. The driver does not know which devices show a system, so it removes the entry after 15 minutes. A device that is off during these 15 minutes does not clear. A device that a person sets up with the system during these 15 minutes also clears.

The setup flow can also clear a device ID that is not in `devices`, for example a device that a person set up on the device. Type the device ID in the setup flow, then select **Clear setup**. To clear by system, use **Clear by system** below the device list.

A system ID from MDM managed config has priority. A device with an MDM system ID does not show the QR code and does not apply remote setup changes.

## Mock mode

In mock mode, the system `sys-remote-setup` has a mock RemoteSetup driver. It has three devices: `DEV-MOCK0001` (Booking Panel), `DEV-MOCK0002` (Control) and `DEV-MOCK0003` (Signage). These devices apply configure commands and clears after 1.5 seconds. Apps on other origins do not share the mock.
