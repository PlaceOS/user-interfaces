import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    afterRenderEffect,
    computed,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import {
    MAT_DIALOG_DATA,
    MatDialog,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { first } from 'rxjs/operators';

import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncHandler } from 'libs/common/src/lib/async-handler.class';
import { i18n } from 'libs/common/src/lib/locale.service';
import { ApplicationIcon, DialogEvent } from 'libs/common/src/lib/types';
import { AnnounceDirective } from './announce.directive';
import { IconComponent } from './icon.component';
import { TranslatePipe } from './translate.pipe';

export interface ConfirmModalData {
    /** Title of the modal */
    title: string;
    /**
     * Contents of the modal. Simple formatting tags are kept (see
     * `CONFIRM_CONTENT_TAGS`). Other markup is shown as its text.
     */
    content: string;
    /** Text displaed on the confirmation button */
    confirm_text?: string;
    /** Text displaed on the confirmation button */
    cancel_text?: string;
    /** Icon to display on the modal */
    icon: ApplicationIcon;
    /** Delay before closing the modal */
    close_delay?: number;
    /** Whether confirming deletes or removes something. Styles the button. */
    destructive?: boolean;
}

export const CONFIRM_METADATA = {
    height: 'auto',
};

/** Formatting tags that confirm content keeps. Callers use these for layout. */
const CONFIRM_CONTENT_TAGS = new Set([
    'B',
    'BR',
    'EM',
    'I',
    'LI',
    'OL',
    'P',
    'STRONG',
    'UL',
]);

/**
 * Filters confirm content before it goes to `[innerHTML]`. Callers put user
 * data, such as names, into the content. This keeps text and the tags in
 * `CONFIRM_CONTENT_TAGS`, removes every attribute, and replaces other elements
 * with their contents. Injected images, links and styles do not get through.
 */
export function filterConfirmContent(html: string): string {
    const body = new DOMParser().parseFromString(html, 'text/html').body;
    // The list is static and in document order, so each element is seen once,
    // also after its parent is unwrapped.
    for (const el of Array.from(body.querySelectorAll('*'))) {
        if (!CONFIRM_CONTENT_TAGS.has(el.tagName)) {
            el.replaceWith(...Array.from(el.childNodes));
            continue;
        }
        for (const { name } of Array.from(el.attributes)) {
            el.removeAttribute(name);
        }
    }
    return body.innerHTML;
}

/**
 * Styles for a `<h2 mat-dialog-title>` in a modal header. The directive gives
 * the dialog its accessible name. These styles remove the Material title
 * styles, so the header keeps its Tailwind look.
 */
export const DIALOG_TITLE_STYLES = `
    h2[mat-dialog-title] {
        color: inherit;
        font-family: inherit;
        letter-spacing: inherit;
        margin: 0;
        padding: 0;
    }

    h2[mat-dialog-title]::before {
        display: none;
    }
`;

export interface ConfirmRepsonse {
    reason: 'done' | '' | null;
    loading: (_: string) => void;
    close: () => void;
}

export async function openConfirmModal(
    data: ConfirmModalData,
    dialog: MatDialog,
): Promise<ConfirmRepsonse> {
    const ref = dialog.open<ConfirmModalComponent, ConfirmModalData>(
        ConfirmModalComponent,
        {
            ...CONFIRM_METADATA,
            data,
        },
    );
    return {
        ...(await Promise.race([
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
            ref.afterClosed().toPromise(),
        ])),
        loading: (s) => {
            ref.componentInstance.loading?.set(s);
            // Work is running, so the user must not close the modal
            ref.disableClose = !!s;
        },
        close: () => ref.close(),
    };
}

@Component({
    selector: 'confirm-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
        >
            <h2
                #heading
                mat-dialog-title
                tabindex="-1"
                class="px-2 text-xl font-medium focus:outline-none"
            >
                {{ title() }}
            </h2>
        </header>
        @if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon()" class="text-5xl"></icon>
                <p
                    content
                    class="text-center [&_ul]:my-2 [&_ul]:text-left"
                    [innerHTML]="safe_content()"
                ></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text() | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    [class.error]="destructive()"
                    (click)="onConfirm()"
                >
                    {{ confirm_text() | translate }}
                </button>
            </footer>
        }
    `,
    styles: [DIALOG_TITLE_STYLES],
    imports: [
        MatProgressSpinnerModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        AnnounceDirective,
    ],
})
export class ConfirmModalComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<ConfirmModalComponent>>(MatDialogRef);
    private _data = inject<ConfirmModalData>(MAT_DIALOG_DATA);

    /** Loading state */
    public readonly loading = signal('');
    /** Emitter for user action on the modal */
    public readonly event = new EventEmitter<DialogEvent>();
    /** Title of the confirm modal */
    public readonly title = signal(this._data.title || i18n('COMMON.CONFIRM'));
    /** Body of the confirm modal */
    public readonly content = signal(this._data.content || 'Are you sure?');
    /** Body with only simple formatting tags left in it */
    public readonly safe_content = computed(() =>
        filterConfirmContent(this.content()),
    );
    /** Display text on the confirm button */
    public readonly confirm_text = signal(
        this._data.confirm_text || 'COMMON.ACCEPT',
    );
    /** Display text on the cancel button */
    public readonly cancel_text = signal(
        this._data.cancel_text || 'COMMON.CANCEL',
    );
    /** Whether the confirm button has the destructive style */
    public readonly destructive = signal(!!this._data.destructive);
    /** Display icon properties */
    public readonly icon = signal<ApplicationIcon>(
        this._data.icon || {
            class: 'material-symbols-rounded',
            content: 'done',
        },
    );
    /** Prevent user from closing the modal */
    public readonly disableClose = () => (this._dialog_ref.disableClose = true);
    /** Allow the user to close the modal */
    public readonly enableClose = () => (this._dialog_ref.disableClose = false);

    private readonly _heading =
        viewChild.required<ElementRef<HTMLElement>>('heading');
    /** The loading state removes the focused button. Move focus to the title. */
    private readonly _focus_on_load = afterRenderEffect(() => {
        if (this.loading()) this._heading().nativeElement.focus();
    });

    constructor() {
        super();
    }

    public ngOnInit() {
        if (this._data.close_delay) {
            this.timeout(
                'close',
                () => this._dialog_ref.close(),
                this._data.close_delay,
            );
        }
    }

    /** User confirmation of the content of the modal */
    public onConfirm() {
        this.event.emit({ reason: 'done' });
    }
}
