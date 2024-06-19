import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    HostListener,
    Injector,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    SimpleChanges,
    TemplateRef,
    Type,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import { AsyncHandler } from '@placeos/common';

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
import { apiKey, authority, token } from '@placeos/ts-client';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { MAP_FEATURE_DATA } from './interactive-map.component';
import { get } from 'http';

function isSamePoint(p1: Point, p2: Point): boolean {
    return p1.x === p2.x && p1.y === p2.y;
}

@Component({
    selector: `map-renderer`,
    template: `
        <div
            #outlet
            tabindex="0"
            role="map"
            class="absolute inset-0"
            [class.hidden]="!src"
        ></div>
        <ng-container *ngIf="src; else empty_state">
            <mat-spinner
                *ngIf="!viewer || loading"
                class="absolute"
                [diameter]="48"
            ></mat-spinner>
        </ng-container>
        <div hidden *ngIf="injectors?.length">
            <ng-container
                *ngFor="
                    let element of features;
                    let i = index;
                    trackBy: trackByFn
                "
            >
                <div *ngIf="element">
                    <div
                        #feature
                        class="pointer-events-none"
                        [attr.no-scale]="element.no_scale"
                        [attr.el-id]="element.location"
                        [attr.track-id]="element.track_id"
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
        <ng-template #empty_state>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">No map</div>
            </div>
        </ng-template>
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
export class MapRendererComponent
    extends AsyncHandler
    implements AfterViewInit, OnChanges, OnInit, OnDestroy
{
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
    /** Number of times to reset the map */
    @Input() public reset = 0;

    @Input() public options: any;

    @Input() public focus: string;

    @Output() public zoomChange = new EventEmitter<number>();

    @Output() public centerChange = new EventEmitter<Point>();

    @Output() public mapInfo = new EventEmitter<any>();

    public loading: boolean;

    public injectors: Injector[] = [];

    public feature_list: ViewerFeature[] = [];

    /** ID of the active SVG Viewer */
    public viewer: string;
    /** Observable for changes on the SVG viewer */
    private _on_changes: BehaviorSubject<Viewer> = new BehaviorSubject(null);

    private _extra_data = {
        ratio$: this._on_changes.pipe(map((_) => _.ratio)),
        svg_ratio$: this._on_changes.pipe(map((_) => _.svg_ratio)),
        zoom$: this._on_changes.pipe(map((_) => _.zoom)),
        position: this._on_changes.pipe(map((_) => _.center)),
    };

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
            this.createView().catch((e) => console.warn(e));
        }
        if (changes.features) {
            this.updateInjectors();
        }
        if (this.viewer) {
            if (changes.focus && this.focus) {
                this.focusOn(this.focus);
            } else if (
                (changes.zoom &&
                    changes.zoom.previousValue != changes.zoom.currentValue) ||
                (changes.center &&
                    !isSamePoint(
                        changes.center.previousValue,
                        changes.center.currentValue
                    ))
            ) {
                this.updateDisplay();
            }
            if (
                changes.styles ||
                changes.features ||
                changes.labels ||
                changes.actions
            ) {
                this.timeout('update_view', () => this.updateView());
            }
        }
        if (
            changes.reset &&
            changes.reset.currentValue !== changes.reset.previousValue
        ) {
            this.zoom = 1;
            this.center = { x: 0.5, y: 0.5 };
            this.updateDisplay();
        }
    }

    public ngAfterViewInit() {
        this.createView().catch((e) => console.warn(e));
    }

    /** Update overlays, styles and actions of viewer */
    private updateView() {
        try {
            if (!getViewer(this.viewer) || this.loading) {
                return this.timeout('update_view', () => this.updateView());
            }
            this.updateFeatureList();
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
        if (!authority()) {
            return this.timeout(
                'create_view',
                () => this.createView().catch((e) => console.warn(e)),
                300
            );
        }
        const simp_url = this.src?.toLowerCase() || '';
        if (!simp_url.includes('svg') && !simp_url.includes('upload')) return;
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
            this.updateFeatureList();
            const tkn = token();
            console.log('Map Token:', tkn);
            document.cookie = `${
                tkn === 'x-api-key'
                    ? 'api-key=' + encodeURIComponent(apiKey())
                    : 'bearer_token=' + encodeURIComponent(tkn)
            };max-age=30;path=/api/engine/v2/uploads;samesite=strict;${
                location.protocol === 'https:' ? 'secure;' : ''
            }`;
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
                listenToViewerChanges(this.viewer)?.subscribe((v) => {
                    const box =
                        this._outlet_el.nativeElement.getBoundingClientRect();
                    this._on_changes.next({ ...v } as any);
                    this.zoomChange.emit(v.zoom);
                    this.centerChange.emit(v.center);
                })
            );
            const viewer = getViewer(this.viewer);
            this.mapInfo.emit(viewer.mappings);
            if (this.focus) this.focusOn(this.focus);
        } else if (
            (this.src && !this._outlet_el?.nativeElement) ||
            this.loading
        ) {
            this.timeout('create_view', () =>
                this.createView().catch((e) => console.warn(e))
            );
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
            y: 1 - (rect.y + rect.h / 4),
        };
        this.updateDisplay();
    }

    /* istanbul ignore next */
    public trackByFn(index: number, feature: ViewerFeature) {
        return feature?.track_id;
    }

    private updateFeatureList() {
        this.feature_list = (this.features || [])
            .map((f, idx) => ({
                ...f,
                content: this._feature_list.toArray()[idx]?.nativeElement,
            }))
            .filter((f) => f.content);
    }

    private updateInjectors() {
        const old_injectors = this.injectors || [];
        this.injectors = (this.features || []).map(
            (f: any) =>
                old_injectors.find(
                    (_) =>
                        _.get(MAP_FEATURE_DATA)?.track_id &&
                        _.get(MAP_FEATURE_DATA)?.track_id === f.track_id
                ) ||
                Injector.create({
                    providers: [
                        {
                            provide: MAP_FEATURE_DATA,
                            useValue: {
                                track_id: f.track_id,
                                ...f.data,
                                ...this._extra_data,
                            },
                        },
                    ],
                    parent: this._injector,
                })
        );
    }
}
