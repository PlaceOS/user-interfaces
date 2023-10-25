import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApplicationIcon, SettingsService } from '@placeos/common';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-login',
    template: `
        <div class="fixed inset-0 overflow-auto">
            <form
                class="flex flex-col items-center overflow-hidden mx-auto my-4 bg-base-100 rounded shadow p-4"
            >
                <div
                    class="flex items-center justify-center"
                    [style.background-color]="logo?.background"
                >
                    <i *ngIf="logo?.type === 'icon'" [class]="logo.class">
                        {{ logo.content }}
                    </i>
                    <img
                        *ngIf="logo?.type === 'img'"
                        [src]="logo.src | safe: 'resource'"
                    />
                </div>
                <div class="w-full relative h-1/3 flex-1">
                    <ng-container *ngIf="!loading; else loading_state">
                        <div class="flex flex-col">
                            <label
                                for="username"
                                [class.focused]="
                                    username || focus === 'username'
                                "
                                [class.in-focus]="focus === 'username'"
                            >
                                Username
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    #username
                                    formControlName="username"
                                    (keyup.enter)="toPassword()"
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col">
                            <label for="password">Password</label>
                            <mat-form-field appearance="outline">
                                <input
                                    #pass_field
                                    formControlName="password"
                                    (keyup.enter)="login()"
                                />
                                <mat-error
                                    >Invalid username or password</mat-error
                                >
                            </mat-form-field>
                        </div>
                    </ng-container>
                </div>
                <div
                    class="flex items-center justify-center w-full"
                    *ngIf="!loading"
                >
                    <button btn matRipple color="primary" (click)="login()">
                        Login
                    </button>
                </div>
            </form>
        </div>
        <ng-template #loading_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner diameter="64"></mat-spinner>
                <p>Checking user credentials...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host > div {
                background-color: #f0f0f0;
                background-image: url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0-2c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z' fill='%23ad1457' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E");
            }

            form {
                width: 20rem;
                max-width: calc(100vw - 2rem);
            }

            img {
                max-height: 3.75rem;
                max-width: 15rem;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    /** Whether the user credentials are being checked */
    public loading: boolean;

    public readonly form = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    /** Password field element */
    @ViewChild('pass_field', { static: true })
    private pwd_field: ElementRef<HTMLInputElement>;

    /** Logo of the application organisation */
    public get logo(): ApplicationIcon {
        return this._settings.get('app.logo_dark') || { type: 'icon' };
    }

    constructor(private _settings: SettingsService) {}

    public async ngOnInit() {
        this.loading = true;
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        this.loading = false;
    }

    /** Focus on the password field */
    public toPassword() {
        if (this.pwd_field && this.pwd_field.nativeElement) {
            this.pwd_field.nativeElement.focus();
        }
    }

    /** Perform user login */
    public login() {
        this.loading = true;
        // this._users.login({
        //     username: this.username,
        //     password: this.password
        // }, { form: true }).then(() => {
        //     this.loading = false;
        // }, () => {
        //     this.loading = false;
        //     this.error = true;
        // });
        this.form.setErrors({ password: 'Invalid username or password' });
    }
}
