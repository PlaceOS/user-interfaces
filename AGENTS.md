# AGENTS.md

This file provides guidance to coding agents and automated assistants when working with code in this repository.

## Project Overview

PlaceOS User Interfaces is a monorepo containing multiple Angular applications for workplace management, built with Nx and Angular 20. The repo includes 17 frontend applications and shared libraries for common functionality.

## Repository Structure

### Applications (`/apps`)
- **workplace** - Primary staff application (default project)
- **booking-panel** - Booking panel interface
- **caterer-ui** - External caterer interface
- **concierge** - Front of house application
- **control** - AV/Room control
- **map-kiosk** - Building location kiosk
- **visitor-kiosk** - Visitor kiosk interface
- Additional apps: app-loader, assistant-panel, enrolment, outlook-addin, redirect, signage, signage-manager, stagehand, survey, timetable

E2E tests use Playwright and live in `apps/<app>/e2e` where present.

### Shared Libraries (`/libs`)
Path aliases are defined in `tsconfig.base.json` using `@placeos/*` namespace:

- **@placeos/common** - Core services, utilities, PlaceOS client integration, settings management
- **@placeos/components** - Reusable UI components
- **@placeos/bookings** - Booking/desk/parking management services
- **@placeos/form-fields** - Form input components
- **@placeos/events** - Event management
- **@placeos/catering** - Catering services
- **@placeos/users** - User directory and management
- **@placeos/explore** - Map/space exploration
- **@placeos/assets** - Shared assets
- **@placeos/payments** - Payment processing
- **@placeos/mocks** - Mock data for testing/development

### Configuration Files
- `config/proxy.conf.js` - Dev server proxy configuration for connecting to live PlaceOS environments
- `apps/<app>/src/environments/settings.ts` - Runtime settings per application
- `shared/assets/` - Assets shared across all apps
- `shared/styles/` - Global SCSS styles

## Common Commands

### Development
```bash
# Serve an app with dev server (proxies to live system by default)
nx serve <project>

# If HMR causes browser errors
nx serve <project> --no-hmr

# Examples
nx serve workplace
nx serve booking-panel
```

**Mock Mode**: Press `Ctrl + Alt/Option + Shift + M` in the browser to reload in mock mode (uses mock data instead of live API). Repeat to exit mock mode.

### Building
```bash
# Build a single app
nx build <project>

# Production build with minification and AOT
nx build <project> --configuration=production

# Build all apps (4 parallel processes)
bun run build-all

# Examples
nx build workplace
nx build bookings --configuration=production
```

### Testing
```bash
# Run unit tests for a project
nx test <project>

# Run all tests
bun run test-all

# Run e2e tests (requires dev server running with mock mode enabled)
nx serve <project>  # Set mock: true in settings.ts first
nx e2e <project>-e2e

# Examples
nx test workplace
nx test bookings
```

### Linting
```bash
# Lint all projects
bun run lint

# Lint specific project
nx lint <project>
```

### Running Single Tests
```bash
# Jest supports test file patterns
nx test <project> --testFile=<file-pattern>

# Example
nx test workplace --testFile=schedule.component.spec.ts
```

## Architecture

### PlaceOS Integration
All apps connect to PlaceOS backend via the `@placeos/ts-client` library:

- **PlaceOS_Service** (`libs/common/src/lib/placeos.service.ts`) - Main service for initializing PlaceOS client, handles authentication, token management, Sentry integration
- **OrganisationService** (`libs/common/src/lib/org/organisation.service.ts`) - Manages organizational hierarchy (regions, buildings, levels/floors, zones)
- Uses OAuth for authentication with token refresh
- Settings loaded from Zone metadata via PlaceOS API

### Settings System
- Default settings: `libs/common/src/lib/settings.ts`
- App-specific settings: `apps/<app>/src/environments/settings.ts`
- Settings schemas: `apps/<app>/src/environments/settings.schema.json`
- File replacement at build time (see `project.json` fileReplacements)
- **SettingsService** loads and manages runtime settings from PlaceOS Zone metadata

### Key Service Patterns
Services follow Angular standalone component patterns and use signals (Angular 20):

