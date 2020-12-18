import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEventsComponent } from './events.component';
import { TimelinePositionPipe } from '../../pipes/timeline-position.pipe';

describe('PanelEventsComponent', () => {
    let component: PanelEventsComponent;
    let fixture: ComponentFixture<PanelEventsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PanelEventsComponent, TimelinePositionPipe],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelEventsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
