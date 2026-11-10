import { Component, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FileDropDirective } from '../../app/shared/file-drop.directive';

@Component({
    template: `
        <div (fileDrop)="dropped.push($event)" [fileDropDisabled]="disabled()">
            <span></span>
        </div>
    `,
    imports: [FileDropDirective],
})
class HostComponent {
    public readonly dropped: File[][] = [];
    public readonly disabled = signal(false);
}

/** A drag event as the browser sends it. jsdom has no DataTransfer. */
function dragEvent(type: string, files: File[] = [], types = ['Files']) {
    const event = new Event(type, { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'dataTransfer', {
        value: { types, files, dropEffect: 'none' },
    });
    return event as DragEvent;
}

describe('FileDropDirective', () => {
    const poster = new File(['image'], 'poster.png', { type: 'image/png' });

    function setup() {
        const fixture = TestBed.createComponent(HostComponent);
        fixture.detectChanges();
        const target: HTMLElement = fixture.nativeElement.querySelector('div');
        const child: HTMLElement = target.querySelector('span');
        return { fixture, host: fixture.componentInstance, target, child };
    }

    it('emits dropped files and marks the drop handled', () => {
        const { host, target } = setup();
        const drop = dragEvent('drop', [poster]);

        target.dispatchEvent(drop);

        expect(host.dropped).toEqual([[poster]]);
        expect(drop.defaultPrevented).toBe(true);
    });

    it('shows that files are over it until the drag leaves it', () => {
        const { fixture, target, child } = setup();

        target.dispatchEvent(dragEvent('dragenter'));
        // Moving onto a child enters it before leaving the parent
        child.dispatchEvent(dragEvent('dragenter'));
        target.dispatchEvent(dragEvent('dragleave'));
        fixture.detectChanges();
        expect(target.classList).toContain('file-drop-over');

        child.dispatchEvent(dragEvent('dragleave'));
        fixture.detectChanges();
        expect(target.classList).not.toContain('file-drop-over');
    });

    it('accepts a drag of files as a copy', () => {
        const { target } = setup();
        const over = dragEvent('dragover');

        target.dispatchEvent(over);

        expect(over.defaultPrevented).toBe(true);
        expect(over.dataTransfer.dropEffect).toBe('copy');
    });

    it('ignores a drag that is not of files', () => {
        const { host, target } = setup();
        const drop = dragEvent('drop', [], ['text/plain']);

        target.dispatchEvent(drop);

        expect(host.dropped).toEqual([]);
        expect(drop.defaultPrevented).toBe(false);
    });

    it('lets a drop through while disabled', () => {
        const { fixture, host, target } = setup();
        host.disabled.set(true);
        fixture.detectChanges();
        const drop = dragEvent('drop', [poster]);

        target.dispatchEvent(drop);

        expect(host.dropped).toEqual([]);
        expect(drop.defaultPrevented).toBe(false);
    });

    it('leaves a drop that an inner target already took', () => {
        const { host, child } = setup();
        child.addEventListener('drop', (event) => event.preventDefault());

        child.dispatchEvent(dragEvent('drop', [poster]));

        expect(host.dropped).toEqual([]);
    });
});
