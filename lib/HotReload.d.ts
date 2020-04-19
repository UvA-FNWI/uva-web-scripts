declare class HotReload {
    static WebSocket: WebSocket;
    static Init(port: number): void;
    static ReloadStyleSheet(name: string): void;
}
export { HotReload };
