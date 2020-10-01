import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';
import { first } from 'rxjs/operators';

import { ExploreSearchComponent } from './search.component';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import { SpacesService } from 'src/app/spaces/spaces.service';
import { User } from 'src/app/users/user.class';
import { Space } from 'src/app/spaces/space.class';
import { OrganisationService } from 'src/app/organisation/organisation.service';
import { mockOrganisationService, mockSpacesService, generateMockDataService } from '../../../shared/utilities/spec-helpers';
import { StaffService } from 'src/app/users/staff.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
    let component: ExploreSearchComponent;
    let fixture: ComponentFixture<ExploreSearchComponent>;
    let org_service: any;
    let staff_service: any;
    let spaces_service: any;
    let composer_service: any;
    let route: any;

    beforeEach(async(() => {
        org_service = mockOrganisationService();
        staff_service = generateMockDataService('staff');
        spaces_service = mockSpacesService();
        TestBed.configureTestingModule({
            declarations: [ExploreSearchComponent, IconComponent],
            providers: [
                {
                    provide: OrganisationService,
                    useValue: org_service
                },
                {
                    provide: StaffService,
                    useValue: staff_service
                },
                {
                    provide: SpacesService,
                    useValue: spaces_service
                }
            ],
            imports: [RouterTestingModule, MatAutocompleteModule, MatProgressSpinnerModule, APipesModule, FormsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        staff_service = TestBed.inject(StaffService);
        spaces_service = TestBed.inject(SpacesService);
        fixture = TestBed.createComponent(ExploreSearchComponent);
        component = fixture.componentInstance;
        staff_service.query.mockReturnValue(Promise.resolve([
            new User({ name: 'testerino' }),
            new User({ name: 'another user' }),
        ]));
        spaces_service.filter.mockReturnValue([
            new Space({ name: 'test space' }),
            new Space({ name: 'another space' }),
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
            expect(list.length).toBe(2);
            expect(list[1].name).toBe('testerino');
            done();
        });
        component.search_str = 'test';
        component.search$.next('test');
    });

    it('should show allow searching for spaces', (done) => {
        component.type = 'space';
        component.search_results$.pipe(first()).subscribe((list) => {
            expect(list.length).toBe(2);
            expect(list[0].name).toBe('test space');
            done();
        });
        component.search_str = 'test';
        component.search$.next('test');
    });

    it('should show allow searching for spaces and users together', (done) => {
        component.search_results$.pipe(first()).subscribe((list) => {
            expect(list.length).toBe(2);
            expect(list[0] instanceof Space).toBeTruthy();
            expect(list[1] instanceof User).toBeTruthy();
            done();
        });
        component.search_str = 'test';
        component.search$.next('test');
    });
});
