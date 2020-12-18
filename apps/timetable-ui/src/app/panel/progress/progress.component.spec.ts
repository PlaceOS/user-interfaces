import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProgressComponent } from './progress.component';
import { TimelinePositionPipe } from '../../pipes/timeline-position.pipe';

describe('PanelProgressComponent', () => {
    let component: PanelProgressComponent;
    let fixture: ComponentFixture<PanelProgressComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PanelProgressComponent, TimelinePositionPipe],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelProgressComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
