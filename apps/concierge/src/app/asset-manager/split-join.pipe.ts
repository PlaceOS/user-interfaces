import { Pipe } from '@angular/core';

@Pipe({
    name: 'splitjoin',
})
export class SplitJoinPipe {
    public transform(
        value: string,
        split: string = '_',
        join: string = ' '
    ): string {
        return (value || '').split(split).join(join);
    }
}
