import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { UserAvatarComponent } from './user-avatar.component';
import { User } from '../../users/user.class';

describe('UserAvatarComponent', () => {
    let component: UserAvatarComponent;
    let fixture: ComponentFixture<UserAvatarComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserAvatarComponent],
            imports: [APipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserAvatarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show the user\'s image', () => {
        component.user = new User({ name: 'John Smith', photo: 'true.png' });
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img')).toBeTruthy();
        expect(compiled.querySelector('.initials')).toBeFalsy();
    });

    it('should show the user\'s initials', () => {
        component.user = new User({ name: 'John Smith' });
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('img')).toBeFalsy();
        expect(compiled.querySelector('.initials')).toBeTruthy();
        expect(compiled.querySelector('.initials').textContent).toBe('JS');
    });
});
