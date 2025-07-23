import { Pipe, PipeTransform, inject } from '@angular/core';

import { LocaleService } from 'libs/common/src/lib/locale.service';

@Pipe({
    name: 'translate',
})
export class TranslatePipe implements PipeTransform {
    private _locale = inject(LocaleService);

    public transform(
        value: string,
        args: Record<string, any> = {},
        plural?: number,
    ) {
        return this._locale.get(value, args, plural) || value;
    }
}
