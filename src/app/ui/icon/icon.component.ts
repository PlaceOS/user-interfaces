import { Component, Input } from '@angular/core';

import { ApplicationIcon } from '../../common/types';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent {
    @Input() public icon: ApplicationIcon;
}
