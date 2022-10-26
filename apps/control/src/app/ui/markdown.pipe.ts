import { Pipe } from "@angular/core";

import { marked } from 'marked';

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe {
    public transform(value: string): string {
        return value ? marked(value) : '';
    }
}
