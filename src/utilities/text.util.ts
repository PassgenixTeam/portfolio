export function upperCaseFirstLetter(text: string, { onlyFirstWord } = { onlyFirstWord: false }): string {
    if (onlyFirstWord) return text.charAt(0).toUpperCase() + text.slice(1);

    return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Generate random image url
export function randomImgUrl({ width = 1000, height = 1000, seed }: { width?: number; height?: number; seed?: number } = {}): string {
    seed = seed || Math.floor(Math.random() * 1000);
    return `https://picsum.photos/id/${seed}/${width}/${height}`;
}
