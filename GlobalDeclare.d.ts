// NO TRANSFORM

// - Things X we attach to the global namespace in Global.ts as window.X.
//   We attach things to window so they are available by server-side code.
//   This declaration is so TypeScript doesn't complain when we type window.X
//   with a 'X is not a property defined on window' error.
interface Window {
    $,
    $$,
    AutoCompleteEvent,
    Confirm,
    DN,
    DropDown,
    InitMCE,
    GetDate,
    GetName,
    GetMaxZIndex,
    GetSelectedItems,
    RubricDropDown,
    PositionAtMouse,
    PositionRelative,
    ScrollSpy,
    SetUpdateInterval,
    StudentOverviewSection_timelineId,
    UpdateColumn,
    Util,
    WhenElementAvailable,
    addClass,
    alphaOnly,
    arraysEqual,
    cleanTableOrderable,
    closeUploadDialog,
    content,
    decodedLocationHash,
    fileInputBrowse,
    fileInputChange,
    fileInputClear,
    finishedUpload,
    forceMCEReInit,
    initializeDirectUpload,
    initializePopup,
    isEnglish,
    isMouseDown,
    j,
    jQuery,
    leavePageText,
    makeTableOrderable,
    onClickHandlers,
    onMouseDownHandlers,
    onMouseUpHandlers,
    openUploadDialog,
    orderableTableEvents,
    pagePos,
    pasteFiltered,
    pasteRemoveStyles,
    performClick,
    popup,
    popupsInitialized,
    showExtensionDialog,
    showInvalidFileSizesDialog,
    showLoadingGraphicsForImage,
    showMessageDialog,
    submitUploadForm,
    trackScroll,
    validateFileSizes,
    SearchBox
}

interface Navigator {
    browserSpecs
}

// - Global definitions we are assuring TypeScript that exist.
//   E.g. if X is defined globally in a 3rd party import we can
//   declare it here and use it in .ts files.
declare const $$;
declare const tinymce;
