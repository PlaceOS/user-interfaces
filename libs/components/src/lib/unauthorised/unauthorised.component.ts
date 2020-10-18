import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorised',
  template: `
    <div class="unauthorised">
        <h1>403</h1>
        <h3 i18n="@@forbiddenLabel">Access forbidden.</h3>
        <p i18n="@@invalidPermissionLabel">You do not have permission to view this page and your access attempt has been recorded.</p>
        <p i18n="@@contactAdminLabel">Contact your Administrator if you feel that you should have access.</p>
    </div>
    `,
    styles: [`
        :host {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .unauthorised {
            width: 24em;
            background-color: #fff;
            color: rgba(#000, .85);
            border-radius: 4px;
            border: 1px solid #ccc;
            text-align: center;
            padding: .5em 2em 2em;
            margin: 1em;
        }

        @media (prefers-color-scheme: dark) {
            .unauthorised {
                background-color: #262626;
                color: #fff;
            }
        }
    `]
})
export class UnauthorisedComponent { }
