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

### Bindings

| Binding       | Type                                | Description                                                                       |
| ------------- | ----------------------------------- | --------------------------------------------------------------------------------- |
| `connected`   | boolean                             | Whether the driver is ready. The QR code shows only when the value is `true`.     |
| `devices`     | `Record<string, RemoteSetupDevice>` | Devices that registered, by device ID. 4,000 devices maximum.                     |
| `device_<id>` | `RemoteSetupCommand \| null`        | Command that the device with this ID must apply. `null` when there is no command. |

```ts
interface RemoteSetupDevice {
    id: string;
    app: 'booking-panel' | 'control' | 'signage';
    /** Configuration on the device. `null` when it is not set up */
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

type RemoteSetupCommand = { id: string; action: 'configure'; config: RemoteSetupConfig; issued_at: number } | { id: string; action: 'clear'; issued_at: number };
```

The type definitions are in `libs/common/src/lib/remote-setup.ts`.

### Methods

| Method                             | Returns    | Called by  | Description                                                                                                                                                                                        |
| ---------------------------------- | ---------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `register(device_id, app, config)` | –          | Device     | Add or update the device in `devices`, and set `last_seen`. The device calls this method when the driver connects, and then every 15 minutes.                                                      |
| `configure(device_id, config)`     | command ID | Setup flow | Set a `configure` command in `device_<device_id>`. Fail if the device is not in `devices`.                                                                                                         |
| `clear(device_id)`                 | command ID | Setup flow | Set a `clear` command in `device_<device_id>`. Fail if the device is not in `devices`.                                                                                                             |
| `complete(device_id, command_id)`  | –          | Device     | If `command_id` is the command in `device_<device_id>`: set the device `config` from the command (`null` for `clear`), set `last_command` and `last_seen`, and set `device_<device_id>` to `null`. |

### Driver requirements

- Make a new, unique command ID for each `configure` and `clear` call. A device applies a command ID one time only.
- Keep 4,000 devices maximum in `devices`. When there are more, remove the devices with the oldest `last_seen` first.
- Remove stale devices. A stale device is a device that did not call `register` or `complete` in a time limit, for example 7 days.
- Remove stale commands. A stale command is a command that the device did not complete in a time limit, for example 15 minutes.
- Only let users who can set up devices call `configure` and `clear`. Any device that can sign in can call `register` and `complete`.

The apps do not remove stale data and do not retry a failed `complete` call. They use the driver limits above for these cases.

## How a device applies a command

The device sends the change to its bootstrap route, the same as a setup link:

| App           | Configure                                                             | Clear                    |
| ------------- | --------------------------------------------------------------------- | ------------------------ |
| Booking Panel | `#/bootstrap?system_id=<id>` (adds `&event=true` for the events view) | `#/bootstrap?clear=true` |
| Control       | `#/bootstrap?system_id=<id>`                                          | `#/bootstrap?clear=true` |
| Signage       | `#/bootstrap?display=<id>` (adds `&template=<id>` for a template)     | `#/bootstrap?clear=true` |

A system ID from MDM managed config has priority. A device with an MDM system ID does not show the QR code and does not apply remote setup commands.

## Mock mode

In mock mode, the system `sys-remote-setup` has a mock RemoteSetup driver. It has three devices: `DEV-MOCK0001` (Booking Panel), `DEV-MOCK0002` (Control) and `DEV-MOCK0003` (Signage). These devices complete their commands after 1.5 seconds. Apps on other origins do not share the mock.
