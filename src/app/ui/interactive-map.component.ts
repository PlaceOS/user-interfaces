import {
    Component,
    ElementRef,
    InjectionToken,
    Injector,
    Input,
    QueryList,
    SimpleChanges,
    ViewChild,
    ViewChildren,
} from '@angular/core';

import {
    applyGlobalStyles,
    createViewer,
    Point,
    removeViewer,
    updateViewer,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
} from '@yuion/svg-viewer';
import { BaseClass } from '../common/base.class';
import { HashMap } from '../common/types';

export const MAP_FEATURE_DATA = new InjectionToken('Data for Map Features');

@Component({
    selector: `i-map,interactive-map`,
    template: `
        <div #outlet tabindex="0" role="map" class="absolute inset-0"></div>
        <div hidden>
            <ng-container *ngFor="let element of features; let i = index">
                <div #feature [attr.el-id]="element.location">
                    <ng-container
                        *ngComponentOutlet="element.content; injector: injectors[i]"
                    ></ng-container>
                </div>
            </ng-container>
        </div>
    `,
    styles: [
        `
        :host {
            position: relative
            height: 100%;
            width: 100%;
        }
    `,
    ],
})
export class InteractiveMapComponent extends BaseClass {
    /** URL to the SVG file */
    @Input() public src: string;
    /** Custom CSS styles to apply to the SVG file */
    @Input() public styles: ViewerStyles;
    /** Zoom level to apply to the SVG */
    @Input() public zoom: number = 1;
    /** Zoom level to apply to the SVG */
    @Input() public center: Point = { x: 0.5, y: 0.5 };
    /** List of features to renderer over the SVG */
    @Input() public features: ViewerFeature[];
    /** List of labels to renderer over the SVG */
    @Input() public labels: ViewerLabel[];
    /** List of available user actions for the SVG */
    @Input() public actions: ViewAction[];

    public injectors: Injector[] = [];

    /** ID of the active SVG Viewer */
    private _viewer: string;

    @ViewChild('outlet') private _outlet_el: ElementRef<HTMLDivElement>;
    @ViewChildren('feature') private _feature_list: QueryList<ElementRef<HTMLDivElement>>;

    constructor(private _injector: Injector) {
        super();
    }

    public ngOnInit() {
        applyGlobalStyles();
    }

    public ngOnDestroy(): void {
        if (this._viewer) {
            removeViewer(this._viewer);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.src && this.src) {
            this.createView();
        }
        if (this._viewer) {
            if (changes.zoom || changes.center) {
                this.updateDisplay();
            }
            if (changes.styles || changes.features || changes.labels || changes.actions) {
                this.injectors = (this.features || []).map((f: any) =>
                    Injector.create({
                        providers: [{ provide: MAP_FEATURE_DATA, useValue: f.data }],
                        parent: this._injector,
                    })
                );
                this.timeout('update_view', () => this.updateView(), 100);
            }
        }
    }

    public ngAfterViewInit() {
        this.createView();
    }

    /** Update overlays, styles and actions of viewer */
    private updateView() {
        updateViewer(this._viewer, {
            styles: this.styles,
            features: (this.features || []).map((f, idx) => ({
                ...f,
                content: this._feature_list.toArray()[idx]?.nativeElement,
            })),
            labels: this.labels,
            actions: this.actions,
        });
    }

    /** Update zoom and center position of viewer */
    private updateDisplay() {
        updateViewer(this._viewer, {
            zoom: this.zoom,
            desired_zoom: this.zoom,
            center: this.center,
            desired_center: this.center,
        });
    }

    private async createView() {
        if (this.src && this._outlet_el?.nativeElement) {
            if (this._viewer) {
                removeViewer(this._viewer);
            }
            this._viewer = await createViewer({
                element: this._outlet_el?.nativeElement,
                url: this.src,
                styles: this.styles,
                zoom: this.zoom,
                desired_zoom: this.zoom,
                center: this.center,
                features: this.features,
                labels: this.labels,
                actions: this.actions,
            });
        }
    }
}
