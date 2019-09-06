"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ScrollSpy = /** @class */ (function () {
    function ScrollSpy() {
    }
    // Scroll to element with given framework ID.
    ScrollSpy.scrollToId = function (id) {
        ScrollSpy.scrollToHtmlId('_' + id);
    };
    // Scroll to element with given HTML ID.
    ScrollSpy.scrollToHtmlId = function (id) {
        $$('html,body').animate({ scrollTop: $$('#' + id).offset().top }, 'slow');
    };
    // Update ScrollSpy elements on scroll.
    // Call this once when document is ready.
    //
    // This function requires an element with class 'scroll-spy' in the DOM
    // which contains all of the display (TOC) elements.
    //
    // Optionally two additional elements with following classes can exist, in
    // which case the display elements will be attached to one based on page
    // scroll:
    //     .scroll-spy-row: An element at page top that can contain .scroll-spy.
    //     .scroll-spy-unfixed: An element that can contain .scroll-spy.
    ScrollSpy.registerScrollSpy = function (maxRetries, retryInterval) {
        var scrollY = 0; // Assume initially at top of page.
        var ticking = false;
        var $scrollSpy = $$('.scroll-spy');
        // Retry a number of times if $scrollSpy is undefined.
        if ($scrollSpy.length == 0) {
            if (maxRetries > 0)
                setTimeout(function () { return ScrollSpy.registerScrollSpy(maxRetries - 1, retryInterval); }, retryInterval);
            return;
        }
        var $scrollSpyRow = $$('.scroll-spy-row');
        var $scrollSpyUnfixed = $$('.scroll-spy-unfixed');
        var scrollSpyOriginalTop = $scrollSpy[0].getBoundingClientRect().top - document.body.getBoundingClientRect().top;
        var activeClass = function () {
            return ScrollSpy.activeLeft
                ? 'scroll-spy-active-left'
                : 'scroll-spy-active-right';
        };
        // Update each ScrollSpy element.
        function scrollSpy() {
            var shortestDist = Infinity;
            var nearest = null;
            var prevInView = false;
            var currInView = false;
            for (var i = 0; i < ScrollSpy.scrollSpyIDs.length; ++i) {
                var spyElement = $(ScrollSpy.scrollSpyIDs[i]);
                var displayElement = $(ScrollSpy.scrollSpyDisplayIDs[i]);
                if (spyElement == null || displayElement == null)
                    continue;
                var y = Math.abs(spyElement.getBoundingClientRect().top);
                $$(displayElement).removeClass('scroll-spy-active-left scroll-spy-active-right');
                $$(displayElement).addClass('scroll-spy-display');
                prevInView = currInView;
                currInView = y >= 0 && y <= window.innerHeight;
                if (y < shortestDist) {
                    shortestDist = y;
                    nearest = displayElement;
                }
                else if (prevInView && currInView)
                    $$($(ScrollSpy.scrollSpyDisplayIDs[i - 1]))
                        .addClass(activeClass());
            }
            if (nearest !== null)
                $$(nearest).addClass(activeClass());
            if ($$(window).scrollTop() + $$(window).height() >= $$(document).height() - 20) {
                $$($(ScrollSpy.scrollSpyDisplayIDs[ScrollSpy.scrollSpyDisplayIDs.length - 1])).addClass(activeClass());
            }
        }
        function affix() {
            if (!$scrollSpy)
                return;
            if (scrollY > scrollSpyOriginalTop) {
                if ($scrollSpyUnfixed.has($scrollSpy))
                    $scrollSpyRow.append($scrollSpy);
            }
            else if ($scrollSpyRow.has($scrollSpy))
                $scrollSpyUnfixed.append($scrollSpy);
        }
        // Run once and then on every scroll.
        scrollSpy();
        affix();
        window.addEventListener('scroll', function (_event) {
            scrollY = window.scrollY;
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(function () {
                    scrollSpy();
                    affix();
                    ticking = false;
                });
            }
        });
    };
    // Show active blue on left/right.
    ScrollSpy.activeLeft = true;
    // IDs of elements to watch on page.
    ScrollSpy.scrollSpyIDs = [];
    // IDs of corresponding elements in the table of contents.
    ScrollSpy.scrollSpyDisplayIDs = [];
    return ScrollSpy;
}());
exports.ScrollSpy = ScrollSpy;
jQuery(document).ready(function () { return ScrollSpy.registerScrollSpy(100, 100); });
