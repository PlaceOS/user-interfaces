import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CreateSurveyFormComponent } from './create-survey/create-survey-form/create-survey-form.component';

@NgModule({
    declarations: [AppComponent, CreateSurveyFormComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
