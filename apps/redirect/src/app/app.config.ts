import {
    ApplicationConfig,
    provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';

const ROUTES = [{ path: '*', component: AppComponent }];

export const appConfig: ApplicationConfig = {
    providers: [provideZonelessChangeDetection(), provideRouter(ROUTES)],
};
