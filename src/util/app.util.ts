export function getNumbersFromString(text: string): string | undefined {
    const numberStr = text.match(/\d/g);
    if (numberStr) {
        return numberStr.join('');
    }
}
