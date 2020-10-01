import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreMapLegendComponent } from './map-legend.component';
import { ApplicationService } from 'src/app/services/app.service';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('MapLegendComponent', () => {
    let component: ExploreMapLegendComponent;
    let fixture: ComponentFixture<ExploreMapLegendComponent>;
    let service: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExploreMapLegendComponent, IconComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: jasmine.createSpyObj('ApplicationService', ['setting'])
                }
            ],
            imports: [APipesModule, NoopAnimationsModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ExploreMapLegendComponent);
        component = fixture.componentInstance;
        service = TestBed.get(ApplicationService);
        fixture.detectChanges();
        component.legend_items = {
            general: [
                {
                    key: 'test',
                    name: 'Test',
                    icon: { type: 'icon', class: 'fa fa-plus', content: '' }
                }
            ]
        };
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow toggling view', () => {
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.map-legend');
        expect(component.show_legend).toBe(false);
        element.dispatchEvent(new Event('tapped'));
        expect(component.show_legend).toBe(true);
    });

    it('should show legend items', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('li')).toBeFalsy();
        fixture.detectChanges();
        const item = compiled.querySelector('li.item');
        expect(item).toBeTruthy();
    });

    it('should allow showing icons or colours', () => {
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const item = compiled.querySelector('app-icon');
        expect(item).toBeTruthy();
        component.legend_items = {
            general: [
                {
                    key: 'test',
                    name: 'Test',
                    color: '#000'
                }
            ]
        };
        fixture.detectChanges();
        const color_item = compiled.querySelector('.colour');
        expect(color_item).toBeTruthy();
    });

    it('should show legend groups', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        let item = compiled.querySelector('li.group');
        expect(item).toBeFalsy();
        component.show_group_names = true;
        fixture.detectChanges();
        item = compiled.querySelector('li.group');
        expect(item).toBeTruthy();
    });
});
