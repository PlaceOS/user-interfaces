import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { SpaceSelectItemComponent } from './item.component';
import { IconComponent } from 'src/app/ui/icon/icon.component';

describe('ItemComponent', () => {
    let component: SpaceSelectItemComponent;
    let fixture: ComponentFixture<SpaceSelectItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpaceSelectItemComponent, MockComponent(IconComponent)],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpaceSelectItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
