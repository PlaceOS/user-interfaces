import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLegendComponent } from './footer-legend.component';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'safe'}) class MockSafePipe implements PipeTransform {
  public transform(value: any, ...args: any[]) {
    return;
  }
}

describe('FooterLegendComponent', () => {
  let component: FooterLegendComponent;
  let fixture: ComponentFixture<FooterLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLegendComponent, IconComponent, MockSafePipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
