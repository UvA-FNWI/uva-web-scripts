// NO TRANSFORM

// Expose function/object/variables on window (global namespace).

// TODO: We should only export a single namespace per file, not export each
// function individually. Then use derived functions to access these.

window.$ = document.getElementById.bind(document);
window.$$ = window.jQuery;

import { Click } from './Click';
import { Confirm } from './Confirm';
import { Content } from './Content';
import { CourseManualDisplaySection } from './CourseManualDisplaySection';
import { DN } from './DataNose';
import { DropDown } from './Dropdown';
import { Editor } from './Editor';
import { Language } from './Language';
import { Loading } from './Loading';
import { Location } from './Location';
import { MouseDown } from './MouseDown';
import { MultiSelectControl } from './MultiSelectControl';
import { OrderTable } from './OrderTable';
import { Popup } from './Popup';
import { Position } from './Position';
import { RubricDropDown } from './RubricDropDown';
import { ScrollSpy } from './ScrollSpy';
import { Search } from './Search';
import { StudentOverviewSection } from './StudentOverviewSection';
import { TableView } from './TableView';
import { Track } from './Track';
import { Upload } from './Upload';
import { Util } from './Util';
import { ZIndex } from './ZIndex';
import { SearchBox } from './SearchBox';

// Functions and object are attached directly to window.
// To avoid TypeScript complaining we declare each window property in
// GlobalDeclare.d.ts.

window.AutoCompleteEvent = Search.AutoCompleteEvent;
window.Confirm = Confirm;
window.DN = DN;
window.DropDown = DropDown;
window.GetDate = Util.GetDate;
window.GetName = Location.GetName;
window.GetMaxZIndex = ZIndex.GetMaxZIndex;
window.GetSelectedItems = Util.GetSelectedItems;
window.InitMCE = Editor.InitMCE;
window.PositionAtMouse = Position.PositionAtMouse;
window.PositionRelative = Position.PositionRelative;
window.RubricDropDown = RubricDropDown;
window.ScrollSpy = ScrollSpy;
window.SetUpdateInterval = DN.SetUpdateInterval;
window.StudentOverviewSection_timelineId = StudentOverviewSection.StudentOverviewSection_timelineId;
window.UpdateColumn = TableView.UpdateColumn;
window.Util = Util;
window.WhenElementAvailable = MultiSelectControl.WhenElementAvailable;
window.addClass = Util.addClass;
window.alphaOnly = Util.alphaOnly;
window.arraysEqual = Util.arraysEqual;
window.cleanTableOrderable = OrderTable.cleanTableOrderable;
window.closeUploadDialog = Upload.closeUploadDialog;
window.content = Content.content;
window.decodedLocationHash = Location.decodedLocationHash;
window.fileInputBrowse = Upload.fileInputBrowse;
window.fileInputChange = Upload.fileInputChange;
window.finishedUpload = Upload.finishedUpload;
window.initializeDirectUpload = Upload.initializeDirectUpload;
window.initializePopup = Popup.initializePopup
window.isEnglish = Language.isEnglish;
window.j = Util.j;
window.leavePageText = CourseManualDisplaySection.leavePageText;
window.makeTableOrderable = OrderTable.makeTableOrderable;
window.onClickHandlers = Click.onClickHandlers;
window.onMouseDownHandlers = MouseDown.onMouseDownHandlers;
window.onMouseUpHandlers = MouseDown.onMouseUpHandlers;
window.openUploadDialog = Upload.openUploadDialog;
window.orderableTableEvents = OrderTable.orderableTableEvents;
window.pagePos = CourseManualDisplaySection.pagePos;
window.pasteFiltered = Editor.pasteFiltered;
window.pasteRemoveStyles = Editor.pasteRemoveStyles;
window.performClick = Click.performClick;
window.popupsInitialized = Popup.popupsInitialized;
window.showExtensionDialog = Upload.showExtensionDialog;
window.showInvalidFileSizesDialog = Upload.showInvalidFileSizesDialog;
window.showLoadingGraphicsForImage = Loading.showLoadingGraphicsForImage;
window.showMessageDialog = Upload.showMessageModal;
window.submitUploadForm = Upload.submitUploadForm;
window.trackScroll = Track.trackScroll;
window.validateFileSizes = Upload.validateFileSizes;
window.SearchBox = SearchBox;

// To expose global variables that are not accessed via a class/object, for
// backwards compatibility, we define getters/setters which will modify the
// corresponding variable in the object where its defined.

Object.defineProperty(window, "activeRequest", {
    get: () => DN.activeRequest,
    set: val => { DN.activeRequest = val; }
});

Object.defineProperty(window, "forceMCEReInit", {
    get: () => Editor.forceMCEReInit,
    set: val => { Editor.forceMCEReInit = val; }
});

Object.defineProperty(window, "intID", {
    get: () => DN.intID,
    set: val => { DN.intID = val; }
});

Object.defineProperty(window, "isMouseDown", {
    get: () => MouseDown.isMouseDown,
    set: val => { MouseDown.isMouseDown = val; }
});

Object.defineProperty(window, "languageIndex", {
    get: () => Language.index,
    set: val => { Language.index = val; }
});

Object.defineProperty(window, "lastHash", {
    get: () => Location.lastHash,
    set: val => { Location.lastHash = val; }
});

Object.defineProperty(window, "lastX", {
    get: () => Track.lastX,
    set: val => { Track.lastX = val; }
});

Object.defineProperty(window, "lastY", {
    get: () => Track.lastY,
    set: val => { Track.lastY = val; }
});

Object.defineProperty(window, "pageName", {
    get: () => Location.pageName,
    set: val => { Location.pageName = val; }
});

Object.defineProperty(window, "popup", {
    get: () => Popup.popup,
    set: val => { Popup.popup = val; }
});

Object.defineProperty(window, "selectTarget", {
    get: () => Search.selectTarget,
    set: val => { Search.selectTarget = val; }
});

Object.defineProperty(window, "selectedIndex", {
    get: () => Search.selectedIndex,
    set: val => { Search.selectedIndex = val; }
});

Object.defineProperty(window, "uploadDialog", {
    get: () => Upload.uploadDialog,
    set: val => { Upload.uploadDialog = val; }
});

Object.defineProperty(window, "uploadDialogBody", {
    get: () => Upload.uploadDialogBody,
    set: val => { Upload.uploadDialogBody = val; }
});
