declare class DropDown {
    static setDropdownState(dropDownId: number, linkElementId: number, boxElementId: number, openTextId: number, closeTextId: number, iconUpId: number, iconDownId: number, isOpen: boolean, informServer: boolean): void;
    static closeOnPageClick(dropDownId: number, linkElementId: number, boxElementId: number, openTextId: number, closeTextId: number, iconUpId: number, iconDownId: number): void;
}
export { DropDown };
