import { ViewRoomModalComponent } from './view-room-modal.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { generateMockSpace } from 'src/app/services/data/spaces/space.utilities';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ViewRoomModalComponent', () => {
    let fixture: ComponentFixture<ViewRoomModalComponent>;
    let component: ViewRoomModalComponent;
    let item: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ViewRoomModalComponent],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { space: generateMockSpace(1, {}) }}],
            imports: [CommonModule, NoopAnimationsModule]
        }).compileComponents();
        fixture = TestBed.createComponent(ViewRoomModalComponent);
        item = TestBed.get(MAT_DIALOG_DATA);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });
});
