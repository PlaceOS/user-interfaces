import { Component } from '@angular/core';
import { currentUser } from '@placeos/common';
import { format } from 'date-fns';

@Component({
    selector: 'whats-on-header',
    template: `
        <div class="flex items-center justify-between my-8 w-full">
            <h1 class="text-4xl">Hello, {{ user?.name }}</h1>
            <div time class="flex items-center space-x-2 font-medium">
                <div day class="text-4xl font-normal">{{ day }}</div>
                <div date class="">
                    <div class="text-primary uppercase leading-none">
                        {{ month }}
                    </div>
                    <div class="text-base leading-none ">{{ year }}</div>
                </div>
                <div time class="text-4xl font-normal pl-4">{{ time }}</div>
            </div>
        </div>
    `,
    styles: [``],
})
export class WhatsOnHeaderComponent {
    public get user() {
        return currentUser();
    }

    public get day() {
        return format(Date.now(), 'dd');
    }
    public get month() {
        return format(Date.now(), 'MMM');
    }

    public get year() {
        return format(Date.now(), 'yyyy');
    }

    public get time() {
        return format(Date.now(), 'h:mm a');
    }
}
