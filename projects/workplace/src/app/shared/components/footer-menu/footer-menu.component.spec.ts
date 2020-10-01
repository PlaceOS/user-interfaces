import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Router } from '@angular/router';
import { APipesModule } from '@acaprojects/ngx-pipes';
import { MockModule } from 'ng-mocks';
import { of } from 'rxjs';

import { FooterMenuComponent } from './footer-menu.component';
import { IconComponent } from 'src/app/ui/icon/icon.component';
import { ApplicationLink } from '../../utilities/settings.interfaces';
import { generateMockAppService } from '../../utilities/spec-helpers';

describe('FooterMenuComponent', () => {
    let component: FooterMenuComponent;
    let fixture: ComponentFixture<FooterMenuComponent>;
    let app_service: any;
    let router;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [FooterMenuComponent, IconComponent],
            providers: [
                {
                    provide: Router,
                    useValue: {
                        url: '',
                        navigate: jest.fn(),
                    },
                },
            ],
            imports: [MockModule(RouterModule.forRoot([])), APipesModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        app_service.setting.mockReturnValue([
            { name: 'Test', route: 'test', icon: null },
            { name: 'Another Test', route: 'test', icon: null },
        ] as ApplicationLink[]);
        app_service.has_settings = true;
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(FooterMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show a button for each tile', () => {
        router.navigate(['']);
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.tile').length).toBe(2);
    });
});
