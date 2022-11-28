import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent, MockModule } from "ng-mocks";
import { CardInputFieldComponent } from '../lib/card-input-field.component';

describe('CardInputFieldComponent', () => {
    let spectator: Spectator<CardInputFieldComponent>;
    const createComponent = createComponentFactory({
        component: CardInputFieldComponent,
        providers: [],
        declarations: [],
        imports: [
            MockModule(MatFormFieldModule),
            MockModule(MatSelectModule),
            ReactiveFormsModule
        ]
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});