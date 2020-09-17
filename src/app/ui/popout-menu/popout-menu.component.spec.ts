import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { PopoutMenuComponent } from './popout-menu.component';
import { IconComponent } from '../icon/icon.component';

describe('PopoutMenuComponent', () => {
    let component: PopoutMenuComponent;
    let fixture: ComponentFixture<PopoutMenuComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PopoutMenuComponent, MockComponent(IconComponent)],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PopoutMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
