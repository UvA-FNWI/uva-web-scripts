// NO TRANSFORM

class Confirm {
    // An associative array of <confirmationId: <handlerName: [function]>>
    static handlersWaitingOnConfirmation = {};

    // Add a handler waiting on confirmation (of given ID) by a user.
    // Args:
    //    confirmationId: string, uniquely identifies a set of handlers corresponding to an event.
    //    handlerName: string, uniquely identifies a handler in the set belonging to confirmationId.
    //    handler: function, some JavaScript function to run.
    static addHandlerWaitingOnConfirmation(confirmationId, handlerName, handler) {
        if (!(confirmationId in Confirm.handlersWaitingOnConfirmation))
            Confirm.handlersWaitingOnConfirmation[confirmationId] = {};
        Confirm.handlersWaitingOnConfirmation[confirmationId][handlerName] = handler;
    }

    // Run the handlers which have been confirmed by a user.
    static runConfirmedHandlers(confirmationId) {
        for (var handlerName in Confirm.handlersWaitingOnConfirmation[confirmationId])
            Confirm.handlersWaitingOnConfirmation[confirmationId][handlerName]();
        Confirm.handlersWaitingOnConfirmation[confirmationId] = {};
    };
};

export { Confirm };
