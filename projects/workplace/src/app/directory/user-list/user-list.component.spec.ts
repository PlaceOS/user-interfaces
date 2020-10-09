import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { of } from 'rxjs';
import { MockComponent } from 'ng-mocks';

import { DirectoryUserListComponent } from './user-list.component';
import { IconComponent } from '../../../ui/icon/icon.component';
import { ApplicationService } from '../../../services/app.service';
import { User } from 'src/app/users/user.class';
import { generateMockAppService } from '../../../shared/utilities/spec-helpers';
import { StaffService } from 'src/app/users/staff.service';
import { OverlayMenuComponent } from '../../../ui/overlay-menu/overlay-menu.component';
import { FooterMenuComponent } from '../../../ui/footer-menu/footer-menu.component';
import { SearchbarComponent } from '../../../ui/searchbar/searchbar.component';
import { TopbarHeaderComponent } from '../../../ui/topbar-header/topbar-header.component';
import { DirectoryUserListItemComponent } from './item/item.component';

describe('DirectoryUserListComponent', () => {
    let component: DirectoryUserListComponent;
    let fixture: ComponentFixture<DirectoryUserListComponent>;
    let app_service: any;
    let users_service: any;
    let mock_users: any[] = [];

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [
                DirectoryUserListComponent,
                MockComponent(IconComponent),
                MockComponent(OverlayMenuComponent),
                MockComponent(FooterMenuComponent),
                MockComponent(SearchbarComponent),
                MockComponent(TopbarHeaderComponent),
                MockComponent(DirectoryUserListItemComponent)
            ],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: app_service,
                },
                {
                    provide: StaffService,
                    useValue: app_service.Users,
                },
            ],
            imports: [APipesModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DirectoryUserListComponent);
        component = fixture.componentInstance;
        app_service.Users.parent = app_service;
        app_service.initialised = of(true);
        users_service = TestBed.inject(StaffService);
        mock_users = [new User({ name: 'testerino' }), new User({ name: 'test another' })];
        users_service.query.mockReturnValue(Promise.resolve(mock_users));
        users_service.list.mockReturnValue(mock_users);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show a search input field', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('a-searchbar')).toBeTruthy();
    });

    // it('should show allow searching for people', (done) => {
    //     component.search_results$.pipe(first()).subscribe((list) => {
    //         expect(list.length).toBe(2);
    //         fixture.detectChanges();
    //         expect(list.find(i => i.name === 'testerino')).toBeTruthy();
    //         done();
    //     });
    //     component.search_str = 'test';
    //     component.search$.next('test');
    // });
});
