export function random(min: number, max: number) {
    return min + Math.random() * (max - min + 1)
}