# PlaceOS Template User Interfaces

![BUILD](https://github.com/placeos/user-interfaces/workflows/BUILD/badge.svg)
![TEST](https://github.com/placeos/user-interfaces/workflows/TEST/badge.svg)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Install [Bun](https://bun.sh/)
1. Run `bun install` in the root folder

## Development

To run the dev server use the command `nx serve <project>` e.g. `nx serve control`

If you run into browser errors after starting up the dev server try adding `--no-hmr` to the serve command e.g. `nx serve control --no-hmr`

By default the dev web server proxies all requests to the set live system, if you wish to use a mock requests and systems press `Ctrl + Alt/Option + Shift + M` to reload the page in mock mode. To leave mock mode you can repeat the keypresses.

### Connecting to a live environment

If you wish to develop with a live environment you can change the details in [`config/proxy.conf.js`](./config/proxy.conf.js)
to point the the server with the live environment and update the SSL settings the match that environment.

Note that OAuth redirects don't work when connecting you local instance to the live environment.
To login in the local instance you will either need to copy a token from a live instance or use the basic auth form at `/login/?continue=/`. For the local login you will need to create a user or set a password for an auto-generated user.

## Compilation

Compile the application into static files using `nx build <project>` e.g. `nx build bookings`

The command takes the arguments `--prod` to minify the resulting build and `--aot` to compile the angular code using the angular Ahead of Time compiler.

Default application/runtime settings can be found in `projects/<project>/app/settings.ts`

## Mobile Apps

Some frontends can also be packaged as native mobile apps with Capacitor. The supported mobile app names are listed in [`tools/capacitor/apps.json`](./tools/capacitor/apps.json). At the time of writing these are `workplace`, `booking-panel` and `control`.

Mobile commands are exposed as Nx targets on each supported app:

```bash
# Build the Angular app with its mobile configuration
bunx nx build workplace --configuration=mobile

# Generate/update the native project and copy web assets
bunx nx run workplace:mobile:sync:ios
bunx nx run workplace:mobile:sync:android

# Open the generated native project in Xcode or Android Studio
bunx nx run workplace:mobile:open:ios
bunx nx run workplace:mobile:open:android

# Build native debug artifacts
bunx nx run workplace:mobile:build:ios
bunx nx run workplace:mobile:build:android

# Build, install and launch on a booted simulator or emulator
bunx nx run workplace:mobile:run:ios
bunx nx run workplace:mobile:run:android
```

Replace `workplace` with another supported app name when needed. The `mobile:*` targets always run the mobile Angular build before syncing native assets.

Generated native projects and artifacts are written to `.capacitor/<app>/`. Build artifacts are written to `.capacitor/<app>/artifacts/`, for example `.capacitor/workplace/artifacts/workplace-ios-simulator.zip` or `.capacitor/workplace/artifacts/workplace-android-debug.apk`.

### Mobile prerequisites

- Install dependencies with `bun install` before running mobile targets.
- iOS sync/open/build/run requires macOS and Xcode. `mobile:run:ios` also requires a booted iOS Simulator.
- Android build/run requires a Java runtime, Android Studio/SDK and an emulator or connected device. `mobile:run:android` uses `adb` to launch the app.
- Use `bunx nx ...` as shown above when running mobile targets directly.

### What the mobile helper does

The helper in [`tools/capacitor/run.mjs`](./tools/capacitor/run.mjs) creates the generated Capacitor workspace, installs the required Capacitor app/browser plugins, generates icons and splash screens from the configured app icon, copies the Angular output into the native project, and patches the native auth callback scheme.

## Tests

Unit tests can be run using `nx test <project>` e.g. `nx test kiosk`

Integration tests can be run first starting up the webpack dev server with `nx serve`, setting `mock` to `true` in `projects/<project>/app/settings.ts` and running cypress with `nx e2e <project>-e2e`

## Deployment

Github actions have been setup for creating build artifacts and deploying them to a standalone branch on this repository.

Each application has a seperate branch dedicated to each of it's build types.

Commits to the branch `develop` will produce development builds that are committed to the branches `build/<project>/dev`  
Commits to the branch `release/**` will produce development builds that are committed to the branches `build/<project>/uat`.
You should have only one `release` branch at a time and it should be kept inline with develop rather than worked on directly.  
Commits to the branch `master` will produce a production build that is commited to the branch `build/<project>/prod`

## Available Frontends

There are 17 available frontends in this workspace

-   [`app-loader`](./apps/app-loader/) | Full-page application launcher for domain-configured apps
-   [`assistant-panel`](./apps/assistant-panel/) | Assistant panel interface
-   [`booking-panel`](./apps/booking-panel/README.md) | Booking Panel user interface
-   [`caterer-ui`](./apps/caterer-ui/README.md) | Interface for external caterers
-   [`concierge`](./apps/concierge/README.md) | Concierge / Front of House application
-   [`control`](./apps/control/README.md) | AV/Room Control application
-   [`enrolment`](./apps/enrolment/) | Enrolment interface
-   [`map-kiosk`](./apps/map-kiosk/README.md) | Internal building location kiosk UI
-   [`outlook-addin`](./apps/outlook-addin/README.md) | Outlook add-in interface
-   [`redirect`](./apps/redirect/) | Redirect helper application
-   [`signage`](./apps/signage/) | Signage display interface
-   [`signage-manager`](./apps/signage-manager/) | Signage management interface
-   [`stagehand`](./apps/stagehand/) | Stagehand interface
-   [`survey`](./apps/survey/) | Survey interface
-   [`timetable`](./apps/timetable/) | Timetable interface
-   [`visitor-kiosk`](./apps/visitor-kiosk/README.md) | Visitor kiosk interface
-   [`workplace`](./apps/workplace/README.md) | Staff Application

## Settings

A list of application settings (configurable via Zone.metadata) is available at `/apps/<app name>/src/environments/settings.schema.json`

-   [Workplace App](https://github.com/PlaceOS/user-interfaces/blob/master/apps/workplace/src/environments/settings.ts)

## Upgrade

`nx migrate latest`
`bun install`
`nx migrate --run-migrations`

## Generate Changelog
 
`git cliff -o CHANGELOG.md`
