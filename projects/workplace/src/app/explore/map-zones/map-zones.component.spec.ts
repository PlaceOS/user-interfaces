import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapZonesComponent } from './map-zones.component';

describe('MapZonesComponent', () => {
  let component: MapZonesComponent;
  let fixture: ComponentFixture<MapZonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapZonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapZonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
