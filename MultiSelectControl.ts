// NO TRANSFORM

class MultiSelectControl {
    static WhenElementAvailable(elemID, callback) {
        const interval = 10; // ms
        window.setTimeout(function () {
            if ($$(`#${elemID}`).length) callback(elemID);
            else window.setTimeout(arguments.callee, interval);
        }, interval);
    }
};

export { MultiSelectControl };
