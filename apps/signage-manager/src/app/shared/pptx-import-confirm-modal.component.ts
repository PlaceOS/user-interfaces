import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {
    DIALOG_TITLE_STYLES,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';

export interface PptxImportConfirmModalData {
    file_name: string;
}

/** True when the user continues with the import. Undefined on cancel. */
export type PptxImportConfirmModalResult = true | undefined;

/**
 * Warns that PowerPoint slides render on a best-effort basis, with the steps
 * to export images or video from PowerPoint instead. Shows before the
 * document import modal. Laid out like the shared confirm modal, which
 * cannot show the platform logos as its content keeps only simple tags.
 */
@Component({
    selector: 'pptx-import-confirm-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'SIGNAGE_MANAGER.PPTX_IMPORT_CONFIRM_TITLE' | translate }}
            </h2>
        </header>
        <main
            class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4"
        >
            <icon class="text-5xl">warning</icon>
            <p class="text-center">
                <b class="break-all">{{ file_name }}</b>
                <br />
                {{ 'SIGNAGE_MANAGER.PPTX_IMPORT_WARNING' | translate }}
            </p>
            <div class="flex w-full flex-col gap-3 text-sm">
                <section class="flex flex-col gap-1">
                    <span
                        class="border-base-300 bg-base-200 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                    >
                        <!-- Windows logo from svgl.app -->
                        <svg
                            viewBox="0 0 88 88"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.329 39.349-.011 41.34-47.318-6.678-.066-34.739z"
                                fill="#00adef"
                            />
                        </svg>
                        Windows
                    </span>
                    <ul class="list-disc pl-5">
                        <li>
                            {{
                                'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_IMAGES'
                                    | translate
                            }}
                        </li>
                        <li>
                            {{
                                'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_WINDOWS_VIDEO'
                                    | translate
                            }}
                        </li>
                    </ul>
                </section>
                <section class="flex flex-col gap-1">
                    <span
                        class="border-base-300 bg-base-200 inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium"
                    >
                        <!-- Apple logo from svgl.app. It takes the text
                             colour, so it shows in light and dark themes. -->
                        <svg
                            viewBox="0 0 814 1000"
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-4 w-4"
                            aria-hidden="true"
                        >
                            <path
                                d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127C46.7 790.7 0 663 0 541.8c0-194.4 126.4-297.5 250.8-297.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"
                                fill="currentColor"
                            />
                        </svg>
                        macOS
                    </span>
                    <ul class="list-disc pl-5">
                        <li>
                            {{
                                'SIGNAGE_MANAGER.PPTX_IMPORT_EXPORT_MAC'
                                    | translate
                            }}
                        </li>
                    </ul>
                </section>
            </div>
        </main>
        <footer
            class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
        >
            <button
                btn
                matRipple
                type="button"
                class="inverse bg-base-100 flex-1"
                [mat-dialog-close]="undefined"
            >
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                type="button"
                class="flex-1"
                [mat-dialog-close]="true"
            >
                {{ 'COMMON.CONTINUE' | translate }}
            </button>
        </footer>
    `,
    styles: [DIALOG_TITLE_STYLES],
    imports: [MatDialogModule, MatRippleModule, IconComponent, TranslatePipe],
})
export class PptxImportConfirmModalComponent {
    public readonly file_name =
        inject<PptxImportConfirmModalData>(MAT_DIALOG_DATA).file_name;
}
