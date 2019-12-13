declare class MouseDown {
    static isMouseDown: boolean;
    static onMouseDownHandlers: (() => void)[];
    static onMouseUpHandlers: (() => void)[];
}
export { MouseDown };
