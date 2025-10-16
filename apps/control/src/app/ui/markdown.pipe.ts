import { Pipe, PipeTransform } from '@angular/core';

import { marked } from 'marked';

@Pipe({
    name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
    public transform(value: string): string {
        return value ? (marked(value, { async: false }) as any) : '';
    }
}
