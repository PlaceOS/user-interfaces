import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { of } from 'rxjs';

import { MapViewComponent } from './map-view.component';
import { generateMockAppService } from 'src/app/shared/utilities/mock.helpers.spec';
import { ApplicationService } from 'src/app/services/app.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector:
        'mat-spinner,mat-progress-bar,a-zoom-controls,a-map-controls,a-map-legend,a-map,explore-search,[space-status],[desk-status],[zone-status],app-icon,a-footer-legend',
    template: '',
    styles: [''],
    inputs: [
        'zoom',
        'center',
        'features',
        'focus',
        'cssStyles',
        'src',
        'level',
        'zone',
        'position',
        'listeners',
        'options',
        'type',
        'zone',
        'clear',
        'placeholder',
        'filters',
        'icon'
    ]
})
class MockComponents {}

describe('MapViewComponent', () => {
    let component: MapViewComponent;
    let fixture: ComponentFixture<MapViewComponent>;
    let app_service: any;
    const route = {} as any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        route.paramMap = of(convertToParamMap({}));
        TestBed.configureTestingModule({
            declarations: [MapViewComponent, MockComponents],
            providers: [
                { provide: ApplicationService, useValue: app_service },
                { provide: ActivatedRoute, useValue: route},
                { provide: Router, useValue: jasmine.createSpyObj('Router', ['navigate']) },
                { provide: MatDialog, useValue: jasmine.createSpyObj('MatDialog', ['open']) }
            ]
        }).compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MapViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show the map', () => {
        // TODO
    });
});
