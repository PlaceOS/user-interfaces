import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { MockModule } from 'ng-mocks';

import { OverlayMenuComponent } from './overlay-menu.component';
import { ApplicationService } from '../../../services/app.service';
import { OverlayMenuSettings } from '../../utilities/settings.interfaces';
import { Component } from '@angular/core';
import { generateMockAppService } from '../../utilities/spec-helpers';

@Component({
    selector: 'mock-cmp, app-icon',
    template: '',
    styles: [''],
    inputs: ['icon'],
})
class MockComponent {}

describe('OverlayMenuComponent', () => {
    let component: OverlayMenuComponent;
    let fixture: ComponentFixture<OverlayMenuComponent>;
    let router: Router;
    let service: any;

    beforeEach(() => {
        service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [OverlayMenuComponent, MockComponent],
            providers: [{ provide: ApplicationService, useValue: service }],
            imports: [
                MockModule(RouterModule.forRoot([{ path: 'test', component: MockComponent }])),
                APipesModule,
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(OverlayMenuComponent);
        component = fixture.componentInstance;
        component.show = false;
        service.has_settings = false;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should allow showing', fakeAsync(() => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const menu_el: HTMLDivElement = compiled.querySelector('.overlay-menu');
        expect(menu_el.classList.contains('show')).toBeFalsy();
        component.show = true;
        fixture.detectChanges();
        tick(600);
        expect(menu_el.classList.contains('show')).toBeTruthy();
    }));

    it('should be able to close', fakeAsync(() => {
        component.show = true;
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const close_el: HTMLButtonElement = compiled.querySelector('.header button');
        expect(close_el).toBeTruthy();
        close_el.click();
        fixture.detectChanges();
        tick(320);
        expect(component.show).toBeFalsy();
    }));

    it('should show menu items', fakeAsync(() => {
        service.setting.mockReturnValue({
            items: [
                { name: 'Test', route: '/test' },
                { name: 'Test 2', route: '/test-more' },
                { name: 'Test 3', route: '/test-aswell' },
            ],
        } as OverlayMenuSettings);
        component.show = true;
        tick(320);
        fixture.detectChanges();
        expect(component.menu_items.length > 0).toBeTruthy();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const el = compiled.querySelector('a .text');
        expect(el).toBeTruthy();
        expect(el.textContent).toBe('Test');
    }));

    // it('should show copyright', fakeAsync(() => {
    //     service.setting.mockReturnValue({
    //         copyright: `Hey hey it's Saturday!`
    //     } as OverlayMenuSettings);
    //     component.show = true;
    //     tick(320);
    //     fixture.detectChanges();
    //     const compiled: HTMLElement = fixture.debugElement.nativeElement;
    //     const el = compiled.querySelector('.footer');
    //     expect(el).toBeTruthy();
    //     expect(el.textContent).toContain(`Copyright © ${component.year} Hey hey it's Saturday!`);
    // }));
});
