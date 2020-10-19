import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockModule, MockComponent } from 'ng-mocks';
import { of } from 'rxjs';

import { CateringOrderModalComponent } from './catering-order-modal.component';
import { IconComponent } from 'src/app/ui/icon/icon.component';
import { CateringStateService } from 'src/app/catering/catering-state.service';
import { CateringOrder } from 'src/app/catering/catering-order.class';
import { CounterComponent } from 'src/app/ui/counter/counter.component';

describe('CateringOrderModalComponent', () => {
    let component: CateringOrderModalComponent;
    let fixture: ComponentFixture<CateringOrderModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CateringOrderModalComponent,
                MockComponent(IconComponent),
                MockComponent(CounterComponent),
            ],
            imports: [
                FormsModule,
                ReactiveFormsModule,
                MockModule(MatTabsModule),
                MockModule(MatDialogModule),
                MockModule(MatBadgeModule),
                MockModule(MatTooltipModule),
                MockModule(MatProgressSpinnerModule),
            ],
            providers: [
                {
                    provide: CateringStateService,
                    useValue: {
                        menu: of([]),
                        loading: of(false),
                        selectOptions: jest.fn(async () => []),
                    },
                },
                {
                    provide: MAT_DIALOG_DATA,
                    useValue: {
                        order: new CateringOrder(),
                    },
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CateringOrderModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
