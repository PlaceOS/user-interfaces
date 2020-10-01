import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { TopbarHeaderComponent } from './topbar-header.component';
import { IconComponent } from '../icon/icon.component';
import { ApplicationService } from '../../../services/app.service';
import { generateMockAppService } from '../../utilities/spec-helpers';

describe('TopbarHeaderComponent', () => {
    let component: TopbarHeaderComponent;
    let fixture: ComponentFixture<TopbarHeaderComponent>;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TopbarHeaderComponent, IconComponent],
            providers: [
                {
                    provide: ApplicationService,
                    useValue: generateMockAppService()
                }
            ],
            imports: [RouterTestingModule.withRoutes([]), APipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(TopbarHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show page title', () => {
        component.title = 'Test Title';
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.title');
        expect(element).toBeTruthy();
        expect(element.textContent).toBe('Test Title');
    });

    it('should show a logo', () => {
        component.logo = { type: 'img', src: 'Test.jpg' };
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const element = compiled.querySelector('.logo');
        expect(element).toBeTruthy();
    });
});
