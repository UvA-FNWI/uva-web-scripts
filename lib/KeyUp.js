"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Content_1 = require("./Content");
var KeyUp = /** @class */ (function () {
    function KeyUp() {
        this.initListener();
    }
    KeyUp.prototype.initListener = function () {
        jQuery(document).on('keyup', '.searchField', function (e) {
            var searchThreshold = parseInt($$(this).attr('class').split(' ')[1].split('-')[1]);
            if ($$(this).val().length >= searchThreshold) {
                if (Content_1.Content.content[$$(this).attr('id')] !== $$(this).val()) { // on change
                    var $resultsElement = $$(this).parent().find('.resultsElement');
                    $resultsElement.children().hide();
                    $resultsElement.append('<img src="/Content/loading.gif" class="resultsLoadingImg">');
                }
            }
            Content_1.Content.content[$$(this).attr('id')] = $$(this).val();
        });
    };
    ;
    return KeyUp;
}());
exports.KeyUp = KeyUp;
new KeyUp();
