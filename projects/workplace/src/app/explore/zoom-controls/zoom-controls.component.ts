import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMapPoint } from '@acaprojects/ngx-interactive-map';

@Component({
    selector: 'a-zoom-controls',
    templateUrl: './zoom-controls.component.html',
    styleUrls: ['./zoom-controls.component.scss']
})
export class ZoomControlsComponent implements OnInit {
    /** Current zoom level of the map */
    @Input() public zoom: number;
    /** Current center position of the map */
    @Input() public position: IMapPoint;
    /** Emitter for changes to the zoom value */
    @Output() public zoomChange = new EventEmitter<number>();
    /** Emitter for changes to the position */
    @Output() public positionChange = new EventEmitter<IMapPoint>();

    public min_zoom: number = 1;

    public max_zoom: number = 10;

    constructor() {}

    public ngOnInit(): void {

    }

    public zoomIn() {
        this.zoom = (this.zoom || this.min_zoom) * 1.2;
        if (this.zoom > this.max_zoom) {
            this.zoom = this.max_zoom;
        }
        this.zoomChange.emit(this.zoom);
    }

    public zoomOut() {
        this.zoom = (this.zoom || this.min_zoom) * (1 / 1.2);
        if (this.zoom < this.min_zoom) {
            this.zoom = this.min_zoom;
        }
        this.zoomChange.emit(this.zoom);
    }

    public reset() {
        this.zoom = this.min_zoom;
        this.position = { x: 0.5, y: 0.5 };
        this.zoomChange.emit(this.zoom);
        this.positionChange.emit(this.position);
    }
}
