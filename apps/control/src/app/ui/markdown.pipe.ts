import { Pipe } from "@angular/core";

import * as marked from 'marked';

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe {
    public transform(value: string): string {
        return value ? marked(value) : '';
    }
}
