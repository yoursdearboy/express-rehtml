import processors from "rehtml";
import { read } from "to-vfile";
import { unified } from "unified";
import { VFile } from "vfile";

export default async function rehtml(path, options, callback) {
    try {
        const processor = unified()
            .use(processors)
            .data(options);
        const file = new VFile({ cwd: options.settings.views, path });
        const input = await read(file);
        const output = await processor.process(input);
        const html = output.value;
        return callback(null, html);
    } catch(error) {
        return callback(error);
    }
}
