import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { CateringOptionsModalComponent } from './catering-options-modal.component';
import { MockComponent, MockModule } from 'ng-mocks';
import { IconComponent } from 'src/app/ui/icon/icon.component';

describe('CateringOptionsModalComponent', () => {
    let component: CateringOptionsModalComponent;
    let fixture: ComponentFixture<CateringOptionsModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CateringOptionsModalComponent, MockComponent(IconComponent)],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: { options: [] } }
            ],
            imports: [
                FormsModule,
                MockModule(MatCheckboxModule),
                MockModule(MatRadioModule),
                MockModule(MatDialogModule),
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CateringOptionsModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
