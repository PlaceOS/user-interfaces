import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { DirectoryUserListItemComponent } from './item.component';
import { ApplicationService } from '../../../../services/app.service';
import { User } from 'src/app/users/user.class';
import { generateMockAppService } from '../../../../shared/utilities/spec-helpers';

@Component({
    selector: 'a-user-avatar,[routerLink],[queryParams]',
    template: '',
    inputs: ['user', 'routerLink', 'queryParams']
})
class MockUserAvatar { }

describe('DirectoryUserListItemComponent', () => {
    let component: DirectoryUserListItemComponent;
    let fixture: ComponentFixture<DirectoryUserListItemComponent>;
    let app_service: any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [DirectoryUserListItemComponent, MockUserAvatar],
            providers: [{
                provide: ApplicationService,
                useValue: app_service
            }],
            imports: [APipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectoryUserListItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show user details', () => {
        component.user = new User({ name: 'Jim', email: 'jim@jim.com', phone: 'test' });
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.name').textContent).toBe('Jim');
        expect(compiled.querySelector('[name="email"]').textContent).toBe('jim@jim.com');
    });

    it('should allow the user to be located', () => {
        component.user = new User({ name: 'Jim', email: 'jim@jim.com', phone: 'test' });
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('[name="locate"]')).toBeTruthy();
    });

    it('should allow the user to be called', () => {
        component.user = new User({ name: 'Jim', email: 'jim@jim.com', phone: 'test' });
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('[name="call"]')).toBeTruthy();
    });
});
