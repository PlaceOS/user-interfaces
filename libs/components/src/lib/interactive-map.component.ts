import {
    AfterViewInit,
    Component,
    ElementRef,
    HostListener,
    InjectionToken,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    QueryList,
    SimpleChanges,
    TemplateRef,
    Type,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { BaseClass } from '@placeos/common';

import {
    applyGlobalStyles,
    createViewer,
    getViewer,
    Point,
    Viewer,
    removeViewer,
    updateViewer,
    ViewAction,
    ViewerFeature,
    ViewerLabel,
    ViewerStyles,
    listenToViewerChanges,
} from '@placeos/svg-viewer';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

export const MAP_FEATURE_DATA = new InjectionToken('Data for Map Features');

@Component({
    selector: `i-map,interactive-map`,
    template: `
        <div #outlet tabindex="0" role="map" class="absolute inset-0"></div>
        <mat-spinner
            *ngIf="!viewer || loading"
            class="absolute"
            [diameter]="48"
        ></mat-spinner>
        <div hidden *ngIf="injectors?.length">
            <ng-container
                *ngFor="
                    let element of features;
                    let i = index;
                    trackBy: element?.location
                "
            >
                <div *ngIf="element">
                    <div
                        #feature
                        class="pointer-events-none"
                        [attr.el-id]="element.location"
                        [attr.view-id]="viewer"
                        [ngSwitch]="type(element.content)"
                    >
                        <ng-container *ngSwitchCase="'component'">
                            <ng-container
                                *ngComponentOutlet="
                                    element.content;
                                    injector: injectors[i]
                                "
                            ></ng-container>
                        </ng-container>
                        <ng-container *ngSwitchCase="'html'">
                            <div [innerHTML]="element.content | sanitize"></div>
                        </ng-container>
                        <ng-container *ngSwitchDefault>
                            <ng-container
                                *ngTemplateOutlet="
                                    element.content;
                                    context: element.data
                                "
                            ></ng-container>
                        </ng-container>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                width: 100%;
            }

            mat-spinner {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        `,
    ],
})
export class InteractiveMapComponent
    extends BaseClass
    implements AfterViewInit, OnChanges, OnInit, OnDestroy {
    /** URL to the SVG file */
    @Input() public src: string;
    /** Custom CSS styles to apply to the SVG file */
    @Input() public styles: ViewerStyles;
    /** Zoom level to apply to the SVG */
    @Input() public zoom = 1;
    /** Zoom level to apply to the SVG */
    @Input() public center: Point = { x: 0.5, y: 0.5 };
    /** List of features to renderer over the SVG */
    @Input() public features: ViewerFeature[];
    /** List of labels to renderer over the SVG */
    @Input() public labels: ViewerLabel[];
    /** List of available user actions for the SVG */
    @Input() public actions: ViewAction[];

    @Input() public options: any;

    @Input() public focus: string;

    public loading: boolean;

    public injectors: Injector[] = [];

    /** ID of the active SVG Viewer */
    public viewer: string;
    /** Observable for changes on the SVG viewer */
    private _on_changes: BehaviorSubject<Viewer> = new BehaviorSubject(null);

    @ViewChild('outlet') private _outlet_el: ElementRef<HTMLDivElement>;
    @ViewChildren('feature') private _feature_list: QueryList<
        ElementRef<HTMLDivElement>
    >;

    @HostListener('window:resize') public onResize() {
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
        this.updateDisplay();
    }

    public type(
        content: string | TemplateRef<any> | Type<any>
    ): 'html' | 'template' | 'component' {
        return typeof content === 'string'
            ? 'html'
            : content instanceof TemplateRef
            ? 'template'
            : 'component';
    }

    public get feature_list() {
        return (this.features || [])
            .map((f, idx) => ({
                ...f,
                content: this._feature_list.toArray()[idx]?.nativeElement,
            }))
            .filter((f) => f.content);
    }

    constructor(private _injector: Injector) {
        super();
    }

    public ngOnInit() {
        applyGlobalStyles();
    }

    public ngOnDestroy(): void {
        if (this.viewer) {
            removeViewer(this.viewer);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.src && this.src) {
            this.createView();
        }
        if (changes.features) {
            this.injectors = (this.features || []).map((f: any) =>
                Injector.create({
                    providers: [
                        {
                            provide: MAP_FEATURE_DATA,
                            useValue: {
                                ...f.data,
                                zoom: this._on_changes.pipe(map((_) => _.zoom)),
                                position: this._on_changes.pipe(
                                    map((_) => _.center)
                                ),
                            },
                        },
                    ],
                    parent: this._injector,
                })
            );
        }
        if (this.viewer) {
            if (changes.focus && this.focus) {
                this.focusOn(this.focus);
            } else if (changes.zoom || changes.center) {
                this.updateDisplay();
            }
            if (
                changes.styles ||
                changes.features ||
                changes.labels ||
                changes.actions
            ) {
                this.timeout('update_view', () => this.updateView(), 100);
            }
        }
    }

    public ngAfterViewInit() {
        this.createView();
    }

    /** Update overlays, styles and actions of viewer */
    private updateView() {
        try {
            if (!getViewer(this.viewer) || this.loading) {
                return this.timeout('update_view', () => this.updateView());
            }
            updateViewer(this.viewer, {
                styles: this.styles,
                features: this.feature_list,
                labels: this.labels,
                actions: this.actions,
                options: this.options,
            });
        } catch (e) {}
    }

    /** Update zoom and center position of viewer */
    private updateDisplay() {
        try {
            updateViewer(this.viewer, {
                zoom: this.zoom,
                desired_zoom: this.zoom,
                center: this.center,
                desired_center: this.center,
                options: this.options,
            });
        } catch (e) {}
    }

    private async createView() {
        if (this.src && this._outlet_el?.nativeElement && !this.loading) {
            this.loading = true;
            if (this.viewer) {
                updateViewer(this.viewer, {
                    styles: this.styles,
                    features: [],
                    labels: this.labels,
                    actions: this.actions,
                    options: this.options,
                });
                removeViewer(this.viewer);
            }
            this.viewer = await createViewer({
                element: this._outlet_el?.nativeElement,
                url: this.src,
                styles: this.styles,
                zoom: this.zoom,
                desired_zoom: this.zoom,
                center: this.center,
                features: this.feature_list,
                labels: this.labels,
                actions: this.actions,
                options: this.options,
            });
            this.loading = false;
            this.subscription(
                'view_changes',
                listenToViewerChanges(this.viewer)?.subscribe((v) =>
                    this._on_changes.next(v)
                )
            );
        } else if (
            (this.src && !this._outlet_el?.nativeElement) ||
            this.loading
        ) {
            this.timeout('create_view', () => this.createView());
        }
    }

    private focusOn(id: string) {
        if (!id || !this.viewer) return;
        const viewer: Viewer = getViewer(this.viewer);
        if (!viewer) return;
        const rect = viewer.mappings[id];
        if (!rect) return;
        this.center = {
            x: 1 - (rect.x + rect.w / 2),
            y: 1 - (rect.y + rect.h / 2),
        };
        this.updateDisplay();
    }
}
