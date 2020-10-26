import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationIcon, BaseClass, SettingsService } from '@user-interfaces/common';
import { first } from 'rxjs/operators';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseClass implements OnInit {
    /** Logo of the application organisation */
    public logo: ApplicationIcon;
    /** Name of the focused field */
    public focus: string;
    /** Whether the user credentials are being checked */
    public loading: boolean;
    /** Whether there was an error with checking the user details */
    public error: boolean;
    /** User's username */
    public username: string;
    /** User's password */
    public password: string;

    /** Password field element */
    @ViewChild('pass_field', { static: true }) private pwd_field: ElementRef<HTMLInputElement>;

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit(): void {
        this.loading = true;
        this._settings.initialised.pipe(first(_ => _)).subscribe(() => {
            this.loading = false;
            this.logo = this._settings.get('app.logo_dark') || { type: 'icon' };
        });
    }

    /** Focus on the password field */
    public toPassword() {
        if (this.pwd_field && this.pwd_field.nativeElement) {
            this.pwd_field.nativeElement.focus();
            this.focus = 'password';
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
    }

}
