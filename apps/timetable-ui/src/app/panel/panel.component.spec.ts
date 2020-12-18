import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PanelComponent } from './panel.component';
import { PanelClockComponent } from './clock/clock.component';
import { PanelEventsComponent } from './events/events.component';
import { PanelHeaderComponent } from './header/header.component';
import { PanelTimelineComponent } from './timeline/timeline.component';
import { PanelProgressComponent } from './progress/progress.component';
import { TimelinePositionPipe } from '../pipes/timeline-position.pipe';

describe('PanelComponent', () => {
    let component: PanelComponent;
    let fixture: ComponentFixture<PanelComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                PanelComponent,
                PanelClockComponent,
                PanelEventsComponent,
                PanelHeaderComponent,
                PanelTimelineComponent,
                PanelProgressComponent,
                TimelinePositionPipe,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
