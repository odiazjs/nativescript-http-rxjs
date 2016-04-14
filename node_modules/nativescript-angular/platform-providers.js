"use strict";
var frame_1 = require('ui/frame');
var page_1 = require('ui/page');
var di_1 = require('angular2/src/core/di');
exports.APP_ROOT_VIEW = new di_1.OpaqueToken('App Root View');
exports.defaultPageProvider = di_1.provide(page_1.Page, { useFactory: getDefaultPage });
function getDefaultPage() {
    var frame = frame_1.topmost();
    if (frame) {
        return frame.currentPage;
    }
    else {
        return null;
    }
}
exports.getDefaultPage = getDefaultPage;
//# sourceMappingURL=platform-providers.js.map