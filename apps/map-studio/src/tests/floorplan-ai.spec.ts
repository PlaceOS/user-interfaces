import { normaliseFloorplanAnalysis } from '../app/data/floorplan-ai.service';

describe('normaliseFloorplanAnalysis', () => {
    it('validates and clamps model output to the source image', () => {
        const result = normaliseFloorplanAnalysis(
            JSON.stringify({
                outline: {
                    points: [
                        { x: -10, y: 10 },
                        { x: 300, y: 10 },
                        { x: 300, y: 200 },
                        { x: 0, y: 200 },
                    ],
                    closed: true,
                },
                rooms: [
                    {
                        id: 'ignored-id',
                        label: 'MEETING 12-87',
                        type: 'meeting',
                        x: -5,
                        y: 190,
                        width: 500,
                        height: 5,
                    },
                    {
                        id: 'bad-room',
                        label: 'Bad Room',
                        x: 'not-a-number',
                        y: 1,
                        width: 20,
                        height: 20,
                    },
                ],
            }),
            300,
            200,
        );

        expect(result.outline?.points).toEqual([
            { x: 0, y: 10 },
            { x: 300, y: 10 },
            { x: 300, y: 200 },
            { x: 0, y: 200 },
        ]);
        expect(result.rooms).toEqual([
            {
                id: 'area-12.87-free',
                label: 'MEETING 12-87',
                type: 'meeting',
                x: 0,
                y: 180,
                width: 300,
                height: 20,
            },
        ]);
    });

    it('accepts fenced JSON and makes duplicate room ids unique', () => {
        const result = normaliseFloorplanAnalysis(
            '```json\n{"outline":null,"rooms":[' +
                '{"id":"room-a","label":"One","type":"unknown","x":0,"y":0,"width":20,"height":20},' +
                '{"id":"room-a","label":"Two","type":"focus","x":30,"y":0,"width":20,"height":20}' +
                ']}\n```',
            100,
            100,
        );

        expect(result.rooms.map((room) => room.id)).toEqual([
            'room-a',
            'room-a-1',
        ]);
        expect(result.rooms[0].type).toBe('other');
    });

    it('rejects invalid JSON', () => {
        expect(() => normaliseFloorplanAnalysis('not JSON', 100, 100)).toThrow(
            'invalid JSON',
        );
    });
});
