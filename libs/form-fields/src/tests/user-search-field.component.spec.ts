import { fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent, MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { User } from '@placeos/common';
import { generateMockUser } from '@placeos/users';
import { IconComponent } from 'libs/components/src/lib/icon.component';

jest.mock('@placeos/users', () => {
    return {
        __esModule: true, //    <----- this __esModule: true is important
        ...jest.requireActual('@placeos/users'),
    };
});

import { SettingsService } from '@placeos/common';
import { UserSearchFieldComponent } from '../lib/user-search-field.component';

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

        const spec = createComponent({
            props: {
                query_fn: (q: string) => of([...user_list]),
            },
        });

        let result_count = 0;
        spec.component.search_results.subscribe((results) => {
            result_count = results.length;
        });

        spec.component.search_term.next(user_list[0].name);
        spec.tick(401);

        expect(result_count).toBeGreaterThan(0);
        tick(1000);
    }));

    it('should allow limiting the selection of users', fakeAsync(() => {
        const user_list = [
            new User({
                id: '1',
                name: 'Test User 1',
                email: 'test1@example.com',
            }),
            new User({
                id: '2',
                name: 'Test User 2',
                email: 'test2@example.com',
            }),
            new User({
                id: '3',
                name: 'Test User 3',
                email: 'test3@example.com',
            }),
            new User({
                id: '4',
                name: 'Test User 4',
                email: 'test4@example.com',
            }),
        ];

        const spec = createComponent({ props: { options: user_list } });

        let result_count = 0;
        spec.component.search_results.subscribe((results) => {
            result_count = results.length;
        });

        spec.component.search_term.next('test');
        spec.tick(401);

        expect(result_count).toBeGreaterThan(0);

        spec.component.setValue(user_list[0]);
        spec.tick(101);
        expect(spec.component.user()).toBeTruthy();

        tick(1000);
    }));

    it("should show the selected user's name in the input field", fakeAsync(() => {
        const user = new User(generateMockUser());
        spectator.component.writeValue(user);
        spectator.tick(111);
        spectator.detectChanges();
        expect(spectator.component.search_term.value).toEqual(user);
        spectator.component.search_term.next('Test' as any);
        spectator.detectChanges();
        expect(spectator.component.search_term.value).toBe('Test');
        spectator.dispatchFakeEvent('input', 'blur-sm');
        spectator.tick(111);
        spectator.detectChanges();
        expect(spectator.component.search_term.value).toEqual(user);
    }));
});
