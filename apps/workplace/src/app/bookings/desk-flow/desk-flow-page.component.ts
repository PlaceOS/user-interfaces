import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    BaseClass,
    currentUser,
    current_user,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { combineLatest } from 'rxjs';
import { debounceTime, first, map, shareReplay } from 'rxjs/operators';
import { DeskFlowStateService } from './desk-flow-state.service';

@Component({
    selector: 'desk-flow-page',
    template: `
        <header>
            <a-topbar-header [(menu)]="show_menu"></a-topbar-header>
        </header>
        <main
            class="flex flex-1 flex-col relative"
        >
            <desk-flow-listing></desk-flow-listing>
        </main>
        <footer class="flex">
            <a-footer-menu class="w-full"></a-footer-menu>
        </footer>
        <a-overlay-menu [(show)]="show_menu"></a-overlay-menu>
    `,
    styles: [
        `
            :host {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                overflow: hidden;
                display: flex;
                flex-direction: column;
            }

            main {
                max-height: calc(100vh - 6.15rem);
            }
        `,
    ],
})
export class DeskFlowPageComponent extends BaseClass {
    public show_menu: boolean = false;
}
