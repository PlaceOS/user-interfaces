import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockModule, MockComponent } from 'ng-mocks';

import { ACA_INTERACTIVE_MAP_MODULE } from '@acaprojects/ngx-interactive-map';

import { ViewRoomModalComponent } from './view-room-modal.component';
import { generateMockSpace } from 'src/app/spaces/space.utilities';
import { IconComponent } from '../../ui/icon/icon.component';

describe('ViewRoomModalComponent', () => {
    let fixture: ComponentFixture<ViewRoomModalComponent>;
    let component: ViewRoomModalComponent;
    let item: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ViewRoomModalComponent, MockComponent(IconComponent)],
            providers: [{ provide: MAT_DIALOG_DATA, useValue: { space: generateMockSpace({}) } }],
            imports: [
                CommonModule,
                NoopAnimationsModule,
                MockModule(ACA_INTERACTIVE_MAP_MODULE),
                MockModule(MatProgressSpinnerModule),
                MockModule(MatDialogModule),
            ],
        }).compileComponents();
        fixture = TestBed.createComponent(ViewRoomModalComponent);
        item = TestBed.inject(MAT_DIALOG_DATA);
        component = fixture.debugElement.componentInstance;
        fixture.detectChanges();
    });

    it('should create component', () => {
        expect(component).toBeTruthy();
    });
});
