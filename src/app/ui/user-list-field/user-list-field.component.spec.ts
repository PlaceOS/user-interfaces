import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { first } from 'rxjs/operators';

import { UserListFieldComponent } from './user-list-field.component';
import { User } from '../../users/user.class';
import { generateMockUser } from '../../users/user.utilities';
import { StaffService } from '../../users/staff.service';
import { GuestsService } from '../../users/guests.service';

@Component({
    selector: 'app-icon',
    template: '',
    inputs: ['icon'],
})
class MockAppIconComponent {}

@Component({
    selector: 'a-user-avatar,[routerLink],[queryParams]',
    template: '',
    inputs: ['user', 'routerLink', 'queryParams'],
})
class MockUserAvatar {}

describe('UserListFieldComponent', () => {
    let component: UserListFieldComponent;
    let fixture: ComponentFixture<UserListFieldComponent>;
    let service: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserListFieldComponent, MockAppIconComponent, MockUserAvatar],
            providers: [
                {
                    provide: StaffService,
                    useValue: service.Users,
                },
                {
                    provide: GuestsService,
                    useValue: service.Guests
                }
            ],
            imports: [
                FormsModule,
                MatProgressSpinnerModule,
                MatInputModule,
                MatAutocompleteModule,
                MatChipsModule,
                NoopAnimationsModule,
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        service.Users.current = { name: 'Jim', staff_code: '12345' };
        fixture = TestBed.createComponent(UserListFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be able to be disabled', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const input_el = compiled.querySelector('.user-list-field');
        expect(input_el.hasAttribute('disabled')).toBeFalsy();
        component.setDisabledState(true);
        fixture.detectChanges();
        expect(input_el.hasAttribute('disabled')).toBeTruthy();
    });

    it('should show selected users', () => {
        const user_list = Array(20)
            .fill(1)
            .map((_) => new User(generateMockUser()));
        component.writeValue(user_list);
        fixture.detectChanges();
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const user_elements = el.querySelectorAll('mat-chip');
        expect(user_elements.length).toBe(user_list.length);
    });

    it('should allow user to search for existing users', (done) => {
        const user_list = Array(20)
            .fill(1)
            .map((_) => new User(generateMockUser()));
        service.Users.query.mockReturnValue(Promise.resolve(user_list));
        component.search_results$.pipe(first()).subscribe((_) => {
            expect(service.Users.query).toHaveBeenCalled();
            done();
        });
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const input = el.querySelector('input');
        input.value = 'Test';
        input.dispatchEvent(new Event('input'));
    });

    it('should allow user to add existing users', (done) => {
        const user_list = Array(20)
            .fill(1)
            .map((_) => new User(generateMockUser()));
        service.Users.query.mockReturnValue(Promise.resolve(user_list));
        service.Guests.query.mockReturnValue(Promise.resolve([]));
        component.search_results$.pipe(first()).subscribe((_) => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                const user_option: HTMLElement = document.querySelector('mat-option');
                expect(user_option).toBeTruthy();
                component.registerOnChange((value) => {
                    expect(value.find((user) => user_list[0].email === user.email)).toBeTruthy();
                    done();
                });
                user_option.click();
                fixture.detectChanges();
            });
        });
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const input = el.querySelector('input');
        input.dispatchEvent(new Event('focusin'));
        input.value = user_list[0].name;
        input.dispatchEvent(new Event('input'));
    });

    it('should allow user to indicate that they want to add a new contact', (done) => {
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const new_contact_button = el.querySelector('[name="new-contact"');
        expect(new_contact_button).toBeTruthy();
        component.new_user.pipe(first()).subscribe(() => done());
        new_contact_button.dispatchEvent(new Event('click'));
    });

    it('should allow user add users from a CSV file', () => {
        const eventListener = (type, callback) => {
            if (type === 'load') {
                callback({ srcElement: { result: `Organisation Name,First Name,Last Name,Email,Phone\nFake Org,John,Smith,john.smith@example.com,01234567898\nFake Org,Johnny,Smith,,01234567898` } });
            } else {
                callback();
            }
        }
        const mock_file_reader = { addEventListener: eventListener, readAsText: () => null };
        jest.spyOn(window, 'FileReader').mockReturnValue(mock_file_reader as any);
        component.addUsersFromFile({ target: { files: [{ id: 0, size: 1, name: 'File.csv' }] } });
        expect(component.active_list.length).toBe(2);
        expect(component.active_list.find(user => user.name === 'John Smith')).toBeTruthy();
    });

    it('should allow user to remove selected users', () => {
        const user_list = Array(20)
            .fill(1)
            .map((_) => new User(generateMockUser()));
        component.writeValue(user_list);
        fixture.detectChanges();
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const user_elements = el.querySelectorAll('mat-chip');
        expect(user_elements.length).toBe(user_list.length);
        const remove_button = user_elements[0].querySelector('app-icon');
        expect(remove_button).toBeTruthy();
        remove_button.dispatchEvent(new Event('click'));
        expect(
            component.active_list.find((user) => user.email === user_list[0].email)
        ).not.toBeTruthy();
    });

    // it('should show external users with a different colour', () => {
    //     const user_list = [];
    //     user_list.push(new User(generateMockUser({ id: 'test-real', name: 'Real Test', external: false })));
    //     user_list.push(
    //         new User(generateMockUser({ id: 'test-external', name: 'Jim Test', external: true }))
    //     );
    //     component.writeValue(user_list);
    //     fixture.detectChanges();
    //     const el: HTMLElement = fixture.debugElement.nativeElement;
    //     const internal_element = el.querySelector(
    //         `[id="${user_list[0].email}"]`
    //     );
    //     const external_element = el.querySelector(
    //         `[id="${user_list[1].email}"]`
    //     );
    //     expect(internal_element.classList.contains('mat-primary')).toBeTruthy();
    //     expect(external_element.classList.contains('mat-accent')).toBeTruthy();
    // });

    it('should allow user to bulk upload selected user details', () => {
        // TODO: Add implementation
    });
});
