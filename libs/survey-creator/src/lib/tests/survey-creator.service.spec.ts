import { TestBed } from '@angular/core/testing';

import { SurveyCreatorService } from '../survey-creator.service';

describe('SurveyCreatorService', () => {
    let service: SurveyCreatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SurveyCreatorService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
