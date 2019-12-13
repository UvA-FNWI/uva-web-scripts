declare class Confirm {
    static handlersWaitingOnConfirmation: {};
    static addHandlerWaitingOnConfirmation(confirmationId: any, handlerName: any, handler: any): void;
    static runConfirmedHandlers(confirmationId: any): void;
}
export { Confirm };
