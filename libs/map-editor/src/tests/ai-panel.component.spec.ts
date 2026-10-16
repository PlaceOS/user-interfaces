import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
    MapEditorAiPanelComponent,
    readableModel,
} from '../lib/ai/ai-panel.component';
import { MapAIEditRequest } from '../lib/ai/types';
import { MapDocument } from '../lib/map-document';
import { MapOp } from '../lib/ops';
import {
    capabilities,
    FakeSession,
    FakeTransport,
    httpError,
    jobSequence,
} from './ai-fakes';
import { OFFICE } from './fixtures';

async function settle(
    fixture: ComponentFixture<unknown>,
    rounds = 6,
): Promise<void> {
    for (let i = 0; i < rounds; i++) {
        await fixture.whenStable();
        await new Promise((resolve) => setTimeout(resolve, 0));
    }
    fixture.detectChanges();
}

function recolour(doc: MapDocument, id: string, value: string): MapOp {
    const element = doc.byId(id) as Element;
    return {
        op: 'set_attr',
        why: '-',
        target: { a: doc.anchorOf(element), id, h: doc.hashOf(element) },
        name: 'fill',
        value,
    };
}

function text(fixture: ComponentFixture<unknown>, selector: string): string {
    const element = fixture.nativeElement.querySelector(
        selector,
    ) as HTMLElement | null;
    return (element?.textContent || '').replace(/\s+/g, ' ').trim();
}

