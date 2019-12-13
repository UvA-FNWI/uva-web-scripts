export { BrowserWarning } from './BrowserWarning';
export { Click } from './Click';
export { Confirm } from './Confirm';
export { Content } from './Content';
export { CourseManualDisplaySection } from './CourseManualDisplaySection';
export { DataNose } from './DataNose';
export { Dropdown } from './Dropdown';
export { Editor } from './Editor';
export { Global } from './Global';
export { Grid } from './Grid';
export { KeyUp } from './KeyUp';
export { Language } from './Language';
export { Loading } from './Loading';
export { Location } from './Location';
export { MouseDown } from './MouseDown';
export { MultiSelectControl } from './MultiSelectControl';
export { OrderTable } from './OrderTable';
export { Popup } from './Popup';
export { Position } from './Position';
export { RubricDropDown } from './RubricDropDown';
export { ScrollSpy } from './ScrollSpy';
export { Search } from './Search';
export { SearchBox } from './SearchBox';
export { StudentOverviewSection } from './StudentOverviewSection';
export { TableView } from './TableView';
export { Track } from './Track';
export { Upload } from './Upload';
export { Util } from './Util';
export { ZIndex } from './ZIndex';
// This is just to define a 'register' function on the UvA
// object (available as window.UvA) created by 'index.ts';
// We need to define the type here, even if nothing occurs,
// so we can overwrite it in 'index.ts'
function register(a: any, b: any) {};
export { register };