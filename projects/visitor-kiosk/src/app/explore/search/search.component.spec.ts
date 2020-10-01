import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

import { ExploreSearchComponent } from './search.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { ApplicationService } from 'src/app/services/app.service';
import { UsersService } from 'src/app/services/data/users/users.service';
import { SpacesService } from 'src/app/services/data/spaces/spaces.service';
import { User } from 'src/app/services/data/users/user.class';
import { Space } from 'src/app/services/data/spaces/space.class';
import { OrganisationService } from 'src/app/services/data/organisation/organisation.service';
import { first } from 'rxjs/operators';

describe('SearchComponent', () => {
    let component: ExploreSearchComponent;
    let fixture: ComponentFixture<ExploreSearchComponent>;
    let app_service: any;
    let users_service: any;
    let spaces_service: any;
    let route: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExploreSearchComponent, IconComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: jasmine.createSpyObj('ApplicationService', ['setting'])
                },
                {
                    provide: UsersService,
                    useValue: jasmine.createSpyObj('UsersService', ['setting', 'query'])
                },
                {
                    provide: SpacesService,
                    useValue: jasmine.createSpyObj('SpacesService', ['list'])
                },
                {
                    provide: ActivatedRoute,
                    useValue: jasmine.createSpyObj('ActivatedRoute', ['url'])
                },
                {
                    provide: Router,
                    useValue: jasmine.createSpyObj('Router', ['navigate'])
                }
            ],
            imports: [MatAutocompleteModule, MatProgressSpinnerModule, APipesModule, FormsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        app_service = TestBed.get(ApplicationService);
        users_service = TestBed.get(UsersService);
        spaces_service = TestBed.get(SpacesService);
        route = TestBed.get(ActivatedRoute);
        route.paramMap = of(convertToParamMap({}));
        app_service.People = users_service;
        app_service.Spaces = spaces_service;
        app_service.Organisation = jasmine.createSpyObj('OrganisationService', ['levelWithID']);
        users_service.parent = app_service;
        spaces_service.parent = app_service;
        fixture = TestBed.createComponent(ExploreSearchComponent);
        component = fixture.componentInstance;
        users_service.query.and.returnValue(Promise.resolve([
            new User(users_service, { name: 'testerino' }),
            new User(users_service, { name: 'another user' }),
        ]));
        spaces_service.list.and.returnValue([
            new Space(spaces_service, { name: 'test space' }),
            new Space(spaces_service, { name: 'another space' }),
        ]);
        component.type = 'any';
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show a search input field', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('input')).toBeTruthy();
    });

    it('should show allow searching for people', (done) => {
        component.type = 'user';
        component.search_results$.pipe(first()).subscribe((list) => {
            expect(list.length).toBe(1);
            expect(list[0].name).toBe('testerino');
            done();
        });
        component.search_str = 'test';
        component.search$.next('test');
    });

    it('should show allow searching for spaces', (done) => {
        component.type = 'space';
        component.search_results$.pipe(first()).subscribe((list) => {
            expect(list.length).toBe(1);
            expect(list[0].name).toBe('test space');
            done();
        });
        component.search_str = 'test';
        component.search$.next('test');
    });

    it('should show allow searching for spaces and users together', (done) => {
        component.type = 'any';
        component.search_results$.pipe(first()).subscribe((list) => {
            expect(list.length).toBe(2);
            expect(list[0] instanceof Space).toBeTruthy();
            expect(list[1] instanceof User).toBeTruthy();
            done();
        });
        component.search_str = 'test';
        component.search$.next('test');
    });

    it('should show allow searching for features', () => {
        // TODO: Add test contents once implemented
    });

    it('should show allow searching for desks', () => {
        // TODO: Add test contents once implemented
    });
});
