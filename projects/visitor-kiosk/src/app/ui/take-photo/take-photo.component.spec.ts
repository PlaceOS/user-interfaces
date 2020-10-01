import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakePhotoComponent } from './take-photo.component';
import { Component } from '@angular/core';

@Component({
  template: '',
  selector: 'mat-spinner'
}) class FakeComponent {
  constructor(){}
}

describe('TakePhotoComponent', () => {
  let component: TakePhotoComponent;
  let fixture: ComponentFixture<TakePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakePhotoComponent, FakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
