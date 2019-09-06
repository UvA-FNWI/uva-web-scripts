"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Loading = /** @class */ (function () {
    function Loading() {
    }
    Loading.showLoadingGraphicsForImage = function (imageId, imageSrc, loadingElementId) {
        jQuery("#" + loadingElementId).show();
        jQuery("#_" + imageId).attr('src', imageSrc).load(function () {
            jQuery("#" + loadingElementId).fadeOut();
            jQuery("#_" + imageId).fadeIn();
        });
    };
    return Loading;
}());
exports.Loading = Loading;
;
