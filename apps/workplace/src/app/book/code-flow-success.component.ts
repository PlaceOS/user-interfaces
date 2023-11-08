import { Component } from '@angular/core';

@Component({
    selector: 'code-flow-success',
    template: `
        <div class="absolute inset-0 bg-base-100 flex flex-col z-50">
            <main
                class="flex-1 flex flex-col items-center justify-center space-y-2 p-8"
            >
                <h2 class="text-2xl font-medium">
                    {{ 'WPA.RESOURCE_CHECKED_IN' | translate }}
                </h2>
                <img src="assets/icons/success.svg" />
                <p class="text-center max-w-[32rem]">
                    {{ 'WPA.CHECKED_IN' | translate }}
                </p>
            </main>
            <footer
                class="p-2 w-full border-t border-base-200 mt-4 flex items-center justify-center"
            >
                <a
                    btn
                    matRipple
                    class="w-full max-w-[32rem]"
                    [routerLink]="['/']"
                >
                    {{ 'WPA.BOOKING_DONE_CONTINUE' | translate }}
                </a>
            </footer>
        </div>
    `,
    styles: [``],
})
export class CodeFlowSuccessComponent {}
