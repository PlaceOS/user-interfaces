import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSurveyFormComponent } from './create-survey-form.component';

describe('CreateSurveyFormComponent', () => {
    let component: CreateSurveyFormComponent;
    let fixture: ComponentFixture<CreateSurveyFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateSurveyFormComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CreateSurveyFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
