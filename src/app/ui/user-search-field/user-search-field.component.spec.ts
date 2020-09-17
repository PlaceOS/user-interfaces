import { async, ComponentFixture, TestBed, fakeAsync, discardPeriodicTasks } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { first } from 'rxjs/operators';
import { MockComponent } from 'ng-mocks';

import { UserSearchFieldComponent } from './user-search-field.component';
import { User } from '../../users/user.class';
import { IconComponent } from '../icon/icon.component';
import { StaffService } from '../../users/staff.service';
import { generateMockUser } from '../../users/user.utilities';

describe('UserSearchFieldComponent', () => {
    let component: UserSearchFieldComponent;
    let fixture: ComponentFixture<UserSearchFieldComponent>;
    let users: any

    beforeEach(async(() => {
        users = { };
        TestBed.configureTestingModule({
            declarations: [UserSearchFieldComponent, MockComponent(IconComponent)],
            providers: [
                { provide: StaffService, useValue: users }
            ],
            imports: [
                FormsModule,
                MatProgressSpinnerModule,
                MatInputModule,
                MatAutocompleteModule,
                NoopAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserSearchFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow searching for users', done => {
        const user_list = Array(20)
            .fill(1)
            .map(_ => new User(generateMockUser()));
        component.search_results$.pipe(first()).subscribe(_ => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                const user_option: HTMLElement = document.querySelector('mat-option');
                expect(user_option).toBeTruthy();
                user_option.click();
                fixture.detectChanges();
                expect(
                    component.user_list.find(user => component.active_user.email === user.email)
                ).toBeTruthy();
                done();
            });
        });
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const input = el.querySelector('input');
        input.dispatchEvent(new Event('focusin'));
        input.value = user_list[0].name;
        input.dispatchEvent(new Event('input'));
    });

    it('should allow limiting the selection of users', (done) => {
        let user = new User(generateMockUser());
        component.options = Array(4).fill(1).map((_) => user);
        user = new User(generateMockUser());
        const user_list = Array(20).fill(1).map((_) => user);
        component.search_results$.pipe(first()).subscribe(async (list) => {
            fixture.detectChanges();
            await fixture.whenRenderingDone();
            fixture.detectChanges();
            const user_options = document.querySelectorAll('mat-option');
            expect(user_options.length).toBe(component.options.length);
            expect(user_options[0].querySelector('.name').textContent).toBe(component.options[0].name);
            done();
        });
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const input = el.querySelector('input');
        input.dispatchEvent(new Event('focusin'));
        input.value = component.options[0].name;
        input.dispatchEvent(new Event('input'));
    });

    it('should show the selected user\'s name in the input field', fakeAsync(() => {
        const user = new User(generateMockUser());
        component.writeValue(user);
        fixture.detectChanges();
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const input = el.querySelector('input');
        expect(component.search_str).toBe(user.name);
        input.dispatchEvent(new Event('focusin'));
        input.value = 'Not user';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();
        expect(component.search_str).not.toBe(user.name);
        input.blur();
        input.dispatchEvent(new Event('blur'));
        fixture.detectChanges();
        expect(component.search_str).toBe(user.name);
        discardPeriodicTasks();
    }));
});
