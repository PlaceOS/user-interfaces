import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { LoginComponent } from './login.component';
import { ApplicationService } from '../../../services/app.service';
import { generateMockAppService } from '../../utilities/spec-helpers';
import { Component } from '@angular/core';

@Component({
    selector: 'mat-spinner',
    template: '',
    styles: ['']
})
class MockComponents { }

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let app_service: any;

    beforeEach(async(() => {
        app_service = generateMockAppService();
        TestBed.configureTestingModule({
            declarations: [LoginComponent, MockComponents],
            providers: [
                { provide: ApplicationService, useValue: app_service }
            ],
            imports: [CommonModule, FormsModule, APipesModule]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show form', () => {
        // TODO
    });
});
