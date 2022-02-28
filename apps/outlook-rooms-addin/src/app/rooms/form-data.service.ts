import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormDataService {
    private _form: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(
        null
    );

    readonly form$: Observable<FormGroup> = this._form.asObservable();

    public set form(form: FormGroup) {
        this._form.next(form);
    }

    public get form() {
        return this._form.getValue();
    }

    constructor() {}
}
