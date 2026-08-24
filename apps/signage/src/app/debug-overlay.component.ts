import {
    Component,
    ElementRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { IconComponent } from '@placeos/components';

export interface DebugOverlayPosition {
    x: number;
    y: number;
}

interface DebugOverlayState {
    minimized: boolean;
    origin: DebugOverlayPosition;
    position: DebugOverlayPosition;
}

interface StoredDebugOverlayState extends Omit<DebugOverlayState, 'origin'> {
    origin?: DebugOverlayPosition;
}

interface DragState {
    pointer_id: number;
    start_x: number;
    start_y: number;
    start_position: DebugOverlayPosition;
    parent_width: number;
    parent_height: number;
    host_width: number;
    host_height: number;
    moved: boolean;
    restores_on_click: boolean;
}

interface OriginDragState {
    pointer_id: number;
    parent_left: number;
    parent_top: number;
    parent_width: number;
    parent_height: number;
    host_left: number;
    host_top: number;
    host_width: number;
    host_height: number;
    moved: boolean;
}

const STORAGE_PREFIX = 'SIGNAGE.debug-overlay.';
const DEFAULT_GRID_SIZE = 20;
const LAPTOP_GRID_SIZE = 40;
const LAPTOP_MIN_WIDTH = 1024;

export function clearDebugOverlayLayouts() {
    for (let index = localStorage.length - 1; index >= 0; index--) {
        const key = localStorage.key(index);
        if (key?.startsWith(STORAGE_PREFIX)) localStorage.removeItem(key);
    }
}

function clamp(value: number) {
    return Math.min(1, Math.max(0, value));
}

function isPosition(value: unknown): value is DebugOverlayPosition {
    if (!value || typeof value !== 'object') return false;
    const position = value as Partial<DebugOverlayPosition>;
    return Number.isFinite(position.x) && Number.isFinite(position.y);
}

function isDebugOverlayState(value: unknown): value is StoredDebugOverlayState {
    if (!value || typeof value !== 'object') return false;
    const state = value as Partial<StoredDebugOverlayState>;
    return (
        typeof state.minimized === 'boolean' &&
        isPosition(state.position) &&
        (state.origin === undefined || isPosition(state.origin))
    );
}

function snapToGrid(value: number) {
    const grid_size =
        window.innerWidth >= LAPTOP_MIN_WIDTH
            ? LAPTOP_GRID_SIZE
            : DEFAULT_GRID_SIZE;
    return Math.round(value * grid_size) / grid_size;
}

@Component({
    selector: 'debug-overlay',
    host: {
        '[attr.data-overlay-id]': 'overlay_id()',
        '[style.left.%]': 'position().x * 100',
        '[style.top.%]': 'position().y * 100',
        '[style.transform]': 'positionTransform()',
    },
    template: `
        <div
            [class.hidden]="minimized()"
            [class.cursor-move]="editing()"
            [class.touch-none]="editing()"
            [class.outline]="editing()"
            [class.outline-2]="editing()"
            [class.outline-primary]="editing()"
            [class.outline-offset-2]="editing()"
            class="relative"
            [attr.aria-label]="editing() ? 'Move ' + label() : null"
            (pointerdown)="startDrag($event)"
            (pointermove)="moveDrag($event)"
            (pointerup)="finishDrag($event)"
            (pointercancel)="finishDrag($event)"
        >
            <div
                [class.pointer-events-none]="editing()"
                [class.opacity-80]="editing()"
                [attr.inert]="editing() ? '' : null"
            >
                <ng-content />
            </div>
            @if (editing()) {
                <button
                    type="button"
                    class="border-primary bg-base-100 absolute z-20 h-5 w-5 -translate-x-1/2 -translate-y-1/2 touch-none rounded-full border-2 p-0 shadow-sm"
                    [style.left.%]="origin().x * 100"
                    [style.top.%]="origin().y * 100"
                    (pointerdown)="startOriginDrag($event)"
                    (pointermove)="moveOriginDrag($event)"
                    (pointerup)="finishOriginDrag($event)"
                    (pointercancel)="finishOriginDrag($event)"
                    [attr.aria-label]="'Move ' + label() + ' origin'"
                >
                    <span
                        class="bg-primary absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2"
                    ></span>
                    <span
                        class="bg-primary absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2"
                    ></span>
                </button>
                <button
                    type="button"
                    icon
                    default
                    matRipple
                    class="absolute right-0 z-30 text-xs"
                    [class.top-full]="position().y < 0.5"
                    [class.mt-2]="position().y < 0.5"
                    [class.bottom-full]="position().y >= 0.5"
                    [class.mb-2]="position().y >= 0.5"
                    (pointerdown)="stopEvent($event)"
                    (click)="setMinimized(true)"
                    [attr.aria-label]="'Hide ' + label()"
                >
                    <icon>visibility_off</icon>
                </button>
            }
        </div>
        @if (editing() && minimized()) {
            <button
                type="button"
                icon
                default
                matRipple
                class="border-base-300 bg-base-100 cursor-move touch-none rounded-full border shadow-sm"
                (pointerdown)="startDrag($event)"
                (pointermove)="moveDrag($event)"
                (pointerup)="finishDrag($event)"
                (pointercancel)="finishDrag($event)"
                (click)="restore()"
                [attr.aria-label]="'Show ' + label()"
            >
                <icon>{{ icon() }}</icon>
            </button>
        }
    `,
    styles: `
        :host {
            display: block;
            position: absolute;
            z-index: 20;
        }
    `,
    imports: [IconComponent, MatRippleModule],
})
export class DebugOverlayComponent implements OnChanges, OnInit {
    private readonly _element = inject<ElementRef<HTMLElement>>(ElementRef);
    private _drag_state: DragState | null = null;
    private _origin_drag_state: OriginDragState | null = null;
    private _ignore_restore_click = false;

    public readonly overlay_id = input.required<string>();
    public readonly label = input.required<string>();
    public readonly icon = input('widgets');
    public readonly editing = input(false);
    public readonly reset_count = input(0);
    public readonly initial_position = input<DebugOverlayPosition>({
        x: 0,
        y: 0,
    });
    public readonly minimized = signal(false);
    public readonly origin = signal<DebugOverlayPosition>({ x: 0, y: 0 });
    public readonly position = signal<DebugOverlayPosition>({ x: 0, y: 0 });

    public ngOnInit() {
        this._resetState();
        const stored_state = this._storedState();
        if (!stored_state) return;
        this.position.set({
            x: clamp(stored_state.position.x),
            y: clamp(stored_state.position.y),
        });
        const stored_origin = stored_state.origin || stored_state.position;
        this.origin.set({
            x: clamp(stored_origin.x),
            y: clamp(stored_origin.y),
        });
        this.minimized.set(stored_state.minimized);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes['reset_count'] && !changes['reset_count'].firstChange) {
            this.resetLayout();
        }
    }

    public resetLayout() {
        this._resetState();
        localStorage.removeItem(`${STORAGE_PREFIX}${this.overlay_id()}`);
    }

    private _resetState() {
        const initial_position = this.initial_position();
        this.position.set({
            x: clamp(initial_position.x),
            y: clamp(initial_position.y),
        });
        this.origin.set({
            x: clamp(initial_position.x),
            y: clamp(initial_position.y),
        });
        this.minimized.set(false);
    }

    public positionTransform() {
        const { x, y } = this.origin();
        return `translate(${-x * 100}%, ${-y * 100}%)`;
    }

    public setMinimized(minimized: boolean) {
        this.minimized.set(minimized);
        this._storeState();
    }

    public restore() {
        if (this._ignore_restore_click) {
            this._ignore_restore_click = false;
            return;
        }
        this.setMinimized(false);
    }

    public startDrag(event: PointerEvent) {
        if (!this.editing() || event.button !== 0) return;
        const host = this._element.nativeElement;
        const parent = host.parentElement;
        if (!parent) return;
        const parent_bounds = parent.getBoundingClientRect();
        const host_bounds = host.getBoundingClientRect();
        this._drag_state = {
            pointer_id: event.pointerId,
            start_x: event.clientX,
            start_y: event.clientY,
            start_position: this.position(),
            parent_width: Math.max(1, parent_bounds.width),
            parent_height: Math.max(1, parent_bounds.height),
            host_width: host_bounds.width,
            host_height: host_bounds.height,
            moved: false,
            restores_on_click: this.minimized(),
        };
        (event.currentTarget as HTMLElement).setPointerCapture?.(
            event.pointerId,
        );
        event.preventDefault();
    }

    public stopEvent(event: PointerEvent) {
        event.stopPropagation();
    }

    public moveDrag(event: PointerEvent) {
        const drag_state = this._drag_state;
        if (!drag_state || drag_state.pointer_id !== event.pointerId) return;
        const delta_x = event.clientX - drag_state.start_x;
        const delta_y = event.clientY - drag_state.start_y;
        drag_state.moved ||= Math.abs(delta_x) > 2 || Math.abs(delta_y) > 2;
        let position = {
            x: drag_state.start_position.x + delta_x / drag_state.parent_width,
            y: drag_state.start_position.y + delta_y / drag_state.parent_height,
        };
        if (event.shiftKey) {
            position = {
                x: snapToGrid(position.x),
                y: snapToGrid(position.y),
            };
        }
        this.position.set(this._constrainPosition(position, drag_state));
    }

    public finishDrag(event: PointerEvent) {
        const drag_state = this._drag_state;
        if (!drag_state || drag_state.pointer_id !== event.pointerId) return;
        if (drag_state.moved) this._storeState();
        this._ignore_restore_click =
            drag_state.moved && drag_state.restores_on_click;
        (event.currentTarget as HTMLElement).releasePointerCapture?.(
            event.pointerId,
        );
        this._drag_state = null;
    }

    public startOriginDrag(event: PointerEvent) {
        if (!this.editing() || event.button !== 0) return;
        const host = this._element.nativeElement;
        const parent = host.parentElement;
        if (!parent) return;
        const parent_bounds = parent.getBoundingClientRect();
        const host_bounds = host.getBoundingClientRect();
        this._origin_drag_state = {
            pointer_id: event.pointerId,
            parent_left: parent_bounds.left,
            parent_top: parent_bounds.top,
            parent_width: Math.max(1, parent_bounds.width),
            parent_height: Math.max(1, parent_bounds.height),
            host_left: host_bounds.left - parent_bounds.left,
            host_top: host_bounds.top - parent_bounds.top,
            host_width: Math.max(1, host_bounds.width),
            host_height: Math.max(1, host_bounds.height),
            moved: false,
        };
        (event.currentTarget as HTMLElement).setPointerCapture?.(
            event.pointerId,
        );
        event.stopPropagation();
        event.preventDefault();
    }

    public moveOriginDrag(event: PointerEvent) {
        const drag_state = this._origin_drag_state;
        if (!drag_state || drag_state.pointer_id !== event.pointerId) return;
        let position = {
            x:
                (event.clientX - drag_state.parent_left) /
                drag_state.parent_width,
            y:
                (event.clientY - drag_state.parent_top) /
                drag_state.parent_height,
        };
        if (event.shiftKey) {
            position = {
                x: snapToGrid(position.x),
                y: snapToGrid(position.y),
            };
        }
        const origin = {
            x: clamp(
                (position.x * drag_state.parent_width - drag_state.host_left) /
                    drag_state.host_width,
            ),
            y: clamp(
                (position.y * drag_state.parent_height - drag_state.host_top) /
                    drag_state.host_height,
            ),
        };
        drag_state.moved ||=
            Math.abs(origin.x - this.origin().x) > 0.002 ||
            Math.abs(origin.y - this.origin().y) > 0.002;
        this.origin.set(origin);
        this.position.set({
            x: clamp(
                (drag_state.host_left + origin.x * drag_state.host_width) /
                    drag_state.parent_width,
            ),
            y: clamp(
                (drag_state.host_top + origin.y * drag_state.host_height) /
                    drag_state.parent_height,
            ),
        });
        event.stopPropagation();
    }

    public finishOriginDrag(event: PointerEvent) {
        const drag_state = this._origin_drag_state;
        if (!drag_state || drag_state.pointer_id !== event.pointerId) return;
        if (drag_state.moved) this._storeState();
        (event.currentTarget as HTMLElement).releasePointerCapture?.(
            event.pointerId,
        );
        this._origin_drag_state = null;
        event.stopPropagation();
    }

    private _storedState() {
        const stored_state = localStorage.getItem(
            `${STORAGE_PREFIX}${this.overlay_id()}`,
        );
        if (!stored_state) return null;
        try {
            const state: unknown = JSON.parse(stored_state);
            return isDebugOverlayState(state) ? state : null;
        } catch {
            return null;
        }
    }

    private _storeState() {
        localStorage.setItem(
            `${STORAGE_PREFIX}${this.overlay_id()}`,
            JSON.stringify({
                minimized: this.minimized(),
                origin: this.origin(),
                position: this.position(),
            } satisfies DebugOverlayState),
        );
    }

    private _constrainPosition(
        position: DebugOverlayPosition,
        bounds: Pick<
            DragState,
            'parent_width' | 'parent_height' | 'host_width' | 'host_height'
        >,
    ) {
        const origin = this.origin();
        const min_x = (origin.x * bounds.host_width) / bounds.parent_width;
        const max_x =
            1 - ((1 - origin.x) * bounds.host_width) / bounds.parent_width;
        const min_y = (origin.y * bounds.host_height) / bounds.parent_height;
        const max_y =
            1 - ((1 - origin.y) * bounds.host_height) / bounds.parent_height;
        return {
            x: Math.min(max_x, Math.max(min_x, position.x)),
            y: Math.min(max_y, Math.max(min_y, position.y)),
        };
    }
}
