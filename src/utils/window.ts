export const getWindow: any = () => {
    if(typeof window !== 'undefined') return window;
    return {}
}