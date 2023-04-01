export function getSeparatedStringFromArray(arr: (string | number)[], separator: string = ', '): string {
    return arr.join(separator || ',');
}