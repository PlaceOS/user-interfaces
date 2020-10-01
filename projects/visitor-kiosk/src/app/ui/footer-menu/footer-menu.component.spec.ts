import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { FooterMenuComponent } from './footer-menu.component';
import { ApplicationService } from 'src/app/services/app.service';
import { IconComponent } from '../icon/icon.component';
import { ApplicationLink } from '../../utilities/settings.interfaces';

describe('FooterMenuComponent', () => {
    let component: FooterMenuComponent;
    let fixture: ComponentFixture<FooterMenuComponent>;
    let app_service: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FooterMenuComponent, IconComponent],
            providers: [
                { provide: ApplicationService, useValue: jasmine.createSpyObj('ApplicationService', ['listen', 'setting']) },
            ],
            imports: [RouterModule.forRoot([]), APipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        app_service = TestBed.get(ApplicationService);
        app_service.setting.and.returnValue([
            { name: 'Test', route: 'test', icon: null },
            { name: 'Another Test', route: 'test', icon: null },
        ] as ApplicationLink[]);
        app_service.has_settings = true;
        fixture = TestBed.createComponent(FooterMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show a button for each tile', () => {
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        expect(compiled.querySelectorAll('.tile').length).toBe(2);
    });
});