- **EventFormService** - Handles space/meeting room booking flows
- **BookingFormService** - Handles all other booking flows (desks, parking, lockers)
- **ParkingService** - Parking space management
- **ExploreService** - Map data service
- Most services use `inject()` for dependency injection
- Services are `providedIn: 'root'` for singleton behavior

### Application Flow
1. App bootstraps via `main.ts`
2. PlaceOS_Service initializes (sets up API, auth, org data)
3. Settings loaded from PlaceOS metadata
4. Routes defined in `app-routing.module.ts`
5. Features conditionally enabled based on settings (see `app.features` array)

### Development Server Proxy
By default, dev servers proxy API requests to a live PlaceOS environment (configured in `config/proxy.conf.js`):
- Proxied paths: `/control`, `/auth`, `/api`, `/styles`, `/scripts`, `/login`, `/backoffice`, `/r`
- Default target: `placeos-dev.aca.im`
- OAuth redirects don't work with local dev server - copy token from live instance or use `/login/?continue=/` basic auth form

### Styling
- Tailwind CSS for utility classes (config: `tailwind.config.js`)
- Angular Material components
- Global styles in `shared/styles/`
- Material symbols icon font

## Branching & Deployment

- **Main branch**: `develop` (not `master`)
- **Branch naming**: `release/**` for UAT, `master` for production
- **CI/CD**: GitHub Actions builds and deploys to `build/<project>/dev|uat|prod` branches
- **Base branch for PRs**: `develop`

## Testing Environment

- Unit tests: Jest with `@ngneat/spectator` and `ng-mocks`
- E2E tests: Playwright
- Mock mode available for development/testing without live backend

## Version Management

```bash
# Update Nx and dependencies
bun run update
bun install
nx migrate --run-migrations
```

## Notes

- Default project: `workplace`
- Uses Nx workspace (v21.2.0)
- Angular 20 with standalone components and signals
- TypeScript 5.8.3
- Settings configurable via PlaceOS Zone metadata
- Supports multiple locales (see `app.locales` in settings)
- Service worker support for PWA functionality (production builds)
- Custom localization support via `shared/locales`, **TranslationPipe** and **LocaleService**
- Tailwind is custom themed with CSS variables in `shared/styles/application.css`
- Use **IconComponent** for icons
- Angular supports two-way binding of signals. e.g. Prefer `[(ngModel)]="a_signal"` over `[ngModel]="a_signal()" (ngModelChange)="a_signal.set($event)"`
- No weak or unnessessary indirection
- Only abstract when absolutely nessessary
- Prefer clear readable procedural code over clean code.
- When asked to commit, commit to the working branch unless specified otherwise.

## Other

- After you finish making changes make sure all the affected apps build
- After you finish making changes make sure all the tests pass on the affected apps/libs
- If you get error `NX   Failed to start plugin worker.` try again with `NX_ISOLATE_PLUGINS=false` prepended.

## Code Styles

- Use snake_case for variables
- Use camelCase for functions
- Use PascalCase for classes, types and interfaces
- Use kebab-case for file names, directories and CSS selectors (id, class, attribute)
- Use CAPS_CASE for constants

## Standards & Conventions

Detailed coding standards are documented in `docs/STANDARDS.md`.

### When to Reference Standards

- **Writing new code**: Consult standards for naming conventions, component structure, service patterns, and styling approaches
- **Creating components**: Follow the standalone component patterns, control flow syntax, and host styling conventions
- **Adding services**: Use the `AsyncHandler` base class, `inject()` for DI, and BehaviorSubject/Signal patterns
- **Writing tests**: Follow Spectator/Jest patterns with proper mocking
- **Reviewing code**: Verify code follows established patterns before approving

### Key Standards Quick Reference

| Category | Standard |
|----------|----------|
| Variables | `snake_case` |
| Functions | `camelCase` |
| Classes/Types | `PascalCase` |
| Files/Directories | `kebab-case` |
| Constants | `CAPS_CASE` |
| Private members | Prefix with `_` |
| Components | Standalone with inline templates |
| Control flow | `@if`, `@for`, `@switch` (not `*ngIf`, `*ngFor`) |
| DI | `inject()` function |
| Subscriptions | Extend `AsyncHandler` |
| Styling | Tailwind utilities |

For comprehensive details including code examples, see `docs/STANDARDS.md`.
