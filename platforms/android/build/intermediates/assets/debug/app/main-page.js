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
require('reflect-metadata');
var core_1 = require('angular2/core');
var http_service_1 = require('./services/http.service');
var checkbox_1 = require('./checkbox');
var core_2 = require('angular2/core');
var MainPage = (function () {
    function MainPage(httpService) {
        this.httpService = httpService;
    }
    MainPage.prototype.getPosts = function () {
        var _this = this;
        this.posts = [];
        this.httpService.Get()
            .subscribe(function (responseObject) { return _this.posts = responseObject.result; }, function (error) { return _this.errorMessage = error; });
    };
    MainPage = __decorate([
        core_1.Component({
            selector: 'main',
            providers: [http_service_1.HttpService],
            directives: [checkbox_1.Checkbox],
            templateUrl: './views/main-page.xml'
        }),
        core_2.Injectable(), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], MainPage);
    return MainPage;
}());
exports.MainPage = MainPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxRQUFPLGtCQUFrQixDQUFDLENBQUE7QUFLMUIscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELDZCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELHlCQUF1QixZQUFZLENBQUMsQ0FBQTtBQUVwQyxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFXekM7SUFPSSxrQkFBWSxXQUF3QjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUFBLGlCQVNLO1FBUEQsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTthQUNKLFNBQVMsQ0FDUCxVQUFBLGNBQWMsSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBbEMsQ0FBa0MsRUFDcEQsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FDekMsQ0FBQTtJQUVsQixDQUFDO0lBNUJUO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsVUFBVSxFQUFFLENBQUMsbUJBQVEsQ0FBQztZQUN0QixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7UUFFRCxpQkFBVSxFQUFFOztnQkFBQTtJQXdCYixlQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxnQkFBUSxXQXVCcEIsQ0FBQSJ9