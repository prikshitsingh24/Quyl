

export function isPhone() {
    if (typeof window !== "undefined" && typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent.toLowerCase();
      return /iphone|ipod|Android|windows phone|blackberry|mobile/i.test(userAgent);
    }

    return false; 
}