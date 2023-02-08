# PlaceOS Template User Interfaces

![BUILD](https://github.com/placeos/user-interfaces/workflows/BUILD/badge.svg)
![TEST](https://github.com/placeos/user-interfaces/workflows/TEST/badge.svg)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global nx` to install [NX](https://github.com/nrwl/nx)
1. Run `npm install --global @angular/cli` to install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `nx serve <project>` e.g. `nx serve control`

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

There are 7 available frontends for this client

-   [`bookings`](./apps/booking-panel/README.md) | Booking Panel user interface
-   [`catering`](./apps/caterers-ui/README.md) | Interface for external caterers
-   [`concierge`](./apps/concierge/README.md) | Concierge / Front of House application
-   [`control`](./apps/control/README.md) | AV/Room Control application
-   [`kiosk`](./apps/map-kiosk/README.md) | Internal building location kiosk UI
-   [`visitors`](./apps/visitor-kiosk/README.md) | Internal building location kiosk UI
-   [`workplace`](./apps/workplace/README.md) | Staff Application


## Settings

A list of application settings (configurable via Zone.metadata) is available at `/apps/<app name>/src/environments/settings.schema.json`

* [Workplace App](https://github.com/PlaceOS/user-interfaces/blob/master/apps/workplace/src/environments/settings.ts)
