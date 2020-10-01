import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { MockModule, MockComponent } from 'ng-mocks';

import { SpaceConfirmComponent } from './space-confirm.component';
import { ApplicationService } from '../../../../services/app.service';
import { IconComponent } from '../../../../shared/components/icon/icon.component';

describe('SpaceConfirmComponent', () => {
    let component: SpaceConfirmComponent;
    let fixture: ComponentFixture<SpaceConfirmComponent>;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpaceConfirmComponent, MockComponent(IconComponent), ],
            imports: [MockModule(RouterModule.forRoot([]))],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: { Users: { current: () => ({}) } },
                },
            ],
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(SpaceConfirmComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
