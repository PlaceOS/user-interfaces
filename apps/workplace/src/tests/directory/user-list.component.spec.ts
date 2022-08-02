import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { SettingsService } from '@placeos/common';
import { IconComponent } from '@placeos/components';
import { MockComponent } from 'ng-mocks';
import { of, timer } from 'rxjs';

jest.mock('@placeos/users');

import * as users_mod from '@placeos/users';
import { TopbarComponent } from '../../app/components/topbar.component';
import { DirectoryUserListItemComponent } from '../../app/directory/user-details.component';
import { DirectoryUserListComponent } from '../../app/directory/user-list.component';
import { FooterMenuComponent } from '../../app/components/footer-menu.component';

describe('DirectoryUserListComponent', () => {
    let spectator: Spectator<DirectoryUserListComponent>;
    const createComponent = createComponentFactory({
        component: DirectoryUserListComponent,
        providers: [{ provide: SettingsService, useValue: { get: jest.fn() } }],
        imports: [MatFormFieldModule, MatInputModule, FormsModule],
        declarations: [
            MockComponent(TopbarComponent),
            MockComponent(FooterMenuComponent),
            MockComponent(IconComponent),
            MockComponent(DirectoryUserListItemComponent),
        ],
    });

    beforeEach(() => {
        spectator = createComponent();
        (users_mod as any).searchStaff = jest.fn((q) =>
            of(
                [{ name: 'User 1' }, { name: 'User 2' }].filter((_) =>
                    _.name.includes(q)
                )
            )
        );
    });

    it('should create component', () => {
        expect(spectator.component).toBeTruthy();
    });

    it('should list spaces', async () => {
        expect('a-cdirectory-user-list-item').toHaveLength(0);
        spectator.component.search$.next('User');
        await timer(401).toPromise();
        spectator.detectChanges();
        expect('a-directory-user-list-item').toHaveLength(2);
    });

    it('should allow user to filter spaces', async () => {
        spectator.component.search$.next('Use');
        await timer(401).toPromise();
        spectator.detectChanges();
        expect('a-directory-user-list-item').toHaveLength(2);
        spectator.typeInElement('User 2', 'input');
        await timer(401).toPromise();
        spectator.detectChanges();
        expect('a-directory-user-list-item').toHaveLength(1);
    });
});
