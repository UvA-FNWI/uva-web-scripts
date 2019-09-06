declare class Util {
    static j(dnId: number): JQuery<HTMLElement>;
    static GetDate(id: any): string;
    static GetSelectedItems(id: any): string;
    static addClass(el: any, className: any): any;
    static alphaOnly(event: any): boolean | RegExpMatchArray;
    static arraysEqual(a: any, b: any): boolean;
}
export { Util };
