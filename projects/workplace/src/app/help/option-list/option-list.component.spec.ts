import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { RouterModule } from '@angular/router';
import { MockModule } from 'ng-mocks';

import { HelpOptionListComponent } from './option-list.component';
import { ApplicationService } from '../../../services/app.service';
import { IconComponent } from '../../../ui/icon/icon.component';
import { ApplicationLink } from '../../../shared/utilities/settings.interfaces';
import { generateMockAppService } from '../../../shared/utilities/spec-helpers';

describe('HelpOptionListComponent', () => {
    let component: HelpOptionListComponent;
    let fixture: ComponentFixture<HelpOptionListComponent>;
    let app_service: any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [HelpOptionListComponent, IconComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: app_service
                }
            ],
            imports: [APipesModule, MockModule(RouterModule.forRoot([]))]
        }).compileComponents();
    }));

    beforeEach(() => {
        app_service.is_ready = true;
        app_service.setting.mockReturnValue({
            tiles: [
                { link: 'test', name: 'Test' },
                { route: 'test', name: 'Test' }
            ] as ApplicationLink[]
        });
        fixture = TestBed.createComponent(HelpOptionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show link tiles', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.link')).toBeTruthy();
    });

    it('should show route tiles', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.route')).toBeTruthy();
    });
});
