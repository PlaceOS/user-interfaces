import {
    IDENTITY,
    invert,
    Matrix,
    multiply,
    parseTransform,
    sanitiseTree,
} from '@placeos/map-editor';
import { MapObject, ObjectGeometry } from '../data/types';

export function importedObject(object: MapObject): boolean {
    return object.metadata?.['source'] === 'svg-import';
}

/** Size an SVG image to the editor's logical viewport. */
export function sourceImageUrl(
    svg: string,
    width: number,
    height: number,
): string {
    const root = new DOMParser().parseFromString(svg, 'image/svg+xml')
        .documentElement as unknown as SVGSVGElement;
    root.setAttribute('width', String(width));
    root.setAttribute('height', String(height));
    root.style.width = `${width}px`;
    root.style.height = `${height}px`;
    return `data:image/svg+xml,${encodeURIComponent(new XMLSerializer().serializeToString(root))}`;
}

function idSelector(id: string) {
    return `#${id.replace(/[^a-zA-Z0-9_-]/g, (character) => `\\${character}`)}`;
}

function selectorPattern(id: string, selector_only = false) {
    const escaped = idSelector(id).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(
        `${escaped}(?![\\w.-])${selector_only ? '(?=[^{}]*\\{)' : ''}`,
        'g',
    );
}

function bounds(geometry: ObjectGeometry) {
    if (geometry.points?.length) {
        const xs = geometry.points.map((p) => p.x);
        const ys = geometry.points.map((p) => p.y);
        return {
            x: Math.min(...xs),
            y: Math.min(...ys),
            width: Math.max(...xs) - Math.min(...xs),
            height: Math.max(...ys) - Math.min(...ys),
        };
    }
    if (geometry.type === 'circle') {
        const r = geometry.r || 0;
        return {
            x: (geometry.x || 0) - r,
            y: (geometry.y || 0) - r,
            width: r * 2,
            height: r * 2,
        };
    }
    return {
        x: geometry.x || 0,
        y: geometry.y || 0,
        width: geometry.width || 0,
        height: geometry.height || 0,
    };
}

function patchObject(element: Element, object: MapObject) {
    const metadata = object.metadata || {};
    const original = metadata['originalGeometry'] as ObjectGeometry | undefined;
    if (
        original &&
        JSON.stringify(original) !== JSON.stringify(object.geometry)
    ) {
        const before = bounds(original);
        const after = bounds(object.geometry);
        const sx = before.width ? after.width / before.width : 1;
        const sy = before.height ? after.height / before.height : 1;
        let delta: Matrix = {
            a: sx,
            b: 0,
            c: 0,
            d: sy,
            e: after.x - before.x * sx,
            f: after.y - before.y * sy,
        };
        if (object.geometry.rotation) {
            const cx = after.x + after.width / 2;
            const cy = after.y + after.height / 2;
            delta = multiply(
                parseTransform(
                    `rotate(${object.geometry.rotation} ${cx} ${cy})`,
                ),
                delta,
            );
        }
        const parent = (metadata['parentMatrix'] as Matrix) || IDENTITY;
        const inverse = invert(parent);
        if (inverse) {
            const original_attributes =
                (metadata['originalAttributes'] as Record<string, string>) ||
                {};
            const matrix = multiply(
                multiply(multiply(inverse, delta), parent),
                parseTransform(original_attributes['transform']),
            );
            element.setAttribute(
                'transform',
                `matrix(${matrix.a} ${matrix.b} ${matrix.c} ${matrix.d} ${matrix.e} ${matrix.f})`,
            );
        }
    }
    for (const [attribute, value, baseline] of [
        ['fill', object.fill_color, metadata['originalFill'] ?? null],
        ['stroke', object.stroke_color, metadata['originalStroke'] ?? null],
        ['opacity', object.opacity, metadata['originalOpacity'] ?? 1],
    ] as const) {
        if (value != null && value !== baseline) {
            element.setAttribute(attribute, String(value));
            (element as SVGElement).style.setProperty(attribute, String(value));
        }
    }
    if (object.label !== metadata['originalLabel']) {
        element.setAttribute('data-label', object.label || '');
        if (element.localName === 'text')
            element.textContent = object.label || '';
    }
    if (object.svg_id) element.setAttribute('id', object.svg_id);
    if (!object.visible)
        (element as SVGElement).style.setProperty('display', 'none');
}

/** Patch imported objects inside their original SVG hierarchy. */
export function composeSourceSvg(
    source: string,
    objects: MapObject[],
    managed_ids?: string[],
): string {
    const doc = new DOMParser().parseFromString(source, 'image/svg+xml');
    const root = doc.documentElement;
    if (root.localName !== 'svg' || doc.querySelector('parsererror'))
        throw new Error('Invalid imported SVG');
    const by_source = new Map<string, MapObject[]>();
    for (const object of objects.filter(importedObject)) {
        const attributes = object.metadata?.['originalAttributes'] as
            | Record<string, string>
            | undefined;
        const id = attributes?.['id'] || object.svg_id;
        if (!id) continue;
        by_source.set(id, [...(by_source.get(id) || []), object]);
    }
    const ids = managed_ids || [...by_source.keys()];
    const renames = new Map<string, string>();
    for (const id of ids) {
        const element = doc.getElementById(id);
        if (!element) continue;
        const matching = (by_source.get(id) || []).sort(
            (a, b) => Number(b.svg_id === id) - Number(a.svg_id === id),
        );
        if (!matching.length) {
            element.remove();
            continue;
        }
        const template = element.cloneNode(true) as Element;
        matching.forEach((object, index) => {
            const target = index
                ? (template.cloneNode(true) as Element)
                : element;
            if (index)
                element.parentNode?.insertBefore(target, element.nextSibling);
            if (index && object.svg_id) {
                for (const style of Array.from(
                    root.querySelectorAll('style'),
                )) {
                    style.textContent = (style.textContent || '').replace(
                        selectorPattern(id, true),
                        `:is(${idSelector(id)},${idSelector(object.svg_id)})`,
                    );
                }
            }
            patchObject(target, object);
            if (!index && object.svg_id && object.svg_id !== id)
                renames.set(id, object.svg_id);
        });
    }
    for (const [old_id, new_id] of renames) {
        const selector = selectorPattern(old_id);
        for (const element of Array.from(root.querySelectorAll('*'))) {
            if (element.localName === 'style')
                element.textContent = (element.textContent || '').replace(
                    selector,
                    idSelector(new_id),
                );
            for (const attribute of Array.from(element.attributes)) {
                const value = attribute.value.replaceAll(
                    `url(#${old_id})`,
                    `url(#${new_id})`,
                );
                if (attribute.localName === 'href' && value === `#${old_id}`)
                    element.setAttributeNS(
                        attribute.namespaceURI,
                        attribute.name,
                        `#${new_id}`,
                    );
                else if (value !== attribute.value)
                    element.setAttributeNS(
                        attribute.namespaceURI,
                        attribute.name,
                        value,
                    );
            }
        }
    }
    // After patching, as edited colours are untrusted values too
    sanitiseTree(root);
    return new XMLSerializer().serializeToString(root);
}
