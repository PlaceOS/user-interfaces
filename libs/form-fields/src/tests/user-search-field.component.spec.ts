import { fakeAsync, tick } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { IconComponent } from '@placeos/components';
import { generateMockUser, User } from '@placeos/users';

import * as users_fn from '@placeos/users';

jest.mock('@placeos/users', () => {
    return {
        __esModule: true, //    <----- this __esModule: true is important
        ...jest.requireActual('@placeos/users'),
    };
});

import { UserSearchFieldComponent } from '../lib/user-search-field.component';
import { SettingsService } from '@placeos/common';

describe('UserSearchFieldComponent', () => {
    let spectator: Spectator<UserSearchFieldComponent>;
    const createComponent = createComponentFactory({
        component: UserSearchFieldComponent,
        declarations: [MockComponent(IconComponent)],
        providers: [MockProvider(SettingsService, { get: jest.fn() })],
        imports: [
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            MatProgressSpinnerModule,
            FormsModule,
        ],
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should allow searching for users', fakeAsync(() => {
        const user_list = Array(20)
            .fill(1)
            .map(() => new User(generateMockUser()));
        const staff_spy = jest.spyOn(users_fn, 'searchStaff');
        const guest_spy = jest.spyOn(users_fn, 'searchGuests');
        staff_spy.mockImplementation((q) => of([...user_list] as any));
        guest_spy.mockImplementation((q) => of([...user_list] as any));
        spectator.dispatchFakeEvent('input', 'focusin');
        spectator.triggerEventHandler(
            'input',
            'ngModelChange',
            user_list[0].name
        );
        spectator.tick(401);
        spectator.detectChanges();
        expect(document.querySelector('mat-option')).toBeTruthy();
        tick(1000);
    }));

    it('should allow limiting the selection of users', fakeAsync(() => {
        const user_list = Array(20)
            .fill(1)
            .map(() => new User(generateMockUser()));
        spectator.component.options = user_list.slice(0, 4);
        spectator.dispatchFakeEvent('input', 'focusin');
        spectator.triggerEventHandler(
            'input',
            'ngModelChange',
            user_list[0].name
        );
        spectator.tick(401);
        spectator.detectChanges();
        expect(document.querySelector('mat-option')).toBeTruthy();
        expect('mat-option').toHaveLength(4);
        spectator.click('mat-option');
        spectator.tick(101);
        spectator.detectChanges();
        expect(spectator.component.search_str).toBe(user_list[0].name);
        tick(1000);
    }));

    it("should show the selected user's name in the input field", fakeAsync(() => {
        const user = new User(generateMockUser());
        spectator.component.writeValue(user);
        spectator.tick(111);
        spectator.detectChanges();
        expect(spectator.component.search_str).toBe(user.name);
        spectator.component.search_str = 'Test';
        spectator.detectChanges();
        expect(spectator.component.search_str).toBe('Test');
        spectator.dispatchFakeEvent('input', 'blur');
        spectator.tick(111);
        spectator.detectChanges();
        expect(spectator.component.search_str).toBe(user.name);
    }));
});
