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
var core_1 = require("angular2/core");
var Checkbox = (function () {
    function Checkbox() {
        this.tap = new core_1.EventEmitter();
        this.checked = false;
    }
    Checkbox.prototype.onTap = function () {
        this.tap.next(this.checked);
    };
    Checkbox = __decorate([
        core_1.Component({
            selector: "Checkbox",
            properties: ['checked : checked'],
            events: ['tap'],
            template: "\n    <Image\n        [src]=\"checked ? 'res://checkbox_checked' : 'res://checkbox_unchecked'\"\n        class=\"checkbox\"\n        (tap)=\"onTap()\"\n        dock=\"left\">\n    </Image>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Checkbox);
    return Checkbox;
}());
exports.Checkbox = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBZTVEO0lBSUk7UUFITyxRQUFHLEdBQTBCLElBQUksbUJBQVksRUFBVyxDQUFDO1FBQ3pELFlBQU8sR0FBWSxLQUFLLENBQUM7SUFHaEMsQ0FBQztJQUVNLHdCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXRCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixVQUFVLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNqQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZixRQUFRLEVBQUUsb01BT1Q7U0FDSixDQUFDOztnQkFBQTtJQVdGLGVBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLGdCQUFRLFdBVXBCLENBQUEifQ==