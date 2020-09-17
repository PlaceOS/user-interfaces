import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockComponent, MockModule } from 'ng-mocks';

import { ActionIconComponent } from './action-icon.component';
import { IconComponent } from '../icon/icon.component';

describe('ActionIconComponent', () => {
    let component: ActionIconComponent;
    let fixture: ComponentFixture<ActionIconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ActionIconComponent, MockComponent(IconComponent)],
            imports: [MockModule(MatProgressSpinnerModule)],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionIconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
