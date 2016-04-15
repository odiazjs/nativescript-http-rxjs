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
require('rxjs/Rx');
var responseObject_1 = require('.././responseObject');
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
        this.url = 'http://jsonplaceholder.typicode.com/posts';
    }
    HttpService.prototype.Get = function () {
        var observable = this.http.get(this.url)
            .map(function (data) { return new responseObject_1.ResponseObject(data); });
        return observable;
    };
    HttpService.prototype.Post = function (data) {
        return this.response;
    };
    HttpService.prototype.Delete = function (id) {
        return this.response;
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaHR0cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMkMsZUFBZSxDQUFDLENBQUE7QUFDM0QscUJBQTZCLGVBQWUsQ0FBQyxDQUFBO0FBRzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFHakIsK0JBQTZCLHFCQUFxQixDQUFDLENBQUE7QUFHbkQ7SUFLSSxxQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUFDMUIsSUFBSSxDQUFDLEdBQUcsR0FBRywyQ0FBMkMsQ0FBQztJQUMzRCxDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUVJLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQTtRQUVoRSxNQUFNLENBQUMsVUFBVSxDQUFBO0lBRXJCLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQU0sSUFBVztRQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQVEsRUFBVztRQUNmLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUF6Qkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTJCYixrQkFBQztBQUFELENBQUMsQUExQkQsSUEwQkM7QUExQlksbUJBQVcsY0EwQnZCLENBQUEifQ==