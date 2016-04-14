"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var observable_array_1 = require('data/observable-array');
var layout_base_1 = require('ui/layouts/layout-base');
var NG_VIEW = "_ngViewRef";
var ListViewComponent = (function () {
    function ListViewComponent(_elementRef, _iterableDiffers, _cdr, _appViewManager) {
        this._elementRef = _elementRef;
        this._iterableDiffers = _iterableDiffers;
        this._cdr = _cdr;
        this._appViewManager = _appViewManager;
        this.doCheckDelay = 5;
        this.listView = _elementRef.nativeElement;
    }
    Object.defineProperty(ListViewComponent.prototype, "items", {
        set: function (value) {
            this._items = value;
            var needDiffer = true;
            if (value instanceof observable_array_1.ObservableArray) {
                needDiffer = false;
            }
            if (needDiffer && !this._differ && value) {
                this._differ = this._iterableDiffers.find(this._items).create(this._cdr, function (index, item) { return item; });
            }
            this.listView.items = this._items;
        },
        enumerable: true,
        configurable: true
    });
    ListViewComponent.prototype.onItemLoading = function (args) {
        if (!this.itemTemplate) {
            return;
        }
        var index = args.index;
        var items = args.object.items;
        var currentItem = typeof (items.getItem) === "function" ? items.getItem(index) : items[index];
        var viewRef;
        if (args.view) {
            console.log("ListView.onItemLoading: " + index + " - Reusing exisiting view");
            viewRef = args.view[NG_VIEW];
        }
        else {
            console.log("ListView.onItemLoading: " + index + " - Creating view from template");
            viewRef = this._appViewManager.createEmbeddedViewInContainer(this._elementRef, index, this.itemTemplate);
            args.view = getSingleViewFromViewRef(viewRef);
            args.view[NG_VIEW] = viewRef;
        }
        this.setupViewRef(viewRef, currentItem, index);
    };
    ListViewComponent.prototype.setupViewRef = function (viewRef, data, index) {
        viewRef.setLocal('\$implicit', data.item);
        viewRef.setLocal("item", data);
        viewRef.setLocal("index", index);
        viewRef.setLocal('even', (index % 2 == 0));
        viewRef.setLocal('odd', (index % 2 == 1));
    };
    ListViewComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (this.timerId) {
            clearTimeout(this.timerId);
        }
        this.timerId = setTimeout(function () {
            clearTimeout(_this.timerId);
            if (_this._differ) {
                var changes = _this._differ.diff(_this._items);
                if (changes) {
                    _this.listView.refresh();
                }
            }
        }, this.doCheckDelay);
    };
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], ListViewComponent.prototype, "itemTemplate", void 0);
    __decorate([
        core_1.HostListener("itemLoading", ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], ListViewComponent.prototype, "onItemLoading", null);
    ListViewComponent = __decorate([
        core_1.Component({
            selector: 'ListView',
            template: "",
            inputs: ['items']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.IterableDiffers, core_1.ChangeDetectorRef, core_1.AppViewManager])
    ], ListViewComponent);
    return ListViewComponent;
}());
exports.ListViewComponent = ListViewComponent;
function getSingleViewFromViewRef(viewRef) {
    var getSingleViewRecursive = function (nodes, nestLevel) {
        var actualNodes = nodes.filter(function (n) { return !!n && n.nodeName !== "#text"; });
        if (actualNodes.length === 0) {
            throw new Error("No suitable views found in list template! Nesting level: " + nestLevel);
        }
        else if (actualNodes.length > 1) {
            throw new Error("More than one view found in list template! Nesting level: " + nestLevel);
        }
        else {
            if (actualNodes[0]) {
                var parentLayout = actualNodes[0].parent;
                if (parentLayout instanceof layout_base_1.LayoutBase) {
                    parentLayout.removeChild(actualNodes[0]);
                }
                return actualNodes[0];
            }
            else {
                return getSingleViewRecursive(actualNodes[0].children, nestLevel + 1);
            }
        }
    };
    return getSingleViewRecursive(viewRef.rootNodes, 0);
}
//# sourceMappingURL=list-view-comp.js.map