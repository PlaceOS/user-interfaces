import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseClass } from '@user-interfaces/common';

import * as dayjs from 'dayjs';


@Component({
    selector: 'a-topbar-header',
    templateUrl: './topbar-header.component.html',
    styleUrls: ['./topbar-header.component.scss'],
})
export class TopbarHeaderComponent extends BaseClass implements OnInit {

    public time: string = '';
    constructor(private router: Router) {
        super();
    }

    public ngOnInit(): void {
        this.timeout('time', () => this.setTime(), 10000);
        this.setTime();
    }

    private setTime() {
        const now = dayjs();
        this.time = now.format('dddd h:mmA');
    }

    public home() {
        this.router.navigate(['home']);
    }
}
