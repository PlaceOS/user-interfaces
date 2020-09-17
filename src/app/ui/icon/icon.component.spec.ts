import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APipesModule } from '@acaprojects/ngx-pipes';

import { IconComponent } from './icon.component';

describe('IconComponent', () => {
    let component: IconComponent;
    let fixture: ComponentFixture<IconComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ IconComponent ],
        imports: [APipesModule]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(IconComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show font icons', () => {
        component.icon = { type: 'icon', class: 'test-icon', content: 'test-contents' };
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const el = compiled.querySelector('.test-icon');
        expect(el).toBeTruthy();
        expect(el.textContent).toBe('test-contents');
    });

    it('should show images', () => {
        component.icon = { type: 'img', src: '/test-image.png' };
        fixture.detectChanges();
        const compiled: HTMLElement = fixture.debugElement.nativeElement;
        const el = compiled.querySelector('img');
        expect(el).toBeTruthy();
        expect(el.src).toBe(`${location.origin}/test-image.png`);
    })
});
