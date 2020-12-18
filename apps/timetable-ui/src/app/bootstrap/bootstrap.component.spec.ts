import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BootstrapComponent } from './bootstrap.component';

describe('BootstrapComponent', () => {
    let component: BootstrapComponent;
    let fixture: ComponentFixture<BootstrapComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BootstrapComponent],
            imports: [
                FormsModule,
                MatAutocompleteModule,
                MatInputModule,
                MatProgressSpinnerModule,
                RouterTestingModule,
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BootstrapComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
