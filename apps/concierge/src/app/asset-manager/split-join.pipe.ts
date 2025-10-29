import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitjoin',
})
export class SplitJoinPipe implements PipeTransform {
    public transform(value: string, split = '_', join = ' '): string {
        return (value || '').split(split).join(join);
    }
}
