import { ViewBox } from '../map-document';
import { Point } from '../matrix';

/** Where the map sits in the viewport: CSS pixels per root unit, and the offset of the map's origin. */
export interface ViewState {
    scale: number;
    tx: number;
    ty: number;
}

export interface Size {
    width: number;
    height: number;
}

export const MIN_SCALE = 0.05;
export const MAX_SCALE = 40;
/** One wheel notch, as <dynamic-map> zooms. */
export const WHEEL_ZOOM_IN = 1.03;
export const WHEEL_ZOOM_OUT = 0.97;
/** One toolbar press. */
export const BUTTON_ZOOM = 1.25;
export const FIT_PADDING = 24;

export function clampScale(scale: number): number {
    if (!Number.isFinite(scale) || scale <= 0) return 1;
    return Math.min(MAX_SCALE, Math.max(MIN_SCALE, scale));
}

/** The view that shows the whole map centred with a margin. */
export function fitView(
    view_box: ViewBox,
    viewport: Size,
    padding = FIT_PADDING,
): ViewState {
    const inner_width = Math.max(1, viewport.width - padding * 2);
    const inner_height = Math.max(1, viewport.height - padding * 2);
    const scale = clampScale(
        Math.min(inner_width / view_box.width, inner_height / view_box.height),
    );
    return {
        scale,
        tx: (viewport.width - view_box.width * scale) / 2,
        ty: (viewport.height - view_box.height * scale) / 2,
    };
}

/** Scale about a viewport point so what is under it stays put. */
export function zoomAt(
    view: ViewState,
    factor: number,
    pointer: Point,
): ViewState {
    const scale = clampScale(view.scale * factor);
    if (scale === view.scale) return view;
    const ratio = scale / view.scale;
    return {
        scale,
        tx: pointer[0] - (pointer[0] - view.tx) * ratio,
        ty: pointer[1] - (pointer[1] - view.ty) * ratio,
    };
}

export function panBy(view: ViewState, dx: number, dy: number): ViewState {
    return { ...view, tx: view.tx + dx, ty: view.ty + dy };
}

/** Viewport pixels to root user units. */
export function viewportToRoot(
    view: ViewState,
    view_box: ViewBox,
    point: Point,
): Point {
    return [
        view_box.x + (point[0] - view.tx) / view.scale,
        view_box.y + (point[1] - view.ty) / view.scale,
    ];
}

/** Root user units to viewport pixels. */
export function rootToViewport(
    view: ViewState,
    view_box: ViewBox,
    point: Point,
): Point {
    return [
        view.tx + (point[0] - view_box.x) * view.scale,
        view.ty + (point[1] - view_box.y) * view.scale,
    ];
}

export function viewTransform(view: ViewState): string {
    return `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`;
}
