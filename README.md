# PlaceOS Template User Interfaces

![Bookings PROD](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-PROD/badge.svg)
![Bookings DEV](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-DEVELOP/badge.svg)
![Bookings UAT](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-UAT/badge.svg)  
![Catering PROD](https://github.com/placeos/user-interfaces/workflows/CATERING-PROD/badge.svg)
![Catering DEV](https://github.com/placeos/user-interfaces/workflows/CATERING-DEVELOP/badge.svg)
![Catering UAT](https://github.com/placeos/user-interfaces/workflows/CATERING-UAT/badge.svg)  
![Concierge PROD](https://github.com/placeos/user-interfaces/workflows/CONCIERGE-PROD/badge.svg)
![Concierge DEV](https://github.com/placeos/user-interfaces/workflows/CONCIERGE-DEVELOP/badge.svg)
![Concierge UAT](https://github.com/placeos/user-interfaces/workflows/CONCIERGE-UAT/badge.svg)  
![Control PROD](https://github.com/placeos/user-interfaces/workflows/CONTROL-PROD/badge.svg)
![Control DEV](https://github.com/placeos/user-interfaces/workflows/CONTROL-DEVELOP/badge.svg)
![Control UAT](https://github.com/placeos/user-interfaces/workflows/CONTROL-UAT/badge.svg)  
![Visitor Kiosk PROD](https://github.com/placeos/user-interfaces/workflows/VISITOR-KIOSK-PROD/badge.svg)
![Visitor Kiosk DEV](https://github.com/placeos/user-interfaces/workflows/VISITOR-KIOSK-DEVELOP/badge.svg)
![Visitor Kiok UAT](https://github.com/placeos/user-interfaces/workflows/VISITOR-KIOSK-UAT/badge.svg)  
![Map Kiosk PROD](https://github.com/placeos/user-interfaces/workflows/MAP-KIOSK-PROD/badge.svg)
![Map Kiosk DEV](https://github.com/placeos/user-interfaces/workflows/MAP-KIOSK-DEVELOP/badge.svg)
![Map Kiosk UAT](https://github.com/placeos/user-interfaces/workflows/MAP-KIOSK-UAT/badge.svg)  
![Workplace PROD](https://github.com/placeos/user-interfaces/workflows/WORKPLACE-PROD/badge.svg)
![Workplace DEV](https://github.com/placeos/user-interfaces/workflows/WORKPLACE-DEVELOP/badge.svg)
![Workplace UAT](https://github.com/placeos/user-interfaces/workflows/WORKPLACE-UAT/badge.svg)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global nx` to Install [Nx CLI](https://www.npmjs.com/package/nx)
1. Run `npm install --global @angular/cli` to Install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `nx serve <project>` e.g. `nx serve control`

By default the dev web server proxies all requests to the set live system, if you wish to use a mock requests and systems press `Ctrl + Alt/Option + Shift + M` to reload the page in mock mode. To leave mock mode you can repeat the keypresses.

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
-   [`catering`](./projects/caterers-ui/README.md) | Interface for external caterers
-   [`concierge`](./projects/concierge/README.md) | Concierge / Front of House application
-   [`control`](./projects/control/README.md) | AV/Room Control application
-   [`kiosk`](./projects/map-kiosk/README.md) | Internal building location kiosk UI
-   [`visitors`](./projects/visitor-kiosk/README.md) | Internal building location kiosk UI
-   [`workplace`](./projects/workplace/README.md) | Staff Application