describe('MapEditorAiPanelComponent', () => {
    let doc: MapDocument;
    let session: FakeSession;

    beforeEach(() => {
        doc = MapDocument.load(OFFICE);
        session = new FakeSession(doc);
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    async function mount(transport: FakeTransport) {
        await TestBed.configureTestingModule({
            imports: [MapEditorAiPanelComponent],
        }).compileComponents();
        const fixture = TestBed.createComponent(MapEditorAiPanelComponent);
        fixture.componentRef.setInput('session', session);
        fixture.componentRef.setInput('zone_id', 'zone-1');
        fixture.componentRef.setInput('transport', transport);
        fixture.detectChanges();
        await settle(fixture);
        return fixture;
    }

    it('rejects an oversized checkbox selection visibly while keeping the existing preview', async () => {
        const sequence = jobSequence({
            ops: [
                recolour(doc, 'area-1.01-status', '#d1fae5'),
                {
                    op: 'duplicate',
                    why: 'desks',
                    target: { id: 'desks' },
                    translate: [0, 0],
                    count: 10,
                },
            ],
        });
        const fixture = await mount(
            new FakeTransport({
                edit: sequence.accepted,
                polls: sequence.polls,
            }),
        );
        await fixture.componentInstance
            .thread()!
            .submit('Recolour and duplicate');
        await settle(fixture);
        expect(fixture.nativeElement.textContent).toContain(
            'Not applied to the map',
        );
        expect(
            fixture.nativeElement.querySelector('img[alt="After"]'),
        ).toBeNull();
        const duplicate_box = () =>
            fixture.nativeElement.querySelector(
                '[row][data-index="1"] input[type="checkbox"]',
            ) as HTMLInputElement;
        duplicate_box().click();
        await settle(fixture);
        expect(doc.byId('area-1.01-status')!.getAttribute('fill')).toBe(
            '#d1fae5',
        );
        expect(duplicate_box().checked).toBe(false);
        duplicate_box().click();
        await settle(fixture);
        expect(duplicate_box().checked).toBe(false);
        expect(doc.byId('area-1.01-status')!.getAttribute('fill')).toBe(
            '#d1fae5',
        );
        expect(text(fixture, '[selection-error]')).toContain(
            'Your previous preview is unchanged',
        );
    });

    it('renders nothing visible when the deployment has no map AI', async () => {
        const fixture = await mount(
            new FakeTransport({ capabilities: httpError(404, 'not found') }),
        );
        expect(fixture.componentInstance.hidden()).toBe(true);
        expect(fixture.nativeElement.querySelector('[composer]')).toBeNull();
        expect(fixture.nativeElement.querySelector('[unavailable]')).toBeNull();
    });

    it('explains a disabled feature instead of showing the composer', async () => {
        const fixture = await mount(
            new FakeTransport({
                capabilities: capabilities({
                    enabled: false,
                    reason: 'no AI provider is configured for this domain',
                }),
            }),
        );
        expect(fixture.componentInstance.hidden()).toBe(false);
        expect(text(fixture, '[unavailable]')).toContain(
            'no AI provider is configured for this domain',
        );
        expect(fixture.nativeElement.querySelector('[composer]')).toBeNull();
    });

    it('shows the model, the quota and the composer, and sends with Ctrl+Enter', async () => {
        const sequence = jobSequence({
            summary: 'Recoloured.',
            ops: [recolour(doc, 'area-1.01-status', '#d1fae5')],
        });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
        });
        const fixture = await mount(transport);
        expect(text(fixture, '[model-note]')).toBe(
            'Edits by GPT-5.4 mini, via Signage Image Gen',
        );
        expect(text(fixture, '[quota-note]')).toBe(
            '39 edits left today · 980 left this month for the organisation',
        );
        const textarea = fixture.nativeElement.querySelector(
            'textarea',
        ) as HTMLTextAreaElement;
        expect(textarea.disabled).toBe(false);
        const send = fixture.nativeElement.querySelector(
            'button[send]',
        ) as HTMLButtonElement;
        expect(send.disabled).toBe(true);

        session.select([doc.anchorOf(doc.byId('table-01.001') as Element)]);
        textarea.value = 'recolour Meeting 1.01';
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        await settle(fixture, 1);
        expect(send.disabled).toBe(false);
        expect(text(fixture, '[selection-chip]')).toContain('1 selected');
        expect(text(fixture, '[chars]')).toBe('21 / 4000');

        textarea.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Enter',
                ctrlKey: true,
                bubbles: true,
            }),
        );
        await settle(fixture, 12);
        expect(transport.edits).toHaveLength(1);
        expect((transport.edits[0].body as MapAIEditRequest).instruction).toBe(
            'recolour Meeting 1.01',
        );
        expect(doc.byId('area-1.01-status')?.getAttribute('fill')).toBe(
            '#d1fae5',
        );
        expect(text(fixture, '[person-turn]')).toContain(
            'recolour Meeting 1.01',
        );
        expect(text(fixture, '[proposal-card] [card-title]')).toBe('1 changes');
        expect(text(fixture, '[proposal-card] [summary]')).toBe('Recoloured.');
        expect(text(fixture, '[proposal-card] [row] [row-text]')).toBe(
            'Change fill of area-1.01-status to #d1fae5',
        );
        const checkbox = fixture.nativeElement.querySelector(
            '[row] input[type=checkbox]',
        ) as HTMLInputElement;
        expect(checkbox.checked).toBe(true);
        expect(text(fixture, '[live]')).toBe(
            'Applied 1 changes to the map. Keep them, or undo.',
        );

        const keep = fixture.nativeElement.querySelector(
            'button[keep]',
        ) as HTMLButtonElement;
        expect(keep).not.toBeNull();
        keep.click();
        await settle(fixture, 6);
        expect(transport.resolves).toHaveLength(1);
        expect(transport.resolves[0].body).toMatchObject({
            decision: 'applied',
            accepted_op_ids: ['op-1'],
        });
        expect(text(fixture, '[proposal-card] [outcome]')).toBe('Kept');
        expect(fixture.nativeElement.querySelector('button[keep]')).toBeNull();
        expect(text(fixture, '[live]')).toBe('Kept');
    });

    it('offers Undo with reason chips and takes the preview off the map', async () => {
        const sequence = jobSequence({
            ops: [recolour(doc, 'area-1.01-status', '#d1fae5')],
        });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
        });
        const fixture = await mount(transport);
        const textarea = fixture.nativeElement.querySelector(
            'textarea',
        ) as HTMLTextAreaElement;
        textarea.value = 'recolour';
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        await settle(fixture, 1);
        (
            fixture.nativeElement.querySelector(
                'button[send]',
            ) as HTMLButtonElement
        ).click();
        await settle(fixture, 12);
        expect(doc.byId('area-1.01-status')?.getAttribute('fill')).toBe(
            '#d1fae5',
        );

        const chips = Array.from(
            fixture.nativeElement.querySelectorAll('button[reason]'),
        ) as HTMLButtonElement[];
        expect(chips.map((chip) => chip.textContent?.trim())).toEqual([
            'Wrong elements',
            'Wrong values',
            'Too much',
            'Not what I asked',
            'Other',
        ]);
        chips[1].click();
        await settle(fixture, 1);
        expect(chips[1].getAttribute('aria-pressed')).toBe('true');
        (
            fixture.nativeElement.querySelector(
                'button[undo]',
            ) as HTMLButtonElement
        ).click();
        await settle(fixture, 6);
        expect(doc.byId('area-1.01-status')?.getAttribute('fill')).toBeNull();
        expect(transport.resolves[0].body).toMatchObject({
            decision: 'rejected',
            reasons: ['wrong_values'],
        });
        expect(text(fixture, '[proposal-card] [outcome]')).toBe('Undone');
    });

    it('shows the failure as a status turn with a retry', async () => {
        const sequence = jobSequence({
            state: 'failed',
            error_kind: 'vendor',
            error_message: 'upstream exploded',
        });
        const transport = new FakeTransport({
            edit: sequence.accepted,
            polls: sequence.polls,
        });
        const fixture = await mount(transport);
        const textarea = fixture.nativeElement.querySelector(
            'textarea',
        ) as HTMLTextAreaElement;
        textarea.value = 'recolour';
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
        await settle(fixture, 1);
        (
            fixture.nativeElement.querySelector(
                'button[send]',
            ) as HTMLButtonElement
        ).click();
        await settle(fixture, 12);
        expect(text(fixture, '[status-turn]')).toContain('upstream exploded');
        expect(
            fixture.nativeElement.querySelector('button[retry]'),
        ).not.toBeNull();
        expect(text(fixture, '[live]')).toBe('upstream exploded');
    });

    it('disables the composer when the allowance is used up', async () => {
        const fixture = await mount(
            new FakeTransport({
                capabilities: capabilities({
                    quota: {
                        user_remaining_today: 0,
                        domain_remaining_month: 3,
                    },
                }),
            }),
        );
        expect(text(fixture, '[quota-block]')).toBe(
            "You have used today's allowance of AI edits.",
        );
        const textarea = fixture.nativeElement.querySelector(
            'textarea',
        ) as HTMLTextAreaElement;
        expect(textarea.disabled).toBe(true);
    });
});

describe('readableModel', () => {
    it('names Claude and GPT models the way their makers write them', () => {
        expect(readableModel('claude-opus-5-5')).toBe('Claude Opus 5.5');
        expect(readableModel('gpt-5.4-mini')).toBe('GPT-5.4 mini');
        expect(readableModel('gpt-6')).toBe('GPT-6');
        expect(readableModel('some-custom-model')).toBe('some-custom-model');
    });
});
