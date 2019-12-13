declare class Test {
    static boolean: boolean;
    static string_: string;
    static number: number;
    static booleanArray: boolean[];
    static stringArray: string[];
    static numberArray: number[];
    static functionBoolean(id: boolean): void;
    static functionString(id: string): void;
    static functionNumber(id: number): void;
    static functionBooleanAndNumber(id: boolean, num: number): void;
    static functionArrayBoolean(id: boolean[]): void;
    static functionArrayStringAndArrayNumber(id: string[], num: number[]): void;
    static functionArrayBooleanAndArrayNumber(id: boolean[], num: number[]): void;
}
