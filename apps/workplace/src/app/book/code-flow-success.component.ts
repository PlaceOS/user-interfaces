import { Component } from '@angular/core';

@Component({
    selector: 'code-flow-success',
    template: `
        <div class="absolute inset-0 z-50 flex flex-col bg-base-100">
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{ 'APP.WORKPLACE.RESOURCE_CHECKED_IN' | translate }}
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="max-w-[32rem] text-center">
                    {{
                        'APP.WORKPLACE.RESOURCE_CHECKED_IN_MESSAGE' | translate
                    }}
                </p>
            </main>
            <footer
                class="mt-4 flex w-full items-center justify-center border-t border-base-200 p-2"
            >
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'COMMON.CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
    standalone: false,
})
export class CodeFlowSuccessComponent {}
