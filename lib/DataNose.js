"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Confirm_1 = require("./Confirm");
var Content_1 = require("./Content");
var Location_1 = require("./Location");
var Track_1 = require("./Track");
// Functions for sending events to the server and evaluating the response.
var DataNose = /** @class */ (function () {
    function DataNose() {
    }
    DataNose.SetUpdateInterval = function (duration) {
        if (DataNose.intID)
            clearInterval(DataNose.intID);
        DataNose.intID = window.setInterval(function () {
            if (!DataNose.activeRequest) {
                DataNose.activeRequest = true;
                DataNose.Execute('update');
            }
        }, duration);
    };
    // Send a POST request and evaluate the response text.
    //
    // t: the URL to POST to.
    // par: the object to POST.
    // async: perform an asynchronous request.
    // overridePageName: inform the server we are on the given page.
    DataNose.Execute = function (t, par, async, overridePageName) {
        async = typeof async !== 'undefined' ? async : true;
        overridePageName = typeof overridePageName !== 'undefined' ? overridePageName : true;
        var pars = Object.create(par || null);
        var scrollOnLoad = (t == "event" && Track_1.Track.trackScroll(par));
        pars.x = Location_1.Location.pageName;
        $$.ajax({
            type: "POST",
            url: t,
            headers: { "Content-type": "application/x-www-form-urlencoded" },
            data: pars,
            async: async
        }).done(function (responseText) {
            if (scrollOnLoad) {
                $$(document).scrollTop(sessionStorage[scrollOnLoad]);
            }
            DataNose.activeRequest = false;
            eval(responseText);
            if (window.forceMCEReInit) {
                window.InitMCE();
                window.forceMCEReInit = false;
            }
        });
    };
    // Send a named event originating from an ID'd element.
    //
    // id: the ID of the originating element.
    // name: the name of the event e.g. "mousedown"
    // params: additional parameters for the object sent to the server.
    // async: perform an asynchronous request.
    // waitOnConfirmation: wait on user confirmation before executing the event.
    DataNose.Event = function (id, name, params, async, confirmationId, handlerName) {
        async = typeof async !== 'undefined' ? async : true;
        var newParams = Object.create(params);
        newParams.p = id;
        newParams.e = name;
        $$('[log]').each(function () {
            var el = $$(this);
            params[this.id + '_'] = el.attr('log');
            el.removeAttr('log');
        });
        // Additionally pass current timestamp if available.
        params.timeStamp = new Date().getTime();
        for (var param in params)
            newParams['_ep_' + param] = params[param]; //encodeURIComponent
        var execute = function () { return DataNose.Execute("event", newParams, async); };
        if (confirmationId)
            Confirm_1.Confirm.addHandlerWaitingOnConfirmation(confirmationId, handlerName, execute);
        else
            execute();
    };
    // Tell the server to ask the user to confirm before running event handlers.
    DataNose.AskForConfirmation = function (id, confirmationText, confirmationId) {
        DataNose.Event(id, 'handlerConfirmation', {
            'confirmationText': confirmationText,
            'confirmationId': confirmationId
        });
    };
    // Equal to MouseEvent(eventName: true).
    DataNose.MouseDownEvent = function (id, event, targets, async, confirmationId) {
        DataNose.MouseEvent(id, event, targets, true, async, confirmationId, "OnMouseDown");
    };
    // Equal to MouseEvent(eventName: false).
    DataNose.MouseUpEvent = function (id, event, targets, async, confirmationId) {
        DataNose.MouseEvent(id, event, targets, false, async, confirmationId, "OnMouseUp");
    };
    // Equal to MouseEvent(eventName: "Click").
    DataNose.OnClickEvent = function (id, event, targets, async, confirmationId) {
        DataNose.MouseEvent(id, event, targets, "Click", async, confirmationId, "OnClick");
    };
    // Equal to MouseEvent(eventName: "ContextMenu").
    DataNose.OnContextMenuEvent = function (id, event, targets, async, confirmationId) {
        DataNose.MouseEvent(id, event, targets, "ContextMenu", async, confirmationId, "OnContextMenu");
    };
    // Execute a mouse event, which includes coordinates.
    //
    // id: the ID of the originating element.
    // eventName: either a bool, indicating a mousedown event (true)
    //     or mouseup event (false), or a string X indicating the server
    //     "OnX" handler to run e.g. X = "Click".
    DataNose.MouseEvent = function (id, event, targets, eventName, async, confirmationId, handlerName) {
        async = typeof async !== 'undefined' ? async : true;
        if (!event)
            event = window.event;
        var el = $('_' + id);
        var left = el.offsetLeft;
        var top = el.offsetTop;
        var parent = el.offsetParent;
        while (parent != null) {
            top += parent.offsetTop;
            left += parent.offsetLeft;
            parent = parent.offsetParent;
        }
        if (eventName == true)
            eventName = "MouseDown";
        else if (eventName === false)
            eventName = "MouseUp";
        var params = event ? {
            ctrl: event.ctrlKey,
            shift: event.shiftKey,
            right: (event.button == 2),
            middle: (event.which && event.which == 2) || event.button == 4,
            tx: left, ty: top
        } : {};
        this.TargetEvent(id, eventName, params, targets, async, confirmationId, handlerName);
    };
    DataNose.TargetEvent = function (id, name, params, targets, async, confirmationId, handlerName) {
        async = typeof async !== 'undefined' ? async : true;
        for (var i in targets) {
            if (!$(targets[i].id))
                continue;
            params[targets[i].id + '_'] = DataNose.GetValue(targets[i].id, targets[i].prop);
        }
        DataNose.Event(id, name, params, async, confirmationId, handlerName);
    };
    // The property of the element with given ID.
    DataNose.GetValue = function (id, prop) {
        if (prop.indexOf('Get') === 0)
            return eval(prop + '("' + id + '")');
        else
            return $(id)[prop];
    };
    DataNose.ChangeEvent = function (el, optionalParams) {
        optionalParams = (typeof optionalParams === "undefined") ? {} : optionalParams;
        var url = document.URL;
        if (Content_1.Content.content[el.id] != el.value) {
            var timestamp = new Date().getTime();
            if ($$("#" + el.id).attr('class')) {
                if ($$("#" + el.id).attr('class').indexOf('searchField') > -1) {
                    $$("#" + el.id).css("color", "#000000");
                    $$("#" + el.id).attr('data-timestamp', timestamp);
                    DataNose.Event(el.id.substr(1), 'Change', {
                        value: el.value + '^' + timestamp,
                        id: DataNose.hasOwnPropertySafe(optionalParams, "paramsincludeid") ? (optionalParams.paramsincludeid ? el.id : '') : ''
                    }, true);
                }
                else {
                    if ((url.indexOf('courselist') > -1 || url.indexOf('indcourses') > -1 || url.indexOf('students') > -1 || url.indexOf('acskills') > -1) && $$("#" + el.id).attr('class').indexOf('edit') > -1) {
                        DataNose.Event(el.id.substr(1), 'Change', {
                            value: el.value + '^' + timestamp,
                            id: DataNose.hasOwnPropertySafe(optionalParams, "paramsincludeid") ? (optionalParams.paramsincludeid ? el.id : '') : ''
                        }, true);
                        Content_1.Content.content[el.id] = el.value;
                    }
                    else {
                        DataNose.Event(el.id.substr(1), 'Change', {
                            value: el.value,
                            id: DataNose.hasOwnPropertySafe(optionalParams, "paramsincludeid") ? (optionalParams.paramsincludeid ? el.id : '') : ''
                        }, true);
                        Content_1.Content.content[el.id] = el.value;
                    }
                }
            }
            else {
                DataNose.Event(el.id.substr(1), 'Change', {
                    value: el.value,
                    id: DataNose.hasOwnPropertySafe(optionalParams, "paramsincludeid")
                        ? (optionalParams.paramsincludeid ? el.id : '')
                        : ''
                }, true);
                Content_1.Content.content[el.id] = el.value;
            }
        }
        else {
            if ($$("#" + el.id).attr('class')) {
                if ($$("#" + el.id).attr('class').indexOf('searchField') > -1) {
                    $$("#" + el.id).parent().find('.resultsElement').find('img').remove();
                    $$("#" + el.id).parent().find('.resultsElement').children().show();
                }
            }
        }
    };
    // what is this??
    DataNose.hasOwnPropertySafe = function (obj, prop) {
        if (typeof obj === "undefined" || obj == null)
            return false;
        if (Object.prototype.hasOwnProperty)
            return obj.hasOwnProperty(prop);
        else
            return DataNose.hasOwnPropertyFallback(obj, prop);
    };
    //the js prototype method does not work in all browsers
    DataNose.hasOwnPropertyFallback = function (obj, prop) {
        var proto = obj.__proto__ || obj.constructor.prototype;
        return (prop in obj) &&
            (!(prop in proto) || proto[prop] !== obj[prop]);
    };
    DataNose.activeRequest = false;
    DataNose.intID = null;
    return DataNose;
}());
exports.DataNose = DataNose;
DataNose.SetUpdateInterval(30000);
var DN = DataNose;
exports.DN = DN;
