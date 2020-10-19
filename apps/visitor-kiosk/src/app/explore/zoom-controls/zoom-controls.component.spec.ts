import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomControlsComponent } from './zoom-controls.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { APipesModule } from '@acaprojects/ngx-pipes';

describe('ZoomControlsComponent', () => {
    let component: ZoomControlsComponent;
    let fixture: ComponentFixture<ZoomControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZoomControlsComponent, IconComponent],
            imports: [APipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ZoomControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow zooming in', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('[name="zoom-in"]');
        expect(element).toBeTruthy();
        component.zoom = 1;
        element.dispatchEvent(new Event('tapped'));
        expect(component.zoom).toBe(1.2);
    });

    it('should allow zooming out', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('[name="zoom-out"]');
        expect(element).toBeTruthy();
        component.zoom = 1.2;
        element.dispatchEvent(new Event('tapped'));
        expect(component.zoom).toBe(1);
    });

    it('should allow resetting the zoom and position', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('[name="reset"]');
        expect(element).toBeTruthy();
        component.zoom = 1.2;
        component.position = { x: 1, y: 1 };
        element.dispatchEvent(new Event('tapped'));
        expect(component.zoom).toBe(1);
        expect(component.position).toEqual({ x: .5, y: .5 });
    });
});
