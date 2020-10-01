import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, ActivatedRoute, convertToParamMap } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { of } from 'rxjs';

import { MapControlsComponent } from './map-controls.component';
import { ApplicationService } from 'src/app/services/app.service';
import { generateMockBuilding } from 'src/app/services/data/organisation/building.utilities';
import { Building } from 'src/app/services/data/organisation/building.class';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MapControlsComponent', () => {
    let component: MapControlsComponent;
    let fixture: ComponentFixture<MapControlsComponent>;
    let app_service: any;
    let route: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapControlsComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: jasmine.createSpyObj('ApplicationService', ['setting'])
                },
                { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
                {
                    provide: ActivatedRoute,
                    useValue: jasmine.createSpyObj('ActivatedRoute', ['navigate'])
                }
            ],
            imports: [MatSelectModule, MatFormFieldModule, NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(fakeAsync(() => {
        app_service = TestBed.get(ApplicationService);
        route = TestBed.get(ActivatedRoute);
        route.queryParamMap = of(convertToParamMap({}));
        app_service.is_ready = true;
        app_service.Organisation = jasmine.createSpyObj('OrganisationService', ['levelWithID']);
        app_service.Organisation.buildings = [
            new Building(app_service.Organisation, generateMockBuilding()),
            new Building(app_service.Organisation, generateMockBuilding())
        ];
        app_service.Organisation.building = app_service.Organisation.buildings[0];
        fixture = TestBed.createComponent(MapControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        tick(1000);
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should load the building list', () => {
        expect(component.building).not.toBe(app_service.Organisation.buildings[1].id);
        component.setBuilding(app_service.Organisation.buildings[1].id);
        expect(component.building).toBe(app_service.Organisation.buildings[1].id);
    });

    it('should load the level list', () => {
        const building = app_service.Organisation.building;
        component.setBuilding(app_service.Organisation.building.id);
        expect(component.level_list).toEqual(building.levels);
        expect(component.level).toBe(building.levels[0].id);
        component.updateLevel(building.levels[1].id);
        expect(component.level).toBe(building.levels[1].id);
    });
});
