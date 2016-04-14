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
var http_1 = require('angular2/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/Rx');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    HttpService.prototype.get = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || this.url + ' Server error');
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRTdDLG1CQUF5QixTQUFTLENBQUMsQ0FBQTtBQUNuQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBSWpCO0lBSUkscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsMkNBQTJDLENBQUM7SUFDM0QsQ0FBQztJQUVELHlCQUFHLEdBQUg7UUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUNiLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBeEIsQ0FBd0IsQ0FBQzthQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBRTVDLENBQUM7SUFFTyxpQ0FBVyxHQUFuQixVQUFxQixLQUFlO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFwQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQXVCYixrQkFBQztBQUFELENBQUMsQUF0QkQsSUFzQkM7QUF0QlksbUJBQVcsY0FzQnZCLENBQUEifQ==