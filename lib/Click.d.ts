/// <reference types="jquery" />
declare class Click {
    static onClickHandlers: ((e: JQuery.ClickEvent) => void)[];
    static performClick(elem: Element): void;
    static addClickHandlerForElem(id: number, f: ((ClickEvent: any, Element: any) => void)): void;
}
export { Click };
