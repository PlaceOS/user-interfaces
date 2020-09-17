import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { first } from 'rxjs/operators';
import { MockComponent, MockModule } from 'ng-mocks';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { ActionFieldComponent } from './action-field.component';
import { IconComponent } from '../icon/icon.component';

describe('ActionFieldComponent', () => {
    let component: ActionFieldComponent;
    let fixture: ComponentFixture<ActionFieldComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ActionFieldComponent, MockComponent(IconComponent)],
            imports: [MockModule(APipesModule)]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ActionFieldComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit user click actions', (done) => {
        component.on_action.pipe(first()).subscribe(() => done());
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const text_el: HTMLDivElement = el.querySelector('.display');
        expect(text_el).toBeTruthy();
        text_el.dispatchEvent(new Event('click'));
    });

    it('should emit user enter keypress ', (done) => {
        component.on_action.pipe(first()).subscribe(() => done());
        const el: HTMLElement = fixture.debugElement.nativeElement;
        const container: HTMLDivElement = el.querySelector('.action-field');
        expect(container).toBeTruthy();
        const event = new KeyboardEvent('keydown', {
            key: 'Enter'
        });
        container.dispatchEvent(event);
    });
});
