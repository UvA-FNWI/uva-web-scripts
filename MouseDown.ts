// NO TRANSFORM

class MouseDown {
    static isMouseDown: boolean = false

    // Functions to run on mousedown event.
    static onMouseDownHandlers: (() => void)[] = [
        () => { MouseDown.isMouseDown = true; }
    ]

    // Functions to run on mouseup event.
    static onMouseUpHandlers: (() => void)[] = [
        () => { MouseDown.isMouseDown = false; }
    ]
};

// Run all mousedown handlers on mouse down event.
window.onmousedown = () => {
    MouseDown.onMouseDownHandlers.forEach(f => f());
};

// Run all mouseup handlers on mouse down event.
window.onmouseup = () => {
    MouseDown.onMouseUpHandlers.forEach(f => f());
};

export { MouseDown };
