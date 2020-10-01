import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Component({
  selector: 'a-map-zones',
  templateUrl: './map-zones.component.html',
  styleUrls: ['./map-zones.component.scss']
})
export class MapZonesComponent implements OnChanges {
  @Input() @HostBinding('class.show') public showZones = false;
  // @Output() public showZonesChanged = new EventEmitter<boolean>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
