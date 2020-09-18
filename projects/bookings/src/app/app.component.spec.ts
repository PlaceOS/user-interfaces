
import { RouterModule } from '@angular/router';
import { MockDirective } from 'ng-mocks';

import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';

import { AppComponent } from './app.component';
import { BindingDirective } from 'src/app/ui/binding/binding.directive';

describe('AppComponent', () => {
    let spectator: Spectator<AppComponent>;
    let createComponent = createComponentFactory({
        component: AppComponent,
        imports: [RouterModule.forRoot([])],
        declarations: [MockDirective(BindingDirective)],
    });
    beforeEach(() => {
        spectator = createComponent();
    });

    it('should create the application', () => {
        expect(spectator.component).toBeTruthy();
    });
});
