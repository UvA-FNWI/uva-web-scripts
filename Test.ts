// A class to test parsing by CSFromTS.
class Test {
    static boolean: boolean = true
    
    static string_: string = "foo"

    static number: number = 5

    static booleanArray: boolean[] = []

    static stringArray: string[] = []

    static numberArray: number[] = []

    static functionBoolean(id: boolean) {}

    static functionString(id: string) {}

    static functionNumber(id: number) {}

    static functionBooleanAndNumber(id: boolean, num: number) {}

    static functionArrayBoolean(id: boolean[]) {}

    static functionArrayStringAndArrayNumber(id: string[], num: number[]) {}

    static functionArrayBooleanAndArrayNumber(id: boolean[], num: number[]) {}
}
