import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'placeos-not-found',
    templateUrl: './not-found.component.html',
    styles: [``],
})
export class NotFoundComponent implements OnInit {
    constructor(public router: Router) {}

    ngOnInit(): void {}
}
