export const wait = (duration) => {
    return new Promise(res => setTimeout(res, duration))
} 