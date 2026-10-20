export type PinPoint = readonly [number, number];

/**
 * Positions for pins wanted at `corners`, in the same order. Pins whose
 * corners lie closer than `spacing`, directly or through each other, form one
 * row in their original order, starting at the first pin's corner. A row that
 * would come closer than `spacing` to an earlier row moves down until it clears.
 * @param spacing minimum distance between pin centres, in the same units as the corners
 */
export function spreadPins(
    corners: readonly PinPoint[],
    spacing: number,
): PinPoint[] {
    const near = (a: PinPoint, b: PinPoint) =>
        Math.hypot(a[0] - b[0], a[1] - b[1]) < spacing;
    const parent = corners.map((_, i) => i);
    const root = (i: number): number => {
        while (parent[i] !== i) i = parent[i];
        return i;
    };
    corners.forEach((a, i) =>
        corners.forEach((b, j) => {
            if (j <= i || !near(a, b)) return;
            const [ri, rj] = [root(i), root(j)];
            parent[Math.max(ri, rj)] = Math.min(ri, rj);
        }),
    );
    const placed: PinPoint[] = [];
    const taken: PinPoint[] = [];
    corners.forEach(([x, y], i) => {
        if (root(i) !== i) return;
        const members = corners.map((_, j) => j).filter((j) => root(j) === i);
        let row_y = y;
        const row = () =>
            members.map((_, k) => [x + k * spacing, row_y] as const);
        while (row().some((pin) => taken.some((other) => near(pin, other)))) {
            row_y += spacing;
        }
        row().forEach((pin, k) => (placed[members[k]] = pin));
        taken.push(...row());
    });
    return placed;
}
