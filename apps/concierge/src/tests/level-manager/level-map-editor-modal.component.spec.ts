import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { UploadsService } from '@placeos/common';
import { MockProvider } from 'ng-mocks';

import { LevelMapEditorModalComponent } from '../../app/level-manager/level-map-editor-modal.component';

import * as ts_client from '@placeos/ts-client';

vi.mock('@placeos/ts-client', { spy: true });

describe('LevelMapEditorModalComponent', () => {
    let spectator: Spectator<LevelMapEditorModalComponent>;

    const SVG_MAP = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <rect id="room-1" fill="#ffffff" stroke="#111111" x="0" y="0" width="50" height="50" />
            <rect fill="#eeeeee" stroke="#333333" x="0" y="50" width="10" height="10" />
            <text id="label-1" fill="#222222" x="5" y="10">Room A</text>
            <path id="styled-room" class="styled-room" d="M 10 60 L 50 60 L 50 90 Z" />
            <rect id="hidden-fill" fill="none" stroke="none" x="50" y="0" width="10" height="10" />
            <rect id="hidden-display" display="none" x="60" y="0" width="10" height="10" />
            <rect id="hidden-css" class="hidden-css" x="70" y="0" width="10" height="10" />
            <defs>
                <rect id="template-room" fill="#ffffff" x="0" y="0" width="10" height="10" />
            </defs>
            <style>
                .styled-room { fill: #123456; stroke: #654321; }
                .hidden-css { display: none; }
            </style>
        </svg>
    `;

    const level = {
        id: 'level-1',
        name: 'LEVEL TEST Level 1',
        display_name: 'Level 1',
        parent_id: 'building-1',
        map_id: '',
        tags: ['level'],
    };

    const createComponent = createComponentFactory({
        component: LevelMapEditorModalComponent,
        shallow: true,
        providers: [
            MockProvider(MAT_DIALOG_DATA, level),
            MockProvider(MatDialogRef, { close: vi.fn() }),
            MockProvider(UploadsService, {
                uploadFileToCompletion: vi.fn(),
            }),
        ],
        imports: [NoopAnimationsModule],
    });

    beforeEach(() => {
        Object.defineProperty(URL, 'createObjectURL', {
            value: vi.fn(() => 'blob:preview'),
            writable: true,
        });
        Object.defineProperty(URL, 'revokeObjectURL', {
            value: vi.fn(),
            writable: true,
        });
        vi.spyOn(console, 'debug').mockImplementation(() => undefined);
        vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        (ts_client.updateZone as any).mockResolvedValue({
            id: 'level-1',
            tags: ['level'],
        });
        spectator = createComponent();
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('loads editable SVG elements', () => {
        loadSvg();

        expect(spectator.component.elements()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    editor_index: 0,
                    id: 'room-1',
                    fill: '#ffffff',
                    stroke: '#111111',
                    tag: 'rect',
                }),
                expect.objectContaining({
                    id: 'label-1',
                    text: 'Room A',
                    tag: 'text',
                }),
                expect.objectContaining({
                    id: 'styled-room',
                    fill: '#123456',
                    stroke: '#654321',
                    tag: 'path',
                }),
            ]),
        );
        expect(spectator.component.elements().map((_) => _.id)).not.toEqual(
            expect.arrayContaining([
                'hidden-fill',
                'hidden-display',
                'hidden-css',
                'template-room',
            ]),
        );
        expect(spectator.component.preview_url()).toBe('blob:preview');
        expect(spectator.component.dirty()).toBe(false);
    });

    it('adds selected element outline only to the overlay SVG', () => {
        loadSvg();

        const clean_markup = (spectator.component as any)._serialiseSvg();
        const overlay_markup = (
            spectator.component as any
        )._serialiseSelectionOverlay();

        expect(clean_markup).toContain('id="room-1"');
        expect(clean_markup).not.toContain('data-map-editor-highlight');
        expect(overlay_markup).toContain('data-map-editor-highlight="true"');
        expect(overlay_markup).toContain('stroke: #00A3FF !important');
        expect(spectator.component.overlay_url()).toBe('blob:preview');
    });

    it('outlines selected and hovered sidebar elements together', () => {
        loadSvg();
        const styled = elementWithId('styled-room');

        spectator.component.hoverElement(styled.editor_index);
        const hover_markup = (
            spectator.component as any
        )._serialiseSelectionOverlay();

        expect(spectator.component.selected_index()).toBe(0);
        expect(spectator.component.outlined_indices()).toEqual([
            0,
            styled.editor_index,
        ]);
        expect(hover_markup).toContain('x="0"');
        expect(hover_markup).toContain('class="styled-room"');
        expect(hover_markup).toContain('stroke: #FFB020 !important');
        expect(hover_markup).toContain('stroke: #00A3FF !important');

        spectator.component.clearHoveredElement(styled.editor_index);

        expect(spectator.component.outlined_indices()).toEqual([0]);
        expect(
            (spectator.component as any)._serialiseSelectionOverlay(),
        ).toContain('stroke: #00A3FF !important');
    });

    it('updates selected element id, colours and text', () => {
        loadSvg();

        spectator.component.selectElement(0);
        spectator.component.selected_id.set('room-2');
        spectator.component.selected_fill.set('#ff0000');
        spectator.component.selected_stroke.set('#00ff00');
        spectator.component.applySelectedChanges();

        const label = elementWithId('label-1');
        spectator.component.selectElement(label.editor_index);
        spectator.component.selected_text.set('Room B');
        spectator.component.applySelectedChanges();

        expect(spectator.component.svg_markup()).toContain('id="room-2"');
        expect(spectator.component.svg_markup()).toContain('fill="#ff0000"');
        expect(spectator.component.svg_markup()).toContain('stroke="#00ff00"');
        expect(spectator.component.svg_markup()).toContain('Room B');
        expect(spectator.component.dirty()).toBe(true);
    });

    it('shows CSS class colours in the selected element form values', () => {
        loadSvg();
        const styled = elementWithId('styled-room');

        spectator.component.selectElement(styled.editor_index);

        expect(spectator.component.selected_fill()).toBe('#123456');
        expect(spectator.component.selected_stroke()).toBe('#654321');
    });

    it('filters the sidebar list to elements with IDs', () => {
        loadSvg();

        expect(spectator.component.elements()).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ id: '' }),
                expect.objectContaining({ id: 'room-1' }),
            ]),
        );

        spectator.component.show_only_ids.set(true);

        expect(spectator.component.filtered_elements().length).toBeLessThan(
            spectator.component.elements().length,
        );
        expect(
            spectator.component.filtered_elements().every((_) => !!_.id),
        ).toBe(true);
    });

    it('uses picked colours to update the selected element', () => {
        loadSvg();

        spectator.component.selectElement(0);
        spectator.component.updateSelectedFill('#abcdef');
        spectator.component.updateSelectedStroke('#fedcba');

        expect(spectator.component.colourPickerValue('none')).toBe('#000000');
        expect(spectator.component.colourPickerValue('#abcdef')).toBe(
            '#abcdef',
        );
        expect(spectator.component.svg_markup()).toContain('fill="#abcdef"');
        expect(spectator.component.svg_markup()).toContain('stroke="#fedcba"');
    });

    it('marks elements as edited after changes', () => {
        loadSvg();

        expect(spectator.component.isElementEdited(0)).toBe(false);
        spectator.component.selectElement(0);
        spectator.component.selected_fill.set('#ff0000');
        spectator.component.applySelectedChanges();

        expect(spectator.component.isElementEdited(0)).toBe(true);
    });

    it('resets an edited element back to its original SVG state', () => {
        loadSvg();

        spectator.component.selectElement(0);
        spectator.component.selected_id.set('room-2');
        spectator.component.selected_fill.set('#ff0000');
        spectator.component.selected_stroke.set('#00ff00');
        spectator.component.applySelectedChanges();

        spectator.component.resetElement(0);

        expect(spectator.component.isElementEdited(0)).toBe(false);
        expect(spectator.component.selected_id()).toBe('room-1');
        expect(spectator.component.selected_fill()).toBe('#ffffff');
        expect(spectator.component.selected_stroke()).toBe('#111111');
        expect(spectator.component.svg_markup()).toContain('id="room-1"');
        expect(spectator.component.svg_markup()).toContain('fill="#ffffff"');
        expect(spectator.component.svg_markup()).not.toContain('id="room-2"');
        expect(spectator.component.dirty()).toBe(false);
    });

    it('keeps the SVG dirty when resetting one of multiple edited elements', () => {
        loadSvg();
        const label = elementWithId('label-1');

        spectator.component.selectElement(0);
        spectator.component.selected_fill.set('#ff0000');
        spectator.component.applySelectedChanges();
        spectator.component.selectElement(label.editor_index);
        spectator.component.selected_text.set('Room B');
        spectator.component.applySelectedChanges();

        spectator.component.resetElement(0);

        expect(spectator.component.isElementEdited(0)).toBe(false);
        expect(spectator.component.isElementEdited(label.editor_index)).toBe(
            true,
        );
        expect(spectator.component.svg_markup()).toContain('Room B');
        expect(spectator.component.dirty()).toBe(true);
    });

    it('does not save duplicate SVG element IDs', async () => {
        loadSvg();
        spectator.component.selectElement(
            elementWithId('label-1').editor_index,
        );
        spectator.component.selected_id.set('room-1');
        spectator.component.applySelectedChanges();

        await spectator.component.save();

        const uploads = spectator.inject(UploadsService);
        expect(uploads.uploadFileToCompletion).not.toHaveBeenCalled();
        expect(ts_client.updateZone).not.toHaveBeenCalled();
    });

    it('uploads edited SVG and updates the level map URL', async () => {
        loadSvg();
        spectator.component.selectElement(0);
        spectator.component.selected_fill.set('#ff0000');
        spectator.component.applySelectedChanges();

        const uploads = spectator.inject(UploadsService);
        (uploads.uploadFileToCompletion as any).mockResolvedValue(
            'upload-1',
        );

        await spectator.component.save();

        expect(uploads.uploadFileToCompletion).toHaveBeenCalledWith(
            expect.any(File),
        );
        const file = (uploads.uploadFileToCompletion as any).mock
            .calls[0][0] as File;
        expect(file.name).toBe('level-1.svg');
        expect(file.type).toBe('image/svg+xml');
        await expect(readFile(file)).resolves.not.toContain(
            'data-map-editor-highlight',
        );
        expect(ts_client.updateZone).toHaveBeenCalledWith(
            'level-1',
            expect.objectContaining({
                map_id: '/api/engine/v2/uploads/upload-1/url',
                tags: ['level'],
            }),
        );
        expect(spectator.inject(MatDialogRef).close).toHaveBeenCalledWith(
            expect.objectContaining({
                id: 'level-1',
                map_id: '/api/engine/v2/uploads/upload-1/url',
                tags: ['level'],
            }),
        );
    });

    function loadSvg() {
        (spectator.component as any)._loadSvg(SVG_MAP);
    }

    function elementWithId(id: string) {
        const element = spectator.component.elements().find((_) => _.id === id);
        if (!element) throw new Error(`Expected SVG element "${id}"`);
        return element;
    }
});

function readFile(file: File) {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(`${reader.result || ''}`);
        reader.onerror = () => reject(reader.error);
        reader.readAsText(file);
    });
}
