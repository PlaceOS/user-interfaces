import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AMapFeature } from '@acaprojects/ngx-interactive-map';

import { ExploreSpaceInfoComponent } from './space-info.component';
import { Space } from 'src/app/services/data/spaces/space.class';
import { generateMockAppService } from 'src/app/shared/utilities/mock.helpers.spec';

describe('SpaceInfoComponent', () => {
    let component: ExploreSpaceInfoComponent;
    let fixture: ComponentFixture<ExploreSpaceInfoComponent>;
    let app_service: any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        app_service.Spaces.parent = app_service;
        TestBed.configureTestingModule({
            declarations: [ExploreSpaceInfoComponent],
            providers: [
                {
                    provide: AMapFeature,
                    useValue: {
                        space: new Space(app_service.Spaces, {}),
                        bookings: [],
                        position: { x: .5, y: .5 }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreSpaceInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show the space status', () => {
        // TODO
    });
});
