import { createComponentFactory, Spectator } from "@ngneat/spectator/jest";
import { MockComponent } from "ng-mocks";
import { CardInputFieldComponent } from '../lib/card-input-field.component';

describe('CardInputFieldComponent', () => {
    let spectator: Spectator<CardInputFieldComponent>;
    const createComponent = createComponentFactory({
        component: CardInputFieldComponent,
        providers: [],
        declarations: []
    });

    beforeEach(() => (spectator = createComponent()));

    it('should create component', () => expect(spectator.component).toBeTruthy());

});