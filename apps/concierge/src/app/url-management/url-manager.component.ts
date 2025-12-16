import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatePipe } from '@placeos/components';
import { ApplicationSidebarComponent } from '../ui/app-sidebar.component';
import { ApplicationTopbarComponent } from '../ui/app-topbar.component';
import { UrlListComponent } from './url-list.component';
import { UrlManagementService } from './url-management.service';

@Component({
    selector: '[app-short-url-manager]',
    template: `
        <app-topbar class="print:hidden" />
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <header
                    class="mb-2 flex items-center justify-between px-8 pt-4 pb-2"
                >
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.URLS_HEADER' | translate }}
                    </h2>
                    <button btn matRipple (click)="new()">
                        {{ 'APP.CONCIERGE.URLS_ADD' | translate }}
                    </button>
                </header>
                <div class="flex justify-end px-8 pb-4">
                    <mat-form-field appearance="outline" class="no-subscript">
                        <input
                            matInput
                            placeholder="Search"
                            [(ngModel)]="search_term"
                            (ngModelChange)="updateSearch($event)"
                        />
                    </mat-form-field>
                </div>
                <short-url-list
                    class="relative block h-1/2 w-full flex-1"
                ></short-url-list>
            </main>
        </div>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                height: 100%;
                width: 100%;
                background-color: var(--base-100);
            }

            sidebar {
                height: 100%;
            }

            main {
                display: flex;
                flex-direction: column;
                flex: 1;
                min-width: 50%;
                height: 100%;
            }
        `,
    ],
    imports: [
        ApplicationTopbarComponent,
        ApplicationSidebarComponent,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        TranslatePipe,
        UrlListComponent,
    ],
})
export class UrlManagerComponent {
    private _state = inject(UrlManagementService);

    public search_term = '';

    public readonly new = () => this._state.editURL();

    public updateSearch(value: string) {
        this._state.setSearchString(value);
    }
}
