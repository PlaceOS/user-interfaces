# PlaceOS User Interfaces - Coding Standards & Conventions

This document outlines the coding standards, conventions, and patterns used throughout the PlaceOS User Interfaces monorepo.

## Table of Contents

1. [Naming Conventions](#naming-conventions)
2. [File & Directory Organization](#file--directory-organization)
3. [Import Organization](#import-organization)
4. [Angular Patterns](#angular-patterns)
5. [TypeScript Patterns](#typescript-patterns)
6. [RxJS Patterns](#rxjs-patterns)
7. [State Management](#state-management)
8. [Form Handling](#form-handling)
9. [Styling Conventions](#styling-conventions)
10. [Testing Conventions](#testing-conventions)
11. [Error Handling](#error-handling)
12. [Documentation](#documentation)

---

## Naming Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Variables | `snake_case` | `_app_name`, `_overrides`, `_timers` |
| Functions | `camelCase` | `setMocks()`, `getLoadingMessage()` |
| Classes/Types/Interfaces | `PascalCase` | `PlaceOS_Service`, `BookingFormService`, `Booking` |
| Files/Directories | `kebab-case` | `booking-form.service.ts`, `landing-quick-book.component.ts` |
| CSS Classes/IDs | `kebab-case` | `border-base-300`, `bg-base-100` |
| Constants | `CAPS_CASE` | `BOOKING_TYPES`, `BOOKING_URLS`, `EMPTY_SPACE` |
| Component Selectors | `kebab-case` with prefix | `app-root`, `placeos-booking`, `landing-quick-book` |

### Private Members

Private class members are prefixed with an underscore:

```typescript
export class BookingFormService {
    private _router = inject(Router);
    private _loading = new BehaviorSubject<string>('');
    private _valid_asset_cache = [];
}
```

---

## File & Directory Organization

### Application Structure

```
apps/
  <app-name>/
    src/
      app/
        <feature>/           # Feature modules
          *.component.ts
          *.service.ts
          *.module.ts
        app-routing.module.ts
        app.component.ts
        app.module.ts
      environments/
        settings.ts          # App-specific settings
        settings.schema.json # Settings schema
      main.ts
```

### Library Structure

```
libs/
  <lib-name>/
    src/
      lib/
        types/               # Data classes and interfaces
        *.service.ts
        *.component.ts
      index.ts               # Public API exports
      tests/                 # Test utilities
```

### Shared Resources

```
shared/
  assets/                    # Images, icons
  styles/                    # Global CSS variables
  locales/                   # i18n translations
```

---

## Import Organization

Imports should be organized in the following order:

1. Angular core imports
2. Angular Material/component libraries
3. RxJS imports
4. PlaceOS libraries (`@placeos/*`)
5. Local imports (relative paths)

```typescript
// 1. Angular core
import { Component, inject, signal, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// 2. Angular Material
import { MatDialogModule } from '@angular/material/dialog';
import { MatRippleModule } from '@angular/material/core';

// 3. RxJS
import { combineLatest, Observable, BehaviorSubject } from 'rxjs';
import { map, tap, switchMap, debounceTime } from 'rxjs/operators';

// 4. PlaceOS libraries
import { BookingFormService } from '@placeos/bookings';
import { SettingsService, AsyncHandler } from '@placeos/common';

// 5. Local imports
import { AppService } from './app.service';
import { CONSTANTS } from '../constants';
```

---

## Angular Patterns

### Standalone Components

Use standalone components as the primary pattern:

```typescript
@Component({
    selector: 'app-feature',
    standalone: true,
    imports: [CommonModule, MatButtonModule, IconComponent],
    template: `
        <div class="feature-container">
            @if (loading()) {
                <mat-spinner></mat-spinner>
            }
            @for (item of items(); track item.id) {
                <div class="item">{{ item.name }}</div>
            }
        </div>
    `,
    styles: [`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
    `]
})
export class FeatureComponent {}
```

### Component Structure

- Use inline templates with backticks
- Use inline styles in the `styles` array
- Host styling via `:host` selector
- Selector naming: `app-*`, `placeos-*`, or feature-specific prefixes
- Use `IconComponent` for icons

### Control Flow Syntax

Use the new Angular control flow syntax (not structural directives):

```html
<!-- Use this -->
@if (condition) {
    <div>Content</div>
} @else {
    <div>Fallback</div>
}

@for (item of items; track item.id) {
    <div>{{ item.name }}</div>
}

@switch (status) {
    @case ('active') { <span>Active</span> }
    @case ('inactive') { <span>Inactive</span> }
    @default { <span>Unknown</span> }
}

<!-- Not this -->
<div *ngIf="condition">Content</div>
<div *ngFor="let item of items">{{ item.name }}</div>
```

### Dependency Injection

Use the `inject()` function instead of constructor parameters:

```typescript
export class BookingFormService extends AsyncHandler {
    private _router = inject(Router);
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _payments = inject(PaymentsService, { optional: true });
}
```

### Service Pattern

All services should:

- Extend `AsyncHandler` for subscription management
- Use `providedIn: 'root'` for singleton pattern
- Expose state via observables or signals

```typescript
@Injectable({ providedIn: 'root' })
export class FeatureService extends AsyncHandler {
    private _loading = new BehaviorSubject<string>('');
    private _data = new BehaviorSubject<Data[]>([]);

    public readonly loading = this._loading.asObservable();
    public readonly data = this._data.asObservable();

    constructor() {
        super();
        this.init();
    }

    private init() {
        this.subscription('data-sync',
            this.fetchData().subscribe(data => this._data.next(data))
        );
    }
}
```

### Signals

Use signals for component-level reactive state:

```typescript
export class FeatureComponent {
    // Writable signals
    public readonly tab = signal('overview');
    public readonly items = signal<Item[]>([]);

    // Computed signals
    public readonly active_items = computed(() =>
        this.items().filter(item => item.active)
    );

    // Settings-based signals
    public readonly has_feature = settingSignal('feature.enabled', false);
}
```

Bind writable signals directly when Angular supports two-way binding for the
input:

```html
<input [(ngModel)]="search_query" />
```

Do not expand this binding into separate `[ngModel]` and `(ngModelChange)`
bindings unless the change handler adds behavior.

---

## TypeScript Patterns

### Type Definitions

Use interfaces for contracts and type unions for constants:

```typescript
// Interfaces for object shapes
export interface BookingFlowOptions {
    type: BookingType;
    zone_id?: string;
    features?: string[];
    group?: boolean;
    pattern?: RecurrencePattern;
    members?: User[];
}

// Type unions for finite sets
export type BookingType = 'desk' | 'parking' | 'locker' | 'room' | 'visitor';
export type EventFlowView = 'form' | 'find' | 'catering' | 'confirm' | 'success';
export type RecurrencePattern = 'none' | 'daily' | 'weekly' | 'monthly';
```

### Data Classes

Domain entities should be classes with readonly properties:

```typescript
export class Booking {
    public readonly id: string;
    public readonly parent_id: string;
    public readonly booking_start: number;
    public readonly duration: number;
    public readonly all_day: boolean;
    public readonly extension_data: Record<string, any>;

    constructor(data: Partial<BookingComplete> = {}) {
        this.id = data.id || '';
        this.parent_id = data.parent_id || '';
        this.booking_start = data.booking_start || Date.now();
        this.duration = data.duration || 60;
        this.all_day = data.all_day || false;
        this.extension_data = data.extension_data || {};
    }

    // Computed properties via getters
    public get is_all_day(): boolean {
        return this.all_day || this.duration >= 12 * 60;
    }

    public get state(): 'future' | 'upcoming' | 'done' | 'in_progress' {
        const now = Date.now();
        if (this.booking_start > now) return 'future';
        // ... logic
    }

    // Serialization
    public toJSON(): Record<string, any> {
        return {
            id: this.id,
            booking_start: this.booking_start,
            // ...
        };
    }
}
```

### Strict Typing

- Avoid `any` - use proper types or `unknown`
- Use generics with observables: `Observable<T>`, `BehaviorSubject<T>`
- Enable strict mode in tsconfig

---

## RxJS Patterns

### Observable Composition

```typescript
public readonly available_resources = combineLatest([
    this.options,
    this.resources,
    this.booking_rules,
]).pipe(
    debounceTime(500),
    tap(([{ type }]) => this._loading.next('Loading...')),
    switchMap(([options, resources]) =>
        this.filterResources(options, resources)
    ),
    tap(() => this._loading.next('')),
    catchError(err => {
        notifyError('Failed to load resources');
        return of([]);
    }),
    shareReplay(1),
);
```

### Common Operators

| Operator | Use Case |
|----------|----------|
| `combineLatest()` | Combine multiple streams |
| `switchMap()` | Cancel previous requests |
| `map()` | Transform data |
| `filter()` | Filter values |
| `debounceTime()` | Rate limit |
| `distinctUntilKeyChanged()` | Prevent duplicate processing |
| `shareReplay(1)` | Cache and multicast |
| `tap()` | Side effects (logging, loading state) |
| `catchError()` | Error recovery |

### Subscription Management

Use the `AsyncHandler` base class for automatic cleanup:

```typescript
export class FeatureComponent extends AsyncHandler implements OnInit {
    ngOnInit() {
        // Named subscription - automatically cleaned up on destroy
        this.subscription('data-sync',
            this.service.data$.subscribe(data => this.processData(data))
        );

        // Named timer
        this.timeout('delayed-action', () => this.doSomething(), 1000);

        // Named interval
        this.interval('polling', () => this.pollData(), 30000);
    }

    // Clear specific subscription
    clearSubscription() {
        this.unsub('data-sync');
    }
}
```

---

## State Management

### BehaviorSubject Pattern

For multi-component state sharing:

```typescript
@Injectable({ providedIn: 'root' })
export class StateService {
    // Private subject
    private _state = new BehaviorSubject<State>(initialState);

    // Public observable
    public readonly state$ = this._state.asObservable();

    // Derived observables
    public readonly items$ = this.state$.pipe(
        map(state => state.items),
        distinctUntilChanged()
    );

    // State updates
    public updateState(partial: Partial<State>) {
        this._state.next({ ...this._state.value, ...partial });
    }
}
```

### Signals Pattern

For component-level state:

```typescript
export class FeatureComponent {
    // Local state
    private readonly _items = signal<Item[]>([]);

    // Public read-only
    public readonly items = this._items.asReadonly();

    // Computed
    public readonly item_count = computed(() => this._items().length);

    // Update
    addItem(item: Item) {
        this._items.update(items => [...items, item]);
    }
}
```

### Loading State Pattern

```typescript
private _loading = new BehaviorSubject<string>('');
public readonly loading = this._loading.asObservable();

async performAction() {
    this._loading.next('Processing...');
    try {
        await this.doWork();
    } finally {
        this._loading.next('');
    }
}
```

---

## Form Handling

### Reactive Forms

Use factory functions to generate forms:

```typescript
export function generateBookingForm(booking: Booking): FormGroup {
    return new FormGroup({
        date: new FormControl(booking.date, [Validators.required]),
        duration: new FormControl(booking.duration, [
            Validators.required,
            Validators.min(15)
        ]),
        resources: new FormControl([], [Validators.required]),
        user: new FormControl(currentUser()),
        notes: new FormControl(''),
    });
}
```

### Form State Persistence

```typescript
// Save form state
sessionStorage.setItem('booking-form', JSON.stringify(form.getRawValue()));

// Restore form state
const saved = sessionStorage.getItem('booking-form');
if (saved) {
    form.patchValue(JSON.parse(saved));
}
```

### Form Validation

```typescript
// Check validity before submission
if (form.invalid) {
    form.markAllAsTouched();
    const invalid_fields = getInvalidFields(form);
    notifyWarn(`Please fix: ${invalid_fields.join(', ')}`);
    return;
}

const data = form.getRawValue();
await this.submit(data);
```

---

## Styling Conventions

### Tailwind CSS

Use Tailwind utility classes as the primary styling method:

```html
<div class="flex flex-col h-full w-full bg-base-100">
    <header class="flex items-center justify-between p-4 border-b border-base-300">
        <h1 class="text-xl font-medium">Title</h1>
        <button class="btn btn-primary">Action</button>
    </header>
    <main class="flex-1 overflow-auto p-4 space-y-4">
        <!-- Content -->
    </main>
</div>
```

### Component Host Styling

```typescript
styles: [`
    :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    :host(.compact) {
        max-width: 400px;
    }
`]
```

### CSS Variables

Custom theme variables are defined in `shared/styles/application.css`:

```css
:root {
    --color-primary: #3b82f6;
    --color-secondary: #6366f1;
    --color-base-100: #ffffff;
    --color-base-200: #f5f5f5;
    --color-base-300: #e5e5e5;
    --color-base-content: #1f2937;
}
```

---

## Testing Conventions

### Test File Naming

- Test files: `*.spec.ts` or `*.component.spec.ts`
- Place in `/tests` directory or alongside source files
- One test file per component/service

### Test Structure

Use Spectator with Jest:

```typescript
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockProvider } from 'ng-mocks';

describe('FeatureComponent', () => {
    let spectator: Spectator<FeatureComponent>;

    const createComponent = createComponentFactory({
        component: FeatureComponent,
        imports: [CommonModule],
        providers: [
            MockProvider(SettingsService),
            MockProvider(OrganisationService, {
                active_building: new BehaviorSubject(new Building()),
            }),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should display items', () => {
        spectator.component.items.set([{ id: '1', name: 'Test' }]);
        spectator.detectChanges();

        expect(spectator.query('.item')).toHaveText('Test');
    });
});
```

### Mocking Patterns

```typescript
// Mock components
import { mockComponent } from '@placeos/common/tests';

declarations: [
    mockComponent(ChildComponent),
]

// Mock services
providers: [
    MockProvider(DataService, {
        data$: new BehaviorSubject([]),
        fetchData: jest.fn(),
    }),
]

// Mock observables
const mockSubject = new BehaviorSubject<Data[]>([]);
MockProvider(Service, { data$: mockSubject.asObservable() })

// Trigger in test
mockSubject.next([{ id: '1' }]);
spectator.detectChanges();
```

---

## Error Handling

### Notification Utilities

```typescript
import { notifyError, notifyWarn, notifySuccess, notifyInfo } from '@placeos/common';

// Error notification
notifyError('Failed to save booking');

// Warning notification
notifyWarn('Booking conflicts detected');

// Success notification
notifySuccess('Booking confirmed');

// Info notification
notifyInfo('Processing your request...');
```

### Observable Error Handling

```typescript
this.service.fetchData().pipe(
    catchError(err => {
        console.error('Fetch failed:', err);
        notifyError('Failed to load data');
        return of([]); // Return fallback value
    })
).subscribe(data => this.processData(data));
```

### Logging

Use the custom `log()` function for debug output:

```typescript
import { log } from '@placeos/common';

log('Component', 'Initializing with data:', data);
log('Service', 'API response:', response, 'debug');
log('Error', 'Failed to process:', error, 'error');
```

---

## Documentation

### JSDoc Comments

Use JSDoc for public methods and significant functions:

```typescript
/**
 * Create a booking for the specified resource
 * @param resource The resource to book
 * @param options Booking configuration options
 * @returns Observable that emits the created booking
 */
public createBooking(
    resource: Resource,
    options: BookingOptions
): Observable<Booking> {
    // Implementation
}

/**
 * Calculate the end time based on start and duration
 * @param start_time Start time in milliseconds
 * @param duration Duration in minutes
 * @returns End time in milliseconds
 */
public getEndTime(start_time: number, duration: number): number {
    return start_time + duration * 60 * 1000;
}
```

### Inline Comments

Use sparingly for complex logic only:

```typescript
// Check for overlapping bookings using binary search for performance
const overlap_index = this.findOverlap(bookings, new_booking);

// Bit flags for recurrence days (Sunday = 1, Monday = 2, etc.)
const days = RecurrenceDays.MONDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.FRIDAY;
```

---

## Common Utilities

### AsyncHandler Base Class

```typescript
export class AsyncHandler implements OnDestroy {
    protected _timers: Record<string, number> = {};
    protected _subscriptions: Record<string, Subscription> = {};

    protected timeout(name: string, fn: () => void, delay = 300): void;
    protected clearTimeout(name: string): void;
    protected interval(name: string, fn: () => void, delay: number): void;
    protected clearInterval(name: string): void;
    protected subscription(name: string, sub: Subscription): void;
    protected unsub(name: string): void;

    ngOnDestroy(): void {
        // Automatically cleans up all timers and subscriptions
    }
}
```

### Settings Utilities

```typescript
import { settingSignal, SettingsService } from '@placeos/common';

// In component
public readonly feature_enabled = settingSignal('app.features.booking', false);
public readonly max_duration = settingSignal('booking.max_duration', 480);

// In service
private _settings = inject(SettingsService);
const value = this._settings.get('app.name');
```

### User Utilities

```typescript
import { currentUser, userSignal } from '@placeos/common';

// Get current user synchronously
const user = currentUser();

// Reactive user signal
public readonly user = userSignal();
```

---

## Summary

This codebase follows enterprise-level Angular development practices with:

- **Modern Angular 20** patterns (standalone components, signals, control flow)
- **Strict TypeScript** with proper typing
- **Clean architecture** with well-organized libraries
- **Comprehensive testing** with Spectator/Jest
- **Consistent naming** across all code elements
- **Robust async handling** via AsyncHandler and RxJS operators
- **Scalable state management** mixing Signals and BehaviorSubjects
- **Professional styling** with Tailwind CSS and custom theming
