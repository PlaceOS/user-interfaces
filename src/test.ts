import 'jest-preset-angular';
import '@angular/localize/init';
import 'ng-mocks/dist/jest';

import { defineGlobalsInjections, mockProvider } from '@ngneat/spectator';
import { APP_BASE_HREF } from '@angular/common';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { SwUpdate } from '@angular/service-worker';
import { MockModule, MockComponent, MockDirective } from 'ng-mocks';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { SpacesService } from 'src/app/spaces/spaces.service';
import { SettingsService } from 'src/app/common/settings.service';
import { EventsService } from 'src/app/events/events.service';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { StaffService } from 'src/app/users/staff.service';
import { IconComponent } from 'src/app/ui/icon/icon.component';
import { BindingDirective } from 'src/app/ui/binding/binding.directive';
import { of } from 'rxjs';

(Error as any).stackTraceLimit = 4;

(window as any).HTMLElement.prototype.scrollIntoView = () => {};
(window as any).HTMLElement.prototype.scrollTo = (_: any) => {};

const makeStore = () => {
    let store = {};

    return {
        length: 0,
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value.toString();
            (this as any).length = Object.keys(store).length;
        },
        removeItem: (key) => {
            delete store[key];
            (this as any).length = Object.keys(store).length;
        },
        clear: () => {
            store = {};
        },
        key: (index) => Object.keys(store)[index],
    };
};

Object.defineProperty(window, 'localStorage', {
    value: makeStore(),
});

Object.defineProperty(window, 'sessionStorage', {
    value: makeStore(),
});

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
    value: () => {
        return {
            display: 'none',
            appearance: ['-webkit-appearance'],
        };
    },
});

Object.defineProperty(document, 'doctype', {
    value: '<!DOCTYPE html>',
});
Object.defineProperty(document.body.style, 'transform', {
    value: () => {
        return {
            enumerable: true,
            configurable: true,
        };
    },
});

defineGlobalsInjections({
    declarations: [MockComponent(IconComponent), MockDirective(BindingDirective)],
    imports: [
        MockModule(MatSnackBarModule),
        MockModule(MatProgressSpinnerModule),
        MockModule(APipesModule),
        ReactiveFormsModule,
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        mockProvider(MatSnackBar),
        mockProvider(SwUpdate),
        mockProvider(SpacesService, { initialised: of(true) }),
        mockProvider(SettingsService, { initialised: of(true) }),
        mockProvider(EventsService, { initialised: of(true) }),
        mockProvider(StaffService, { initialised: of(true) }),
        mockProvider(OrganisationService, { initialised: of(true) }),
    ],
});
