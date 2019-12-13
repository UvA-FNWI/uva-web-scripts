"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Loading = /** @class */ (function () {
    function Loading() {
    }
    Loading.showLoadingGraphicsForImage = function (imageId, imageSrc, loadingElementId) {
        jQuery("#" + loadingElementId).show();
        jQuery("#_" + imageId).attr('src', imageSrc).load(imageSrc, function (response, status, xhr) {
            if (status === "success") {
                jQuery("#" + loadingElementId).fadeOut();
                jQuery("#_" + imageId).fadeIn();
            }
            else {
                console.warn("Failed to load image #_" + imageId + ": " + response);
            }
        });
    };
    return Loading;
}());
exports.Loading = Loading;
;
