import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTimelineComponent } from './timeline.component';

describe('PanelTimelineComponent', () => {
    let component: PanelTimelineComponent;
    let fixture: ComponentFixture<PanelTimelineComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PanelTimelineComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PanelTimelineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
