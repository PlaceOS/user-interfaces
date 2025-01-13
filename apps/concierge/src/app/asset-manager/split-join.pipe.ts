import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'splitjoin',
    standalone: false
})
export class SplitJoinPipe implements PipeTransform {
    public transform(value: string, split = '_', join = ' '): string {
        return (value || '').split(split).join(join);
    }
}
