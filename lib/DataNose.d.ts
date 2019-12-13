declare class DataNose {
    static activeRequest: boolean;
    static intID: number;
    static SetUpdateInterval(duration: any): void;
    static Execute(t: any, par?: any, async?: any, overridePageName?: any): void;
    static Event(id: any, name: any, params: any, async?: any, confirmationId?: any, handlerName?: any): void;
    static AskForConfirmation(id: any, confirmationText: any, confirmationId: any): void;
    static MouseDownEvent(id: any, event: any, targets: any, async: any, confirmationId: any): void;
    static MouseUpEvent(id: any, event: any, targets: any, async: any, confirmationId: any): void;
    static OnClickEvent(id: any, event: any, targets: any, async: any, confirmationId: any): void;
    static OnContextMenuEvent(id: any, event: any, targets: any, async: any, confirmationId: any): void;
    static MouseEvent(id: any, event: any, targets: any, eventName: any, async: any, confirmationId: any, handlerName: any): void;
    static TargetEvent(id: any, name: any, params: any, targets: any, async: any, confirmationId: any, handlerName: any): void;
    static GetValue(id: any, prop: any): any;
    static ChangeEvent(el: any, optionalParams: any): void;
    static hasOwnPropertySafe(obj: any, prop: any): any;
    static hasOwnPropertyFallback(obj: any, prop: any): boolean;
}
declare let DN: typeof DataNose;
export { DataNose, DN };
