# Mobile Builds

This repository supports Capacitor-based Android and iOS builds for:

- `workplace`
- `booking-panel`
- `control`

Native projects are generated on demand into `.capacitor/<app>/` and are not committed.
Native launcher icons and splash assets are also regenerated on demand from each app's source icon during sync/build flows.

## Prerequisites

- Node.js 20
- `npm install`
- Android Studio and Android SDK for Android builds
- Xcode for iOS builds
- macOS for any iOS sync, open, or build workflow

## Bundle IDs

| App | Bundle ID |
| --- | --- |
| `workplace` | `com.placeos.workplace` |
| `booking-panel` | `com.placeos.booking.panel` |
| `control` | `com.placeos.control` |

## Commands

Sync Android native project:

```bash
nx run workplace:"mobile:sync:android"
nx run booking-panel:"mobile:sync:android"
nx run control:"mobile:sync:android"
```

Sync iOS native project:

```bash
nx run workplace:"mobile:sync:ios"
nx run booking-panel:"mobile:sync:ios"
nx run control:"mobile:sync:ios"
```

Open native IDE project:

```bash
nx run workplace:"mobile:open:android"
nx run workplace:"mobile:open:ios"
```

Build unsigned native artifacts:

```bash
nx run workplace:"mobile:build:android"
nx run workplace:"mobile:build:ios"
```

## Generated Output

Generated native workspaces:

- `.capacitor/workplace/`
- `.capacitor/booking-panel/`
- `.capacitor/control/`

Android debug APK output:

- `.capacitor/<app>/android/app/build/outputs/apk/debug/app-debug.apk`
- copied to `.capacitor/<app>/artifacts/<app>-android-debug.apk`

iOS simulator app output:

- `.capacitor/<app>/ios/build/Build/Products/Debug-iphonesimulator/*.app`
- zipped to `.capacitor/<app>/artifacts/<app>-ios-simulator.zip`

## CI Artifacts

GitHub Actions workflow: `.github/workflows/mobile.yml`

Artifacts uploaded by CI:

- `<app>-android-debug`
- `<app>-ios-simulator`

## Notes

- Native folders are generated from `tools/capacitor/apps.json`
- Native assets are generated from the app `icon-512x512.png` source copied into `.capacitor/<app>/resources/`
- Do not commit `.capacitor/`
- Mobile web builds use the app `mobile` build configuration, which disables Angular service workers for native packaging
