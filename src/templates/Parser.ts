import handlebars from 'handlebars';
import { readFileSync } from 'fs';

interface TemplateVariables {
    [key: string]: string | number;
}

interface ParseMailTemplate {
    file: string;
    variables: TemplateVariables;
}

export default class Parser {
    public async parse({ file, variables }: ParseMailTemplate): Promise<string> {
        const templateFileContent = readFileSync(file, {
            encoding: 'utf-8',
        });

        const parseTemplate = handlebars.compile(templateFileContent);

        return parseTemplate(variables);
    }
}
