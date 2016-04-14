"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var parse5_adapter_1 = require('angular2/src/platform/server/parse5_adapter');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var NativeScriptDomAdapter = (function (_super) {
    __extends(NativeScriptDomAdapter, _super);
    function NativeScriptDomAdapter() {
        _super.apply(this, arguments);
    }
    NativeScriptDomAdapter.makeCurrent = function () { dom_adapter_1.setRootDomAdapter(new NativeScriptDomAdapter()); };
    NativeScriptDomAdapter.prototype.getXHR = function () {
        console.log('getXHR!');
        return null;
    };
    NativeScriptDomAdapter.prototype.hasProperty = function (element, name) {
        //TODO: actually check if the property exists.
        return true;
    };
    return NativeScriptDomAdapter;
}(parse5_adapter_1.Parse5DomAdapter));
exports.NativeScriptDomAdapter = NativeScriptDomAdapter;
//# sourceMappingURL=dom_adapter.js.map