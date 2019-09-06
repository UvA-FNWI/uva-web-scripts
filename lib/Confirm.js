"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Confirm = /** @class */ (function () {
    function Confirm() {
    }
    // Add a handler waiting on confirmation (of given ID) by a user.
    // Args:
    //    confirmationId: string, uniquely identifies a set of handlers corresponding to an event.
    //    handlerName: string, uniquely identifies a handler in the set belonging to confirmationId.
    //    handler: function, some JavaScript function to run.
    Confirm.addHandlerWaitingOnConfirmation = function (confirmationId, handlerName, handler) {
        if (!(confirmationId in Confirm.handlersWaitingOnConfirmation))
            Confirm.handlersWaitingOnConfirmation[confirmationId] = {};
        Confirm.handlersWaitingOnConfirmation[confirmationId][handlerName] = handler;
    };
    // Run the handlers which have been confirmed by a user.
    Confirm.runConfirmedHandlers = function (confirmationId) {
        for (var handlerName in Confirm.handlersWaitingOnConfirmation[confirmationId])
            Confirm.handlersWaitingOnConfirmation[confirmationId][handlerName]();
        Confirm.handlersWaitingOnConfirmation[confirmationId] = {};
    };
    ;
    // An associative array of <confirmationId: <handlerName: [function]>>
    Confirm.handlersWaitingOnConfirmation = {};
    return Confirm;
}());
exports.Confirm = Confirm;
;
