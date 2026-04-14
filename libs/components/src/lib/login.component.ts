import {
    Component,
    computed,
    ElementRef,
    inject,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SettingsService } from '@placeos/common';
import { first } from 'rxjs/operators';
import { AuthenticatedImageDirective } from './authenticated-image.directive';

@Component({
    selector: 'app-login',
    template: `
        <div class="fixed inset-0 overflow-auto">
            <form
                class="bg-base-100 mx-auto my-4 flex flex-col items-center overflow-hidden rounded-sm p-4 shadow-sm"
            >
                <div class="flex items-center justify-center">
                    <img
                        auth
                        class="h-12"
                        alt="Logo"
                        [source]="logo()?.src || logo()"
                    />
                </div>
                <div class="relative h-1/3 w-full flex-1">
                    @if (!loading()) {
                        <div class="flex flex-col">
                            <label
                                for="username"
                                [class.focused]="
                                    username || focus() === 'username'
                                "
                                [class.in-focus]="focus() === 'username'"
                            >
                                Username
                            </label>
                            <mat-form-field appearance="outline">
                                <mat-label>Username</mat-label>
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
                                <mat-label>Password</mat-label>
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
                    } @else {
                        <div
                            class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
                        >
                            <mat-spinner diameter="64"></mat-spinner>
                            <p>Checking user credentials...</p>
                        </div>
                    }
                </div>
                @if (!loading()) {
                    <div class="flex w-full items-center justify-center">
                        <button btn matRipple color="primary" (click)="login()">
                            Login
                        </button>
                    </div>
                }
            </form>
        </div>
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
    imports: [
        MatRippleModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        AuthenticatedImageDirective,
    ],
})
export class LoginComponent implements OnInit {
    private _settings = inject(SettingsService);
    private readonly _theme = this._settings.theme_signal;
    private readonly _logo_dark = this._settings.signal('logo_dark', null);
    private readonly _logo_light = this._settings.signal('logo_light', null);

    /** Whether the user credentials are being checked */
    public loading = signal(false);
    /** Current focused field */
    public focus = signal('');

    public readonly form = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
    });

    /** Password field element */
    private readonly pwd_field =
        viewChild<ElementRef<HTMLInputElement>>('pass_field');

    public readonly logo = computed(
        () =>
            (this._theme() === 'dark'
                ? this._logo_dark()
                : this._logo_light()) || {},
    );

    public async ngOnInit() {
        this.loading.set(true);
        await this._settings.initialised.pipe(first((_) => _)).toPromise();
        this.loading.set(false);
    }

    /** Focus on the password field */
    public toPassword() {
        const pwd_field = this.pwd_field();
        if (pwd_field && pwd_field.nativeElement) {
            pwd_field.nativeElement.focus();
        }
    }

    /** Perform user login */
    public login() {
        this.loading.set(true);
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
