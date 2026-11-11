import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { LocaleService } from '@placeos/common';

import { appConfig } from '../app/app.config';

// Uses the real app router config. No outlet renders, so a navigation loads
// the route components but does not create them.
describe('app routes', () => {
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ...appConfig.providers,
                { provide: LocaleService, useValue: { locale: 'en' } },
            ],
        });
        router = TestBed.inject(Router);
    });

    afterEach(() => {
        location.hash = '';
    });

    /** Navigate, then give the path of the route that matched. */
    async function matched(url: string) {
        await router.navigateByUrl(url);
        return {
            url: router.url,
            path: router.routerState.snapshot.root.firstChild?.routeConfig
                ?.path,
            id: router.routerState.snapshot.root.firstChild?.params['id'],
        };
    }

    it('should open a survey from its ID', async () => {
        expect(await matched('/survey-1')).toEqual({
            url: '/survey-1',
            path: ':id',
            id: 'survey-1',
        });
    });

    it('should open a survey from the survey/:id path', async () => {
        expect(await matched('/survey/survey-1')).toEqual({
            url: '/survey/survey-1',
            path: 'survey/:id',
            id: 'survey-1',
        });
    });

    it('should redirect unknown paths to not-found', async () => {
        expect(await matched('/a/b/c')).toEqual({
            url: '/not-found',
            path: 'not-found',
            id: undefined,
        });
    });
});
