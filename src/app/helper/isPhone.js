


export function isPhone(){
    if (typeof navigator !== "undefined") {
        const userAgent = navigator.userAgent.toLowerCase();
        return /iphone|ipod|android|windows phone|blackberry|mobile/i.test(userAgent);
    }
}