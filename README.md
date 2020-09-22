# PlaceOS Template User Interfaces

![Bookings PROD](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-PROD/badge.svg)
![Bookings UAT](https://github.com/placeos/user-interfaces/workflows/BOOKINGS-DEVELOP/badge.svg)  
![Catering PROD](https://github.com/placeos/user-interfaces/workflows/CATERING-PROD/badge.svg)
![Catering UAT](https://github.com/placeos/user-interfaces/workflows/CATERING-DEVELOP/badge.svg)  
![Concierge PROD](https://github.com/placeos/user-interfaces/workflows/CONCIERGE-PROD/badge.svg)
![Concierge UAT](https://github.com/placeos/user-interfaces/workflows/CONCIERGE-DEVELOP/badge.svg)  
![Control PROD](https://github.com/placeos/user-interfaces/workflows/CONTROL-PROD/badge.svg)
![Control UAT](https://github.com/placeos/user-interfaces/workflows/CONTROL-DEVELOP/badge.svg)  
![Enrolment PROD](https://github.com/placeos/user-interfaces/workflows/ENROLMENT-PROD/badge.svg)
![Enrolment UAT](https://github.com/placeos/user-interfaces/workflows/ENROLMENT-DEVELOP/badge.svg)  
![Map Kiosk PROD](https://github.com/placeos/user-interfaces/workflows/KIOSK-PROD/badge.svg)
![Map Kiosk UAT](https://github.com/placeos/user-interfaces/workflows/KIOSK-DEVELOP/badge.svg)  
![Workplace PROD](https://github.com/placeos/user-interfaces/workflows/WORKPLACE-PROD/badge.svg)
![Workplace UAT](https://github.com/placeos/user-interfaces/workflows/WORKPLACE-DEVELOP/badge.svg)

## Setup

1. Install [NodeJS](https://nodejs.org/en/download/current/)
1. Run `npm install` in the root folder
1. Run `npm install --global @angular/cli` to Install [Angular CLI](https://github.com/angular/angular-cli)

## Development

To run the dev server use the command `ng serve <project>` e.g. `ng serve control`

By default the dev web server proxies all requests to the set live system, if you wish to use a mock system use set `mock` to `true` in the `projects/<project>/app/settings.ts` file

## Compilation

Compile the application into static files using `ng build <project>` e.g. `ng build bookings`

The command takes the arguments `--prod` to minify the resulting build and `--aot` to compile the angular code using the angular Ahead of Time compiler.

Default application/runtime settings can be found in `projects/<project>/app/settings.ts`

## Tests

Unit tests can be run using `ng test <project>`  e.g. `ng test kiosk`

Integration tests can be run first starting up the webpack dev server with `ng serve`, setting `mock` to `true` in `projects/<project>/app/settings.ts` and running cypress with `npx cypress run`  

## Available Frontends

There are 7 available frontends for this client

- [`bookings`](./projects/bookings/README.md) | Booking Panel user interface
- [`catering`](./projects/catering/README.md) | Interface for external caterers
- [`concierge`](./projects/concierge/README.md) | Concierge / Front of House application
- [`control`](./projects/control/README.md) | AV/Room Control application
- [`enrolment`](./projects/enrolment/README.md) | Visitor enrolment UI
- [`kiosk`](./projects/map-kiosk/README.md) | Internal building location kiosk UI
- [`workplace`](./projects/workplace/README.md) | Staff Application
