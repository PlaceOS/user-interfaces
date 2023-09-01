import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndoorMapsComponent } from './indoor-maps.component';

describe('IndoorMapsComponent', () => {
  let component: IndoorMapsComponent;
  let fixture: ComponentFixture<IndoorMapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndoorMapsComponent]
    });
    fixture = TestBed.createComponent(IndoorMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
