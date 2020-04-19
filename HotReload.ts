class HotReload {
	// A WebSocket connection.
    static WebSocket: WebSocket = null;

    // Initialize the WebSocket connection.
    static Init(port: number) {
        HotReload.WebSocket = new WebSocket('ws://127.0.0.1:' + port);
        HotReload.WebSocket.onmessage = event => {
			HotReload.ReloadStyleSheet(event.data);
		};
    }

    // Reload the stylesheet that has the given filename.
    static ReloadStyleSheet(name: string) {
	    const sheets = document.styleSheets;
	    for (var i in sheets) {
	    	var sheet = sheets[i];
		    if (sheet instanceof StyleSheet && sheet.href !== null && sheet.href.indexOf(name) !== -1) {
		    	(<HTMLElement> (sheet.ownerNode)).setAttribute("href", sheet.href + "?id=" + new Date().getMilliseconds());
			    console.log('Hot reloading ' + name);
			    return;
	        }
	    }
    	console.log('Could not hot reload ' + name);
	}
};

export { HotReload };
