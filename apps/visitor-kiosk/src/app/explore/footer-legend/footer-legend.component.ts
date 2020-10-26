import { Component } from '@angular/core';

import { Identity } from '@user-interfaces/common';

@Component({
  selector: 'a-footer-legend',
  templateUrl: './footer-legend.component.html',
  styleUrls: ['./footer-legend.component.scss']
})
export class FooterLegendComponent {
    /** Whether icon legend should be shown */
    public show: boolean;
    /** List of colour legend items */
    public readonly colours: readonly Identity[] = [
        { id: 'in-use', name: 'In Use', colour: '#C52A1A', dark: true },
        { id: 'available', name: 'Available', colour: '#22992E', dark: true },
        { id: 'not-bookable', name: 'Not Bookable', colour: '#7D7D7D', dark: true },
        { id: 'collab', name: 'Collaborative', colour: '#FED769' },
        { id: 'focus', name: 'Focus', colour: '#F5A478' }
    ];
    /** List of icon legend items */
    public readonly icon_list: readonly Identity[] = [
        { id: '', name: 'Lifts Up/Down', icon: { type: 'img', src: 'assets/img/lift.svg' } },
        { id: '', name: 'Fire Extinguisher', icon: { type: 'img', src: 'assets/img/fireExt.svg' } },
        { id: '', name: 'First Aid & AED', icon: { type: 'img', src: 'assets/img/aid.svg' } },
        { id: '', name: 'Cafe/Service', icon: { type: 'img', src: 'assets/img/Cafe.svg' } },
        { id: '', name: 'Mail/Noticeboard', icon: { type: 'img', src: 'assets/img/mail.svg' } },
        { id: '', name: 'Restrooms M/F', icon: { type: 'img', src: 'assets/img/Restrooms.svg' } },
        { id: '', name: 'Map Kiosk', icon: { type: 'img', src: 'assets/img/kiosk.svg' } },
        { id: '', name: 'Screen', icon: { type: 'img', src: 'assets/img/Screen.svg' } },
        { id: '', name: 'Projector', icon: { type: 'img', src: 'assets/img/Projector.svg' } },
        { id: '', name: 'Showers', icon: { type: 'img', src: 'assets/img/shower.svg' } },
        { id: '', name: 'Chairs', icon: { type: 'img', src: 'assets/img/chair.svg' } },
        { id: '', name: 'Chairs', icon: { type: 'img', src: 'assets/img/chair2.svg' } },
        { id: '', name: 'Chairs/Couch', icon: { type: 'img', src: 'assets/img/couch.svg' } },
        { id: '', name: 'Chairs/Couch', icon: { type: 'img', src: 'assets/img/couch2.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table1.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table2.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table3.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table4.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table5.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table6.svg' } },
        { id: '', name: 'Tables', icon: { type: 'img', src: 'assets/img/Table7.svg' } },
        { id: '', name: 'Funzone Games', icon: { type: 'img', src: 'assets/img/Tennis.svg' } },
        { id: '', name: 'Concierge Pods', icon: { type: 'img', src: 'assets/img/Pod.svg' } },
        { id: '', name: 'Phone Booths', icon: { type: 'img', src: 'assets/img/booth.svg' } }
    ];
}
