import { Language } from './Language';

class BrowserWarning {

    // Warning text for an IE browser of given version.
    static IEWarningText (version: number): string {
        var warning = "";
        if (Language.isEnglish()) {
            if (version === 11) {
                warning += "Your browser is not well supported. ";
                warning += "Continue at your own risk. ";
            }
            else {
                warning += "Your browser is NOT supported. ";
            }
            warning += " We suggest using Chrome, Edge, Firefox or Safari.";
        }
        else {
            if (version === 11) {
                warning += "Uw browser wordt niet goed ondersteund. ";
                warning += "Ga door op eigen risico. ";
            }
            else {
                warning += "Uw browser wordt NIET ondersteund. ";
            }
            warning += "We raden aan Chrome, Edge, Firefox of Safari te gebruiken.";
        }
        return warning;
    }

    static WarnOldBrowser() {
        // Show a warning only on IE.
        if (navigator.browserSpecs.name === "IE") {
            // Wait until the unsupported browser dialog has loaded.
            var intervalId = setInterval(function () {
                var dialogs = $$('.unsupported-browser-dialog');
                if (dialogs.length > 0) {
                    clearInterval(intervalId);
                    $$('.unsupported-browser-dialog-text')[0]
                        .innerHTML = BrowserWarning.IEWarningText(
                            parseInt(navigator.browserSpecs.version));
                    dialogs.toggle();
                }
            }, 100);
        }
    }

}

// Determine browser name and version and attach to navigator.browserSpecs.
// From: https://stackoverflow.com/a/38080051
navigator.browserSpecs = (function(){
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1] || '')};
    }
    if(M[1]=== 'Chrome'){
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem != null) return {name:tem[1].replace('OPR', 'Opera'),version:tem[2]};
    }
    M = M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem = ua.match(/version\/(\d+)/i))!= null)
        M.splice(1, 1, tem[1]);
    return {name:M[0], version:M[1]};
})();

// When the browser is ready show a browser unsupported warning if necessary.
jQuery(document).ready(BrowserWarning.WarnOldBrowser);

export { BrowserWarning };