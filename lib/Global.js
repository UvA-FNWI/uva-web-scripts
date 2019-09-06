"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
// Expose function/object/variables on window (global namespace).
// TODO: We should only export a single namespace per file, not export each
// function individually. Then use derived functions to access these.
window.$ = document.getElementById.bind(document);
window.$$ = window.jQuery;
var Click_1 = require("./Click");
var Confirm_1 = require("./Confirm");
var Content_1 = require("./Content");
var CourseManualDisplaySection_1 = require("./CourseManualDisplaySection");
var DataNose_1 = require("./DataNose");
var Dropdown_1 = require("./Dropdown");
var Editor_1 = require("./Editor");
var Language_1 = require("./Language");
var Loading_1 = require("./Loading");
var Location_1 = require("./Location");
var MouseDown_1 = require("./MouseDown");
var MultiSelectControl_1 = require("./MultiSelectControl");
var OrderTable_1 = require("./OrderTable");
var Popup_1 = require("./Popup");
var Position_1 = require("./Position");
var RubricDropDown_1 = require("./RubricDropDown");
var ScrollSpy_1 = require("./ScrollSpy");
var Search_1 = require("./Search");
var StudentOverviewSection_1 = require("./StudentOverviewSection");
var TableView_1 = require("./TableView");
var Track_1 = require("./Track");
var Upload_1 = require("./Upload");
var Util_1 = require("./Util");
var ZIndex_1 = require("./ZIndex");
var SearchBox_1 = require("./SearchBox");
// Functions and object are attached directly to window.
// To avoid TypeScript complaining we declare each window property in
// GlobalDeclare.d.ts.
window.AutoCompleteEvent = Search_1.Search.AutoCompleteEvent;
window.Confirm = Confirm_1.Confirm;
window.DN = DataNose_1.DN;
window.DropDown = Dropdown_1.DropDown;
window.GetDate = Util_1.Util.GetDate;
window.GetName = Location_1.Location.GetName;
window.GetMaxZIndex = ZIndex_1.ZIndex.GetMaxZIndex;
window.GetSelectedItems = Util_1.Util.GetSelectedItems;
window.InitMCE = Editor_1.Editor.InitMCE;
window.PositionAtMouse = Position_1.Position.PositionAtMouse;
window.PositionRelative = Position_1.Position.PositionRelative;
window.RubricDropDown = RubricDropDown_1.RubricDropDown;
window.ScrollSpy = ScrollSpy_1.ScrollSpy;
window.SetUpdateInterval = DataNose_1.DN.SetUpdateInterval;
window.StudentOverviewSection_timelineId = StudentOverviewSection_1.StudentOverviewSection.StudentOverviewSection_timelineId;
window.UpdateColumn = TableView_1.TableView.UpdateColumn;
window.Util = Util_1.Util;
window.WhenElementAvailable = MultiSelectControl_1.MultiSelectControl.WhenElementAvailable;
window.addClass = Util_1.Util.addClass;
window.alphaOnly = Util_1.Util.alphaOnly;
window.arraysEqual = Util_1.Util.arraysEqual;
window.cleanTableOrderable = OrderTable_1.OrderTable.cleanTableOrderable;
window.closeUploadDialog = Upload_1.Upload.closeUploadDialog;
window.content = Content_1.Content.content;
window.decodedLocationHash = Location_1.Location.decodedLocationHash;
window.fileInputBrowse = Upload_1.Upload.fileInputBrowse;
window.fileInputChange = Upload_1.Upload.fileInputChange;
window.finishedUpload = Upload_1.Upload.finishedUpload;
window.initializeDirectUpload = Upload_1.Upload.initializeDirectUpload;
window.initializePopup = Popup_1.Popup.initializePopup;
window.isEnglish = Language_1.Language.isEnglish;
window.j = Util_1.Util.j;
window.leavePageText = CourseManualDisplaySection_1.CourseManualDisplaySection.leavePageText;
window.makeTableOrderable = OrderTable_1.OrderTable.makeTableOrderable;
window.onClickHandlers = Click_1.Click.onClickHandlers;
window.onMouseDownHandlers = MouseDown_1.MouseDown.onMouseDownHandlers;
window.onMouseUpHandlers = MouseDown_1.MouseDown.onMouseUpHandlers;
window.openUploadDialog = Upload_1.Upload.openUploadDialog;
window.orderableTableEvents = OrderTable_1.OrderTable.orderableTableEvents;
window.pagePos = CourseManualDisplaySection_1.CourseManualDisplaySection.pagePos;
window.pasteFiltered = Editor_1.Editor.pasteFiltered;
window.pasteRemoveStyles = Editor_1.Editor.pasteRemoveStyles;
window.performClick = Click_1.Click.performClick;
window.popupsInitialized = Popup_1.Popup.popupsInitialized;
window.showExtensionDialog = Upload_1.Upload.showExtensionDialog;
window.showInvalidFileSizesDialog = Upload_1.Upload.showInvalidFileSizesDialog;
window.showLoadingGraphicsForImage = Loading_1.Loading.showLoadingGraphicsForImage;
window.showMessageDialog = Upload_1.Upload.showMessageModal;
window.submitUploadForm = Upload_1.Upload.submitUploadForm;
window.trackScroll = Track_1.Track.trackScroll;
window.validateFileSizes = Upload_1.Upload.validateFileSizes;
window.SearchBox = SearchBox_1.SearchBox;
// To expose global variables that are not accessed via a class/object, for
// backwards compatibility, we define getters/setters which will modify the
// corresponding variable in the object where its defined.
Object.defineProperty(window, "activeRequest", {
    get: function () { return DataNose_1.DN.activeRequest; },
    set: function (val) { DataNose_1.DN.activeRequest = val; }
});
Object.defineProperty(window, "forceMCEReInit", {
    get: function () { return Editor_1.Editor.forceMCEReInit; },
    set: function (val) { Editor_1.Editor.forceMCEReInit = val; }
});
Object.defineProperty(window, "intID", {
    get: function () { return DataNose_1.DN.intID; },
    set: function (val) { DataNose_1.DN.intID = val; }
});
Object.defineProperty(window, "isMouseDown", {
    get: function () { return MouseDown_1.MouseDown.isMouseDown; },
    set: function (val) { MouseDown_1.MouseDown.isMouseDown = val; }
});
Object.defineProperty(window, "languageIndex", {
    get: function () { return Language_1.Language.index; },
    set: function (val) { Language_1.Language.index = val; }
});
Object.defineProperty(window, "lastHash", {
    get: function () { return Location_1.Location.lastHash; },
    set: function (val) { Location_1.Location.lastHash = val; }
});
Object.defineProperty(window, "lastX", {
    get: function () { return Track_1.Track.lastX; },
    set: function (val) { Track_1.Track.lastX = val; }
});
Object.defineProperty(window, "lastY", {
    get: function () { return Track_1.Track.lastY; },
    set: function (val) { Track_1.Track.lastY = val; }
});
Object.defineProperty(window, "pageName", {
    get: function () { return Location_1.Location.pageName; },
    set: function (val) { Location_1.Location.pageName = val; }
});
Object.defineProperty(window, "popup", {
    get: function () { return Popup_1.Popup.popup; },
    set: function (val) { Popup_1.Popup.popup = val; }
});
Object.defineProperty(window, "selectTarget", {
    get: function () { return Search_1.Search.selectTarget; },
    set: function (val) { Search_1.Search.selectTarget = val; }
});
Object.defineProperty(window, "selectedIndex", {
    get: function () { return Search_1.Search.selectedIndex; },
    set: function (val) { Search_1.Search.selectedIndex = val; }
});
Object.defineProperty(window, "uploadDialog", {
    get: function () { return Upload_1.Upload.uploadDialog; },
    set: function (val) { Upload_1.Upload.uploadDialog = val; }
});
Object.defineProperty(window, "uploadDialogBody", {
    get: function () { return Upload_1.Upload.uploadDialogBody; },
    set: function (val) { Upload_1.Upload.uploadDialogBody = val; }
});
var Global = null;
exports.Global = Global;
